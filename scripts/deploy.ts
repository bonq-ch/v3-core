import { Contract, ContractFactory } from 'ethers'
import { writeFileSync } from 'fs'
import { HardhatRuntimeEnvironment } from 'hardhat/types'
import '@nomiclabs/hardhat-ethers'
import { ethers } from 'hardhat'

async function main() {
  const [deployer] = await ethers.getSigners()
  console.log('Deploying contracts with the account:', deployer.address)

  // Deploy Factory
  const Factory = await ethers.getContractFactory('UniswapV3Factory')
  const factory = await Factory.deploy()
  await factory.deployed()
  console.log('Factory deployed to:', factory.address)

  // Save deployment addresses
  const addresses = {
    Factory: factory.address,
  }

  writeFileSync('deployments.json', JSON.stringify(addresses, null, 2))
  console.log('Deployment addresses saved to deployments.json')

  console.log('Deployment complete!')
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
