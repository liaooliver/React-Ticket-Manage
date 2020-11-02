import React, { useEffect, useState } from 'react';

import ErrorText from '../util/ErrorText';

const AssignForm = ({ formData, useform, previous, onSubmit }) => {
        
    const [ creator, setCreator ] = useState('')
    const { register, handleSubmit, errors } = useform;

    const mergeData = (data) => {
        data = Object.assign(data, { creator: creator })
        onSubmit(data, '/create/review?step=3')
    }

    useEffect(() => {
        setCreator(JSON.parse(localStorage.getItem('user')))
    },[])
    
    return (
        <div className="w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit(mergeData)} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h5 className="font-mono text-gray-700 font-medium text-xl">Assgin Principal</h5>
                <div className="mt-4 mb-8 relative">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="creator">Principal</label>
                    <div className="inline-block relative w-full">
                        <select name="principal" defaultValue={formData.principal} ref={register({required: true})} className={`${errors.principal ? 'border-red-600' : 'focus:shadow-outline'} block appearance-none w-full text-gray-700 bg-white border border-gray-400 hover:border-gray-500 p-4 pr-8 rounded shadow leading-tight focus:outline-none`}>
                            <option value="">Select Engineer</option>
                            <option value="Ted">Ted</option>
                            <option value="Jackey">Jackey</option>
                            <option value="Oliver">Oliver</option>
                            <option value="Ben">Ben</option>
                            <option value="David">David</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    {errors.principal && <ErrorText value='-28' />}
                </div>
                <div className="mb-8 relative">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="creator">DeadLine</label>
                    <input name="deadline" defaultValue={formData.deadline} ref={register({ required: true })} type="date" placeholder="Username" className={`${errors.deadline ? 'border-red-600' : 'focus:shadow-outline'} w-full p-4 focus:outline-none shadow appearance-none border rounded text-gray-700 leading-tight`} />
                    {errors.deadline && <ErrorText value='-28' />}
                </div>
                <div className="mb-8">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="creator">Creator</label>
                    <input name="creator" defaultValue={creator} type="text" disabled className="cursor-not-allowed shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    {errors.creator && <ErrorText value='-28' />}
                </div>
                <div className="flex items-center justify-center">
                    <div className="w-full pr-1">
                        <button onClick={() => previous('/create?step=1')} className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Previous Step
                        </button>
                    </div>
                    <div className="w-full pl-1">
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Next Step
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AssignForm;