import React from 'react';
import { useState } from 'react';
import Title from '../Title/Title'
import ChainCombo from '../Title/ChainCombo';
import { xpearned } from './xpearned';
import { coins } from './coins';
import ListToken from '../ListToken/ListToken';

const items = [
    { value: 'pool1', label: 'Ethereum' },
    { value: 'pool2', label: 'Arbitrum' },
    { value: 'pool3', label: 'BTC' },
    { value: 'pool4', label: 'Mantle' },
    { value: 'pool5', label: 'K2' },
];

const Restaking = () => {
    const [chain, setChain] = useState('Ethereum');
    let filteredCoins, stablecoins, lscoins, rscoins, pendlecoins, othercoins;

    filteredCoins = coins.filter(coins => coins.network === chain);
    stablecoins = filteredCoins.filter(filteredCoins => filteredCoins.assetType === `STABLECOINS`);
    lscoins = filteredCoins.filter(filteredCoins => filteredCoins.assetType === `LIQUID STAKING`);
    rscoins = filteredCoins.filter(filteredCoins => filteredCoins.assetType === `LIQUID RESTAKING`);
    pendlecoins = filteredCoins.filter(filteredCoins => filteredCoins.assetType === `PENDLE`);
    othercoins = filteredCoins.filter(filteredCoins => filteredCoins.assetType === `OTHER`);

    return (
        <div className="flex flex-col items-center mt-20 w-full gap-12">
            <Title prop={{ title: 'Restaking', TVL: '998,855,562', contents: xpearned }} />
            <div className="w-full lg:w-12/12 mt-16 mb-5">
                {/* <ChainCombo items={items} /> */}
                <ListToken prop1={{ name: 'STABLECOINS', badge: '1.5X KARAK MULTIPLIER', coins: filteredCoins }} />
                <ListToken prop1={{ name: 'STABLECOINS', badge: '1.5X KARAK MULTIPLIER', coins: filteredCoins }} />
                <ListToken prop1={{ name: 'STABLECOINS', badge: '1.5X KARAK MULTIPLIER', coins: filteredCoins }} />
            </div>
        </div>
    );
}

export default Restaking;