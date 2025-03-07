import { ethers } from 'hardhat'

async function main() {
  const routerAddress = '0xdf11F8bfA3A8A538c7C13a28eF02f57e4A75d2AA'

  console.log('Verifying contract at:', routerAddress)

  // Get the bytecode at the address
  const code = await ethers.provider.getCode(routerAddress)
  console.log('Bytecode length:', code.length)
  console.log('Has code:', code !== '0x')

  if (code === '0x') {
    console.log('No contract code found at address! Redeploying...')

    // Deploy new contract
    const SwapRouter = await ethers.getContractFactory('SwapRouter')
    const swapRouter = await SwapRouter.deploy()
    await swapRouter.waitForDeployment()

    const newAddress = await swapRouter.getAddress()
    console.log('New SwapRouter deployed to:', newAddress)

    // Verify deployment
    const newCode = await ethers.provider.getCode(newAddress)
    console.log('New contract code length:', newCode.length)

    // Try a test call
    const router = await ethers.getContractAt('SwapRouter', newAddress)
    console.log('Contract interface:', router.interface.format())
  }
}

main().catch(console.error)
