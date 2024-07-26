import React from 'react';
import logo from '../assets/logo.png'; 

export default function Nav({ isLoggedIn, onLogout }) {
    return (
        <div className="fixed top-0 left-0 w-full  bg-blue-900 shadow-md z-50 p-4">
            <div className="flex items-center justify-between h-full">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="w-12 h-auto" /> 
                </div>
                <div className="flex items-center">
                    {isLoggedIn ? (
                        <button
                            className="px-4 py-2 font-semibold text-white bg-blue-800 rounded hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onClick={onLogout}
                        >
                            Logout
                        </button>
                    ) : (
                        <span className="text-white text-xl font-bold pr-8">Welcome To Hospital Locator</span> 
                    )}
                </div>
            </div>
        </div>
    );
}
