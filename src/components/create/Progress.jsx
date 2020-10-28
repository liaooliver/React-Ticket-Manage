import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const Progress = ({isActive}) => {

    return (<div className="flex justify-between mb-8">
        <div className={`p-2 rounded-md ${isActive === '1' ? 'bg-gray-200 text-gray-500' : 'text-gray-500'}`}>
            <div className="border-l-4 border-gray-500 flex">
                <p className="mx-2 text-gray-800">Fill in Basic Data</p>
                <ArrowForwardIosIcon />
            </div>
        </div>
        <div className={`p-2 rounded-md ${isActive === '2' ? 'bg-gray-200 text-gray-500' : 'text-gray-500'}`}>
            <div className="border-l-4 border-gray-500 flex">
                <p className="mx-2 text-gray-800">Fill in Further Data</p>
                <ArrowForwardIosIcon />
            </div>
        </div>
        <div className={`p-2 rounded-md ${isActive === '3' ? 'bg-gray-200 text-gray-500' : 'text-gray-500'}`}>
            <div className="border-l-4 border-gray-500 flex">
                <p className="mx-2 text-gray-800">Upload Data</p>
                <ArrowForwardIosIcon />
            </div>
        </div>
    </div>);
}

export default Progress;