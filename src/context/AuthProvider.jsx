import React, { createContext, useState } from 'react'
import app from '../firebase/firebase.init'
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';


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


    const authInfo = {user, loading, createUser, updatedUserProfile, verifyEmail}
    return (
        <AuthContext.Provider value={authInfo}>
            { children }
        </AuthContext.Provider>
    );
};

export default AuthProvider;