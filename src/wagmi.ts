import { WagmiProvider, createConfig, http } from 'wagmi'

import { createWeb3Modal } from '@web3modal/wagmi/react'
import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { arbitrum, mainnet, bscTestnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// 0. Setup queryClient
const queryClient = new QueryClient()

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = 'EtherStaking'

// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886']
}

// export const config = defaultWagmiConfig({
//   chains: [mainnet, arbitrum, bscTestnet],
//   projectId,
//   metadata,
//   // ...wagmiOptions // Optional - Override createConfig parameters
// })

export const config = createConfig({
  chains: [mainnet, arbitrum, bscTestnet],
  // connectors: [
  //   injected(),
  //   coinbaseWallet({ appName: 'Create Wagmi' }),
  //   walletConnect({ projectId: import.meta.env.VITE_WC_PROJECT_ID }),
  // ],
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

// export function Web3ModalProvider({ children }) {
//   return (
//     <WagmiProvider config= { config } >
//     <QueryClientProvider client={ queryClient }> { children } < /QueryClientProvider>
//       < /WagmiProvider>
//   )
// }

declare module 'wagmi' {
  interface Register {
    config: typeof config
  }
}
