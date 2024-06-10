import { React, useEffect, useState } from 'react';
import ListBadge from './ListBadge';
import Token from '../Token/Token';
import { useAccount, useReadContract } from 'wagmi'
import { abiVaultManager } from '../../data/abi/VaultManager'
import { vaultManagerAddress } from '../../data/constants';
import { decimalToEth } from '../../utils/utils';

const ListToken = (props) => {
    let message;
    if (props.prop1.badge != '') {
        message = <ListBadge prop2={props.prop1.badge} />
    } else {
        message = <></>;
    }

    const [tokenList, setTokenList] = useState(props.prop1);

    let vaultAddrArray = [];     // valut address array
    let tokenAddrArray = [];     // token address array
    let stakingAmountArray = [];     // staking amount array
    let shareAmountArray = [];     // share amount array

    const { address } = useAccount();

    const balanceData = useReadContract({
        address: vaultManagerAddress,
        abi: abiVaultManager,
        functionName: 'getDeposits',
        args: [address],
    });

    return (
        <div className="mb-12">
            <div className="flex gap-2 items-center">
                <p className="font-nunito text-light-black text-xl font-semibold tracking-wider mb-4">
                    {tokenList.name}
                </p>
                {message}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {tokenList.coins.map((coin, index) => {
                    coin.balance = 0;
                    coin.share = 0;

                    if (balanceData && balanceData.data) {
                        vaultAddrArray = balanceData.data[0];     // valut address array
                        tokenAddrArray = balanceData.data[1];     // token address array
                        stakingAmountArray = balanceData.data[2];     // staking amount array
                        shareAmountArray = balanceData.data[3];     // share amount array

                        for (let i = 0; i < tokenAddrArray.length; i++) {
                            if (tokenAddrArray[i] == coin.tokenAddress) {
                                coin.balance = decimalToEth(stakingAmountArray[i]);
                                coin.share = decimalToEth(shareAmountArray[i]);
                                break;
                            }
                        }
                    }

                    return (
                        <Token coinData={coin} key={index} />
                    )
                })}
            </div>
        </div>
    );
}

export default ListToken;