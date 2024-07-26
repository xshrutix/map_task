import React, { useEffect, useRef } from "react";
import './login.css';
import appLogo from '../assets/logo.png';
import backgroundImage from '../assets/img1.png';
import useGoogleSignIn from '../hooks/signin';

const UserLoginPage = ({ onUserSignIn }) => {
    const googleButtonRef = useRef(null);

    useGoogleSignIn(googleButtonRef, onUserSignIn);

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-200 p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md neumorphism my-8 mx-4 md:mx-8 lg:mx-16">
                <div className="text-center mb-6">
                    <img src={appLogo} alt="App Logo" className="mx-auto w-24 h-auto" />
                    <h1 className="text-3xl font-semibold text-red-500 mb-2">Hospital Locator</h1>
                    <h3 className="text-xl font-medium text-gray-600">Sign In</h3>
                    <p className="text-gray-500 mt-2">Please sign in to avail functionality.</p>
                </div>
                <div ref={googleButtonRef} className="mb-4 mx-auto text-center md:ml-24"></div>
                <p className="text-sm text-gray-500 text-center mt-4">
                    By continuing, you are indicating that you accept our 
                    <a href="#" className="text-blue-500"> Terms of Service</a> 
                    and 
                    <a href="#" className="text-blue-500"> Privacy Policy</a>.
                </p>
            </div>
            <img 
                src={backgroundImage} 
                alt="Background" 
                className="absolute bottom-0 left-0 w-1/3 h-auto hidden lg:block p-4" 
            />
        </div>
    );
};

export default UserLoginPage;
