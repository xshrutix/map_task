import { useEffect } from "react";

const useGoogleSignIn = (googleButtonRef, onUserSignIn) => {
    useEffect(() => {
        const handleGoogleSignInResponse = (response) => {
            console.log("Encoded JWT token: " + response.credential);
            onUserSignIn();
            localStorage.setItem('userAuthenticated', 'true');
        };

        const initializeGoogleSignInButton = () => {
            if (googleButtonRef.current) {
                window.google.accounts.id.renderButton(
                    googleButtonRef.current,
                    { theme: "outline", size: "large" }
                );
            }
        };

        const loadGoogleScript = () => {
            const scriptElement = document.createElement("script");
            scriptElement.src = "https://accounts.google.com/gsi/client";
            scriptElement.async = true;
            scriptElement.defer = true;
            scriptElement.onload = () => {
                window.google.accounts.id.initialize({
                    client_id: "679889336722-eom9ttcio9ausrhp082mk4kbop97t348.apps.googleusercontent.com",
                    callback: handleGoogleSignInResponse,
                });
                initializeGoogleSignInButton();
            };
            document.body.appendChild(scriptElement);
        };

        if (!window.google?.accounts?.id) {
            loadGoogleScript();
        } else {
            window.google.accounts.id.initialize({
                client_id: "679889336722-eom9ttcio9ausrhp082mk4kbop97t348.apps.googleusercontent.com",
                callback: handleGoogleSignInResponse,
            });
            initializeGoogleSignInButton();
        }
    }, [googleButtonRef, onUserSignIn]);
};

export default useGoogleSignIn;
