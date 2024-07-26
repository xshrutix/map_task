import { useState, useEffect } from 'react';

const useAuthentication = () => {
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    useEffect(() => {
        const authenticationStatus = localStorage.getItem('userAuthenticated');
        setIsUserAuthenticated(authenticationStatus === 'true');
    }, []);

    const signInUser = () => {
        setIsUserAuthenticated(true);
        localStorage.setItem('userAuthenticated', 'true');
    };

    const signOutUser = () => {
        setIsUserAuthenticated(false);
        localStorage.removeItem('userAuthenticated');
    };

    return { isUserAuthenticated, signInUser, signOutUser };
};

export default useAuthentication;
