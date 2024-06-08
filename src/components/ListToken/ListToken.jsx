import React from 'react';
import ListBadge from './ListBadge';
import Token from '../Token/Token';

const ListToken = (props) => {
    let message;
    if (props.prop1.badge != '') {
        message = <ListBadge prop2={props.prop1.badge} />
    } else {
        message = <div></div>;
    }
    return (
        <div className="mb-12">
            <div className="flex gap-2 items-center">
                <p className="font-nunito text-light-black text-xl font-semibold tracking-wider mb-4">
                    {props.prop1.name}
                </p>
                {message}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {props.prop1.coins.map((coin, index) => {
                    return (
                        <Token prop3={{ coin: coin }} key={index} />
                    )
                })}
            </div>
        </div>
    );
}

export default ListToken;