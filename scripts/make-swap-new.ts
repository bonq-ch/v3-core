import '@nomicfoundation/hardhat-ethers'
import { ethers } from 'hardhat'

// This script bypasses ethers.js high-level methods and uses a raw RPC call approach
async function main() {
  const [signer] = await ethers.getSigners()
  console.log('Using signer:', signer.address)

  const token0Address = '0xeeA69cb740081ddf2683Db6aD6915B69C7854c40'
  const token1Address = '0x58E5CA763ad1b1288EB573862dB1F87399A2D3F8'
  const poolAddress = '0xf950EF6BaD186cCF355ae5075482bFe03698287b'
  const swapRouterAddress = '0x5E74B6F154022B58f1f63256E9193126C2c61226'

  // Test the router
  const swapRouter = await ethers.getContractAt('SwapRouter', swapRouterAddress)
  console.log('Testing router...')
  const testResult = await swapRouter.test()
  console.log('Router test result:', testResult)

  console.log('Contract addresses:', {
    token0: token0Address,
    token1: token1Address,
    pool: poolAddress,
    router: swapRouterAddress,
  })

  const token0Contract = await ethers.getContractAt('IERC20', token0Address)
  const token1Contract = await ethers.getContractAt('IERC20', token1Address)
  const poolContract = await ethers.getContractAt('IUniswapV3Pool', poolAddress)

  // Check initial balances
  const token0Balance = await token0Contract.balanceOf(signer.address)
  const token1Balance = await token1Contract.balanceOf(signer.address)
  console.log('Initial balances:', {
    token0: ethers.formatUnits(token0Balance, 18),
    token1: ethers.formatUnits(token1Balance, 18),
  })

  const amountIn = ethers.parseUnits('1', 18)

  // Check allowance
  const routerAllowance = await token0Contract.allowance(signer.address, swapRouterAddress)
  console.log('Current router allowance:', ethers.formatUnits(routerAllowance, 18))

  // Approve tokens for swap with a high amount
  if (routerAllowance < amountIn) {
    console.log('Approving tokens to router...')
    const highAmount = ethers.parseUnits('10000', 18)
    const approveTx = await token0Contract.approve(swapRouterAddress, highAmount)
    await approveTx.wait()
    console.log('Router approval confirmed')
  } else {
    console.log('Router already has sufficient allowance')
  }

  // Get current pool state
  const slot0 = await poolContract.slot0()
  const currentSqrtPrice = slot0[0]
  console.log('Current pool state:', {
    sqrtPriceX96: currentSqrtPrice.toString(),
    tick: slot0[1].toString(),
  })

  // Calculate price limit (5% slippage)
  const lowerSqrtPrice = currentSqrtPrice - (currentSqrtPrice * 5n) / 100n
  const deadline = Math.floor(Date.now() / 1000) + 300

  console.log('Executing swap...')
  console.log('Parameters:', {
    amountIn: ethers.formatUnits(amountIn, 18),
    currentSqrtPrice: currentSqrtPrice.toString(),
    lowerSqrtPrice: lowerSqrtPrice.toString(),
    deadline,
  })

  try {
    // Encode function data
    const swapAbi = [
      'function swap(address pool, bool zeroForOne, uint256 amountIn, uint160 sqrtPriceLimitX96, uint256 deadline)',
    ]
    const iface = new ethers.Interface(swapAbi)
    const swapData = iface.encodeFunctionData('swap', [
      poolAddress,
      true, // zeroForOne
      amountIn,
      lowerSqrtPrice,
      deadline,
    ])

    console.log('Function signature:', swapData.substring(0, 10))
    console.log('Encoded swap data length:', swapData.length)

    // Prepare transaction
    const provider = ethers.provider

    // Get nonce
    const nonce = await provider.getTransactionCount(signer.address)
    console.log('Current nonce:', nonce)

    // Get gas price
    const feeData = await provider.getFeeData()
    console.log('Fee data:', {
      gasPrice: feeData.gasPrice?.toString(),
      maxFeePerGas: feeData.maxFeePerGas?.toString(),
      maxPriorityFeePerGas: feeData.maxPriorityFeePerGas?.toString(),
    })

    // Use explicitly legacy transaction format (type 0)
    const gasPrice = feeData.gasPrice || ethers.parseUnits('10', 'gwei')

    // Build the raw transaction
    const rawTx = {
      to: swapRouterAddress,
      value: 0,
      gasPrice: gasPrice,
      gasLimit: 5000000,
      data: swapData,
      nonce: nonce,
      chainId: (await provider.getNetwork()).chainId,
      type: 0, // Legacy transaction
    }

    console.log('Raw transaction:', rawTx)

    // Sign the transaction
    const rawTxSigned = await signer.signTransaction(rawTx)
    console.log('Signed transaction:', rawTxSigned)

    // Send the raw transaction
    console.log('Sending raw transaction...')
    const txResponse = await provider.broadcastTransaction(rawTxSigned)
    console.log('Transaction response:', txResponse)

    // Wait for the transaction to be mined
    console.log('Waiting for transaction to be mined...')
    const receipt = await txResponse.wait()
    console.log('Transaction receipt:', receipt)

    // Check final balances
    const finalToken0Balance = await token0Contract.balanceOf(signer.address)
    const finalToken1Balance = await token1Contract.balanceOf(signer.address)
    console.log('Final balances:', {
      token0: ethers.formatUnits(finalToken0Balance, 18),
      token1: ethers.formatUnits(finalToken1Balance, 18),
    })
    console.log('Balance changes:', {
      token0: ethers.formatUnits(finalToken0Balance - token0Balance, 18),
      token1: ethers.formatUnits(finalToken1Balance - token1Balance, 18),
    })
  } catch (error: any) {
    console.error('Operation failed:', error.message)

    // Enhanced error logging
    if (error.data) {
      console.error('Error data:', error.data)
    }
    if (error.reason) {
      console.error('Error reason:', error.reason)
    }
    if (error.error && error.error.message) {
      console.error('Error message:', error.error.message)
    }
    if (error.transaction) {
      console.error('Transaction:', {
        to: error.transaction.to,
        from: error.transaction.from,
        data: error.transaction.data || 'empty data',
        gasLimit: error.transaction.gasLimit?.toString(),
      })
    }

    throw error
  }
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
