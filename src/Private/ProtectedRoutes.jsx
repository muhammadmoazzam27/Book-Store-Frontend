import { useAuthContext } from '@/context/AuthContext'
import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ Component, allowedroles }) => {

    const { isAuth, user } = useAuthContext();

    if (!isAuth) {
        return <Navigate to="/auth/page/login" replace />
    }

    if (allowedroles && !allowedroles.includes(user.role)) {
        return <Navigate to="/dashboard" replace />
    }

    return <Component />
}

export default ProtectedRoutes;