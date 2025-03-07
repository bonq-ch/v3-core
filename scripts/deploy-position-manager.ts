import { ethers } from 'hardhat'

async function main() {
  try {
    console.log('Deploying PositionManager contract...')

    // Get the deployer's signer
    const [deployer] = await ethers.getSigners()
    console.log('Deploying with account:', deployer.address)

    // Deploy the PositionManager contract
    const PositionManager = await ethers.getContractFactory('PositionManager')
    const positionManager = await PositionManager.deploy()
    await positionManager.waitForDeployment()

    const positionManagerAddress = await positionManager.getAddress()
    console.log('PositionManager deployed to:', positionManagerAddress)

    // Verify deployment
    console.log('\nDeployment verified ✅')
    console.log('--------------------')
    console.log('Contract Address:', positionManagerAddress)
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
