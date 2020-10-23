import React, { useState } from 'react';

const Badge = ({code}) => {

    const [state] = useState({
        1: ['bg-red-600 text-white','pending'],
        2: ['bg-blue-600 text-white','working'],
        3: ['bg-green-600 text-white','completed'],
        4: ['bg-indigo-500 text-white','review'],
        5: ['bg-orange-500 text-white','redo'],
        6: ['bg-blue-900 text-white', 'close'],
        
    })
    return (<span className={`rounded-full px-2 ${state[code][0]}`}>{ state[code][1] }</span> );
}
 
export default Badge;