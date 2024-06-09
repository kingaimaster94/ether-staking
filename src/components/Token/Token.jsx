import React from 'react';
import TokenBadge from './TokenBadge';
import { useNavigate } from 'react-router-dom';

const Token = (props) => {
    let message;
    if (props.prop3.coin.badge != '') {
        message = <TokenBadge prop4={props.prop3.coin.badge} />
    } else {
        message = <></>;
    }

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/pool/${props.prop3.coin.network}/${props.prop3.coin.symbol}`);
    };

    return (
        <div className="bg-white group shadow-lg px-6 py-8 rounded-md hover:brightness-95 cursor-pointer hover:z-30" onClick={handleClick}>
            <span className="relative z-30">
                {message}
                <div className="flex flex-row items-center gap-3 mb-6">
                    <img alt={props.prop3.coin.name} loading="lazy" width="32"
                        height="32" decoding="async" data-nimg="1" className="rounded-full"
                        src="" style={{ color: "transparent" }}>
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
            </span>
            <div className="absolute top-[calc(150%+0.5rem)] left-[0%] w-[20rem] lg:w-[16rem] mt-2 bg-white text-gray-800 border border-gray-300 rounded-lg shadow-lg py-2 py-2-translate-x-[50%] hidden group-hover:block h-auto break-words z-40">
                <p className="px-4 py-2 text-lg z-40">
                    {props.prop3.coin.tooltip}
                </p>
            </div>
        </div>
    );
}

export default Token;