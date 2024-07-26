import React from 'react';
import NavigationBar from './components/Nav.jsx';
import Map from './components/Map.jsx';
import UserLoginPage from './components/Login.jsx';
import Footer from './components/Footer.jsx';
import useAuthentication from './hooks/useAuth'; 

function App() {
    const { isUserAuthenticated, signInUser, signOutUser } = useAuthentication();

    return (
        <div className="MainApp min-h-screen flex flex-col">
            <NavigationBar isLoggedIn={isUserAuthenticated} onLogout={signOutUser} />
            <main className="flex-grow">
                {isUserAuthenticated ? <Map /> : <UserLoginPage onUserSignIn={signInUser} />}
            </main>
            <Footer />
        </div>
    );
}

export default App;
