import { React, useContext, useEffect, useState } from "react";
import Referal from '../components/Referal/Referal';
import QuoteTokens from '../components/Token/QuoteTokens';
import Activity from '../components/Activity/Activity';
import CardPanel from '../components/Title/CardPanel';

import { refCode } from '../data/referal';
import { userinfo } from '../data/userinfo';
import { DepositContext } from "../App";
import { decimalToEth } from "../utils/utils";

const Portfolio = () => {
    const deposits = useContext(DepositContext);
    const [totalXP, setTotalXP] = useState(0);
    const [panelData, setPanelData] = useState(userinfo);

    useEffect(() => {
        console.log("Portfolio.jsx: deposits changed!");
        console.log(deposits);
        // caculate user restaking experience
        if (deposits != undefined && deposits.length > 3) {
            let tokenAddrArray = deposits[1];     // token address array
            let stakingAmountArray = deposits[2];     // staking amount array
            let total = 0;

            for (let i = 0; i < tokenAddrArray.length; i++) {
                total += decimalToEth(stakingAmountArray[i]);
            }
            console.log("total XP: " + total);
            setTotalXP(total);
        }
    }, [deposits]);

    useEffect(() => {
        let tmp = userinfo;
        tmp[0].balance = totalXP;
        setPanelData(tmp);
        console.log("panel data updated!");
    }, [totalXP]);

    return (
        <>
            <div className="flex flex-col items-center mt-20 w-full gap-12">
                <h1 className="text-light-black text-5xl lg:text-6xl font-bold font-gilroy pb-1"> Portfolio </h1>

                <CardPanel content={panelData} extraStyle={"md:w-9/12 lg:w-9/12"} />
                <Referal referral={{ refCode }} />
                <QuoteTokens />
            </div>
            <Activity />
        </>

    );
}

export default Portfolio;