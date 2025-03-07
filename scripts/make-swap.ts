import '@nomicfoundation/hardhat-ethers'
import { ethers } from 'hardhat'

async function main() {
  const [signer] = await ethers.getSigners()
  console.log('Using signer:', signer.address)

  const token0Address = '0xeeA69cb740081ddf2683Db6aD6915B69C7854c40'
  const token1Address = '0x58E5CA763ad1b1288EB573862dB1F87399A2D3F8'
  const poolAddress = '0xf950EF6BaD186cCF355ae5075482bFe03698287b'
  // Updated swap router address to the newly deployed contract
  const swapRouterAddress = '0x5E74B6F154022B58f1f63256E9193126C2c61226'

  // First verify the router works
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

  // Set up event listeners with better error handling
  const setupEventListener = (eventName) => {
    try {
      swapRouter.on(eventName, (...args) => {
        console.log(`${eventName} event:`, ...args)
      })
    } catch (error) {
      console.log(`Warning: Could not set up ${eventName} event listener`)
    }
  }

  // Set up specific event listeners
  setupEventListener('Debug')
  setupEventListener('TokenTransfer')
  setupEventListener('SwapAttempted')
  setupEventListener('SwapFailed')

  // Check initial balances
  const token0Balance = await token0Contract.balanceOf(signer.address)
  const token1Balance = await token1Contract.balanceOf(signer.address)
  console.log('Initial balances:', {
    token0: ethers.formatUnits(token0Balance, 18),
    token1: ethers.formatUnits(token1Balance, 18),
  })

  const amountIn = ethers.parseUnits('1', 18)

  // First check if the router already has token approval
  const routerAllowance = await token0Contract.allowance(signer.address, swapRouterAddress)
  console.log('Current router allowance:', ethers.formatUnits(routerAllowance, 18))

  // Approve tokens for swap with a high amount to ensure it's enough
  if (routerAllowance < amountIn) {
    console.log('Approving tokens to router...')
    const highAmount = ethers.parseUnits('10000', 18) // Approve a high amount to avoid future issues
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
    observationIndex: slot0[2].toString(),
    observationCardinality: slot0[3].toString(),
    observationCardinalityNext: slot0[4].toString(),
    feeProtocol: slot0[5].toString(),
    unlocked: slot0[6],
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
    // Prepare the transaction data
    const swapData = swapRouter.interface.encodeFunctionData('swap', [
      poolAddress,
      true, // zeroForOne
      amountIn,
      lowerSqrtPrice,
      deadline,
    ])

    console.log('Encoded swap data:', swapData)
    console.log('Swap data length:', swapData.length)

    // Try a direct contract call with gas price explicitly set
    console.log('Calling swap function...')

    const swapTx = await swapRouter.swap(
      poolAddress,
      true, // zeroForOne
      amountIn,
      lowerSqrtPrice,
      deadline,
      {
        gasLimit: 5000000, // High gas limit
      }
    )

    console.log('Swap transaction sent:', swapTx.hash)
    const receipt = await swapTx.wait()

    console.log('Transaction status:', receipt.status)
    console.log('Gas used:', receipt.gasUsed.toString())

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
    console.error('Swap failed:', error.message)

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

    // If the transaction failed but we got a hash, try to get the transaction receipt
    if (error.transaction && error.transaction.hash) {
      try {
        console.log('Attempting to fetch receipt for failed transaction...')
        const failedReceipt = await ethers.provider.getTransactionReceipt(error.transaction.hash)
        console.log('Failed transaction receipt:', failedReceipt)
      } catch (receiptError) {
        console.error('Could not fetch receipt for failed transaction:', receiptError)
      }
    }

    throw error
  }

  // Wait a bit for events
  console.log('Waiting for events to be processed...')
  await new Promise((resolve) => setTimeout(resolve, 5000))
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
