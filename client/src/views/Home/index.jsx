import React from 'react';

import NavBar from '../../Components/NavBar'
import Hero from '../../Components/Strips/Hero';
import How from '../../Components/Strips/How';
import Features from '../../Components/Strips/Features';
import Try from '../../Components/Strips/Try';
import Login from '../../Components/Strips/Login';

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