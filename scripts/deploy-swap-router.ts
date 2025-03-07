import { ethers } from 'hardhat'

async function main() {
  try {
    console.log('Deploying SwapRouter contract...')

    // Get the deployer's signer
    const [deployer] = await ethers.getSigners()
    console.log('Deploying with account:', deployer.address)

    // Deploy the SwapRouter contract
    const SwapRouter = await ethers.getContractFactory('SwapRouter')
    const swapRouter = await SwapRouter.deploy()
    await swapRouter.waitForDeployment()

    const swapRouterAddress = await swapRouter.getAddress()
    console.log('SwapRouter deployed to:', swapRouterAddress)

    // Verify deployment
    console.log('\nDeployment verified ✅')
    console.log('--------------------')
    console.log('Contract Address:', swapRouterAddress)
    console.log('Deployer Address:', deployer.address)
  } catch (error) {
    console.error('Error during deployment:', error)
    throw error
  }
}

// Execute deployment
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
