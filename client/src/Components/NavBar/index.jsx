import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

import Logo from '../Logo/index';

import './style.scss'

const Header = () => {
    const [mobileNav, setMobileNav] = useState(false);
    const [mobileNavToogle, setMobileNavToogle] = useState(false);

    const handler = () => {
        if (window.scrollY > 300 && !mobileNav)
            setMobileNav(true)
        else if (window.scrollY < 300 && mobileNav) 
            setMobileNav(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', handler);
        return () => {
            window.removeEventListener('scroll', handler);
        }
    })

    const hamburgerClick = () => {
        setMobileNavToogle(!mobileNavToogle)
    }

    return ( 
        <nav>
            <div className="logo">
                <Logo />
            </div>

            <div className={mobileNavToogle ? "hamburger toggle" : "hamburger"} onClick={hamburgerClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <ul className={mobileNavToogle ? "nav-links open" : "nav-links"}>
                <li className={mobileNavToogle ? 'fade show': undefined}>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                
                <li className={mobileNavToogle ? 'fade show': undefined}>
                    <NavLink to="/features">
                        Features
                    </NavLink>
                </li>

                <li className={mobileNavToogle ? 'fade show': undefined}>
                    <NavLink to="/how">
                        How It Works
                    </NavLink>
                </li>
    
                <li className={mobileNavToogle ? 'fade show': undefined}>
                    <NavLink to="/try">
                        Try Out!
                    </NavLink>
                </li>
    
                <li className={mobileNavToogle ? 'fade show': undefined}>
                    <NavLink to="/login">
                        Login
                    </NavLink>    
                </li>
            </ul>
        </nav>
    );
}
 
export default Header;