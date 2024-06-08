import React from 'react';

const ReferalCode = (props) => {
    return (
        <div className="flex items-center gap-2 hover:opacity-75 hover:cursor-pointer">
            <svg
                className="h-6 w-6 text-light-black" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.75"
                stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <rect x="8" y="8" width="12" height="12" rx="2"></rect>
                <path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path>
            </svg>
            <p className="text-light-black font-[350] text-xl">{props.code}</p>
        </div>
    );
}

export default ReferalCode;