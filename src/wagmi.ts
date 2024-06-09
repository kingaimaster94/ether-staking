import { createConfig, http } from 'wagmi'

import { createWeb3Modal } from '@web3modal/wagmi/react'
// import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { arbitrum, mainnet, bscTestnet } from 'wagmi/chains'

const projectId = 'EtherStaking'

export const config = createConfig({
  chains: [mainnet, arbitrum, bscTestnet],
  transports: {
    [mainnet.id]: http(),
    [arbitrum.id]: http(),
    [bscTestnet.id]: http(),
  },
})

// 3. Create modal
export const web3Modal = createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true // Optional - false as default
})


declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
