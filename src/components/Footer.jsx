import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-blue-900 text-white text-center py-4 absolute bottom-0 w-full">
            <p className="text-md">&copy; {new Date().getFullYear()} Shruti Sharma. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
