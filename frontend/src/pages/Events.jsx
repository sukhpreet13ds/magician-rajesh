import React, { useEffect, useState } from 'react';
import './style/style.css';
import backWallFallback from '../assets/back-wall.jpg';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';

const DEFAULT_CONTENT = {
    tag: 'Moments of Magic',
    heading: 'EVENTS',
    subheading: 'Magician Rajesh Kumar',
    description: 'Glimpse of recent shows, corporate galas, stage illusions, and recognition events across the globe.',
};

const Events = () => {
    const [c, setC] = useState(DEFAULT_CONTENT);
    const [heroImage, setHeroImage] = useState(backWallFallback);
    const [eventsList, setEventsList] = useState([]);

    useEffect(() => {
        api
            .pageContent('events')
            .then((page) => {
                setC((prev) => ({ ...prev, ...page.content }));
                if (page.heroImage) setHeroImage(page.heroImage);
            })
            .catch(() => {});
        api
            .events()
            .then((items) => setEventsList(items))
            .catch(() => {});
    }, []);

    return (
        <div className="events-page-wrapper">
            {/* ===== EVENTS HERO SECTION ===== */}
            <section className="events-page-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="events-page-overlay"></div>

                <div className="events-page-container">
                    <div className="events-page-header animate-on-scroll">
                        <p className="events-cursive-tag">{c.tag}</p>
                        <h1 className="events-page-title">{c.heading}</h1>
                        <h2 className="events-page-subtitle">{c.subheading}</h2>
                        <p className="events-page-description">
                            {c.description}
                        </p>
                    </div>

                    {/* Events Grid Layout */}
                    <div className="events-page-grid">
                        {eventsList.map((eventItem) => (
                            <div key={eventItem.id} className="events-grid-card-wrap animate-on-scroll">
                                <Link to={`/events/${eventItem.slug}`} className="events-grid-card">
                                    <div className="events-grid-img-wrap">
                                        <img src={eventItem.cardImageUrl} alt={eventItem.title} className="events-grid-img" />
                                    </div>
                                    <div className="events-grid-body">
                                        <span className="events-grid-badge">{eventItem.displayDate}</span>
                                        <h3 className="events-grid-card-title">{eventItem.title}</h3>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Events;
