import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Components/Hooks/useAuth';

function PrivateRoute({children}) {
    const { user } = useAuth()
    if (user?.email) {
        return children;
    }
    return  <Navigate to="/login"></Navigate>
}

export default PrivateRoute;