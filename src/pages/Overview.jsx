import React from 'react';

import List from '../components/overview/List';

import BtnGroup from '../components/util/Button_Group';
import Pagination from '../components/util/Pagination';

const Overview = () => {
    return (
        <>
            <div className="flex"><BtnGroup /></div>
            <div className="my-6">
                <List />
            </div>
            <div className="py-3">
                <Pagination />
            </div>
        </>);
}

export default Overview;

