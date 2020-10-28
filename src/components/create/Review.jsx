import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import uuid from 'uuid/dist/v1';

import DisplayInput from '../util/DisplayInput';

const Review = ({ next }) => {

    const form = [
        {
            title: 'subject',
            value: '主旨',
            type: 'text'
        },
        {
            title: 'project',
            value: '專案',
            type: 'text'
        },
        {
            title: 'module',
            value: '功能',
            type: 'text'
        },
        {
            title: 'description',
            value: '說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明說明',
            type: 'area'
        },
        {
            title: 'principal',
            value: '負責人',
            type: 'text'
        },
        {
            title: 'deadline',
            value: '完成日期',
            type: 'text'
        },
        {
            title: 'creator',
            value: '建立者',
            type: 'text'
        }
    ]
    
    const { register, handleSubmit } = useForm();
    const history = useHistory();
    const previous = () => {
        next('2')
        history.push('/create/assigned')
    }
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <div className="w-full max-w-md mx-auto bg-white shadow-md p-4 rounded">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5 className="font-mono text-gray-700 font-medium text-center text-xl">Review Ticket</h5>
                {
                    form.map(item => <DisplayInput register={register} key={uuid()} type={item.type} value={item.value} label={item.title}></DisplayInput> )
                }
                <div className="flex items-center justify-center">
                    <div className="w-full pr-1">
                        <button onClick={previous} className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-100 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                            Previous Step
                        </button>
                    </div>
                    <div className="w-full pl-1">
                        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Upload Data
                        </button>
                    </div>
                </div>
            </form>
        </div>
     );
}
 
export default Review;