require('@nomiclabs/hardhat-waffle')

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai: {
      url: 'https://polygon-mumbai.infura.io/v3/3d19324a72854976a7160e0e2ebc9c2b',
      accounts: process.env.MM_PRIVATE_KEY
    },
    matic: {
      url: 'https://polygon-mainnet.infura.io/v3/3d19324a72854976a7160e0e2ebc9c2b',
      accounts: process.env.MM_PRIVATE_KEY
    }
  },
  solidity: {
    version: '0.8.4',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}
