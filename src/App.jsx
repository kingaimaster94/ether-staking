import './App.css'
import './style.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, createContext, useEffect } from "react";

import Header from './components/Header/Header';
import Restaking from './pages/Restaking';
import Portfolio from './pages/Portfolio'
import TokenData from './pages/TokenData';

import { useAccount, useReadContract } from 'wagmi'
import { abiVaultManager } from './data/abi/VaultManager'
import { vaultManagerAddress } from './data/constants'

export const DepositContext = createContext()

function App() {
  const [deposits, setDeposits] = useState(null);
  const { address } = useAccount();

  const resData = useReadContract({
    address: vaultManagerAddress,
    abi: abiVaultManager,
    functionName: 'getDeposits',
    args: [address],
  });

  useEffect(() => {
    if (resData && resData.data) {
      setDeposits(resData.data);
    }
  }, [resData]);

  return (
    <>
      <DepositContext.Provider value={deposits}>
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
      </DepositContext.Provider>
    </>
  )
}

export default App
