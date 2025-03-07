// SPDX-License-Identifier: MIT
pragma solidity =0.7.6;
pragma abicoder v2;

import './interfaces/IUniswapV3Pool.sol';
import './interfaces/callback/IUniswapV3SwapCallback.sol';
import './interfaces/IERC20.sol';
import './libraries/TickMath.sol';

/**
 * @title SwapRouter
 * @notice A simplified router for swapping with Uniswap V3 pools
 */
contract SwapRouter is IUniswapV3SwapCallback {
    // Events for debugging
    event SwapAttempted(address pool, bool zeroForOne, uint256 amountIn, uint160 sqrtPriceLimitX96, uint256 deadline);
    event SwapFailed(string reason);
    event Debug(string message, bytes data);
    event TokenTransfer(string step, address token, address from, address to, uint256 amount);

    // Add a test function to verify contract is working
    function test() external pure returns (bool) {
        return true;
    }

    struct SwapCallbackData {
        address tokenIn;
        address tokenOut;
        address payer;
    }

    /**
     * @notice Swap function that performs an exact input swap
     * @param pool The Uniswap V3 pool to swap with
     * @param zeroForOne Whether to swap token0 for token1 (true) or token1 for token0 (false)
     * @param amountIn The amount of input token to swap
     * @param sqrtPriceLimitX96 The price limit for the swap
     * @param deadline The deadline for the swap
     */
    function swap(
        address pool,
        bool zeroForOne,
        uint256 amountIn,
        uint160 sqrtPriceLimitX96,
        uint256 deadline
    ) external {
        emit SwapAttempted(pool, zeroForOne, amountIn, sqrtPriceLimitX96, deadline);

        require(deadline >= block.timestamp, 'Transaction too old');
        require(pool != address(0), 'Invalid pool');
        require(amountIn > 0, 'Amount must be positive');

        // Get token addresses from the pool
        address tokenIn = zeroForOne ? IUniswapV3Pool(pool).token0() : IUniswapV3Pool(pool).token1();
        address tokenOut = zeroForOne ? IUniswapV3Pool(pool).token1() : IUniswapV3Pool(pool).token0();
        require(tokenIn != address(0) && tokenOut != address(0), 'Invalid tokens');

        emit Debug('Token addresses', abi.encode(tokenIn, tokenOut, msg.sender, address(this)));

        // Check allowance and balance
        uint256 allowance = IERC20(tokenIn).allowance(msg.sender, address(this));
        uint256 balance = IERC20(tokenIn).balanceOf(msg.sender);
        emit Debug('Allowance and balance', abi.encode(allowance, balance));

        require(allowance >= amountIn, 'Insufficient allowance');
        require(balance >= amountIn, 'Insufficient balance');

        // Transfer tokens first from user to this contract
        bool transferSuccess = IERC20(tokenIn).transferFrom(msg.sender, address(this), amountIn);
        require(transferSuccess, 'Transfer failed');
        emit TokenTransfer('Transfer from user', tokenIn, msg.sender, address(this), amountIn);

        // Approve the pool to take tokens from this contract if needed
        if (IERC20(tokenIn).allowance(address(this), pool) < amountIn) {
            bool approveSuccess = IERC20(tokenIn).approve(pool, type(uint256).max);
            require(approveSuccess, 'Approval failed');
            emit TokenTransfer('Approve pool', tokenIn, address(this), pool, type(uint256).max);
        }

        // Prepare callback data (more similar to Uniswap's implementation)
        SwapCallbackData memory callbackData = SwapCallbackData({
            tokenIn: tokenIn,
            tokenOut: tokenOut,
            payer: msg.sender
        });

        emit Debug('Callback data prepared', abi.encode(callbackData));

        // Set the price limit
        if (sqrtPriceLimitX96 == 0) {
            sqrtPriceLimitX96 = zeroForOne ? TickMath.MIN_SQRT_RATIO + 1 : TickMath.MAX_SQRT_RATIO - 1;
        }

        try
            IUniswapV3Pool(pool).swap(
                msg.sender, // recipient of the swap output
                zeroForOne,
                int256(amountIn),
                sqrtPriceLimitX96,
                abi.encode(callbackData)
            )
        returns (int256 amount0, int256 amount1) {
            emit Debug('Swap successful', abi.encode(amount0, amount1));
        } catch Error(string memory reason) {
            emit SwapFailed(reason);
            revert(reason);
        } catch (bytes memory reason) {
            emit SwapFailed('Low-level error');
            emit Debug('Low-level error data', reason);
            revert('Swap failed with low-level error');
        }
    }

    /**
     * @notice Callback for Uniswap V3 pool swap
     * @dev This function is called by the pool during a swap
     * @param amount0Delta The change in token0 balance of the pool
     * @param amount1Delta The change in token1 balance of the pool
     * @param data The callback data passed to the pool
     */
    function uniswapV3SwapCallback(int256 amount0Delta, int256 amount1Delta, bytes calldata data) external override {
        emit Debug('Callback received', abi.encode(amount0Delta, amount1Delta));

        require(amount0Delta > 0 || amount1Delta > 0, 'Invalid amounts');

        // Decode the callback data
        SwapCallbackData memory callbackData = abi.decode(data, (SwapCallbackData));
        emit Debug(
            'Decoded callback data',
            abi.encode(callbackData.tokenIn, callbackData.tokenOut, callbackData.payer)
        );

        // Verify callback is from a valid pool
        address token0 = IUniswapV3Pool(msg.sender).token0();
        address token1 = IUniswapV3Pool(msg.sender).token1();
        require(
            (token0 == callbackData.tokenIn && token1 == callbackData.tokenOut) ||
                (token0 == callbackData.tokenOut && token1 == callbackData.tokenIn),
            'Invalid callback'
        );

        // Determine which token we need to pay and how much
        address tokenToPay;
        uint256 amountToPay;

        if (amount0Delta > 0) {
            tokenToPay = token0;
            amountToPay = uint256(amount0Delta);
        } else {
            tokenToPay = token1;
            amountToPay = uint256(amount1Delta);
        }

        emit TokenTransfer('Callback payment', tokenToPay, address(this), msg.sender, amountToPay);

        // Transfer the tokens to the pool
        require(IERC20(tokenToPay).transfer(msg.sender, amountToPay), 'Token transfer failed');
    }
}
