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
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { decimalToEth } from '../../utils/utils';

const PendingTable = (props) => {
    const tblCaption = props.tblData.caption;
    const tblData = props.tblData.data;
    console.log(tblData);
    return (
        <div className='flex flex-col justify-center items-center'>
            <h5>{tblCaption}</h5>
            <TableContainer>
                <Table variant='simple'>
                    <TableCaption>{tblCaption}</TableCaption>
                    <Thead>
                        <Tr>
                            <Th>StartTime</Th>
                            <Th>Amount</Th>
                            <Th>Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            {tblData &&
                                tblData.forEach(element => {
                                    <>
                                        <Td>{(new Date(element.start)).toString()}</Td>
                                        <Td>{decimalToEth(element.request.vaults[0])}</Td>
                                        <Td>
                                            <Button>
                                                Withdraw
                                            </Button>
                                        </Td>
                                    </>
                                })
                            }
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default PendingTable;