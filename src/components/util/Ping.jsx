import React from 'react';

const Ping = ({ position }) => {
    return (<span className="flex h-3 w-3 absolute" style={position}>
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
    </span>);
}

export default Ping;