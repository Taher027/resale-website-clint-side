import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [role, setRole] = useState('');
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (displayName, photoURL) => {
        updateProfile(auth.currentUser, {
            displayName: displayName,
            photoURL: photoURL,
        })
            .then(() => { })
            .catch((error) => {
                const errorMessage = error.message;
                alert('auth', errorMessage);
            });
    };

    const loginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        setLoading(false);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser)

            fetch(`https://server-zeta-three.vercel.app/user/${currentUser.email}`)
                    .then((res) => res.json())
                    .then((data) => {
                        setRole(data.role);
                        setLoading(false);
                    });

           
        });

        return () => unsubscribe();
    }, [])

   

    const authInfo = {
        createUser,
        signIn,
        updateUser,
        loginWithGoogle,
        logOut,
        user,
        loading,
        role
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;