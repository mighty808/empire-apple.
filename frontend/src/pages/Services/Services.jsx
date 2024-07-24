import React from 'react';
import './Services.css';
import service1Image from '../../assets/service1.jpg';
import service2Image from '../../assets/service2.png';
import service3Image from '../../assets/service3.jpg';
import service4Image from '../../assets/service6.jpg';

const Services = () => {
    return (
        <>
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
