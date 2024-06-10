import React from 'react';
import Card from './Card';
import { useAccount, useReadContract } from 'wagmi'
import { abiVaultManager } from '../../data/abi/VaultManager'
import { vaultManagerAddress } from '../../data/constants';
import { decimalToEth } from '../../utils/utils';

const CardPanel = (props) => {
  return (
    <>
      <div className={`flex flex-col lg:flex-row items-center gap-2 w-full ${props.extraStyle}`}>
        {props.content.map((pool, index) => {
          return (
            <Card pool={pool} key={index} />
          )
        })}
      </div >
    </>
  );
}

export default CardPanel;
