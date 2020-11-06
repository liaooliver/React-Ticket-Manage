import React, { createContext, useReducer } from 'react';
import formReduce from '../reduce/FormReduce';

export const FormContext = createContext();

const formObj = {
    subject: '',
    project: '',
    module: '',
    description: '',
    principal: '',
    deadline: '',
    creator: '',
    createtime: new Date()
}

const FormContextProvider = ({ children }) => {
    
    const [formData, dispatch] = useReducer(formReduce, formObj);

    const addFormData = (payload) => {
        dispatch({ type: 'ADD_FORMDATA', payload })
    }

    const clearFormData = () => {
        dispatch({ type: "CLEAR_FORMDATA"})
    }

    const postFormData = async () => {
        console.log("資料打 API")
        return await fetch('http://localhost:3001/postSheet/postform', {
            method: 'POST',
            body: JSON.stringify(formObj),
            headers: {
                'user-agent': 'Mozilla/4.0 MDN Example',
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => {
                clearFormData()
                return { result: 'succcess' }
            })
            .catch(error => ({ result: 'fail' }))
    }

    return (
        <FormContext.Provider value={{ formData, addFormData, postFormData }}>{ children }</FormContext.Provider>
    )
}
export default FormContextProvider