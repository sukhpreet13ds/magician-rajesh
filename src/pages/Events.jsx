import React from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';
import FooterSection from '../components/FooterSection';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';
import event4 from '../assets/event4.png';

const Events = () => {
    const eventsList = [
        {
            id: 1,
            image: event1,
            date: "Thursday 1st of January",
            title: "Magician Rajesh Kumar's Mind-blowing Performance At Elitecisos Corporate Event In Mumbai"
        },
        {
            id: 2,
            image: event2,
            date: "Thursday 1st of January",
            title: "YES Bank R&R; Rewards and Recognition Event in Lonavala Elevated by the Mesmerizing Performance of Magician Rajesh Kumar Fariyas Resort Lonavala"
        },
        {
            id: 3,
            image: event3,
            date: "Thursday 1st of January",
            title: "Magician Rajesh Kumar Mesmerizes Crowd At Deolali Nashik"
        },
        {
            id: 4,
            image: event4,
            date: "Thursday 1st of January",
            title: "Rajesh Kumar close-up magic performance at the Amazon AWS event in Hyderabad Novotel Hyderabad Convention Centre"
        },
        {
            id: 5,
            image: event1,
            date: "Thursday 1st of January",
            title: "Magician Rajesh Kumar's Mind-blowing Performance At Elitecisos Corporate Event In Mumbai"
        },
        {
            id: 6,
            image: event2,
            date: "Thursday 1st of January",
            title: "YES Bank R&R; Rewards and Recognition Event in Lonavala Elevated by the Mesmerizing Performance of Magician Rajesh Kumar Fariyas Resort Lonavala"
        },
        {
            id: 7,
            image: event3,
            date: "Thursday 1st of January",
            title: "Magician Rajesh Kumar Mesmerizes Crowd At Deolali Nashik"
        },
        {
            id: 8,
            image: event4,
            date: "Thursday 1st of January",
            title: "Rajesh Kumar close-up magic performance at the Amazon AWS event in Hyderabad Novotel Hyderabad Convention Centre"
        },
        {
            id: 9,
            image: event1,
            date: "Thursday 1st of January",
            title: "Magician Rajesh Kumar's Mind-blowing Performance At Elitecisos Corporate Event In Mumbai"
        },
        {
            id: 10,
            image: event2,
            date: "Thursday 1st of January",
            title: "YES Bank R&R; Rewards and Recognition Event in Lonavala Elevated by the Mesmerizing Performance of Magician Rajesh Kumar Fariyas Resort Lonavala"
        },
        {
            id: 11,
            image: event3,
            date: "Thursday 1st of January",
            title: "Magician Rajesh Kumar Mesmerizes Crowd At Deolali Nashik"
        },
        {
            id: 12,
            image: event4,
            date: "Thursday 1st of January",
            title: "Rajesh Kumar close-up magic performance at the Amazon AWS event in Hyderabad Novotel Hyderabad Convention Centre"
        }
    ];

    return (
        <div className="events-page-wrapper">
            {/* ===== EVENTS HERO SECTION ===== */}
            <section className="events-page-hero" style={{ backgroundImage: `url(${backWall})` }}>
                <div className="events-page-overlay"></div>

                <div className="events-page-container">
                    <div className="events-page-header">
                        <p className="events-cursive-tag">Moments of Magic</p>
                        <h1 className="events-page-title">EVENTS</h1>
                        <h2 className="events-page-subtitle">Magician Rajesh Kumar</h2>
                        <p className="events-page-description">
                            Glimpse of recent shows, corporate galas, stage illusions, and recognition events across the globe.
                        </p>
                    </div>

                    {/* Events Grid Layout */}
                    <div className="events-page-grid">
                        {eventsList.map((eventItem, index) => (
                            <motion.div 
                                key={eventItem.id} 
                                className="events-grid-card-wrap"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.04 }}
                            >
                                <Link to={`/event-view`} className="events-grid-card">
                                    <div className="events-grid-img-wrap">
                                        <img src={eventItem.image} alt={eventItem.title} className="events-grid-img" />
                                    </div>
                                    <div className="events-grid-body">
                                        <span className="events-grid-badge">{eventItem.date}</span>
                                        <h3 className="events-grid-card-title">{eventItem.title}</h3>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== FOOTER SECTION ===== */}
            <FooterSection />
        </div>
    );
};

export default Events;
