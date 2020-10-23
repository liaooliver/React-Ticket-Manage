import React, { useState } from 'react';
import uuid from 'uuid/dist/v1';

const BtnGroup = () => {

    const [inits] = useState([
        {
            title: 'Pending',
            among: 10,
        },
        {
            title: 'Active',
            among: 10,
        },
        {
            title: 'Close',
            among: 10,
        },
    ])

    return (
        <ul className="border flex">
            {
                inits.map(init => <li key={uuid()} className="p-2 px-3 border-r last:border-r-0 hover:bg-gray-100">
                    <button>
                        <span className="text-base">{init.title}</span>
                        <span className="text-sm">({init.among})</span>
                    </button>
                </li>)
            }
        </ul>);
}

export default BtnGroup;