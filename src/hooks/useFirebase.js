import { useState } from "react"

import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword, signOut, onAuthStateChanged, getIdToken, updateProfile } from "firebase/auth";
import { useEffect } from "react";
import initializeAuthentication from "../pages/Login/Firebase/firebase.initialize";
import { id } from "date-fns/locale";
initializeAuthentication()


const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [token, setToken] = useState('')
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, name, password, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                // const user = userCredential.user;
                const newUser = { email, displayName: name }
                setUser(newUser)
                saveUser(email, name, 'POST')
                // send name from firebase update profile
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                    // Profile updated!
                    // ...
                }).catch((error) => {
                    // An error occurred
                    // ...
                });
                history.replace('/')
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            })
            .finally(() => setIsLoading(false));


    }
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/home';
                history.replace(destination)
                // const user = userCredential.user;
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(() => setIsLoading(false));
    }
    const signWithGoogle = (history, location) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/home';
                history.replace(destination)
                // The signed-in user info.
                const user = result.user;
                saveUser(user.email, user.displayName, 'PUT')

            }).catch((error) => {
                setUser({})
            })
            .finally(() => setIsLoading(false));

    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                        console.log(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });


    }, [])

    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])


    const logout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));

    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        // .then(res => res.json())
    }
    return {
        user,
        admin,
        token,
        isLoading,
        registerUser,
        logout,
        loginUser,
        signWithGoogle
    }
}

export default useFirebase