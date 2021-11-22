import WalletConnectProvider from '@walletconnect/web3-provider'
import { INFURA_ID } from 'src/constants'
import Web3Modal from 'web3modal'

const getWeb3Modal = async (theme: string) => {
  const Torus = (await import('@toruslabs/torus-embed')).default
  const Fortmatic = (await import('fortmatic')).default
  const providerOptions = {
    walletconnect: {
      package: WalletConnectProvider,
      options: { infuraId: INFURA_ID }
    },
    fortmatic: {
      package: Fortmatic,
      options: { key: 'pk_live_66C75459C14ADB4A' }
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
