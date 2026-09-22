import React, { useState, useEffect } from 'react';
import './style/style.css';
import backWallFallback from '../assets/back-wall.jpg';
import magicianRajeshFallback from '../assets/magician-rajesh.png';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';

const DEFAULT_CONTENT = {
    tag: 'The Illusionist',
    heading: 'ABOUT',
    subheading: 'Magician Rajesh Kumar',
    portraitImage: magicianRajeshFallback,
    bioParagraphs: [],
    ctaText: 'CONTACT ME',
    eventsTag: 'Glimpse of excellence',
    eventsHeading: 'RECENT EVENTS',
    eventsSubtitle: 'Glimpse of recent events of Magician Rajesh Kumar',
    eventsBtnText: 'VIEW MORE EVENTS',
};

const About = () => {
    const [selectedCards, setSelectedCards] = useState({});
    const [c, setC] = useState(DEFAULT_CONTENT);
    const [heroImage, setHeroImage] = useState(backWallFallback);
    const [recentEvents, setRecentEvents] = useState([]);

    const toggleCard = (id) => {
        setSelectedCards(prev => ({ ...prev, [id]: !prev[id] }));
    };

    useEffect(() => {
        api
            .pageContent('about')
            .then((page) => {
                setC((prev) => ({ ...prev, ...page.content }));
                if (page.heroImage) setHeroImage(page.heroImage);
            })
            .catch(() => {});
        api
            .events(4)
            .then((items) => setRecentEvents(items))
            .catch(() => {});
    }, []);

    return (
        <div className="about-page-wrapper">
            {/* ===== HERO / ABOUT SECTION ===== */}
            <section className="about-hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="about-hero-overlay"></div>

                <div className="about-hero-container">
                    {/* Left Column: Playing Cards Fan Deck */}
                    <div className="about-image-column animate-on-scroll">
                        <div className="about-cards-fan-container">
                            {/* Card 1: 10 ♠ */}
                            <div
                                className={`card black ${selectedCards[1] ? 'selected' : ''}`}
                                onClick={() => toggleCard(1)}
                            >
                                <section><span>10</span><span>♠</span></section>
                                <section>♠</section>
                            </div>

                            {/* Card 2: 6 ♥ */}
                            <div
                                className={`card red ${selectedCards[2] ? 'selected' : ''}`}
                                onClick={() => toggleCard(2)}
                            >
                                <section><span>6</span><span>♥</span></section>
                                <section>♥</section>
                            </div>

                            {/* Card 3: J ♣ */}
                            <div
                                className={`card black ${selectedCards[3] ? 'selected' : ''}`}
                                onClick={() => toggleCard(3)}
                            >
                                <section><span>J</span><span>♣</span></section>
                                <section>♣</section>
                            </div>

                            {/* Card 4: 4 ♦ */}
                            <div
                                className={`card red ${selectedCards[4] ? 'selected' : ''}`}
                                onClick={() => toggleCard(4)}
                            >
                                <section><span>4</span><span>♦</span></section>
                                <section>♦</section>
                            </div>

                            {/* Card 5: Magician Rajesh Card Frame */}
                            <div
                                className={`card magician-card ${selectedCards[5] ? 'selected' : ''}`}
                                onClick={() => toggleCard(5)}
                            >
                                <div className="magician-card-frame">
                                    <span className="magician-card-badge">A♠</span>
                                    <img src={c.portraitImage} alt="Magician Rajesh Kumar" className="magician-card-img" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Bio Content */}
                    <div className="about-text-column animate-on-scroll">
                        <p className="about-cursive-tag">{c.tag}</p>
                        <h1 className="about-main-title">{c.heading}</h1>
                        <h2 className="about-sub-heading">{c.subheading}</h2>

                        <div className="about-bio-text">
                            {c.bioParagraphs.map((p, i) => (
                                <p key={i}>{p}</p>
                            ))}
                        </div>

                        <Link to="/contact" className="about-contact-btn">{c.ctaText}</Link>
                    </div>
                </div>
            </section>

            {/* ===== RECENT EVENTS SECTION ===== */}
            <section className="recent-events-section">
                <div className="recent-events-container">
                    <div className="recent-events-header animate-on-scroll">
                        <p className="recent-cursive-tag">{c.eventsTag}</p>
                        <h2 className="recent-events-title">{c.eventsHeading}</h2>
                        <p className="recent-events-subtitle">{c.eventsSubtitle}</p>
                    </div>

                    <div className="recent-events-grid">
                        {recentEvents.map(event => (
                            <Link to={`/events/${event.slug}`} key={event.id} style={{textDecoration: 'none'}}>
                            <div className="event-card animate-on-scroll">
                                <div className="event-card-img-wrap">
                                    <img src={event.cardImageUrl} alt={event.title} className="event-card-img" />
                                </div>
                                <div className="event-card-body">
                                    <span className="event-badge">{event.displayDate}</span>
                                    <h3 className="event-title">{event.title}</h3>
                                </div>
                            </div>
                            </Link>
                        ))}
                    </div>

                    <div className="recent-events-btn-wrap animate-on-scroll">
                        <Link to="/events"> <button className="view-more-events-btn">{c.eventsBtnText}</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
