export const PresaleABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_weth",
        type: "address",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        internalType: "address",
        name: "_uniswapV2Router02",
        type: "address",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenDeposit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "softCap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "max",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "min",
            type: "uint256",
          },
          {
            internalType: "uint112",
            name: "start",
            type: "uint112",
          },
          {
            internalType: "uint112",
            name: "end",
            type: "uint112",
          },
          {
            internalType: "uint32",
            name: "liquidityBps",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "launchIncreaseBps",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "seederNum",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "seederPremiumBps",
            type: "uint32",
          },
        ],
        internalType: "struct Presale.PresaleOptions",
        name: "_options",
        type: "tuple",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "HardCapExceed",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidCapValue",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitializationParameters",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidLimitValue",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidLiquidityValue",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "currentState",
        type: "uint8",
      },
    ],
    name: "InvalidState",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidTimestampValue",
    type: "error",
  },
  {
    inputs: [],
    name: "LiquificationFailed",
    type: "error",
  },
  {
    inputs: [],
    name: "NotClaimable",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInPurchasePeriod",
    type: "error",
  },
  {
    inputs: [],
    name: "NotRefundable",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "PurchaseBelowMinimum",
    type: "error",
  },
  {
    inputs: [],
    name: "PurchaseLimitExceed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    inputs: [],
    name: "SoftCapNotReached",
    type: "error",
  },
  {
    inputs: [],
    name: "Unauthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Cancel",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Deposit",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Finalized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "contribution",
        type: "uint256",
      },
    ],
    name: "Purchase",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "Refund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "TokenClaim",
    type: "event",
  },
  {
    inputs: [],
    name: "approvals",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "cancel",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "claim",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "contributions",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "finalize",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "pool",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Router02",
        name: "uniswapV2Router02",
        type: "address",
      },
      {
        internalType: "address",
        name: "routerAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokensClaimable",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "tokensLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "weiRaised",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "weth",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "state",
        type: "uint8",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "tokenDeposit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "softCap",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "max",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "min",
            type: "uint256",
          },
          {
            internalType: "uint112",
            name: "start",
            type: "uint112",
          },
          {
            internalType: "uint112",
            name: "end",
            type: "uint112",
          },
          {
            internalType: "uint32",
            name: "liquidityBps",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "launchIncreaseBps",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "seederNum",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "seederPremiumBps",
            type: "uint32",
          },
        ],
        internalType: "struct Presale.PresaleOptions",
        name: "options",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "refund",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "contributor",
        type: "address",
      },
    ],
    name: "userTokens",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

export default PresaleABI;
