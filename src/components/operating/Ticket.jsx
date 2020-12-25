import React from 'react';

const Ticket = ({ data }) => {

    return ( <div className="p-6 rounded-md shadow-md max-w-xl mx-auto my-4 bg-white">
    <h3 className="mb-4 font-mono text-xl text-gray-800 font-bold">
        {/* <span className="pr-2">{data.id}</span> */}
        {data.subject}
    </h3>
    <ul className="w-full flex flex-wrap mb-4">
        <li className="w-1/2 py-1 text-gray-800">
            <span className="capitalize text-base pr-2">project:</span>
            <span>{data.project}</span>
        </li>
        <li className="w-1/2 py-1 text-gray-800">
            <span className="capitalize text-base pr-2">Module/Function:</span>
            <span>{data.module}</span>
        </li>
        <li className="w-1/2 py-1 text-gray-800">
            <span className="capitalize text-base pr-2">Create by:</span>
            <span>{data.creator}</span>
        </li>
        <li className="w-1/2 py-1 text-gray-800">
            <span className="capitalize text-base pr-2">Create date:</span>
            <span>{data.createtime}</span>
        </li>
        <li className="w-1/2 py-1 text-gray-800">
            <span className="capitalize text-base pr-2">principal:</span>
            <span>{data.principal}</span>
        </li>
        <li className="w-1/2 py-1 text-gray-800">
            <span className="capitalize text-base pr-2">deadline:</span>
            <span>{data.deadline}</span>
        </li>
    </ul>
    <p className="font-mono text-md text-gray-800">
        <span className="block text-lg font-medium">Description: </span>
        {data.description}
    </p>
</div> );
}
 
export default Ticket;