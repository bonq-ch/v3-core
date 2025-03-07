// SPDX-License-Identifier: MIT
pragma solidity ^0.7.6;

import './interfaces/IUniswapV3Pool.sol';
import './interfaces/callback/IUniswapV3MintCallback.sol';
import './interfaces/IERC20.sol';

contract PositionManager is IUniswapV3MintCallback {
    function mint(
        address pool,
        int24 tickLower,
        int24 tickUpper,
        uint128 amount0Desired,
        uint128 amount1Desired
    ) external {
        IERC20(IUniswapV3Pool(pool).token0()).transferFrom(msg.sender, address(this), amount0Desired);
        IERC20(IUniswapV3Pool(pool).token1()).transferFrom(msg.sender, address(this), amount1Desired);

        IUniswapV3Pool(pool).mint(
            msg.sender,
            tickLower,
            tickUpper,
            amount0Desired,
            abi.encode(msg.sender, amount0Desired, amount1Desired)
        );
    }

    function uniswapV3MintCallback(uint256 amount0Owed, uint256 amount1Owed, bytes calldata data) external override {
        (address sender, uint128 amount0Desired, uint128 amount1Desired) = abi.decode(
            data,
            (address, uint128, uint128)
        );

        address token0 = IUniswapV3Pool(msg.sender).token0();
        address token1 = IUniswapV3Pool(msg.sender).token1();

        if (amount0Owed > 0) IERC20(token0).transfer(msg.sender, amount0Owed);
        if (amount1Owed > 0) IERC20(token1).transfer(msg.sender, amount1Owed);
    }
}
