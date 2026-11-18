import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardHome from './Home'
import Orders from './Orders'
import Products from './Products'
import Users from './Users'
import ProtectedRoutes from '@/Private/ProtectedRoutes'

const Index = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<DashboardHome />} />
                <Route path='orders' element={<ProtectedRoutes Component={Orders} allowedRoles={["Super Admin", "Seller"]} />} />
                <Route path='products' element={<ProtectedRoutes Component={Products} allowedRoles={["Super Admin", "Customer"]} />} />
                <Route path='users' element={<ProtectedRoutes Component={Users} allowedRoles={["Super Admin"]} />} />
            </Routes>
        </>
    )
}

export default Index