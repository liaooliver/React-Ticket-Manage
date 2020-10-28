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
    creator: ''
}

const FormContextProvider = ({ children }) => {
    
    const [forms, dispatch] = useReducer(formReduce, formObj);

    function addFormData(payload) {
        dispatch({ type: 'ADD_FORMDATA', payload })
    }

    return (
        <FormContext.Provider value={{ forms, addFormData }}>{ children }</FormContext.Provider>
    )
}
export default FormContextProvider