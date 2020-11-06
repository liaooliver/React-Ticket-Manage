import React, { useContext, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";

import { FormContext } from '../../hooks/context/FormContext';

const withForm = (WarppedComponent) => {
    return (props) => {

        const query = new URLSearchParams(useLocation().search);;
        const { getQuery } = props;
        const history = useHistory()
        const { formData, addFormData, postFormData } = useContext(FormContext)
        const useform = useForm();

        const previous = (url) => {
            history.push(url)
        }

        const onSubmit = async (data, url) => {
            await addFormData(data)
            history.push(url)
        }

        useEffect(() => {
            // let mounted = true;
    
            // if (!mounted) console.log("UNMOUNTED => Review")
            // console.log("BEFORE_UNMOUNTED => WithForm")
            
            // return function clearup() {
            //     console.log("CLEAR_UP")
            //     mounted = false
            // }
        })

        useEffect(() => {
            console.log("GET QUERY")
            getQuery(query)
        }, [getQuery, query])

        return <WarppedComponent {...props} addFormData={addFormData} postFormData={postFormData} formData={formData} history={history} useform={useform} previous={previous} onSubmit={onSubmit} />
    }
}
 
export default withForm;