import React from 'react';

import ErrorText from '../util/ErrorText';

const BasicForm = ({ formData, useform, onSubmit }) => {

    const { register, handleSubmit, errors } = useform;

    return (
        <div className="w-full max-w-md mx-auto">
            <form onSubmit={handleSubmit(data => onSubmit(data, '/create/assigned?step=2'))} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                <h5 className="font-mono text-gray-700 font-medium text-xl">Create a new Ticket</h5>
                <div className="mt-4 mb-8 relative">
                    <input name="subject"
                        defaultValue={formData.subject}
                        ref={register({ required: true })}
                        className={`${errors.subject ? 'border-red-600' : 'focus:shadow-outline'} focus:outline-none shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight`}
                        type="text"
                        placeholder="SUBJECT" />
                    {errors.subject && <ErrorText value='-28' />}
                </div>
                <div className="flex mb-8">
                    <div className="w-1/2 pr-1 relative">
                        <div className="inline-block relative w-full">
                            <select name="project" defaultValue={formData.project} ref={register({ required: true })} className={`${errors.project ? 'border-red-600' : 'focus:shadow-outline'} block text-gray-700 appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 p-4 pr-8 rounded shadow leading-tight focus:outline-none`}>
                                <option value="">Select Project</option>
                                <option value="taya">Taya</option>
                                <option value="austech">Austech</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                        {errors.project && <ErrorText value='-28' /> }
                    </div>
                    <div className="w-1/2 pl-1 relative">
                        <input name="module"
                            defaultValue={formData.module}
                            ref={register({ required: true })}
                            className={`${errors.module ? 'border-red-600' : 'focus:shadow-outline'} focus:outline-none shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight`}
                            type="text"
                            placeholder="Module/Function" />
                        {errors.module && <ErrorText value='-28' /> }
                    </div>
                </div>
                <div className="mb-6">
                    <textarea defaultValue={formData.description} name="description" ref={register} rows="12" className="shadow appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Description..." />
                </div>
                <div className="flex items-center justify-center">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Next Step
                    </button>
                </div>
            </form>
        </div>
    );
}

export default BasicForm;