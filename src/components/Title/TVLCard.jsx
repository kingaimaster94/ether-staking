import React from 'react';

const TVLCard = (props) => {
  return (
    <>
      <div className="fixed bottom-2 right-2 bg-white rounded-md shadow-2xl p-4 text-light-black text-xl tracking-wide font-semibold !z-50">
        TVL: ${props.tvl}
      </div>
    </>
  );
}

export default TVLCard;
