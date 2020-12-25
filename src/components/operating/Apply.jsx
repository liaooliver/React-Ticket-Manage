import React from 'react';
import { useForm } from "react-hook-form";

const Apply = ({ setCode, postApplyForm, ticket }) => {

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        postApplyForm(ticket.id, data)
        console.log(ticket)
        // setCode(3)
    }

    return (<form onSubmit={handleSubmit(onSubmit)} className="p-4 shadow-md rounded-md mb-4 bg-white">
        <h4 className="block text-lg font-medium capitalize text-center py-2">apply Result</h4>
        <div className="mb-8 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="finish">Finish Time</label>
            <input name="finish" disabled={false} ref={register({ required: true })} type="date" placeholder="Username" className={` w-full p-4 focus:outline-none shadow appearance-none border rounded text-gray-700 leading-tight`} />
        </div>
        <div className="mb-8 relative">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="comment">Fill in Result</label>
            <textarea name="comment" ref={register({ required: true })} className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" cols="15" rows="5" placeholder="process result..."></textarea>
        </div>
        <div className="text-right">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded focus:outline-none focus:shadow-outline">
                Submit
            </button>
        </div>
    </form>);
}

export default Apply;