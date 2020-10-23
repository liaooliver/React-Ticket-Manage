import React from 'react';

const Login = ({pass}) => {
    return ( 
        <div>
            <button className="bg-green-400" onClick={pass}>Login</button>
        </div>
     );
}
 
export default Login;