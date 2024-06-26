import React, { useEffect, useState } from 'react';
import {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react';

import { useParams } from 'react-router-dom';
import { coins } from '../data/coins';
import { useAccount, useReadContract } from 'wagmi'
import { abiVaultManager } from '../data/abi/VaultManager'
import { abiDelegationManager } from '../data/abi/DelegationManager'
import { abiIERC20 } from '../data/abi/IERC20';
import { vaultManagerAddress, delegationManagerAddress } from '../data/constants';
import { writeContract, waitForTransactionReceipt, simulateContract } from '@wagmi/core'
import { config } from '../wagmi';
import { decimalToEth, decimalFromEth } from '../utils/utils';
import PendingTable from "../components/Unstake/PendingTable";

import { readContract } from 'viem/actions';

// interface WithdrawRequest {
//     vaults: string[];
//     shares: BigInt[];
//     withdrawer: string;
// }

// interface QueuedWithdrawal {
//     staker: string;
//     delegatedTo: string;
//     nonce: BigInt;
//     start: BigInt;
//     request: WithdrawRequest;
// }

const TokenData = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { chain, token } = useParams();
    const filteredCoins = coins.filter(coins => coins.network == chain);
    const tokens = filteredCoins.filter(filteredCoins => filteredCoins.symbol == token);
    const coin = tokens[0];
    const [showWarning, setShowWarning] = useState(true);
    const [depositStep, setDepositStep] = useState(0);

    const { address } = useAccount();

    const balance = useReadContract({
        address: coin.tokenAddress,
        abi: abiIERC20,
        functionName: 'balanceOf',
        args: [address],
    });

    const [ethBalance, setEthBalance] = useState(0);
    const [amount, setAmount] = useState(0);
    const [tokenBalance, setTokenBalance] = useState(0);

    const [approvedAmount, setApprovedAmount] = useState(0);

    const receiptQueue = useReadContract({
        address: delegationManagerAddress,
        abi: abiDelegationManager,
        functionName: 'fetchQueuedWithdrawals',
        args: [address],
    });

    const totalDeposits = useReadContract({
        address: vaultManagerAddress,
        abi: abiVaultManager,
        functionName: 'getDeposits',
        args: [address],
    });

    const approvedData = useReadContract({
        address: coin.tokenAddress,
        abi: abiIERC20,
        functionName: `allowance`,
        args: [address, coin.vaultAddress]
    })

    useEffect(() => {
        if (balance && balance.data) {
            const ethVal = decimalToEth(balance.data);
            setEthBalance(ethVal);
        }
        // const tokenVal = decimalFromEth(amount);
        // console.log("tokenVal: ", tokenVal);
        // setTokenBalance(tokenVal);
        console.log("approvedData: ", approvedData.data);

    }, [balance, amount, receiptQueue, approvedData]);

    const onClickMax = (event, data) => {
        const id = event.target.id;
        if (id == "max-amount") {
            setAmount(ethBalance)
        }
    };

    const onUnstakeTabClicked = (event, data) => {
        if (showWarning) {
            onOpen();

            setShowWarning(false);
        }

        if (data && data[0].length >= 0) {
            for (let index = 0; index < data[0].length; index++) {
                if (coin.vaultAddress === data[0][index]) {
                    const stakedToken = decimalToEth(data[3][index]);
                    setAmount(stakedToken);
                    break;
                }
            }
        }
    };

    async function onClickDeposit() {
        console.log("-----------------", coin.tokenAddress, coin.vaultAddress, address);
        const approvedData = await readContract(config, {
            address: coin.tokenAddress,
            abi: abiIERC20,
            functionName: `allowance`,
            args: [address, coin.vaultAddress]
        })
        console.log("-----------------", approvedData);
        console.log(approvedAmount);

        if (amount > approvedAmount) {
            // document.getElementById("modalCaption").html = "Deposit";
            // document.getElementById("modalMsg").html = "Approved amount is less than deposit amount! Please approve more!";
            // isOpen();

            setDepositStep(0);
            return;
        }

        const txdesposit = await writeContract(config, {
            abi: abiVaultManager,
            address: vaultManagerAddress,
            functionName: 'deposit',
            args: [coin.vaultAddress, BigInt(amount * (10 ** 18)), BigInt(amount * (10 ** 16))]
        })
        const resDeposit = await waitForTransactionReceipt(config, { hash: txdesposit });
        console.log("resDeposit: ", resDeposit.logs[0]);

        setDepositStep(0);

        // document.getElementById("modalCaption").html = "Deposit";
        // document.getElementById("modalMsg").html = "Deposit success";
        // isOpen();
    }

    async function onClickApprove() {
        // approve amount
        const txapprove = await writeContract(config, {
            abi: abiIERC20,
            address: coin.tokenAddress,
            functionName: 'approve',
            args: [coin.vaultAddress, BigInt(amount * (10 ** 18))]
        })

        const resApprove = await waitForTransactionReceipt(config, { hash: txapprove });
        console.log("res_approve: ", resApprove);

        setApprovedAmount(amount);
        // set deposit step 1
        setDepositStep(1);


        // document.getElementById("modalCaption").html = "Approved";
        // document.getElementById("modalMsg").html = "Approved success!";
        // isOpen();
        return;
    }

    async function onClickWithdraw() {
        if (amount > 0) {
            const request = [
                {
                    vaults: [coin.vaultAddress],
                    shares: [BigInt(amount * (10 ** 18))],
                    withdrawer: address
                }
            ]
            const txStart = await writeContract(config, {
                address: delegationManagerAddress,
                abi: abiDelegationManager,
                functionName: 'startWithdraw',
                args: [request],
            });

            const receipStart = await waitForTransactionReceipt(config, { hash: txStart });
            console.log("receipStart: ", receipStart.logs[0].data);
        }
        console.log("receiptQueue: ", receiptQueue);
    }

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
                            decoding="async" data-nimg="1" className="rounded-full" src={`/src/assets/images/${coin.symbol}.svg`}
                            styled="color: transparent;"></img>
                        <h2 className="font-nunito text-light-black font-semibold text-xl sm:text-3xl tracking-wider">
                            {coin.name}
                        </h2>
                        <div
                            className="bg-secondary-blue rounded-md py-2 px-6 text-primary-blue font-nunito font-semibold text-lg ml-auto">
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
                    <Tabs className='w-full border border-primary-blue border-b-0.2 border-l-0 border-r-0 border-t-0' variant='line'>
                        <TabList>
                            <Tab id="tab:deposit" className="rounded-l-md font-[500] text-2xl w-6/12 p-4" _selected={{ color: 'white', bg: 'rgba(249, 237, 229)', textColor: 'blue.500' }} onClick={(event) => { setShowWarning(true); }}>DEPOSIT</Tab>
                            <Tab id="tab:unstake" className="rounded-r-md font-[500] text-2xl w-6/12 p-4" _selected={{ color: 'white', bg: 'rgba(249, 237, 229)', textColor: 'blue.500' }} onClick={(event) => onUnstakeTabClicked(event, totalDeposits.data)}>UNSTAKE</Tab>
                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <div className="px-5 py-8">
                                    <div role="tabpanel" tabIndex="0" data-headlessui-state="selected"
                                        aria-labelledby="tab:deposit">
                                        <div className="flex flex-col gap-8">
                                            <div>
                                                <p className="text-light-black mb-3 text-sm">AMOUNT TO DEPOSIT</p>
                                                <div className="relative flex h-16 w-full">
                                                    <p className="!absolute top-[1.15rem] right-24 text-light-black font-bold">{coin.symbol}</p>
                                                    <button id="max-amount"
                                                        className="!absolute right-3 top-4 z-10 select-none rounded bg-gradient-to-r from-blue-600 to-blue-300 py-1 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white hover:shadow-lg hover:brightness-75 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                                        type="button" onClick={(event) => onClickMax(event, balance.data)}>
                                                        MAX
                                                    </button>
                                                    <input
                                                        className="h-full w-full rounded border-0.2 border-primary-blue bg-transparent px-3 py-4 pr-40 font-sans text-xl font-normal text-light-black outline outline-0 transition-all placeholder-light-black disabled:border-0 disabled:bg-blue-gray-50"
                                                        placeholder="0" required="" type="text" value={amount} onChange={(event) => onChangeAmount(event)}>
                                                    </input>
                                                </div>
                                            </div>
                                            <div
                                                className="flex flex-row items-center justify-between gap-4 bg-secondary-blue rounded-md w-full py-4 px-4">
                                                <p className="font-nunito text-primary-blue text-md font-semibold tracking-wider">WALLET
                                                    BALANCE</p>
                                                <h2 className=" text-light-black font-bold tracking-wide text-md">{ethBalance.toString()} {coin.symbol}</h2>
                                            </div>
                                            <div
                                                className="flex flex-row items-center justify-between gap-4 bg-secondary-blue rounded-md w-full py-4 px-4 -mt-4">
                                                <p className="font-nunito text-primary-blue text-md font-semibold tracking-wider">
                                                    ASSET
                                                    NETWORK</p>
                                                <h2 className=" text-light-black font-bold tracking-wide text-md">{chain}</h2>
                                            </div>
                                            <button id='deposit'
                                                className="bg-gradient-to-r from-blue-600 to-blue-300 hover:brightness-75 text-white py-5 px-4 rounded font-nunito text-xl font-bold w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled="" onClick={depositStep == 0 ? onClickApprove : onClickDeposit}>
                                                <div className="flex items-center justify-center gap-2">
                                                    {depositStep == 0 ? "Approve" : "Deposit"}
                                                </div>
                                            </button>
                                            <div styled="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="px-5 py-8">
                                    <div role="tabpanel" tabIndex="1" data-headlessui-state="selected"
                                        aria-labelledby="headlessui-tabs-tab-:r0:">
                                        <div className="flex flex-col gap-8">
                                            <div>
                                                <p className="text-light-black mb-3 text-sm">AMOUNT TO UNSTAKE</p>
                                                <div className="relative flex h-16 w-full">
                                                    <p className="!absolute top-[1.15rem] right-24 text-light-black font-bold">{coin.symbol}</p>
                                                    <button id="max-amount"
                                                        className="!absolute right-3 top-4 z-10 select-none rounded bg-gradient-to-r from-blue-600 to-blue-300 py-1 px-4 text-center align-middle font-sans text-sm font-bold uppercase text-white hover:shadow-lg hover:brightness-75 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                                                        type="button" onClick={(event) => onClickMax(event, balance.data)}>
                                                        MAX
                                                    </button>
                                                    <input
                                                        className="h-full w-full rounded border-0.2 border-primary-blue bg-transparent px-3 py-4 pr-40 font-sans text-xl font-normal text-light-black outline outline-0 transition-all placeholder-light-black disabled:border-0 disabled:bg-blue-gray-50"
                                                        placeholder="0" required="" type="text" value={amount} onChange={(event) => onChangeAmount(event)}>
                                                    </input>
                                                </div>
                                            </div>
                                            <div
                                                className="flex flex-row items-center justify-between gap-4 bg-secondary-blue rounded-md w-full py-4 px-4 -mt-4">
                                                <p className="font-nunito text-primary-blue text-md font-semibold tracking-wider">
                                                    ASSET
                                                    NETWORK</p>
                                                <h2 className=" text-light-black font-bold tracking-wide text-md">{chain}</h2>
                                            </div><button
                                                className="bg-gradient-to-r from-blue-600 to-blue-300 hover:brightness-75 text-white py-5 px-4 rounded font-nunito text-xl font-bold w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                                disabled="" onClick={onClickWithdraw}>
                                                <div className="flex items-center justify-center gap-2">
                                                    Unstake
                                                </div>
                                            </button>

                                            <PendingTable
                                                tblData={{
                                                    caption: "Pending Withdrawal",
                                                    data: receiptQueue.data,
                                                    vault: coin.vaultAddress,
                                                }}
                                            />
                                            <div styled="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </div>
            </div>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader><p id="modalCaption">Unstaking</p></ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p id="modalMsg">Please note that for security purposes, unstaking will begin a 7-day queuing period which cannot be reversed, after which you can withdraw.</p>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}> Close </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div >
    );
}

export default TokenData;