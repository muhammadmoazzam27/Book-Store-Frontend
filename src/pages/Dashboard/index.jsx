import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardHome from './Home'
import PageNotFound from '@/components/PageNotFound'

const Dashboard = () => {
    return (
        <>
            <Routes>
                <Route path="home-overview" element={<DashboardHome />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Dashboard