import React, { createContext, useEffect, useState } from 'react'
import app from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup } from 'firebase/auth';


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //  Step 01
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Step 02
    const updatedUserProfile = profile => {
        return updateProfile(auth.currentUser, profile)
    }

    // Step 03
    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }

    // Step 04
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Step 05
    const userLogout = () => {
        setLoading(true);
        return signOut(auth);
    }

    // step 06
    const providerLogin = provider => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser === null || currentUser.emailVerified){
                setUser(currentUser);
            }
            setLoading(false);
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {user, loading, setLoading, createUser, updatedUserProfile, verifyEmail, userLogin, userLogout, providerLogin}
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;