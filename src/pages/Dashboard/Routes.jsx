import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardHome from './Home'
import Orders from './Orders'
import Products from './Products'
import Users from './Users'
import ProtectedRoutes from '@/Private/ProtectedRoutes'
import AddProduct from './Add-Product'

const Index = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<DashboardHome />} />
                <Route path='orders' element={<ProtectedRoutes Component={Orders} allowedroles={["Super Admin", "Seller"]} />} />
                <Route path='products' element={<ProtectedRoutes Component={Products} allowedroles={["Super Admin", "Customer"]} />} />
                <Route path='add-product' element={<ProtectedRoutes Component={AddProduct} allowedroles={["Super Admin", "Seller"]} />} />
                <Route path='users' element={<ProtectedRoutes Component={Users} allowedroles={["Super Admin"]} />} />
            </Routes>
        </>
    )
}

export default Index