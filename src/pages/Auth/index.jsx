import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login/login'
import Register from './Register/register'
import ChangePassword from './ChangePassword'
import PageNotFound from '@/components/PageNotFound'

const Auth = () => {
    return (
        <>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="change-password" element={<ChangePassword />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Auth