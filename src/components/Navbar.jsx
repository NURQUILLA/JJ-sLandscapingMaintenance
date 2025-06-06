import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {transparentLogo} from "../assets/images/index.jsx";

export const Navbar = () => {
    const location = useLocation();
    const isActive = (pathname) => location.pathname === pathname;

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <img
                    src={transparentLogo}
                    alt="Logo"
                    className="navbar-logo"
                />
            </div>
                <div className="navbar-right">
                    <Link to='/'
                          className={`nav-link ${isActive('/') ? 'active' : ''}`}
                    >
                        Home

                    </Link>

                    <Link to='/services'
                          className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                    > Services

                    </Link>

                    <Link to='/reviews'
                          className={`nav-link ${isActive('/reviews') ? 'active' : ''}`}
                    > Reviews
                    </Link>

                    <Link to='/quotes'
                          className={`nav-link ${isActive('/quotes') ? 'active' : ''}`}
                    > Contact Us
                    </Link>
                </div>
        </nav>
)
}

export default Navbar;