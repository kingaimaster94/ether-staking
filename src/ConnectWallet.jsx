import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
  createWeb3Modal,
  defaultConfig,
} from "web3modal-web3js/react";
import { useState } from "react";
import ERC20ABI from "./data/abi/ERC20ABI";
import Web3 from "web3";
const WETHAddress = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = "76804fd6127cc3b85f7d749c4e53700f";

// 2. Set chains
const chains = [
  {
    chainId: 1,
    name: "Ethereum",
    currency: "ETH",
    explorerUrl: "https://etherscan.io",
    rpcUrl: "https://cloudflare-eth.com",
  },
  {
    chainId: 42161,
    name: "Arbitrum",
    currency: "ETH",
    explorerUrl: "https://arbiscan.io",
    rpcUrl: "https://arb1.arbitrum.io/rpc",
  },
  {
    chainId: 8453,
    name: "Base",
    currency: "ETH",
    explorerUrl: "https://arbiscan.io",
    rpcUrl: "https://base-rpc.publicnode.com",
  },
];

const web3Config = defaultConfig({
  metadata: {
    name: "Web3Modal",
    description: "Web3Modal Laboratory",
    url: "https://web3modal.com",
    icons: ["https://avatars.githubusercontent.com/u/37784886"],
  },
  defaultChainId: 1,
  rpcUrl: "https://cloudflare-eth.com",
});

// 3. Create modal
export const web3Modal = createWeb3Modal({
  web3Config,
  chains,
  projectId,
  enableAnalytics: true,
  themeMode: "dark",
  themeVariables: {
    "--w3m-color-mix": "#000",
    "--w3m-color-mix-strength": 20,
    "--w3m-button-border-radius": 0,
  },
});

export function ConnectWallet() {
  // 4. Use modal hook
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();
  const [WETHBalance, setWETHBalance] = useState(0); // useState to handle WETHBalance
  const [smartContractName, setSmartContractName] = useState(""); // useState to handle WETHBalance

  async function getBalance() {
    if (!isConnected) throw Error("not connected");
    const web3 = new Web3({
      provider: walletProvider,
      config: { defaultNetworkId: chainId },
    });
    const contract = new web3.eth.Contract(ERC20ABI, WETHAddress);
    const balance = await contract.methods.balanceOf(address).call();
    const name = await contract.methods.name().call();
    setWETHBalance(Number(balance));
    setSmartContractName(name);
  }

  return (
    <div>
      <w3m-button id="realConnBtn" />
      <w3m-network-button id="switchNetBtn" />
      <button onClick={getBalance}>Get User Balance</button>
      <p> Getting the contract name: {smartContractName} </p>
      <p> WETH balance: {WETHBalance}</p>{" "}
    </div>
  );
}

export function Web3ModalProvider({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

