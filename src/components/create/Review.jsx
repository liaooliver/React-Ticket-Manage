import React, { useEffect, useState } from 'react';
import uuid from 'uuid/dist/v1';

import Success from '../util/Success';
import Progress from '../util/Progress';
import DisplayInput from '../util/DisplayInput';

import '../../styles/customs/animate.css';

const center = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

const Review = ({ formData, postFormData, previous, useform }) => {

    const { handleSubmit } = useform;
    const [upload, setUpload] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [form, setForm] = useState([])
    const [format] = useState({
        subject: 'text',
        project: 'text',
        module: 'text',
        description: 'area',
        principal: 'text',
        deadline: 'text',
        creator: 'text'
    })

    const onSubmit = async () => {
        setUpload(true)
        const result = await postFormData()
        if (result['result'] === 'succcess') {
            setUpload(false)
            setIsDone(true)
        }
    };


    useEffect(() => {

        window.addEventListener('animationend', function (e) {
            setIsSuccess(true)
        })
        
        const keys = Object.keys(format);
        const data = keys.map(key => ({
            type: format[key],
            value: formData[key],
            title: key
        }))
        setForm(data)

        return function cleanup() {
            console.log("CLEAR UP")
        }
    }, [])

    return (
        <>
            <div className={`w-full max-w-md mx-auto relative`}>
                {
                    upload ? <><div className="absolute inset-0 bg-gray-400 opacity-50 z-10"></div>
                        <span className="absolute z-20" style={center}><Progress /></span>
                    </> : null
                }
                {
                    isSuccess ? <Success style={center} /> : ''
                }
                <form onSubmit={handleSubmit(onSubmit)} className={`bg-white shadow-md p-4 rounded ${isDone ? 'custom_animate_out' : ''}`}>
                    <h5 className="font-mono text-gray-700 font-medium text-xl">Review Ticket</h5>
                    {
                        form.map(item => <DisplayInput key={uuid()} type={item.type} value={item.value} label={item.title}></DisplayInput>)
                    }
                    <div className="flex items-center justify-center">
                        <div className="w-full pr-1">
                            <button onClick={() => previous('/create/assigned?step=2')} className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                Previous Step
                            </button>
                        </div>
                        <div className="w-full pl-1">
                            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
                
            </div>
        </>
    );
}

export default Review;