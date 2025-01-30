import { HardhatUserConfig } from 'hardhat/config'
import '@nomicfoundation/hardhat-toolbox'
import '@nomicfoundation/hardhat-verify'
import * as dotenv from 'dotenv'
dotenv.config()

const config: HardhatUserConfig = {
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        bytecodeHash: 'none',
      },
    },
  },
  // @ts-ignore
  etherscan: {
    apiKey: {
      redbelly: 'redbelly', // apiKey is not required, just set a placeholder
    },
    customChains: [
      {
        network: 'redbelly',
        chainId: 153,
        urls: {
          apiURL: 'https://api.routescan.io/v2/network/testnet/evm/153_2/etherscan',
          browserURL: 'https://redbelly.testnet.routescan.io',
        },
      },
    ],
  },
  networks: {
    redbelly: {
      url: 'https://governors.testnet.redbelly.network',
      accounts: [process.env.PRIVATE_KEY as string],
    },
  },
}

export default config
