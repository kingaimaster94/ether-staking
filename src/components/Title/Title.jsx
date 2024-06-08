import React from 'react';
import XPEarn from './XPEarn';

const Title = (props) => {
  let message;
  if (props.prop.TVL != '') {
    message = <div className="fixed bottom-2 right-2 bg-white rounded-md shadow-2xl p-4 text-light-black text-xl tracking-wide font-semibold !z-50">
      TVL: $
      {props.prop.TVL}
    </div>
  } else {
    message = <div></div>;
  }
  return (
    <>
      <h1 className="text-light-black text-5xl lg:text-6xl font-bold font-gilroy pb-1">{props.prop.title}</h1>
      {message}
      <div className="flex flex-col lg:flex-row items-center gap-2 w-full md:w-9/12 lg:w-full">
        {props.prop.contents.map((pool, index) => {
          return (
            <XPEarn pool={pool} key={index} />
          )
        })}
      </div>
    </>
  );
}

export default Title;
