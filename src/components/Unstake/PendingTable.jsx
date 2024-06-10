import { React, useEffect, useState } from 'react';
import {
    Button,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableContainer,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { coins } from '../../data/coins';
import { useAccount, useReadContract } from 'wagmi'
import { abiDelegationManager } from '../../data/abi/DelegationManager'
import { abiVaultManager } from '../../data/abi/VaultManager'
import { delegationManagerAddress, vaultManagerAddress } from '../../data/constants';
import { writeContract, waitForTransactionReceipt, readContract } from '@wagmi/core'
import { config } from '../../wagmi';
import { decimalToEth, convertBigIntToDateString } from '../../utils/utils';

const PendingTable = (props) => {

    const [showWarning, setShowWarning] = useState(true);

    const { isOpen, onOpen, onClose } = useDisclosure();
    const tblCaption = props.tblData.caption;
    const tblData = props.tblData.data;

    const [withdrawPending, setWithdrawPending] = useState(0);
    const receiptWithDrawalDelay = useReadContract({
        address: delegationManagerAddress,
        abi: abiDelegationManager,
        functionName: 'withdrawalDelay',
        args: [],
    });

    useEffect(() => {
        if (receiptWithDrawalDelay && receiptWithDrawalDelay.data) {
            setWithdrawPending(Number(receiptWithDrawalDelay.data) * 1000);
        }
    }, [receiptWithDrawalDelay]);


    async function onClickWidthDraw(id) {
        if (tblData && (tblData.length > 0)) {
            let withdrawArray = [];
            for (let i = 0; i < tblData.length; i++) {
                console.log("tblData[i]: ", tblData[i]);
                const currentTime = new Date();
                const pending_time = currentTime - Number(tblData[i].start) * 1000;
                console.log("pending_time: ", pending_time, withdrawPending);

                const isPending = await readContract(config, {
                    address: delegationManagerAddress,
                    abi: abiDelegationManager,
                    functionName: 'isWithdrawPending',
                    args: [tblData[i]]
                })

                console.log("isPending: ", isPending);
                if (isPending && (pending_time > withdrawPending)) {
                    withdrawArray.push(tblData[i]);
                }
                if ((isPending === false)) {
                    const txRemoveVault = await writeContract(config, {
                        address: vaultManagerAddress,
                        abi: abiVaultManager,
                        functionName: 'returnShares',
                        args: [tblData[i].request.vaults[0], tblData[i].request.shares[0]]
                    })
                    console.log("txRemoveVault: ", txRemoveVault);
                    const receiptRemveShares = await waitForTransactionReceipt(config, { hash: txRemoveVault });
                    console.log("receiptRemveShares: ", receiptRemveShares);
                }
            }
            if (withdrawArray.length > 0) {
                console.log("withdrawArray: ", withdrawArray);
                const txFinish = await writeContract(config, {
                    address: delegationManagerAddress,
                    abi: abiDelegationManager,
                    functionName: 'finishWithdraw',
                    args: [withdrawArray]
                })
                console.log("txFinish: ", txFinish);
                const receiptFinish = await waitForTransactionReceipt(config, { hash: txFinish });
                console.log("receiptFinish: ", receiptFinish);
            }
            else {
                onOpen();
                setShowWarning(false);
            }
        }
    };

    return (
        <div className='flex flex-col justify-center items-center'>
            <h5>{tblCaption}</h5>
            <TableContainer>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>StartTime</Th>
                            <Th>Amount</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tblData && tblData.map((element, index) => {
                            return (
                                <Tr key={index}>
                                    <Td>{convertBigIntToDateString(element.start)}</Td>
                                    <Td>{decimalToEth(element.request.shares[0]).toFixed(2)}</Td>
                                </Tr>
                            );
                        })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
            <Button onClick={() => onClickWidthDraw()}>
                Withdraw
            </Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Withdraw Impossible</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Pending period does not finish yet. Please wait for a days.
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}> Close </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>
    );
}

export default PendingTable;