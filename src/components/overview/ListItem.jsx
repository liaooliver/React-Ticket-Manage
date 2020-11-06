import React from 'react';

import LButton from '../util/LButton';
import Badge from '../util/Badge';

const ListItem = ({ data }) => {
    
    const { remainer, alert, due, subject, principal, status, id, completed } = data;

    return (<li className="w-full shadow rounded-md p-3 mb-3 last:mb-0 bg-white">
        <div className="flex justify-between items-start mb-3">
            <Badge code={status} />
            <div className="text-sm">
                {
                    !completed ? <><span className="pr-1">deadline:{due},</span>
                    <span className={`${ alert ? 'text-red-600 font-bold': null }`}>{remainer} days</span>
                    </> : <span>Completed: {completed},</span>
                }
                
            </div>
        </div>
        <div className="text-lg font-bold">{subject}</div>
        <div className="flex justify-between items-center">
            <span className="text-sm text-gray-700 uppercase">principal: {principal}</span>
            <span>
                <LButton path={`/operating?id=${id}&status=${status}`} color="blue">Forward</LButton>
            </span>
        </div>
    </li> );
}
 
export default ListItem;