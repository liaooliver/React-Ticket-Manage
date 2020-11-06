import React, { useState } from 'react';

const CheckForm = ({setCode}) => {

    const [data] = useState({
        Submitter: 'Oliver',
        submissiontime: '2020/02/02',
        comment: 'Finish Report'
    })

    return (<div className="p-6 rounded-md shadow-md max-w-xl mx-auto my-4 bg-white">
        <h4 className="block text-lg font-medium capitalize text-center py-2">Review Ticket Result</h4>
        <ul className="w-full flex flex-wrap mb-2">
            <li className="w-1/2 py-1 text-gray-800">
                <span className="capitalize text-base pr-2">Submitter:</span>
                <span>{data.Submitter}</span>
            </li>
            <li className="w-1/2 py-1 text-gray-800">
                <span className="capitalize text-base pr-2">Submission Time:</span>
                <span>{data.submissiontime}</span>
            </li>
        </ul>
        <p className="font-mono text-md text-gray-800">
            <span className="block text-lg font-medium">Launch Result: </span>
            {data.comment}
        </p>
        <div className="text-right">
            <button onClick={()=>setCode(5)} type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline">
                Approve
            </button>
            <button onClick={()=>setCode(4)} type="submit" className="bg-red-600 hover:bg-red-700 text-white font-bold p-2 ml-3 rounded focus:outline-none focus:shadow-outline">
                Reject
            </button>
        </div>
    </div>);
}

export default CheckForm;