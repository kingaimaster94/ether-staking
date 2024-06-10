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
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom';
import { coins } from '../../data/coins';
import { useAccount, useReadContract } from 'wagmi'
import { abiVaultManager } from '../../data/abi/VaultManager'
import { abiDelegationManager } from '../../data/abi/DelegationManager'
import { abiIERC20 } from '../../data/abi/IERC20';
import { vaultManagerAddress, delegationManagerAddress } from '../../data/constants';
import { writeContract, waitForTransactionReceipt, simulateContract } from '@wagmi/core'
import { config } from '../../wagmi';
import { decimalToEth, convertBigIntToDateString } from '../../utils/utils';

const PendingTable = (props) => {
    const tblCaption = props.tblData.caption;
    const tblData = props.tblData.data;

    async function onClickWidthDraw(id) {
        if (tblData && (tblData.length > 0)) {
            for (let index = 0; index < array.length; index++) {
                if (id == index) {
                    const res_desposit = await writeContract(config, {
                        abi: abiVaultManager,
                        address: vaultManagerAddress,
                        functionName: 'deposit',
                        args: [coin.vaultAddress, BigInt(amount * (10 ** 18)), BigInt(amount * (10 ** 16))]
                    })
                    const res_wait1 = await waitForTransactionReceipt(config, { hash: res_desposit });
                }
                const element = array[index];
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
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {tblData && tblData.map((element, index) => {
                            return (
                                <Tr key={index}>
                                    <Td>{convertBigIntToDateString(element.start)}</Td>
                                    <Td>{decimalToEth(element.request.shares[0]).toFixed(2)}</Td>
                                    <Td>
                                        <Button id={index} onClick={onClickWidthDraw}>
                                            Withdraw
                                        </Button>
                                    </Td>
                                </Tr>
                            );
                        })
                        }
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default PendingTable;