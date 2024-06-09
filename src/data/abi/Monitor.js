export const abiMonitor = [
    {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "cancelOwnershipHandover",
        "inputs": [],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "completeOwnershipHandover",
        "inputs": [
            {
                "name": "pendingOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "delegationManager",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IDelegationManager"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getDeposits",
        "inputs": [
            {
                "name": "stakers",
                "type": "address[]",
                "internalType": "address[]"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple[]",
                "internalType": "struct IMonitor.DepositResult[]",
                "components": [
                    {
                        "name": "user",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "vaults",
                        "type": "address[]",
                        "internalType": "contract IVault[]"
                    },
                    {
                        "name": "tokens",
                        "type": "address[]",
                        "internalType": "contract IERC20[]"
                    },
                    {
                        "name": "assets",
                        "type": "uint256[]",
                        "internalType": "uint256[]"
                    },
                    {
                        "name": "shares",
                        "type": "uint256[]",
                        "internalType": "uint256[]"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getWithdraws",
        "inputs": [
            {
                "name": "staker",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "allWithdrawals",
                "type": "tuple[]",
                "internalType": "struct Withdraw.QueuedWithdrawal[]",
                "components": [
                    {
                        "name": "staker",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "delegatedTo",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "nonce",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "start",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "request",
                        "type": "tuple",
                        "internalType": "struct Withdraw.WithdrawRequest",
                        "components": [
                            {
                                "name": "vaults",
                                "type": "address[]",
                                "internalType": "contract IVault[]"
                            },
                            {
                                "name": "shares",
                                "type": "uint256[]",
                                "internalType": "uint256[]"
                            },
                            {
                                "name": "withdrawer",
                                "type": "address",
                                "internalType": "address"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "isWithdrawPending",
                "type": "bool[]",
                "internalType": "bool[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "name": "result",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "ownershipHandoverExpiresAt",
        "inputs": [
            {
                "name": "pendingOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "result",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "renounceOwnership",
        "inputs": [],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "requestOwnershipHandover",
        "inputs": [],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "setDelegationManager",
        "inputs": [
            {
                "name": "_delegationManager",
                "type": "address",
                "internalType": "contract IDelegationManager"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setVaultManager",
        "inputs": [
            {
                "name": "_vaultManager",
                "type": "address",
                "internalType": "contract IVaultManager"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "transferOwnership",
        "inputs": [
            {
                "name": "newOwner",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "vaultManager",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "contract IVaultManager"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "OwnershipHandoverCanceled",
        "inputs": [
            {
                "name": "pendingOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipHandoverRequested",
        "inputs": [
            {
                "name": "pendingOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "OwnershipTransferred",
        "inputs": [
            {
                "name": "oldOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "newOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "AlreadyInitialized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NewOwnerIsZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoHandoverRequest",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Unauthorized",
        "inputs": []
    }
]