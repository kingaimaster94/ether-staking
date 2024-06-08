import React from 'react';

const TokenBadge = (props) => {
    return (
        <div className="relative -top-8 -left-6">
            <div
                className="absolute top-0 left-0 bg-gradient-to-r from-orange-600 to-orange-400 text-white text-xs rounded-tl-md rounded-br-md px-2 py-1 font-semibold">
                {props.prop4}
            </div>
        </div>
    );
}

export default TokenBadge;