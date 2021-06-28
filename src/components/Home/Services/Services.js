import React from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';
const serviceData = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amLorem ipsum dolor sit amLorem ipsum dolor sit am',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit amLorem ipsum dolor sit am',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit ametLorem ipsum dolor sit am Lorem ipsum dolor sit am',
        img: whitening
    }
]
const Services = () => {
    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {
                        serviceData.map(service => <ServiceDetail service={service} key={service.name}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;