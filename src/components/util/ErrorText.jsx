import React from 'react';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

const ErrorText = ({ value }) => {
    
    const position = {
        bottom: `${value}px`
    }

    return ( <span className="absolute bottom-0 left-0 text-red-600" style={position}>
        <ErrorOutlineIcon />
        <span className="pl-2">required</span>
    </span>);
}
 
export default ErrorText;