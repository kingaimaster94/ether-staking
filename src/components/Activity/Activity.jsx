import React, { useState } from 'react';

const Activity = (props) => {
    const [message, setMessage] = useState('You have no activity');
    const handleClick = (event, data) => {
        const id = event.target.id;

        document.querySelectorAll("div.group > button").forEach((item, key) => {
            item.classList.remove("active");
        });

        if (id === 'All') {
            setMessage('You have no activity');
            document.getElementById("All").classList.add("active");
        }
        else if (id === 'Deposit') {
            setMessage('You have no deposit');
            document.getElementById("Deposit").classList.add("active");
        }
        else if (id === 'Withdrawals') {
            setMessage('You have no withdrawals');
            document.getElementById("Withdrawals").classList.add("active");
        }
    };

    return (
        <div className="flex flex-col items-center mt-20 w-full gap-6 bg-white shadow-md rounded-md p-8">
            <h2 className="text-light-black text-2xl font-nunito pb-1 mr-auto">ACTIVITY</h2>
            <div className="group flex flex-col custom-sm:flex-row gap-1 items-start custom-sm:items-center mr-auto">
                <button id='All'
                    className="active text-white text-base px-6 py-1 rounded-full hover:opacity-75 focus:hover:opacity-100"
                    onClick={(event) => handleClick(event, 'Additional Data')}>
                    All
                </button>
                <button id='Deposit'
                    className="text-primary-gray border border-gray-150 text-base px-6 py-1 rounded-full hover:opacity-75 focus:hover:opacity-100"
                    onClick={(event) => handleClick(event, 'Additional Data')}>
                    Deposits
                </button>
                <button id='Withdrawals'
                    className="text-primary-gray border border-gray-150 text-base px-6 py-1 rounded-full hover:opacity-75 focus:hover:opacity-100"
                    onClick={(event) => handleClick(event, 'Additional Data')}>
                    Withdrawals
                </button>
            </div>
            <div className="w-full !overflow-x-auto">
                <table className="relative min-w-full text-left text-black table-fixed">
                    <thead className="border-b border-t border-black/10">
                        <tr>
                            <th scope="col" className="w-1/4 px-6 py-4 font-semibold">Event</th>
                            <th scope="col" className="w-1/4 px-6 py-4 font-semibold">Amount</th>
                            <th scope="col" className="w-1/4 px-6 py-4 font-semibold">Network</th>
                            <th scope="col" className="w-1/4 px-6 py-4 font-semibold">Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="text-base py-5 whitespace-nowrap">{message}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Activity;