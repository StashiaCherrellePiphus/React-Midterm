import React from 'react'
import { Outlet, Link } from "react-router-dom";


const Layout = () => {
    return (
        <>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/layout">Layout</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
                <li>
                    <link to="/creator">Creator</link>
                </li>
                <li>
                    <Link to="/navbar.js">Navbar</Link>
                </li>
                <li>
                    <Link to="/navbar.css">Navbarcss</Link>
                </li>
            </ul>
        </nav>
        </>
    )
}



export default Layout;