import React from 'react';
import Title from '../Title/Title'
import { userinfo } from './userinfo';
import Referal from '../Referal/Referal';
import { refCode } from './referal';
import QuoteTokens from '../Token/QuoteTokens';
import Activity from '../Activity/Activity';

const Portfolio = () => {
    return (
        <div>
            <div className="flex flex-col items-center mt-20 w-full gap-12">
                <Title prop={{ title: 'Portfolio', TVL: '', contents: userinfo }} />
                <Referal referral={{ refCode }} />
                <QuoteTokens />
            </div>
            <Activity />
        </div>

    );
}

export default Portfolio;