import React from 'react';
import Referal from '../Referal/Referal';
import QuoteTokens from '../Token/QuoteTokens';
import Activity from '../Activity/Activity';
import CardPanel from '../Title/CardPanel';

import { refCode } from './referal';
import { userinfo } from './userinfo';

const Portfolio = () => {
    return (
        <>
            <div className="flex flex-col items-center mt-20 w-full gap-12">
                <h1 className="text-light-black text-5xl lg:text-6xl font-bold font-gilroy pb-1"> Portfolio </h1>
                <CardPanel content={userinfo} extraStyle={"md:w-9/12 lg:w-9/12"} />
                <Referal referral={{ refCode }} />
                <QuoteTokens />
            </div>
            <Activity />
        </>

    );
}

export default Portfolio;