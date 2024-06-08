import React from 'react';
import Title from '../Title/Title'
import ChainCombo from '../Title/ChainCombo';
import { xpearned } from './xpearned';
import { stableCoins } from './stable';
import ListToken from '../ListToken/ListToken';

const items = [
    { value: 'pool1', label: 'Ethereum' },
    { value: 'pool2', label: 'Arbitrum' },
    { value: 'pool3', label: 'BTC' },
    { value: 'pool4', label: 'Mantle' },
    { value: 'pool5', label: 'K2' },
];

const Restaking = () => {
    return (
        <div className="flex flex-col items-center mt-20 w-full gap-12">
            <Title prop={{ title: 'Restaking', TVL: '998,855,562', contents: xpearned }} />
            <div className="w-full lg:w-12/12 mt-16 mb-5">
                {/* <ChainCombo items={items} /> */}
                <ListToken prop1={{ name: 'STABLECOINS', badge: '1.5X KARAK MULTIPLIER', coins: stableCoins }} />
                <ListToken prop1={{ name: 'STABLECOINS', badge: '1.5X KARAK MULTIPLIER', coins: stableCoins }} />
                <ListToken prop1={{ name: 'STABLECOINS', badge: '1.5X KARAK MULTIPLIER', coins: stableCoins }} />
            </div>
        </div>
    );
}

export default Restaking;