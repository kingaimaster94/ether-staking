import React from 'react';
import Card from './Card';
import { useAccount, useReadContract } from 'wagmi'
import { abiVaultManager } from '../../data/abi/VaultManager'
import { vaultManagerAddress } from '../../data/constants';
import { decimalToEth } from '../../utils/utils';

const CardPanel = (props) => {
  const { address } = useAccount();

  const balanceData = useReadContract({
    address: vaultManagerAddress,
    abi: abiVaultManager,
    functionName: 'getDeposits',
    args: [address],
  });

  return (
    <>
      <div className={`flex flex-col lg:flex-row items-center gap-2 w-full ${props.extraStyle}`}>
        {props.content.map((pool, index) => {
          if (balanceData && balanceData.data) {
            let vaultAddrArray = balanceData.data[0];     // valut address array
            let tokenAddrArray = balanceData.data[1];     // token address array
            let stakingAmountArray = balanceData.data[2];     // staking amount array
            let shareAmountArray = balanceData.data[3];     // share amount array

            for (let i = 0; i < tokenAddrArray.length; i++) {
              if (tokenAddrArray[i] == pool.tokenAddress) {
                pool.balance = decimalToEth(stakingAmountArray[i]);
                pool.share = decimalToEth(shareAmountArray[i]);
                break;
              }
            }
          }

          return (
            <Card pool={pool} key={index} />
          )
        })}
      </div >
    </>
  );
}

export default CardPanel;
