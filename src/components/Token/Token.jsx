import React from 'react';
import TokenBadge from './TokenBadge';

const Token = (props) => {
    let message, string;
    if (props.prop3.coin.badge != '') {
        message = <TokenBadge prop4={props.prop3.coin.badge} />
    } else {
        message = <div></div>;
    }
    string = "USDe stakers earn 1.5x Karak XP and 20x Ethena Sats up to 100M of USDe.";
    return (
        <div className="bg-white shadow-lg px-6 py-8 rounded-md hover:brightness-95 cursor-pointer hover:z-30">
            <span className="group relative z-30">
                {message}
                <div className="flex flex-row items-center gap-3 mb-6">
                    <img alt={props.prop3.coin.name} loading="lazy" width="32"
                        height="32" decoding="async" data-nimg="1" className="rounded-full"
                        src="" styled="color: transparent;">
                    </img>
                    <h2
                        className="font-nunito text-light-black font-semibold text-xl md:text-[1.2rem] tracking-wider whitespace-nowrap overflow-hidden text-ellipsis">
                        {props.prop3.coin.name}
                    </h2>
                    <div
                        className="bg-secondary-orange rounded-md py-2 px-4 md:py-1 md:px-2 text-primary-orange font-nunito text-base md:text-sm font-semibold ml-auto">
                        {props.prop3.coin.symbol}
                    </div>
                </div>
                <div
                    className="flex flex-row items-center justify-between bg-white shadow-md rounded-md w-full py-4 px-4">
                    <p className="font-nunito text-light-gray text-base tracking-wider font-semibold">RESTAKED</p>
                    <h2 className="font-nunito text-light-black font-semibold text-xl md:text-lg">{props.prop3.coin.balance}</h2>
                </div>

                <div className="absolute top-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block h-auto" styled="border-color: solid rgba(0, 255, 0, 0.5);">
                    <div className="top-full right-0 rounded bg-white shadow-md rounded-md w-full py-4 px-4 text-sm text-light-black text-center whitespace-nowrap">
                        {string}
                    </div>
                </div>
            </span>


        </div>
    );
}

export default Token;