import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <>
            <Header />
            <Footer />
            <Outlet />
        </>
    )
}

export default Root