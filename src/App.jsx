import { useAccount, useConnect, useDisconnect } from 'wagmi'
import './App.css'
import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Restaking from './pages/Restaking';
import Portfolio from './pages/Portfolio'
import TokenData from './pages/TokenData';

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
