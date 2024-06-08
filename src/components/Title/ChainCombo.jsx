import React from 'react';
import { useCombobox } from 'downshift';
import { Box, Input, List, ListItem, Button } from '@chakra-ui/react';

const ChainCombo = ({ items }) => {
    const {
        isOpen,
        getMenuProps,
        getInputProps,
        getComboboxProps,
        getItemProps,
        highlightedIndex,
        selectedItem,
        toggleMenu,
    } = useCombobox({
        items,
        onSelectedItemChange: ({ selectedItem }) => console.log(selectedItem),
        itemToString: (item) => (item ? item.label : ''),
    });

    return (
        <Box className="mb-12">
            <Box className="mr-auto mb-12">
                <Box className="relative inline-block text-left">
                    <Button
                        className="inline-flex items-center gap-2 w-full justify-center rounded-md bg-primary-orange -mt-1 px-4 py-2 text-md font-medium text-white hover:opacity-85 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                        onClick={toggleMenu}
                        aria-haspopup="menu"
                        aria-expanded={isOpen}
                    >
                        Ethereum pools
                        <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                    </Button>
                    <Box {...getComboboxProps()}>
                        <Input
                            {...getInputProps()}
                            placeholder="Select an item"
                            className="hidden"
                        />
                    </Box>
                    <List
                        {...getMenuProps()}
                        className={`absolute mt-1 w-full bg-white rounded-md shadow-lg ${!isOpen ? 'hidden' : ''}`}
                    >
                        {isOpen &&
                            items.map((item, index) => (
                                <ListItem
                                    key={item.value}
                                    {...getItemProps({ item, index })}
                                    className={`cursor-pointer px-4 py-2 ${highlightedIndex === index ? 'bg-gray-200' : 'bg-white'}`}
                                >
                                    {item.label}
                                </ListItem>
                            ))}
                    </List>
                </Box>
            </Box>
            <Box className="h-[1px] bg-slate-200 rounded-lg"></Box>
        </Box>
    );
};

export default ChainCombo;