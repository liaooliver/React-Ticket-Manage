import React, { useState, useContext } from 'react';
import uuid from 'uuid/dist/v1';

import Banner from '../components/home/Banner';
import CardRecent from '../components/home/Card_Recent';
import CardNotice from '../components/home/Card_Notice';

import { NoticeContext } from '../hooks/NoticeContext';

const Home = () => {

    const [data] = useState([
        {
            index: 3,
            title: 'build a platform for setting config system',
            content: "Standardize DB table Name:EX-6_Main has no the table of cached.EX-6_Main.Energy for PowerConsumption in MySQL and Mongo Is 'cached.EM.EM-Ex6' equal to 'cached.EX-6_Main.Energy'?"
        },
        {
            index: 4,
            title: 'build a platform for setting config system',
            content: "Standardize DB table Name:EX-6_Main has no the table of cached.EX-6_Main.Energy for PowerConsumption in MySQL and Mongo Is 'cached.EM.EM-Ex6' equal to 'cached.EX-6_Main.Energy'?"
        }
    ])

    const { notices } = useContext(NoticeContext)

    return (
    <div>
        <Banner />
        <div className="w-full flex my-4">
            <div className="w-3/5 pr-3">
                <h5 className="text-xl mb-2">The latest five Ticket</h5>
                <ul className="p-3 bg-blue-100 rounded-md">
                    {
                        data.length > 0 ? data.map(item => <CardRecent key={uuid()} data={item} />) : <p>No Ticket assigned yet</p>
                    }
                </ul>
            </div>
            <div className="w-2/5 pl-3">
                <h5 className="text-xl mb-2">Your notification</h5>
                <ul className="p-3 bg-blue-100 rounded-md">
                    {
                        notices.length > 0 ? notices.map(notice => <CardNotice key={uuid()} data={notice} />) :　<p>Not any notification</p>
                    }
                </ul>
            </div>
        </div>
    </div>);
}

export default Home;