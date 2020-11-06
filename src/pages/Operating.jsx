import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

import Badge from '../components/util/Badge';
import Ticket from '../components/operating/Ticket';
import Apply from '../components/operating/Apply';
import CheckForm from '../components/operating/CheckForm';

import { OverviewContext } from '../hooks/context/OverviewContext';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Operating = () => {

    const [setCode] = useState(1)
    const { ticket, getTicket } = useContext(OverviewContext)
    const query = useQuery().get('id')

    useEffect(() => {
        getTicket(query)
    },[query])

    return (
        <div className="max-w-xl mx-auto">
            <div className="w-full flex justify-between">
                <span>
                    <Badge code={ticket.code ? ticket.code : 0} />
                    <span className="text-sm text-gray-100 uppercase px-2 bg-green-500 rounded-md ml-2">5 days</span>
                </span>
                <span>
                    <button className="bg-red-600 text-red-100 p-1 rounded ml-auto">Close</button>
                    {
                        ticket.code === 1 ? <button className="bg-blue-600 text-green-100 p-1 rounded ml-3" onClick={() => setCode(2)}>Launch</button> : null
                    }
                </span>
            </div>
            <Ticket data={ticket} />
            <Apply setCode={setCode} />
            <CheckForm setCode={setCode} />
        </div>
    );
}

export default Operating;