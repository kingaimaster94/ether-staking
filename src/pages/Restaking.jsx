import React, { useEffect } from 'react';
import { useState } from 'react';
import ChainCombo from '../components/Title/ChainCombo';
import ListToken from '../components/ListToken/ListToken';
import TVLCard from '../components/Title/TVLCard';
import CardPanel from '../components/Title/CardPanel';

import { xpearned } from '../data/xpearned';
import { coins } from '../data/coins';
const items = [
    { value: 'net1', label: 'Ethereum' },
    { value: 'net2', label: 'Arbitrum' },
    { value: 'net3', label: 'BSC Testnet' },
];

const Restaking = () => {
    const [chain, setChain] = useState('BSC Testnet');

    let filteredCoins, stablecoins, lscoins, rscoins, pendlecoins, othercoins;

    filteredCoins = coins.filter(coins => coins.network == chain);
    stablecoins = filteredCoins.filter(filteredCoins => filteredCoins.restakingType == `STABLECOINS`);
    lscoins = filteredCoins.filter(filteredCoins => filteredCoins.restakingType == `LIQUID STAKING`);
    rscoins = filteredCoins.filter(filteredCoins => filteredCoins.restakingType == `LIQUID RESTAKING`);
    pendlecoins = filteredCoins.filter(filteredCoins => filteredCoins.restakingType == `PENDLE`);
    othercoins = filteredCoins.filter(filteredCoins => filteredCoins.restakingType == `OTHER`);

    let stablemessage, lsmessage, rsmessage, pendlemessage, othermessage;

    if (stablecoins.length > 0) {
        stablemessage = <ListToken prop1={{ name: 'STABLECOINS', badge: '1.5X MAD MULTIPLIER', coins: stablecoins }} />
    } else {
        stablemessage = <></>;
    }
    if (lscoins.length > 0) {
        lsmessage = <ListToken prop1={{ name: 'LIQUID STAKING', badge: '1.5X MAD MULTIPLIER', coins: lscoins }} />
    } else {
        lsmessage = <></>;
    }
    if (rscoins.length > 0) {
        rsmessage = <ListToken prop1={{ name: 'LIQUID RESTAKING', badge: '', coins: rscoins }} />
    } else {
        rsmessage = <></>;
    }
    if (pendlecoins.length > 0) {
        pendlemessage = <ListToken prop1={{ name: 'PENDLE', badge: '', coins: pendlecoins }} />
    } else {
        pendlemessage = <></>;
    }
    if (othercoins.length > 0) {
        othermessage = <ListToken prop1={{ name: 'OTHER', badge: '1.5X MAD MULTIPLIER', coins: othercoins }} />
    } else {
        othermessage = <></>;
    }


    return (
        <div className="flex flex-col items-center mt-20 w-full gap-12">
            <h1 className="text-light-black text-5xl lg:text-6xl font-bold font-gilroy pb-1"> Restaking </h1>
            <CardPanel content={xpearned} />
            <div className="w-full lg:w-12/12 mt-16 mb-5">
                <ChainCombo items={items} updateChain={setChain} />
                {stablemessage}
                {lsmessage}
                {rsmessage}
                {pendlemessage}
                {othermessage}
            </div>
            <TVLCard tvl='998,855,562' />
        </div>
    );
}

export default Restaking;