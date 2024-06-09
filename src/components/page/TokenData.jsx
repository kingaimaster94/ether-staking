import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { coins } from './coins';

const TokenData = () => {
    const { chain, token } = useParams();
    const filteredCoins = coins.filter(coins => coins.network == chain);
    const tokens = filteredCoins.filter(filteredCoins => filteredCoins.symbol == token);
    const coin = tokens[0];
    const [caption, setCaption] = useState('Deposit');
    const [deposit, setDeposit] = useState("bg-secondary-orange text-primary-orange rounded-l-md font-[500] text-2xl w-6/12 p-4 track-wide focus:outline-none");
    const [unstake, setUnstake] = useState("transparent text-primary-gray rounded-r-md font-[500] text-2xl w-6/12 p-4 track-wide focus:outline-none");

    const [amount, setAmount] = useState(0);

    const handleClick = (event) => {
        const id = event.target.id;
        if (id === 'headlessui-tabs-tab-:r0:') {
            setCaption('Deposit');
            setDeposit("bg-secondary-orange text-primary-orange rounded-l-md font-[500] text-2xl w-6/12 p-4 track-wide focus:outline-none")
            setUnstake("transparent text-primary-gray rounded-r-md font-[500] text-2xl w-6/12 p-4 track-wide focus:outline-none")
        }
        else if (id === 'headlessui-tabs-tab-:r1:') {
            setCaption('Unstake');
            setUnstake("bg-secondary-orange text-primary-orange rounded-l-md font-[500] text-2xl w-6/12 p-4 track-wide focus:outline-none")
            setDeposit("transparent text-primary-gray rounded-r-md font-[500] text-2xl w-6/12 p-4 track-wide focus:outline-none")
        }
        else if (id === "max-amount") {
            console.log("max-amount: 1000000000000")
        }
    };

    const onChangeAmount = (event) => {
        console.log(event.target.value);
        setAmount(event.target.value);
    }

    return (
        <div className="flex flex-col gap-12 mt-24">
            <a href="/" previewlistener="true">
                <span
                    className="flex items-center gap-1 text-light-black text-md hover:opacity-75 md:ml-28 lg:ml-0">
                    <svg
                        className="h-5 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
                    </svg>
                    Back
                </span>
            </a>
            <div className="flex flex-col justify-center items-center lg:items-start lg:flex-row gap-10 lg:gap-4 w-full">
                <div className="flex flex-col gap-10 md:w-9/12 lg:w-6/12">
                    <div className="flex flex-row items-center gap-3">
                        <img alt={coin.symbol} loading="lazy" width="55" height="55"
                            decoding="async" data-nimg="1" className="rounded-full" src="/_next/static/media/usde.296f51e1.svg"
                            styled="color: transparent;"></img>
                        <h2 className="font-nunito text-light-black font-semibold text-xl sm:text-3xl tracking-wider">
                            {coin.name}
                        </h2>
                        <div
                            className="bg-secondary-orange rounded-md py-2 px-6 text-primary-orange font-nunito font-semibold text-lg ml-auto">
                            {coin.symbol}
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between bg-white shadow-md rounded-md w-full py-4 px-4">
                        <p className="font-nunito text-light-gray text-md tracking-wider font-semibold">RESTAKED</p>
                        <h2 className="font-nunito text-light-black font-semibold text-2xl">0.00</h2>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-light-black tracking-wider whitespace-pre-line">
                            {coin.desc}
                        </p>
                        <p className="text-light-black tracking-wider whitespace-pre-line break-all custom-sm:break-normal">
                            Token address: {coin.tokenAddress}
                        </p>
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-md w-full sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-[40%] lg:ml-auto h-fit">
                    <div className="w-full border border-primary-orange border-b-0.2 border-l-0 border-r-0 border-t-0"
                        role="tablist" aria-orientation="horizontal">
                        <button
                            className={deposit}
                            id="headlessui-tabs-tab-:r0:" role="tab" aria-selected="true" tabIndex="0"
                            data-headlessui-state="selected" type="button"
                            aria-controls="headlessui-tabs-panel-:r2:" onClick={(event) => handleClick(event)}>
                            DEPOSIT
                        </button>
                        <button
                            className={unstake}
                            id="headlessui-tabs-tab-:r1:" role="tab" aria-selected="false" tabIndex="-1"
                            data-headlessui-state="" type="button"
                            aria-controls="headlessui-tabs-panel-:r3:" onClick={(event) => handleClick(event)}>
                            UNSTAKE
                        </button>
                    </div>
                    <div className="px-5 py-8">
                        <div id="headlessui-tabs-panel-:r2:" role="tabpanel" tabIndex="0" data-headlessui-state="selected"
                            aria-labelledby="headlessui-tabs-tab-:r0:">
                            <div className="flex flex-col gap-8">
                                <div>
                                    <p className="text-light-black mb-3 text-sm">AMOUNT TO {caption.toUpperCase()}</p>
                                    <div className="relative flex h-16 w-full">
                                        <p className="!absolute top-[1.15rem] right-24 text-light-black font-bold">{coin.symbol}</p>
                                        <button id="max-amount"
                                            className="!absolute right-3 top-4 z-10 select-none rounded bg-gradient-to-r from-orange-600 to-orange-300 py-1 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white hover:shadow-lg hover:brightness-75 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                            type="button" onClick={(event) => handleClick(event)}>
                                            MAX
                                        </button>
                                        <input
                                            className="h-full w-full rounded border-0.2 border-primary-orange bg-transparent px-3 py-4 pr-40 font-sans text-xl font-normal text-light-black outline outline-0 transition-all placeholder-light-black disabled:border-0 disabled:bg-blue-gray-50"
                                            placeholder="0" required="" type="text" value={amount} onChange={(event) => onChangeAmount(event)}>
                                        </input>
                                    </div>
                                </div>
                                <div
                                    className="flex flex-row items-center justify-between gap-4 bg-secondary-orange rounded-md w-full py-4 px-4">
                                    <p className="font-nunito text-primary-orange text-md font-semibold tracking-wider">WALLET
                                        BALANCE</p>
                                    <h2 className=" text-light-black font-bold tracking-wide text-md">0.00 {coin.symbol}</h2>
                                </div>
                                <div
                                    className="flex flex-row items-center justify-between gap-4 bg-secondary-orange rounded-md w-full py-4 px-4 -mt-4">
                                    <p className="font-nunito text-primary-orange text-md font-semibold tracking-wider">
                                        ASSET
                                        NETWORK</p>
                                    <h2 className=" text-light-black font-bold tracking-wide text-md">{chain}</h2>
                                </div><button
                                    className="bg-gradient-to-r from-orange-600 to-orange-300 hover:brightness-75 text-white py-5 px-4 rounded font-nunito text-xl font-bold w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                    disabled="">
                                    <div className="flex items-center justify-center gap-2">
                                        {caption}
                                    </div>
                                </button>
                                <div styled="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;">
                                </div>
                            </div>
                        </div><span aria-hidden="true" id="headlessui-tabs-panel-:r3:" role="tabpanel" tabIndex="-1"
                            aria-labelledby="headlessui-tabs-tab-:r1:"
                            styled="position: fixed; top: 1px; left: 1px; width: 1px; height: 0px; padding: 0px; margin: -1px; overflow: hidden; clip: rect(0px, 0px, 0px, 0px); white-space: nowrap; border-width: 0px;"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TokenData;