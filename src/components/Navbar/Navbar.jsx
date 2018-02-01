import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Logo from '../../media/logo.svg'

const Navbar = () => (
    <header className="navbar">
        <div className="logo-container">
            <Link to="/"><img src={Logo} className="navbar-logo" alt="King's Real Estate" /></Link>
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
