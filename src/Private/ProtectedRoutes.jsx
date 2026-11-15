import { useAuthContext } from '@/context/AuthContext'
import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ Component }) => {

    const { isAuth } = useAuthContext();

    if (!isAuth) {
        return <Navigate to="/auth/page/login" />
    }

    return <Component />
}

export default ProtectedRoutes