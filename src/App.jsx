import { useAccount, useConnect, useDisconnect } from 'wagmi'
import './App.css'
import './output.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header'
import Restaking from './components/page/Restaking';
import Portfolio from './components/page/Portfolio'

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
          </Routes>
        </Router>

      </main>
    </>
  )
}

export default App
