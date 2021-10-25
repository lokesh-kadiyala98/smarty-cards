import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom'

import Logo from '../Logo/index';

import './style.scss'

const Header = () => {
    const [hideNav, setHideNav] = useState(false);
    const [mobileNavToogle, setMobileNavToogle] = useState(false);
    let lastScroll;

    function scrollHandler() {
        const currentScroll = window.scrollY

        if (currentScroll <= 0) {
            setHideNav(false)
            return;
        }

        if (currentScroll > lastScroll && !hideNav) {
            setHideNav(true)
        } else if (currentScroll < lastScroll && hideNav) {
            setHideNav(false)
        }

        lastScroll = currentScroll
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler);
        return () => {
            window.removeEventListener('scroll', scrollHandler);
        }
    })

    const hamburgerClick = () => {
        setMobileNavToogle(!mobileNavToogle)
    }

    return ( 
        <nav className={hideNav && 'hide-nav'}>
            <div className="logo">
                <Logo />
            </div>

            <div className={mobileNavToogle ? "hamburger toggle" : "hamburger"} onClick={hamburgerClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <ul className={mobileNavToogle ? "nav-links open" : "nav-links"}>
                <li className={mobileNavToogle && 'fade show'}>
                    <NavLink exact to="/">
                        Home
                    </NavLink>
                </li>
                
                <li className={mobileNavToogle && 'fade show'}>
                    <NavLink to="/features">
                        Features
                    </NavLink>
                </li>

                <li className={mobileNavToogle && 'fade show'}>
                    <NavLink to="/how">
                        How It Works
                    </NavLink>
                </li>
    
                <li className={mobileNavToogle && 'fade show'}>
                    <NavLink to="/try">
                        Try Out!
                    </NavLink>
                </li>
    
                <li className={mobileNavToogle && 'fade show'}>
                    <NavLink to="/login">
                        Login
                    </NavLink>    
                </li>
            </ul>
        </nav>
    );
}
 
export default Header;