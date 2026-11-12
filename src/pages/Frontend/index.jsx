import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Products from './Products'
import PageNotFound from '@/components/PageNotFound'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const Frontend = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="products" element={<Products />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Frontend