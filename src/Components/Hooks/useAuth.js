import React, { useContext } from 'react';
import { initilizeFirebaseApp } from '../../firebase/firebase.init';
import { ContextProvider } from '../Context/AuthContext';
initilizeFirebaseApp();
const useAuth = () => {
    const auth = useContext(ContextProvider)
    return auth;
};

export default useAuth;