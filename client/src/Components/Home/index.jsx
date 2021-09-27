import React from 'react';

import NavBar from './../NavBar'
import Hero from './../Strips/Hero';
import How from './../Strips/How';
import Features from './../Strips/Features';
import Try from './../Strips/Try';
import Login from './../Strips/Login';

const Home = () => {
    return ( 
        <div className="home">
            <NavBar />
            <Hero />
            <Features />
            <How />
            <Login />
            <Try />
        </div>
    );
}
 
export default Home;