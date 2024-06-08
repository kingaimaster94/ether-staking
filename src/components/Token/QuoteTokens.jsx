import React from 'react';
import QuoteToken from './QuoteToken';
import { tokenList } from './QuoteToenList';

const QuoteTokens = (props) => {
    console.log(tokenList);
    return (
        <div className="flex flex-col lg:flex-row items-center gap-2 w-full md:w-9/12 lg:w-full">
            {tokenList.map((pool, index) => {
                return (<QuoteToken prop={pool} key={index} />)
            })}

        </div>
    );
}

export default QuoteTokens;