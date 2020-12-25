import React from 'react';
// import { useHistory } from "react-router-dom";
import google from '../assets/icons/google.png';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const Login = ({ pass }) => {

    // let history = useHistory();

    // const validation = () => {
    //     pass(true)
    //     history.push("/");
    // }

    const responseGoogle = (response) => {
        localStorage.setItem('oauth-token', response.accessToken)
        if (response.accessToken) {
            pass(true)
        }
        console.log(response, response.xt);
    }

    return (
        <div className="w-full h-screen flex justify-center items-center bg-gray-400">
            <div className="py-8 px-24 bg-white rounded-md">
                <h4 className="mb-8 text-center text-lg font-semibold">Welcome back!</h4>
                <ul>
                    <li>
                        <GoogleLogin
                            clientId="1077072331826-a76dt4ponkkfftsetigmfs4njr3b6b4o.apps.googleusercontent.com"
                            buttonText="Login"
                            render={(renderProps) => <button className="flex rounded-md border-2 border-gray-300 p-4 hover:bg-gray-100 hover:border-gray-500"
                                onClick={renderProps.onClick}>
                                <img className="w-6 mr-3" src={google} alt="google" />
                                Log in with Google
                            </button> }
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />
                        {/* <button className="flex rounded-md border-2 border-gray-300 p-4 hover:bg-gray-100 hover:border-gray-500" onClick={()=>validation()}>
                            <img class="w-6 mr-3" src={google} alt="google" />
                            Log in with Google
                        </button> */}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Login;