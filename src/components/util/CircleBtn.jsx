import React from 'react';

const CircleBtn = ({ children, event }) => {
    return (<button onClick={event} className="w-8 h-8 rounded-full flex items-center justify-center bg-red-200">{children}</button> );
}
 
export default CircleBtn;