import { ethers } from 'hardhat'

async function main() {
  // Deploy new router
  console.log('Deploying new SwapRouter...')
  const SwapRouter = await ethers.getContractFactory('SwapRouter')
  const swapRouter = await SwapRouter.deploy()
  await swapRouter.waitForDeployment()

  const routerAddress = await swapRouter.getAddress()
  console.log('New router deployed at:', routerAddress)

  // Test basic functionality
  console.log('\nTesting contract...')
  try {
    const result = await swapRouter.test()
    console.log('Test function result:', result)
  } catch (error) {
    console.error('Test function failed:', error)
  }

  // Try to encode a swap call
  const poolAddress = '0xf950EF6BaD186cCF355ae5075482bFe03698287b'
  const encoded = SwapRouter.interface.encodeFunctionData('swap', [
    poolAddress,
    true,
    ethers.parseUnits('1', 18),
    '752667543885511207138667528192',
    Math.floor(Date.now() / 1000) + 300,
  ])

  console.log('\nEncoded swap call:', encoded)
}

main().catch(console.error)
