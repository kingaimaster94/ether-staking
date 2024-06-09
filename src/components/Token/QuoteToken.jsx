import React from 'react';

const QuoteToken = (props) => {
    return (
        <div className={"flex flex-col items-start " + props.prop.bgColor + " rounded-md w-full p-5"}>
            <div className="flex gap-1 items-center -ml-2 mb-6">
                <img alt={props.prop.logo} loading="lazy" width="118"
                    height="118" decoding="async" data-nimg="1" className="size-12 -mb-2"
                    srcSet="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbtc-restake.a506c637.png&amp;w=128&amp;q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbtc-restake.a506c637.png&amp;w=256&amp;q=75 2x"
                    src={props.prop.logoSrc1}
                    style={{
                        color: 'transparent'
                    }}></img>
                <p className="text-white text-2xl" style={{
                    textShadow: 'rgba(0, 0, 0, 0.25) 0px 4px 4px',
                }}>{props.prop.name}</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 rounded-md w-full py-4 px-4 mb-3 z-10"
                style={{
                    background: 'linear-gradient(111deg, rgba(255, 255, 255, 0.4) -8.95%, rgba(255, 255, 255, 0.01) 114%)',
                    backdropFilter: 'blur(11px)',
                    border: '0.25px solid rgba(255, 255, 255, 0.5)',
                }}
            >
                <div className="flex gap-1 items-center -ml-2">
                    <img alt="restaked-icon" loading="lazy" width="25"
                        height="25" decoding="async" data-nimg="1" className="size-6"
                        src="/_next/static/media/restaked-icon.b762b93d.svg" style={{
                            color: 'transparent'
                        }}></img>
                    <p className="text-white text-base font-nunito font-semibold">RESTAKED</p><span
                        className="group relative z-30">
                        <div
                            className="absolute top-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                            <div
                                className="top-full right-0 rounded bg-black px-4 py-2 text-sm text-white text-center whitespace-nowrap">
                                Total {props.prop.name} you restaked
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z">
                            </path>
                        </svg>
                    </span>
                </div>
                <h2 className=" text-white font-nunito font-bold tracking-wide text-lg">{props.prop.balance1}</h2>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 backdrop-blur-md rounded-md w-full py-4 px-4"
                style={{
                    background: 'linear-gradient(111deg, rgba(255, 255, 255, 0.4) -8.95%, rgba(255, 255, 255, 0.01) 114%)',
                    backdropFilter: 'blur(11px)',
                    border: '0.25px solid rgba(255, 255, 255, 0.5)',
                }}
            >
                <div className="flex gap-1 items-center -ml-2">
                    <img alt="restaked-icon" loading="lazy" width="25"
                        height="25" decoding="async" data-nimg="1" className="size-6"
                        src="/_next/static/media/referred-icon.363463c5.svg" style={{
                            color: 'transparent'
                        }}></img>
                    <p className="text-white text-base font-nunito font-semibold">REFERRED</p><span
                        className="group relative z-30">
                        <div
                            className="absolute top-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
                            <div
                                className="top-full right-0 rounded bg-black px-4 py-2 text-sm text-white text-center whitespace-nowrap">
                                Total {props.prop.name} your referrals restaked
                            </div>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" className="w-5 h-5 text-gray-100">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z">
                            </path>
                        </svg>
                    </span>
                </div>
                <h2 className=" text-white font-nunito font-bold tracking-wide text-lg">{props.prop.balance2}</h2>
            </div>
        </div >
    );
}

export default QuoteToken;