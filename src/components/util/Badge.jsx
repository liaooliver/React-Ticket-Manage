import React, { useState } from 'react';

const Badge = ({code}) => {

    const [state] = useState({
        0: ['bg-gray-200 text-gray-800','Created'],
        1: ['bg-red-600 text-white','pending'],
        2: ['bg-blue-600 text-white','working'],
        3: ['bg-pink-500 text-white','review'],
        4: ['bg-orange-500 text-white','redo'],
        5: ['bg-blue-900 text-white', 'close'],  
    })
    return (<span className={`rounded-md px-2 ${state[code][0]}`}>{ state[code][1] }</span> );
}
 
export default Badge;