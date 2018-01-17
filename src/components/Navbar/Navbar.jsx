import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => (
    <header className="navbar">
        <div className="logo-container">
            Logo
        </div>
        <ul className="menu">
            <li className="menu-item"><Link to="/contact">Contact</Link></li>
            <li className="menu-item sales"><Link to="/sales">Sales</Link></li>
            <li className="menu-item rentals"><Link to="/rentals">Rentals</Link></li>
            <li className="menu-item"><Link to="/about">About</Link></li>
        </ul>
    </header>
)

export default Navbar
