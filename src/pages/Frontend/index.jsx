import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import PageNotFound from '@/components/PageNotFound'

const Frontend = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </>
    )
}

export default Frontend