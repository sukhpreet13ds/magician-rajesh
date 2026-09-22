import React, { useState, useEffect } from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import eventD1 from '../assets/event-d1.png';
import eventD2 from '../assets/event-d2.png';
import eventD3 from '../assets/event-d3.png';
import eventD4 from '../assets/event-d4.png';
import eventD5 from '../assets/event-d5.png';
import eventD6 from '../assets/event-d6.png';
import eventD7 from '../assets/event-d7.png';
import eventD8 from '../assets/event-d8.png';
import eventD9 from '../assets/event-d9.png';
import eventD10 from '../assets/event-d10.png';
import eventD11 from '../assets/event-d11.png';

const EventView = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const eventPhotos = [
        { id: 1, image: eventD1, title: "Stage Illusions Performance" },
        { id: 2, image: eventD2, title: "Corporate Screen Magic" },
        { id: 3, image: eventD3, title: "Visual Mind Reading" },
        { id: 4, image: eventD4, title: "Audience Stage Interaction" },
        { id: 5, image: eventD5, title: "Live Magic Showcase" },
        { id: 6, image: eventD6, title: "Corporate Event Gathering" },
        { id: 7, image: eventD7, title: "Digital Screen Illusion" },
        { id: 8, image: eventD8, title: "Interactive Card & Mind Trick" },
        { id: 9, image: eventD9, title: "Spotlight Magic Act" },
        { id: 10, image: eventD10, title: "Audience Surprise Moment" },
        { id: 11, image: eventD11, title: "Stage Finale Magic" }
    ];

    const handlePrevImage = (e) => {
        if (e) e.stopPropagation();
        if (!selectedImage || eventPhotos.length === 0) return;
        const currentIndex = eventPhotos.findIndex(p => p.id === selectedImage.id);
        const prevIndex = (currentIndex - 1 + eventPhotos.length) % eventPhotos.length;
        setSelectedImage(eventPhotos[prevIndex]);
    };

    const handleNextImage = (e) => {
        if (e) e.stopPropagation();
        if (!selectedImage || eventPhotos.length === 0) return;
        const currentIndex = eventPhotos.findIndex(p => p.id === selectedImage.id);
        const nextIndex = (currentIndex + 1) % eventPhotos.length;
        setSelectedImage(eventPhotos[nextIndex]);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!selectedImage) return;
            if (e.key === 'ArrowLeft') {
                handlePrevImage();
            } else if (e.key === 'ArrowRight') {
                handleNextImage();
            } else if (e.key === 'Escape') {
                setSelectedImage(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <div className="event-view-wrapper">
            {/* ===== EVENT VIEW HERO SECTION ===== */}
            <section className="event-view-hero" style={{ backgroundImage: `url(${backWall})` }}>
                <div className="event-view-overlay"></div>

                <div className="event-view-container">
                    <div className="event-view-header animate-on-scroll">
                        <p className="event-view-cursive-tag">Exclusive Performance Highlights</p>
                        <h1 className="event-view-main-title">RAJESH KUMAR</h1>
                        <h2 className="event-view-sub-title">LIVE @ MUMBAI FOR CORPORATE</h2>
                    </div>

                    {/* Photos Grid Collage */}
                    <div className="event-view-grid">
                        {eventPhotos.map((photo) => (
                            <div 
                                key={photo.id}
                                className="event-view-card animate-on-scroll"
                                onClick={() => setSelectedImage(photo)}
                            >
                                <div className="event-view-img-wrap">
                                    <img src={photo.image} alt={photo.title} className="event-view-img" />
                                    <div className="event-view-card-overlay">
                                        <span className="event-view-zoom-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                <circle cx="11" cy="11" r="8"></circle>
                                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                                <line x1="8" y1="11" x2="14" y2="11"></line>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div 
                        className="event-view-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <div className="event-view-modal-content" onClick={e => e.stopPropagation()}>
                            <button className="event-view-modal-close" onClick={() => setSelectedImage(null)}>×</button>

                            {eventPhotos.length > 1 && (
                                <>
                                    <button 
                                        className="event-view-modal-nav prev-btn" 
                                        onClick={handlePrevImage}
                                        aria-label="Previous image"
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    <button 
                                        className="event-view-modal-nav next-btn" 
                                        onClick={handleNextImage}
                                        aria-label="Next image"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </>
                            )}

                            <img src={selectedImage.image} alt={selectedImage.title} className="event-view-modal-img" />
                            <p className="event-view-modal-caption">{selectedImage.title}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EventView;
