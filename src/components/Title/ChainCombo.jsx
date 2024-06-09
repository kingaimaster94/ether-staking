import React, { useState } from 'react';
import { useCombobox } from 'downshift';
import {
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from '@chakra-ui/react'
import { CheckIcon, ChevronDownIcon } from '@chakra-ui/icons'

const ChainCombo = ({ items }) => {
    const [curNetwork, setCurNetwork] = useState("BSC Testnet");

    const onClickItem = (label) => {
        setCurNetwork(label);
    }

    return (
        <div className="mb-12" >
            <div className="mr-auto mb-12">
                <div className="flex gap-2 items-center">
                    <Menu>
                        <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='orange'>
                            {curNetwork} Pools
                        </MenuButton>
                        <MenuList zIndex={40}>
                            {items.map((item, index) => (
                                <MenuItem key={index} onClick={() => onClickItem(item.label)}>
                                    <p className='flex flex-row gap-2'>
                                        <span>{item.label}</span>
                                        <span>{(item.label == curNetwork) && < CheckIcon />}</span>
                                    </p>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                </div>
            </div>
            <div className="h-[1px] bg-slate-200 rounded-lg"></div>
        </div >
    );
};

export default ChainCombo;