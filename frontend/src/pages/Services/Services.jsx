import React from 'react';
import './Services.css';
import fixImage from '../../assets/fix.jpg';
import buyImage from '../../assets/buyused.jpg';
import sellImage from '../../assets/sell.jpg';
import swapImage from '../../assets/swap.jpg';  
import service1Image from '../../assets/service1.jpg';
import service2Image from '../../assets/service2.png';
import service3Image from '../../assets/service3.jpg';
import service4Image from '../../assets/service6.jpg';

const Services = () => {
    return (
        <>
        <h1>Services</h1>
            <div className="service-grid">
                <div className="grid-item">
                    <img src={sellImage} alt="Sell" />
                    <div className="service-label">i-Sell</div>
                </div>
                <div className="grid-item">
                    <img src={buyImage} alt="Buy" />
                    <div className="service-label">i-Buy</div>
                </div>
                <div className="grid-item">
                    <img src={swapImage} alt="Swap" />
                    <div className="service-label">i-Swap</div>
                </div>
                <div className="grid-item">
                    <img src={fixImage} alt="Fix" />
                    <div className="service-label">i-Fix</div>
                </div>
            </div>

            <div className="services-page">
                <div className="service-item">
                    <div className="service-content">
                        <h2>Out of Office</h2>
                        <p>Apple at Work works from anywhere.</p>
                    </div>
                    <img className='img' src={service1Image} alt="Service 1" />
                </div>
                <div className="service-item">
                    <div className="service-content">
                        <h2>Apple Intelligence</h2>
                        <p>AI for the rest of us. Coming in beta this fall!</p>
                    </div>
                    <img className='img' src={service2Image} alt="Service 2" />
                </div>
            </div>

            <div className='sect-column'>
                <div className="service-item">
                    <img className='img' src={service3Image} alt="Service 3" />
                </div>
                <div className="service-item">
                    <img className='img2' src={service4Image} alt="Service 4" />
                </div>
            </div>
        </>
    );
};

export default Services;
