import { useAccount, useConnect, useDisconnect } from 'wagmi'
import './App.css'
import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Restaking from './page/Restaking';
import Portfolio from './page/Portfolio'
import TokenData from './page/TokenData';

const networkId = [
  'Ethereum',
  'Arbitrum',
]
const coinId = [
  'USDe',
  'sFRAX',
  'sUSDe',
  'USDC',
  'USDT',
  'sDAI',
  'swETH',
  'sfrxETH',
  'wstETH',
]

function App() {
  // const account = useAccount()
  // const { connectors, connect, status, error } = useConnect()
  // const { disconnect } = useDisconnect()

  return (
    <>
      <main className="flex flex-col items-center m-auto p-5 sm:p-10 min-h-screen max-w-[1300px]">
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Restaking />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/pool/:chain/:token" element={<TokenData />} />
          </Routes>
        </Router>
      </main>
    </>
  )
}

export default App
