import React, { useEffect, useState } from 'react';
import './style/style.css';
import backWallFallback from '../assets/back-wall.jpg';
import FooterSection from '../components/FooterSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';

const DEFAULT_CONTENT = {
    tag: 'World Class Acts',
    heading: 'SERVICES',
    subheading: 'Magician Rajesh Kumar',
    description:
        'My non stop show is packed with thrilling & sophisticated illusions of unprecedented proportions wherein the audience witnesses stunning acts of Digital Magic, Mind Reading, Visual illusions and more ..',
    bottomBtnText: 'VIEW MORE SERVICES',
};

const Services = () => {
    const [c, setC] = useState(DEFAULT_CONTENT);
    const [heroImage, setHeroImage] = useState(backWallFallback);
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        api
            .pageContent('services')
            .then((page) => {
                setC((prev) => ({ ...prev, ...page.content }));
                if (page.heroImage) setHeroImage(page.heroImage);
            })
            .catch(() => {});
        api
            .services()
            .then((items) => setServicesList(items))
            .catch(() => {});
    }, []);

    return (
        <div className="services-page-wrapper">
            {/* ===== SERVICES HERO SECTION ===== */}
            <section className="services-page-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="services-page-overlay"></div>

                <div className="services-page-container">
                    <div className="services-page-header animate-on-scroll">
                        <p className="services-cursive-tag">{c.tag}</p>
                        <h1 className="services-page-title">{c.heading}</h1>
                        <h2 className="services-page-subtitle">{c.subheading}</h2>
                        <p className="services-page-description">
                            {c.description}
                        </p>
                    </div>

                    {/* Services Cards Grid */}
                    <div className="services-grid">
                        {servicesList.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className="service-grid-card-wrap animate-on-scroll"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                            >
                                <Link to={`/services/${service.slug}`} className="service-grid-card">
                                    <div className="service-grid-img-wrap">
                                        <img src={service.cardImageUrl} alt={service.title} className="service-grid-img" />
                                    </div>
                                    <h3 className="service-grid-title">{service.title}</h3>
                                </Link>
                            </motion.div>
                        ))}
                    </div>

                    <div className="services-page-btn-wrap animate-on-scroll">
                        <button className="view-more-services-btn">{c.bottomBtnText}</button>
                    </div>
                </div>
            </section>

            {/* ===== FOOTER SECTION ===== */}
            <FooterSection />
        </div>
    );
};

export default Services;
