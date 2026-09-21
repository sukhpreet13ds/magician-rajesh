import React from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';
import FooterSection from '../components/FooterSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import inService1 from '../assets/in-service1.png';
import inService2 from '../assets/in-service2.png';
import inService3 from '../assets/in-service3.png';
import inService4 from '../assets/in-service4.png';
import inService5 from '../assets/in-service5.png';
import inService6 from '../assets/in-service6.png';
import inService7 from '../assets/in-service7.png';
import inService8 from '../assets/in-service8.png';
import inService9 from '../assets/in-service9.png';
import inService10 from '../assets/in-service10.png';
import inService11 from '../assets/in-service11.png';
import inService12 from '../assets/in-service12.png';

const Services = () => {
    const servicesList = [
        { id: 1, title: "MENTALISM SHOWS", image: inService1 },
        { id: 2, title: "MENTALIST", image: inService2 },
        { id: 3, title: "MIND READING SHOWS", image: inService3 },
        { id: 4, title: "ILLUSION SHOW", image: inService4 },
        { id: 5, title: "ONLINE EVENT", image: inService5 },
        { id: 6, title: "ONLINE MAGIC SHOWS", image: inService6 },
        { id: 7, title: "PRIVATE PARTIES", image: inService7 },
        { id: 8, title: "STAGE MAGIC", image: inService8 },
        { id: 9, title: "TRADE SHOWS", image: inService9 },
        { id: 10, title: "VIRTUAL EVENT", image: inService10 },
        { id: 11, title: "IPAD MAGIC", image: inService11 },
        { id: 12, title: "CLOSE-UP MAGIC", image: inService12 },
    ];

    return (
        <div className="services-page-wrapper">
            {/* ===== SERVICES HERO SECTION ===== */}
            <section className="services-page-hero" style={{ backgroundImage: `url(${backWall})` }}>
                <div className="services-page-overlay"></div>

                <div className="services-page-container">
                    <div className="services-page-header">
                        <p className="services-cursive-tag">World Class Acts</p>
                        <h1 className="services-page-title">SERVICES</h1>
                        <h2 className="services-page-subtitle">Magician Rajesh Kumar</h2>
                        <p className="services-page-description">
                            My non stop show is packed with thrilling & sophisticated illusions of unprecedented proportions wherein the audience witnesses stunning acts of Digital Magic, Mind Reading, Visual illusions and more ..
                        </p>
                    </div>

                    {/* Services Cards Grid */}
                    <div className="services-grid">
                        {servicesList.map((service, index) => (
                            <motion.div 
                                key={service.id} 
                                className="service-grid-card-wrap"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <Link to={`/service-view`} className="service-grid-card">
                                    <div className="service-grid-img-wrap">
                                        <img src={service.image} alt={service.title} className="service-grid-img" />
                                    </div>
                                    <h3 className="service-grid-title">{service.title}</h3>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="services-page-btn-wrap">
                        <button className="view-more-services-btn">VIEW MORE SERVICES</button>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER SECTION ===== */}
            <FooterSection />
        </div>
    );
};

export default Services;
