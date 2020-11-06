import React, { useState } from 'react';
import uuid from 'uuid/dist/v1';

const BtnGroup = () => {

    const [inits] = useState([
        {
            title: 'All',
            amount: 30,
        },
        {
            title: 'Pending',
            amount: 10,
        },
        {
            title: 'Active',
            amount: 10,
        },
        {
            title: 'Close',
            amount: 10,
        }
    ])

    return (
        <ul className="border flex bg-white">
            {
                inits.map(init => <li key={uuid()} className=" border-r last:border-r-0 hover:bg-gray-200">
                    <button className="p-2 px-3">
                        <span className="text-base">{init.title}</span>
                        <span className="text-sm">({init.amount})</span>
                    </button>
                </li>)
            }
        </ul>
    );
}

export default BtnGroup;