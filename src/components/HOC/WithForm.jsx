import React, { useContext, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router-dom';

import { FormContext } from '../../hooks/context/FormContext';

const withForm = (WarppedComponent) => {
    return (props) => {

        const query = new URLSearchParams(useLocation().search);;
        const { getQuery } = props;
        const history = useHistory()
        const { formData, addFormData } = useContext(FormContext)
        const useform = useForm();

        const previous = (url) => {
            history.push(url)
        }

        const onSubmit = async (data, url) => {
            await addFormData(data)
            await history.push(url)
        }

        useEffect(() => {
            getQuery(query)
        }, [getQuery, query])

        return <WarppedComponent {...props} addFormData={addFormData} formData={formData} history={history} useform={useform} previous={previous} onSubmit={onSubmit} />
    }
}
 
export default withForm;