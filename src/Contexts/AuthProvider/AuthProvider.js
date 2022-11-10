import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);







    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }







    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }









    // google sign in_______
    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
const googleProvider = new GoogleAuthProvider()





    const logOut = () => {
        localStorage.removeItem('Assignment11-token');
        return signOut(auth);
    }













    const updatePhoto = (name, photoUrl) => {
        return updateProfile(auth.currentUser, {
          displayName:name , photoURL: photoUrl
        })
    }






    useEffect(() => {
        const unsubscribe =  onAuthStateChanged(auth, currentUser => {
               
                setUser(currentUser);
                setLoading(false);
        });

            return () => {
                return unsubscribe();
            }

    }, [])




    const authInfo = {user, loading, createUser, login, logOut, updatePhoto, googleSignIn}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;