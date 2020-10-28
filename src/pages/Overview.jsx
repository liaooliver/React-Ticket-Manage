import React from 'react';

import BtnGroup from '../components/util/Button_Group';
import Pagination from '../components/util/Pagination';

const Overview = () => {
    return (
        <div>
            <div className="flex"><BtnGroup /></div>
            <div className="py-3">
                <Pagination />
            </div>
        </div>);
}

export default Overview;

