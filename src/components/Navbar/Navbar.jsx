import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Menu, { MenuItem } from 'material-ui/Menu';
import KeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown'
import Logo from '../../media/logo.svg'

class Navbar extends React.Component {
    state = {
        anchorEl: null,
    }

    handleMenuOpen = event => {
        event.preventDefault()
        this.setState({ anchorEl: event.currentTarget })
    }

    handleMenuClose = () => {
        this.setState({ anchorEl: null })
    }

    render() {
        const { anchorEl } = this.state;

        return (
            <header className="navbar">
                <div className="logo-container">
                    <Link to="/"><img src={Logo} className="navbar-logo" alt="King's Real Estate" /></Link>
                </div>
                <ul className="menu">
                    <li className="menu-item"><a href={`mailto:stephanie@sk-estates.com`}>Contact</a></li>
                    <li className="menu-item sales"><Link to="/sales">Sales</Link></li>
                    <li className="menu-item rentals"><Link to="/rentals">Rentals</Link></li>
                    <li className="menu-item">
                        <a href="" onClick={this.handleMenuOpen} aria-haspopup="true" aria-owns={anchorEl ? 'simple-menu' : null}>
                            More
                            <KeyboardArrowDown className="rightIcon" />
                        </a>
                    </li>
                </ul>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this.handleMenuClose}
                    >
                    <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                    <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
                    <MenuItem onClick={this.handleMenuClose}>Logout</MenuItem>
                </Menu>
            </header>
        )
    }
}

export default Navbar
