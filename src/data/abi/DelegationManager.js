export const abiDelegationManager = [
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
        "name": "eip712Domain",
        "inputs": [],
        "outputs": [
            {
                "name": "fields",
                "type": "bytes1",
                "internalType": "bytes1"
            },
            {
                "name": "name",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "version",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "chainId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "verifyingContract",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "salt",
                "type": "bytes32",
                "internalType": "bytes32"
            },
            {
                "name": "extensions",
                "type": "uint256[]",
                "internalType": "uint256[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "fetchQueuedWithdrawals",
        "inputs": [
            {
                "name": "staker",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "queuedWithdrawals",
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
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "finishWithdraw",
        "inputs": [
            {
                "name": "startedWithdrawals",
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
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "grantRoles",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "roles",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "hasAllRoles",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "roles",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "hasAnyRole",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "roles",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "initialize",
        "inputs": [
            {
                "name": "vaultManager",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "minWithdrawDelay",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "manager",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "isWithdrawPending",
        "inputs": [
            {
                "name": "withdrawal",
                "type": "tuple",
                "internalType": "struct Withdraw.QueuedWithdrawal",
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
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
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
        "name": "pause",
        "inputs": [
            {
                "name": "toPause",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "paused",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "proxiableUUID",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bytes32",
                "internalType": "bytes32"
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
        "name": "renounceRoles",
        "inputs": [
            {
                "name": "roles",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
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
        "name": "revokeRoles",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "roles",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "rolesOf",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "roles",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "startWithdraw",
        "inputs": [
            {
                "name": "withdrawalRequests",
                "type": "tuple[]",
                "internalType": "struct Withdraw.WithdrawRequest[]",
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
        ],
        "outputs": [
            {
                "name": "withdrawalRoots",
                "type": "bytes32[]",
                "internalType": "bytes32[]"
            },
            {
                "name": "withdrawConfigs",
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
            }
        ],
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
        "name": "updateWithdrawDelay",
        "inputs": [
            {
                "name": "delay",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "upgradeToAndCall",
        "inputs": [
            {
                "name": "newImplementation",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "data",
                "type": "bytes",
                "internalType": "bytes"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "withdrawalDelay",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "event",
        "name": "EIP712DomainChanged",
        "inputs": [],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "FinishedWithdrawal",
        "inputs": [
            {
                "name": "vault",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "staker",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "operator",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "withdrawer",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "shares",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "withdrawRoot",
                "type": "bytes32",
                "indexed": false,
                "internalType": "bytes32"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Initialized",
        "inputs": [
            {
                "name": "version",
                "type": "uint64",
                "indexed": false,
                "internalType": "uint64"
            }
        ],
        "anonymous": false
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
        "type": "event",
        "name": "Paused",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "RolesUpdated",
        "inputs": [
            {
                "name": "user",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "roles",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "StartedWithdrawal",
        "inputs": [
            {
                "name": "vault",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "staker",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "operator",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "withdrawer",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            },
            {
                "name": "shares",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Unpaused",
        "inputs": [
            {
                "name": "account",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "Upgraded",
        "inputs": [
            {
                "name": "implementation",
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
        "name": "ArrayLengthsNotEqual",
        "inputs": []
    },
    {
        "type": "error",
        "name": "EnforcedPause",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ExpectedPause",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidInitialization",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidInput",
        "inputs": []
    },
    {
        "type": "error",
        "name": "InvalidWithdrawalDelay",
        "inputs": []
    },
    {
        "type": "error",
        "name": "MinWithdrawDelayNotPassed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NewOwnerIsZeroAddress",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoElementsInArray",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NoHandoverRequest",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotInitializing",
        "inputs": []
    },
    {
        "type": "error",
        "name": "NotStaker",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Reentrancy",
        "inputs": []
    },
    {
        "type": "error",
        "name": "Unauthorized",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UnauthorizedCallContext",
        "inputs": []
    },
    {
        "type": "error",
        "name": "UpgradeFailed",
        "inputs": []
    },
    {
        "type": "error",
        "name": "WithdrawAlreadyCompleted",
        "inputs": []
    },
    {
        "type": "error",
        "name": "WithdrawerNotCaller",
        "inputs": []
    },
    {
        "type": "error",
        "name": "ZeroShares",
        "inputs": []
    }
]