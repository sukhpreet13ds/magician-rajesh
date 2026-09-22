import React, { useState } from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';
import magicianRajesh from '../assets/magician-rajesh.png';
import igtStage from '../assets/igt-stage.png';
import event1 from '../assets/magice-service1.png';
import event2 from '../assets/magic-service2.png';
import event3 from '../assets/magice-service3.png';
import { Link } from 'react-router-dom';

const About = () => {
    const [selectedCards, setSelectedCards] = useState({});

    const toggleCard = (id) => {
        setSelectedCards(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const recentEvents = [
        {
            id: 1,
            image: igtStage,
            date: "Thursday 1st of January",
            title: "Magician Rajesh Kumar's Mind-blowing Performance At Elitecisos Corporate Event In Mumbai"
        },
        {
            id: 2,
            image: event1,
            date: "Thursday 1st of January",
            title: "YES Bank R&R; Rewards and Recognition Event in Lonavala Elevated by the Mesmerizing Performance of Magician Rajesh Kumar Fariyas Resort Lonavala"
        },
        {
            id: 3,
            image: event2,
            date: "Thursday 1st of January",
            title: "Magician Rajesh Kumar Mesmerizes Crowd At Deolali Nashik"
        },
        {
            id: 4,
            image: event3,
            date: "Thursday 1st of January",
            title: "Rajesh Kumar close-up magic performance at the Amazon AWS event in Hyderabad Novotel Hyderabad Convention Centre"
        }
    ];

    return (
        <div className="about-page-wrapper">
            {/* ===== HERO / ABOUT SECTION ===== */}
            <section className="about-hero-section" style={{ backgroundImage: `url(${backWall})` }}>
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
                                    <img src={magicianRajesh} alt="Magician Rajesh Kumar" className="magician-card-img" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Bio Content */}
                    <div className="about-text-column animate-on-scroll">
                        <p className="about-cursive-tag">The Illusionist</p>
                        <h1 className="about-main-title">ABOUT</h1>
                        <h2 className="about-sub-heading">Magician Rajesh Kumar</h2>

                        <div className="about-bio-text">
                            <p>
                                Mr. Rajesh Kumar is a Mumbai based illusionist and magician. He has changed the way we look for magic. Magician Rajesh Kumar has performed for many TV channels which are both national and regional. He got fame and came under the limelight for the first time when he appeared on India's Magic Star show telecasted on the "Star One" channel. Magician Rajesh Kumar was selected in India's top 10 magicians from all over the country. Furthermore, magician & illusionist Rajesh Kumar traveled all across India and performed his magic and mentalism shows in Mumbai, Jaipur, Udaipur, Chennai, Ludhiana, Gwalior, Abohar, Patiala, Bhatinda, New Delhi, Gurgaon, and Goa. He has not just performed in India but also he has taken his magic & illusion to several foreign countries which include Hong Kong (China) and Fiji Island (Japan). He is originally based in Mumbai and magician Rajesh Kumar has worked with many TV channels for magic consultancy. He has helped many several TV producers and director in creating magic on screen. With Magician Rajesh Kumar's deep knowledge in magic, he has helped to create magic for several TV shows, reality shows such as "India's Got Talent" where Kiron Kher made a bike appeared on stage was all because of Rajesh planning and execution. That's not all, magician Rajesh Kumar has done TV commercial for brand "Pizza Hut".
                            </p>
                            <p>
                                Magician Rajesh Kumar did several types of magic. You can also know more about his magic by visiting on his services page. Today Rajesh Kumar's name in the magic world is stabilized in India. Mumbai based Rajesh Kumar has made his name in corporate by performing for brands like Pizza Hut, LG, TV, Honda, Hero, Samsung, Coca-Cola, Bajaj Alliance, Omex, Hindustan Times, Datsun, Nippon Paints are few of them. Rajesh Kumar is an Illusionist, street magician, mentalist, metal bender and also a celebrity youth magician of India.
                            </p>
                            <p>
                                Magician Rajesh Kumar did all this at the age of 22.
                            </p>
                            <p>
                                India's Got Talent Season 6 2015 was one of the highest TRP ratings shows on Colors TV. He has also done a TV show named India's Magic Star show aired on Star One channel which was one of the most successful television shows on Star One channel.
                            </p>
                            <p>
                                Rajesh Kumar is India's top & modern illusionist. He is youngest and the only magician in India to do death-defying escape from the box full of RDX which was lifted in the air. Moreover, he also did world fastest costume change magic. He is the only magician in India to able to walk on the wall. Also, did famous Houdini escape on Colors TV. He was awarded Jadu Shiromani Award by Indian brotherhood of magicians (magician of the year). Furthermore, he has performed for CM in New Delhi Sheela Dixit in India's 1st magic festival and also performed vanished trick at Pitampura TV tower in New Delhi.
                            </p>
                        </div>

                        <Link to="/contact" className="about-contact-btn">CONTACT ME</Link>
                    </div>
                </div>
            </section>

            {/* ===== RECENT EVENTS SECTION ===== */}
            <section className="recent-events-section">
                <div className="recent-events-container">
                    <div className="recent-events-header animate-on-scroll">
                        <p className="recent-cursive-tag">Glimpse of excellence</p>
                        <h2 className="recent-events-title">RECENT EVENTS</h2>
                        <p className="recent-events-subtitle">Glimpse of recent events of Magician Rajesh Kumar</p>
                    </div>

                    <div className="recent-events-grid">
                        {recentEvents.map(event => (
                            <Link to="/event-view" style={{textDecoration: 'none'}}>
                            <div key={event.id} className="event-card animate-on-scroll">
                                <div className="event-card-img-wrap">
                                    <img src={event.image} alt={event.title} className="event-card-img" />
                                </div>
                                <div className="event-card-body">
                                    <span className="event-badge">{event.date}</span>
                                    <h3 className="event-title">{event.title}</h3>
                                </div>
                            </div>
                            </Link>
                        ))}
                    </div>

                    <div className="recent-events-btn-wrap animate-on-scroll">
                        <Link to="/events"> <button className="view-more-events-btn">VIEW MORE EVENTS</button></Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
