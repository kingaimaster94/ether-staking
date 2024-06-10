import { React, useContext } from 'react';
import { DepositContext } from '../../App';

const Card = (props) => {
    const deposits = useContext(DepositContext);

    if (deposits != undefined && deposits.data != undefined) {
        let vaultAddrArray = deposits?.data[0];     // valut address array
        let tokenAddrArray = deposits?.data[1];     // token address array
        let stakingAmountArray = deposits?.data[2];     // staking amount array
        let shareAmountArray = deposits?.data[3];     // share amount array

        for (let i = 0; i < tokenAddrArray.length; i++) {
            if (tokenAddrArray[i] == props.pool.tokenAddress) {
                props.pool.balance = decimalToEth(stakingAmountArray[i]);
                console.log("Found!!!");
                break;
            }
        }
    }

    return (
        <div className={"flex flex-col items-start " + props.pool.backColor + " rounded-md w-full h-36 py-8 px-8"}>
            <h2 className={"font-nunito " + props.pool.nameColor + " font-semibold text-3xl mb-4"}>{props.pool.balance}</h2>
            <div className="flex gap-1 items-center -ml-2">
                <img alt={props.pool.logoName} loading="lazy" width="152" height="153" decoding="async" data-nimg="1"
                    className="size-10 -mb-2"
                    src={props.pool.logoSrc}
                    styled="color: transparent"></img>
                <p className={props.pool.nameColor + " text-xl"} style={props.pool.viewStyle}>{props.pool.name}</p>
                <span className="group relative z-30">
                    <div className="absolute top-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                        <div className="top-full right-0 rounded bg-black px-4 py-2 text-sm text-white text-center whitespace-nowrap">
                            {props.pool.content}
                        </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                        stroke="currentColor" className={"w-6 h-6 " + props.pool.contentColor}>
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z">
                        </path>
                    </svg>
                </span>
            </div>
        </div>
    );
}

export default Card;