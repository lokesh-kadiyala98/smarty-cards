import React from 'react';

import './style.scss'

const Hero = () => {
    return ( 
        <header>
            <div className="hero">
                <div className="hero-text">
                    <h1>Smarty Cards</h1>
                    <h2>Memorization, no longer mundane</h2>
                </div>
                
                <div className="image">
                    <img 
                        src='https://smarty-cards.s3.ap-south-1.amazonaws.com/resources/img/3d-rubix-cube.png' 
                        alt='rubix cube'    
                    />
                </div>
            </div>            
        </header>
    );
}
 
export default Hero;