import React from 'react';

const DisplayInput = ({ value, label, type, register }) => {
    return (<div className="my-4 flex items-center">
        <label className="w-4/12 block text-gray-700 text-sm font-bold pr-3 capitalize" htmlFor={label}>
            {label}
        </label>
        {
            type === 'area' ?
                <textarea ref={register} defaultValue={value} disabled name={label} className="w-8/12 cursor-not-allowed shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" /> :
                <input ref={register} defaultValue={value} disabled name={label} type="text" className="w-8/12 cursor-not-allowed shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        }
        
    </div>);
}

export default DisplayInput;