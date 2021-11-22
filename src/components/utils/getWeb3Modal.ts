import WalletConnectProvider from '@walletconnect/web3-provider'
import { INFURA_ID } from 'src/constants'
import Web3Modal from 'web3modal'

const getWeb3Modal = async (theme: string) => {
  let Torus = (await import('@toruslabs/torus-embed')).default
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: { infuraId: INFURA_ID }
    },
    torus: { package: Torus }
  }

  const web3Modal = new Web3Modal({
    network: 'mainnet',
    cacheProvider: false,
    providerOptions,
    theme,
    disableInjectedProvider: false
  })

  return web3Modal
}

export default getWeb3Modal
