import React from 'react';

import BtnGroup from '../components/util/Button_Group';

const [state] = useState({
    1: ['bg-red-600 text-white','pending'],
    2: ['bg-blue-600 text-white','working'],
    3: ['bg-green-600 text-white','completed'],
    4: ['bg-indigo-500 text-white','review'],
    5: ['bg-orange-500 text-white','redo'],
    6: ['bg-blue-900 text-white', 'close'],
})

const Overview = () => {
    return (
    <div>
        <div className="flex"><BtnGroup /></div>
        <div></div>
            <ul>
                <h6 className="text-xs font-light">Comment:</h6>
                <li className="flex">
                    <span className="rounded-full h-2 w-2 bg-red-500"></span>
                    <span></span>
                </li>
        </ul>
    </div> );
}
 
export default Overview;