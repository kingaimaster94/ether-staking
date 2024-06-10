export const coins = [
    {
        network: 'Ethereum',
        restakingType: 'STABLECOINS',
        name: "Ethena USDe",
        symbol: "USDe",
        badge: "20X ETHENA SATS",
        tooltip: 'USDe stakers earn 1.5x Mad XP and 20x Ethena Sats up to 100M of USDe.',
        desc: `Ethena enables the creation and redemption of a delta-neutral synthetic dollar, USDe, crypto's first fully-backed, onchain, scalable, and censorship-resistant form of money. The mechanism backing USDe enables the first "Internet Bond" offering a crypto-native, value-accruing, dollar-denominated instrument, derived from staked asset returns (to the extent utilized in backing) and the funding and basis spread available in perpetual and futures markets. Please note this asset is on the Ethereum Mainnet network.`,
        tokenAddress: '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3',
    },
    {
        network: 'Ethereum',
        restakingType: 'STABLECOINS',
        name: "Staked Frax",
        symbol: "sFRAX",
        badge: "10M FRAX POINTS",
        tooltip: 'sFRAX stakers earn 1.5x Mad XP, up to 10,000,000 FXTL points, and native staking rewards.',
        desc: `sFRAX is an ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. The sFRAX token represents pro rata deposits within the vault and is always withdrawable for FRAX stablecoins at the pro rata rate at all times. sFRAX APY attempts to roughly track the interest on reserve balances (IORB) rate of the United States Federal Reserve using the IORB oracle. This benchmark rate is generally accepted as the “risk free rate” of the US Dollar. The FRAX staking vault attempts, but does not guarantee in any way, to target this rate.`,
        tokenAddress: '0xA663B02CF0a4b149d2aD41910CB81e23e1c41c32',
    },
    {
        network: 'Ethereum',
        restakingType: 'STABLECOINS',
        name: "Ethena Staked USDe",
        badge: "5X ETHENA SATS",
        symbol: "sUSDe",
        tooltip: 'sUSDe stakers earn 1.5x Mad XP and 5x Ethena Sats up to 100M of sUSDe.',
        desc: `Ethena sUSDe is a staked version of USDe where a user transfers USDe into the contract and receives sUSDE (staked USDe), another ERC20 token that represents a fractional yield in the USDe in the contract. Over time, a portion of protocol revenue accumulates in the staking contract as additional USDe is transferred in. When unstaking, staked USDe is burned in exchange for a proportionate USDe amount. Users will always receive the principal amount of USDe staked as well as their proportionate share of the deposited protocol yield upon unstaking. Please note this asset is on the Ethereum Mainnet network.`,
        tokenAddress: '0x9D39A5DE30e57443BfF2A8307A4256c8797A3497',
    },
    {
        network: 'Ethereum',
        restakingType: 'STABLECOINS',
        name: "USD Coin",
        symbol: "USDC",
        badge: "",
        tooltip: 'USDC stakers earn 1.5x Mad XP.',
        desc: `USDC is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every unit of USDC is backed by a dollar or an equivalent asset held in reserve. It's built on various blockchain platforms including Ethereum and others, making it interoperable across different ecosystems. USDC is designed to combine the stability and reliability of a fiat currency like the US dollar with the efficiency and security of blockchain technology. It is used for a wide range of purposes, including trading, payments, and decentralized finance (DeFi) applications, providing a stable medium of exchange in the often volatile cryptocurrency markets. Please note this asset is on the Ethereum Mainnet network.`,
        tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    },
    {
        network: 'Ethereum',
        restakingType: 'STABLECOINS',
        name: "Tether USD",
        symbol: "USDT",
        badge: "",
        tooltip: 'USDT stakers earn 1.5x Mad XP.',
        desc: `USDT is a cryptocurrency stablecoin pegged to the US dollar, designed to combine the unrestricted nature of cryptocurrencies with the stable value of the dollar. It operates across multiple blockchains, including Ethereum and others, facilitating stable digital transactions. As a bridge between traditional fiat currencies and digital currencies, USDT provides a solution for users seeking to avoid the volatility commonly associated with cryptocurrencies. Each USDT unit is backed by a dollar held in reserve, aiming to maintain a 1:1 value ratio with the US dollar. Please note this asset is on the Ethereum Mainnet network.`,
        tokenAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    },
    {
        network: 'Ethereum',
        restakingType: 'STABLECOINS',
        name: "Savings DAI",
        symbol: "sDAI",
        badge: "",
        tooltip: 'sDAI stakers earn 1.5x Mad XP and native staking rewards.',
        desc: `Savings Dai (sDAI) is an ERC-4626 representation/wrapper of DAI in the Dai Savings Rate (DSR) module. sDAI allows users to deposit DAI to receive the yield generated by the Maker protocol while still being able to transfer, stake, lend and use it in any way you want. Please note this asset is on the Ethereum Mainnet network.`,
        tokenAddress: '0x83F20F44975D03b1b09e64809B757c47f942BEeA',
    },
    {
        network: 'Ethereum',
        restakingType: 'LIQUID STAKING',
        name: "Swell Ether",
        symbol: "swETH",
        badge: "",
        tooltip: 'swETH stakers earn 1.5x Mad XP, 3x Swell Pearls, and native staking rewards.',
        desc: `Swell swETH is a Liquid Staking Token (LST) representing the user's staked Ethereum plus accruing rewards. By staking Ethereum with Swell, users receive swETH, which can be used within the DeFi ecosystem to generate additional yield. Users can deposit their swETH into Swell’s vaults, earning additional yield through liquidity mining, or provide liquidity in external DeFi platforms, engaging as liquidity providers to gain from trading fees and liquidity mining rewards. Furthermore, swETH can be supplied to lending and borrowing protocols, enabling users to generate rewards on the lent-out assets or use swETH as collateral for borrowing other assets. Please note this asset is on the Ethereum Mainnet network.`,
        tokenAddress: '0xf951E335afb289353dc249e82926178EaC7DEd78',
    },
    {
        network: 'Ethereum',
        restakingType: 'LIQUID STAKING',
        name: "Stake FRAX Ether",
        symbol: "sfrxETH",
        badge: "",
        tooltip: 'sfrxETH stakers earn 1.5x Mad XP, up to 10,000,000 FXTL points, and native staking rewards.',
        desc: `sfrxETH is a Liquid Staking Token (LST) ERC-4626 vault designed to accrue the staking yield of the Frax ETH validators. At any time, frxETH can be exchanged for sfrxETH by depositing it into the sfrxETH vault, which allows users to earn staking yield on their frxETH. Over time, as validators accrue staking yield, an equivalent amount of frxETH is minted and added to the vault, allowing users to redeem their sfrxETH for a greater amount of frxETH than they deposited. Please note this asset is on the Ethereum Mainnet network.`,
        tokenAddress: '0xac3E018457B222d93114458476f3E3416Abbe38F',
    },
    {
        network: 'Ethereum',
        restakingType: 'LIQUID STAKING',
        name: "Lido Wrapped stETH",
        symbol: "wstETH",
        badge: "",
        tooltip: 'wstETH stakers earn 1.5x Mad XP and native staking rewards.',
        desc: `Lido stETH is a Liquid Staking Token (LST) that represents staked ether in Lido, combining the value of the initial deposit + staking rewards. Lido's wstETH is a wrapped version of stETH which is optimized for DeFi. Please note that this asset is on the Ethereum Mainnet network.`,
        tokenAddress: '0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0',
    },
    {
        network: 'Ethereum',
        restakingType: 'LIQUID RESTAKING',
        name: "Restake Swell Ether",
        symbol: "rswETH",
        badge: "",
        tooltip: 'rswETH stakers earn 1x Mad XP, 3x Swell Pearls, 1x Eigenlayer points, and native staking rewards.',
        desc: `rswETH is a Liquid Restaking Token (LRT) that provides liquidity for users who are wanting to "restake" their ETH into restaking protocols such as EigenLayer without having their restaked ETH locked. It is a repricing token that represents a user's yield-bearing ETH that is being used by validators that attest to transactions on the Ethereum blockchain. Please note this asset is on the Ethereum Mainnet network.`,
        tokenAddress: '0xFAe103DC9cf190eD75350761e95403b7b8aFa6c0',
    },
    {
        network: 'Ethereum',
        restakingType: 'PENDLE',
        name: "Pendle rswETH 6/27",
        symbol: "PT-rswETH",
        badge: "",
        tooltip: 'Pendle rswETH stakers earn 1x Mad XP on top of the Pendle fixed yield.',
        desc: `Pendle’s Swell rswETH is the Principal Token for the rswETH pool on Pendle that expires on 6/27. Please note this asset is on the Ethereum Mainnet network.`,
        tokenAddress: '0x5cb12D56F5346a016DBBA8CA90635d82e6D1bcEa',
    },
    {
        network: 'Ethereum',
        restakingType: 'OTHER',
        name: "Wrapped Bitcoin",
        symbol: "wBTC",
        badge: "",
        tooltip: 'Wrapped Bitcoin stakers earn 1.5x Mad XP.',
        desc: `Wrapped Bitcoin is an ERC-20 cryptocurrency token that runs on the Ethereum blockchain and is intended to be backed 1:1 by Bitcoin. To attempt to keep the price of wBTC and BTC stable, this means that for every wBTC token issued, there should be an equivalent amount of Bitcoin held in reserve by a custodian.`,
        tokenAddress: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    },
    {
        network: 'Arbitrum',
        restakingType: 'STABLECOINS',
        name: "USD Coin",
        symbol: "USDC",
        badge: "",
        tooltip: 'USDC stakers earn 1.5x Mad XP.',
        desc: `USDC is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every unit of USDC is backed by a dollar or an equivalent asset held in reserve. It's built on various blockchain platforms including Ethereum and others, making it interoperable across different ecosystems. USDC is designed to combine the stability and reliability of a fiat currency like the US dollar with the efficiency and security of blockchain technology. It is used for a wide range of purposes, including trading, payments, and decentralized finance (DeFi) applications, providing a stable medium of exchange in the often volatile cryptocurrency markets. Please note that this asset is on the Arbitrum network.`,
        tokenAddress: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831',
    },
    {
        network: 'BSC Testnet',
        restakingType: 'OTHER',
        name: "Mad - Wrapped eETH",
        symbol: "MweETH",
        badge: "",
        tooltip: 'MweETH stakers earn 1.5x Mad XP.',
        desc: `WETH is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every unit of MweETH is backed by a dollar or an equivalent asset held in reserve. It's built on various blockchain platforms including Ethereum and others, making it interoperable across different ecosystems. MweETH is designed to combine the stability and reliability of a fiat currency like the US dollar with the efficiency and security of blockchain technology. It is used for a wide range of purposes, including trading, payments, and decentralized finance (DeFi) applications, providing a stable medium of exchange in the often volatile cryptocurrency markets. Please note that this asset is on the BSC Testnet network.`,
        tokenAddress: `0xd66c6B4F0be8CE5b39D52E0Fd1344c389929B378`,
        vaultAddress: `0xFef3352B189515Aeb68aeE92E05780701636a37d`,
    },
    {
        network: 'BSC Testnet',
        restakingType: 'OTHER',
        name: "Mad - Wrapped CHK",
        symbol: "MweCHK",
        badge: "",
        tooltip: 'MweCHK stakers earn 1.5x Mad XP.',
        desc: `MweCHK is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every unit of MweCHK is backed by a dollar or an equivalent asset held in reserve. It's built on various blockchain platforms including Ethereum and others, making it interoperable across different ecosystems. USDC is designed to combine the stability and reliability of a fiat currency like the US dollar with the efficiency and security of blockchain technology. It is used for a wide range of purposes, including trading, payments, and decentralized finance (DeFi) applications, providing a stable medium of exchange in the often volatile cryptocurrency markets. Please note that this asset is on the BSC Testnet network.`,
        tokenAddress: `0x9Cc479a479598E7e7f6Fe3C38f35C160006Aa021`,
        vaultAddress: `0x2D45a64571607E4293069f2828Fed8ffeE569A12`,
    },
    {
        network: 'BSC Testnet',
        assetType: 'OTHER',
        name: "Mad - Wrapped Prince",
        symbol: "MwePRC",
        badge: "",
        tooltip: 'MweCHK stakers earn 1.5x Mad XP.',
        desc: `MweCHK is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every unit of MweCHK is backed by a dollar or an equivalent asset held in reserve. It's built on various blockchain platforms including Ethereum and others, making it interoperable across different ecosystems. USDC is designed to combine the stability and reliability of a fiat currency like the US dollar with the efficiency and security of blockchain technology. It is used for a wide range of purposes, including trading, payments, and decentralized finance (DeFi) applications, providing a stable medium of exchange in the often volatile cryptocurrency markets. Please note that this asset is on the BSC Testnet network.`,
        tokenAddress: `0x710052dec221Ec0f6bc1e5b95852801118E9Cfab`,
        vaultAddress: `0x1187b898EAD1923BafbbfB14990c152E9Ae8c354`,
    },
    {
        network: 'BSC Testnet',
        assetType: 'STABLECOIN',
        name: "Mad - Wrapped Cake",
        symbol: "MweCake",
        badge: "",
        tooltip: 'MweCHK stakers earn 1.5x Mad XP.',
        desc: `MweCHK is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every unit of MweCHK is backed by a dollar or an equivalent asset held in reserve. It's built on various blockchain platforms including Ethereum and others, making it interoperable across different ecosystems. USDC is designed to combine the stability and reliability of a fiat currency like the US dollar with the efficiency and security of blockchain technology. It is used for a wide range of purposes, including trading, payments, and decentralized finance (DeFi) applications, providing a stable medium of exchange in the often volatile cryptocurrency markets. Please note that this asset is on the BSC Testnet network.`,
        tokenAddress: `0xFa60D973F7642B748046464e165A65B7323b0DEE`,
        vaultAddress: `0xf7793fCEc6a9A19BEaeed8c97Dff67c91D791DaD`,
    },
    {
        network: 'BSC Testnet',
        assetType: 'OTHER',
        name: "Mad - Wrapped PIE",
        symbol: "MweBTC",
        badge: "",
        tooltip: 'MweCHK stakers earn 1.5x Mad XP.',
        desc: `MweCHK is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every unit of MweCHK is backed by a dollar or an equivalent asset held in reserve. It's built on various blockchain platforms including Ethereum and others, making it interoperable across different ecosystems. USDC is designed to combine the stability and reliability of a fiat currency like the US dollar with the efficiency and security of blockchain technology. It is used for a wide range of purposes, including trading, payments, and decentralized finance (DeFi) applications, providing a stable medium of exchange in the often volatile cryptocurrency markets. Please note that this asset is on the BSC Testnet network.`,
        tokenAddress: `0x4248361E082B6e832F68dDC9dE34fE16DE77A271`,
        vaultAddress: `0xBED2B62E9Ed80162Bd283d2Eb7B12c2E3fae81cB`,
    },
    {
        network: 'BSC Testnet',
        assetType: 'LIQUID STAKING',
        name: "Mad - Wrapped lsCake",
        symbol: "MleCake",
        badge: "",
        tooltip: 'MweCHK stakers earn 1.5x Mad XP.',
        desc: `MweCHK is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every unit of MweCHK is backed by a dollar or an equivalent asset held in reserve. It's built on various blockchain platforms including Ethereum and others, making it interoperable across different ecosystems. USDC is designed to combine the stability and reliability of a fiat currency like the US dollar with the efficiency and security of blockchain technology. It is used for a wide range of purposes, including trading, payments, and decentralized finance (DeFi) applications, providing a stable medium of exchange in the often volatile cryptocurrency markets. Please note that this asset is on the BSC Testnet network.`,
        tokenAddress: `0x056C2c78E18fdbBc7539f51C881598c18ff0b4bc`,
        vaultAddress: `0x01BFd097d0dAd47c527FE5c1779af749b922638e`,
    },
    {
        network: 'BSC Testnet',
        assetType: 'LIQUID RESTAKING',
        name: "Mad - Wrapped lseCake",
        symbol: "MlseCake",
        badge: "",
        tooltip: 'MweCHK stakers earn 1.5x Mad XP.',
        desc: `MweCHK is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every unit of MweCHK is backed by a dollar or an equivalent asset held in reserve. It's built on various blockchain platforms including Ethereum and others, making it interoperable across different ecosystems. USDC is designed to combine the stability and reliability of a fiat currency like the US dollar with the efficiency and security of blockchain technology. It is used for a wide range of purposes, including trading, payments, and decentralized finance (DeFi) applications, providing a stable medium of exchange in the often volatile cryptocurrency markets. Please note that this asset is on the BSC Testnet network.`,
        tokenAddress: `0xd2da021c122e0200cB4536582AB4e78Bbc2b7516`,
        vaultAddress: `0x40D97E6Df2aE4a18Dd2fddf433CB357303760231`,
    },
    {
        network: 'BSC Testnet',
        assetType: 'OTHER',
        name: "Mad - Wrapped BNB",
        symbol: "mwBNB",
        badge: "",
        tooltip: 'MweCHK stakers earn 1.5x Mad XP.',
        desc: `MweCHK is a stablecoin that is pegged to the US dollar on a 1:1 basis. Every unit of MweCHK is backed by a dollar or an equivalent asset held in reserve. It's built on various blockchain platforms including Ethereum and others, making it interoperable across different ecosystems. USDC is designed to combine the stability and reliability of a fiat currency like the US dollar with the efficiency and security of blockchain technology. It is used for a wide range of purposes, including trading, payments, and decentralized finance (DeFi) applications, providing a stable medium of exchange in the often volatile cryptocurrency markets. Please note that this asset is on the BSC Testnet network.`,
        tokenAddress: `0x47Fb20C3df2f340280B59a840516D944585b6B33`,
        vaultAddress: `0x362edb9A435dF0E2cb3034758B4580344bdE847f`,
    },
];
