import React, { useState, useContext } from 'react';

import Badge from '../util/Badge';
import Ping from '../util/Ping';
import Radio from '../util/Radio';

import { NoticeContext } from '../../hooks/context/NoticeContext';

const position = {
    top: '-5px',
    right: '-4px'
}

const CardNotice = ({ data }) => {

    const { title, status, alert, deadline, index } = data;
    const { notices, removeNotices } = useContext(NoticeContext);
    const [checked, setChecked] = useState(false);
    const pickupTicket = (event) => {
        event.preventDefault();
        const indexOf = notices.map(note => note.index).indexOf(index)
        setChecked(true);
        setTimeout(() => {
            removeNotices(indexOf)
        }, 650)
    };


    return (<li className={`p-3 rounded-md mb-3 bg-white hover:shadow-md transition-all duration-500 ease-linear ${ checked ? 'opacity-0' : 'opacity-100' }`}>
        <div className="flex items-center">
            <Radio checked={checked} event={pickupTicket} />
            <h6 className="ml-3 text-lg">{ title }</h6>
        </div>

        <div className="flex justify-between items-center pl-8">
            <Badge code={status} />
            <span className="relative">
                {
                    alert ? <Ping position={position} /> : null
                }
                <p className="text-sm py-1 px-2 bg-gray-100 rounded-md">
                    deadline: { deadline }
                </p>
            </span>
        </div>
    </li>);
}

export default CardNotice;