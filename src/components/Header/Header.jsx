import React, { useState } from 'react';
import whiteLogo from '../../assets/logo-white.svg';
import '../../ConnectWallet';
import { displayAddress } from '../../utils/utils';

import { useAccount, useDisconnect } from 'wagmi'
import {
  createWeb3Modal,
  useWeb3Modal,
  useWeb3ModalEvents,
  useWeb3ModalState,
  useWeb3ModalTheme,
} from '@web3modal/wagmi/react'

const pools = [
  {
    name: "Restaking",
    src: '/',
    key: "restaking",
  },
  {
    name: "Portfolio",
    src: '/portfolio',
    key: "portfolio",
  },
];

const Header = () => {
  const { address, isConnecting, isDisconnected } = useAccount()

  // 4. Use modal hook
  const modal = useWeb3Modal()
  const state = useWeb3ModalState()
  const events = useWeb3ModalEvents()
  const { themeMode, themeVariables, setThemeMode } = useWeb3ModalTheme()

  async function connectWallet() {
    modal.open();
  }

  async function disconnectWallet() {
    modal.open();
  }

  return (
    <div className="w-full flex flex-col gap-4 header-sm:gap-0 header-sm:flex-row items-center justify-between">
      <a href="/" previewlistener="true">
        <div className="flex flex-row items-center gap-2 hover:brightness-90 hover:cursor-pointer">
          <img alt="logo" loading="lazy" width="34" height="34" decoding="async" data-nimg="1"
            src={whiteLogo} className="color: transparent;"></img>
          <h1 className="text-primary-orange font-spline text-3xl font-light">Mad</h1>
        </div>
      </a>
      <div className="flex flex-col gap-4 header-sm:flex-row sm:gap-8 items-center">
        {pools.map((pool, index) => {
          return (<a href={pool.src} key={pool.key} previewlistener="true">
            <p className="text-light-black font-nunito font-bold hover:underline">
              {pool.name}</p></a>)
        })}
        <button
          className={"bg-primary-orange text-white hover:brightness-75" + " py-2 px-4 rounded font-nunito font-bold disabled:cursor-not-allowed disabled:opacity-50"}
          onClick={
            address
              ? () => disconnectWallet()
              : () => connectWallet()
          }
        >
          {address
            ? "Disconnect(" + displayAddress(address, 6) + ")"
            : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
}

export default Header;
