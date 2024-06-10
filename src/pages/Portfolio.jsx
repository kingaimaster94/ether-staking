import { React, useContext } from "react";
import Referal from '../components/Referal/Referal';
import QuoteTokens from '../components/Token/QuoteTokens';
import Activity from '../components/Activity/Activity';
import CardPanel from '../components/Title/CardPanel';

import { refCode } from '../data/referal';
import { userinfo } from '../data/userinfo';

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