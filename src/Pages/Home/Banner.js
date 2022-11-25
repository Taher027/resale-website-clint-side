import React from 'react';
import banner from '../../assets/banner.jpeg'

const Banner = () => {
    return (
        <div>
            <div className="hero h-1/2" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">WELCOME TO BUY & SELL</h1>
                        <p className="mb-5">FOr selling or buying any secondhand phone, You are welcome to this site. Hope you will find your best one. </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;