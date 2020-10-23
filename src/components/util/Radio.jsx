import React from 'react';

const Radio = ({checked, event}) => {
    return ( 
        <button className="focus:outline-none" onClick={event}>
            <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex justify-center items-center outline-none">
                {
                    checked ? <div className="bg-gray-500 p-2 rounded-full"></div> : null
                }
            </div>
        </button>
    );
}
 
export default Radio;