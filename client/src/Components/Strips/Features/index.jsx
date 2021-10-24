import React from 'react';

import './style.scss';

const Features = () => {
    return ( 
        <main className="features-section">
            <div className="features">
                <div className="feature">
                    <img 
                        alt=""
                        className="center pt-4 pb-4 mt-5 mb-3"
                        src="https://smarty-cards.s3.ap-south-1.amazonaws.com/resources/img/easy-to-use.webp" 
                    />

                    <div className="feature-text text-center mb-5">
                        <p className="mb-0">Easy</p>
                        <p>to Use</p>
                    </div>
                </div>

                <div className="feature">
                    <img 
                        alt=""
                        className="center pt-4 pb-4 mt-5 mb-3"
                        src="https://smarty-cards.s3.ap-south-1.amazonaws.com/resources/img/intutive.webp" 
                    />

                    <div className="feature-text text-center mb-5">
                        <p className="mb-0">Interactive and</p>
                        <p>Intuitive</p>
                    </div>
                </div>

                <div className="feature">
                    <img 
                        alt=""
                        className="center pt-4 pb-4 mt-5 mb-3"
                        src="https://smarty-cards.s3.ap-south-1.amazonaws.com/resources/img/progress-tracking.webp" 
                    />

                    <div className="feature-text text-center mb-5">
                        <p className="mb-0">Progress</p>
                        <p>Tracking</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
 
export default Features;