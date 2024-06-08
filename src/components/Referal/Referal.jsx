import React from 'react';
import ReferalCode from './ReferalCode';

const Referal = (props) => {
    return (
        <div className="w-full lg:w-9/12 bg-white shadow-md rounded-md p-8">
            <h2 className="text-light-black text-[1.375rem] mb-8">Referral Codes</h2>
            <div className="grid gap-4 grid-cols-2 custom-sm:grid-cols-3 md:grid-cols-5 justify-items-start m-auto text-2xl text-light-black font-nunito font-normal">
                {props.referral.refCode.map((pool, index) => {
                    return (<ReferalCode code={pool} key={index} />)
                })}
            </div>
            <div styled="position: fixed; z-index: 9999; inset: 16px; pointer-events: none;"></div>
        </div>
    );
}

export default Referal;