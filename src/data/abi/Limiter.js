export const abiLimiter = [
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
        "name": "computeGlobalDepositsInUsd",
        "inputs": [
            {
                "name": "vaults",
                "type": "address[]",
                "internalType": "contract IVault[]"
            }
        ],
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
        "type": "function",
        "name": "computeUserMaximumDeposit",
        "inputs": [
            {
                "name": "vaults",
                "type": "address[]",
                "internalType": "contract IVault[]"
            },
            {
                "name": "vaultToDeposit",
                "type": "address",
                "internalType": "contract IVault"
            },
            {
                "name": "user",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "walletBalance",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
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
        "type": "function",
        "name": "denormalizeVaultAssetValue",
        "inputs": [
            {
                "name": "vault",
                "type": "address",
                "internalType": "contract IVault"
            },
            {
                "name": "value",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
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
        "type": "function",
        "name": "globalUsdLimit",
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
        "type": "function",
        "name": "isLimitBreached",
        "inputs": [
            {
                "name": "vaults",
                "type": "address[]",
                "internalType": "contract IVault[]"
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
        "name": "normalizeVaultAssetValue",
        "inputs": [
            {
                "name": "vault",
                "type": "address",
                "internalType": "contract IVault"
            },
            {
                "name": "value",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
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
        "name": "remainingGlobalUsdLimit",
        "inputs": [
            {
                "name": "vaults",
                "type": "address[]",
                "internalType": "contract IVault[]"
            }
        ],
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
        "name": "setGlobalUsdLimit",
        "inputs": [
            {
                "name": "_limit",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setUsdPerBtc",
        "inputs": [
            {
                "name": "_usdPerBtc",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "setUsdPerEth",
        "inputs": [
            {
                "name": "_usdPerEth",
                "type": "uint256",
                "internalType": "uint256"
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
        "name": "usdPerBtc",
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
        "type": "function",
        "name": "usdPerEth",
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
    },
    {
        "type": "error",
        "name": "UnsupportedAsset",
        "inputs": []
    }
]