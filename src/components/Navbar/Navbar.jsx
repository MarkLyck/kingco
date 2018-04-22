import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import Menu, { MenuItem } from 'material-ui/Menu';
import KeyboardArrowDown from 'material-ui-icons/KeyboardArrowDown'
import Logo from '../../media/logo.svg'

class Navbar extends React.Component {
    state = {
        gibAnchorEl: null,
        aboutAnchorEl: null,
    }

    goto = (path) => {
        this.handleAboutMenuClose()
        this.handleGibMenuClose()
        this.props.history.replace(path)
    }

    handleGibMenuOpen = event => {
        event.preventDefault()
        this.setState({ gibAnchorEl: event.currentTarget })
    }
    handleGibMenuClose = () => this.setState({ gibAnchorEl: null })
    
    handleAboutMenuOpen = event => {
        event.preventDefault()
        this.setState({ aboutAnchorEl: event.currentTarget })
    }
    handleAboutMenuClose = () => this.setState({ aboutAnchorEl: null })

    render() {
        const { gibAnchorEl, aboutAnchorEl } = this.state;

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
                        <a href="" className="withIcon" onClick={this.handleAboutMenuOpen} aria-haspopup="true" aria-owns={aboutAnchorEl ? 'about-menu' : null}>
                            About <KeyboardArrowDown className="rightIcon" />
                        </a>
                    </li>
                    <li className="menu-item">
                        <a href="" className="withIcon" onClick={this.handleGibMenuOpen} aria-haspopup="true" aria-owns={gibAnchorEl ? 'gib-menu' : null}>
                            Gibraltar <KeyboardArrowDown className="rightIcon" />
                        </a>
                    </li>
                </ul>
                <Menu
                    id="about-menu"
                    anchorEl={aboutAnchorEl}
                    open={Boolean(aboutAnchorEl)}
                    onClose={this.handleAboutMenuClose}
                    >
                    <MenuItem onClick={() => this.goto('/about/services')}>Services</MenuItem>
                    <MenuItem onClick={() => this.goto('/about/code_of_conduct')}>Code of Conduct</MenuItem>
                </Menu>
                <Menu
                    id="gib-menu"
                    anchorEl={gibAnchorEl}
                    open={Boolean(gibAnchorEl)}
                    onClose={this.handleGibMenuClose}
                    >
                    <MenuItem onClick={() => this.goto('/gibraltar/about')}>About</MenuItem>\
                    <MenuItem onClick={() => this.goto('/gibraltar/relocation')}>Relocation</MenuItem>
                    <MenuItem onClick={() => this.goto('/gibraltar/cat2_hepps')}>Cat 2 & HEPPS</MenuItem>
                    <MenuItem onClick={() => this.goto('/gibraltar/residency')}>Residency</MenuItem>
                    <MenuItem onClick={() => this.goto('/gibraltar/tax')}>Tax</MenuItem>
                    <MenuItem onClick={() => this.goto('/gibraltar/stamp_duty')}>Stamp Duty</MenuItem>
                    <MenuItem onClick={() => this.goto('/gibraltar/schooling')}>Schooling</MenuItem>
                </Menu>
            </header>
        )
    }
}

export default Navbar
