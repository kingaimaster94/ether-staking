import React from 'react';
import Card from './Card';

const CardPanel = (props) => {
  return (
    <>
      <div className={`flex flex-col lg:flex-row items-center gap-2 w-full ${props.extraStyle}`}>
        {props.content.map((pool, index) => {
          return (
            <Card pool={pool} key={index} />
          )
        })}
      </div >
    </>
  );
}

export default CardPanel;
