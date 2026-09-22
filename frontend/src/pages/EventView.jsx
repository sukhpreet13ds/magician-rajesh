import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './style/style.css';
import backWallFallback from '../assets/back-wall.jpg';
import { AnimatePresence, motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { api } from '../lib/api';

const EventView = () => {
    const { slug } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [event, setEvent] = useState(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        setEvent(null);
        setNotFound(false);
        setSelectedImage(null);
        api
            .event(slug)
            .then((data) => setEvent(data))
            .catch(() => setNotFound(true));
    }, [slug]);

    const eventPhotos = event?.photos || [];

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
    }, [selectedImage, eventPhotos]);

    if (notFound) {
        return (
            <div className="event-view-wrapper">
                <section className="event-view-hero" style={{ backgroundImage: `url(${backWallFallback})` }}>
                    <div className="event-view-overlay"></div>
                    <div className="event-view-container">
                        <h1 className="event-view-main-title">Event not found</h1>
                        <p><Link to="/events">Back to Events</Link></p>
                    </div>
                </section>
            </div>
        );
    }

    if (!event) return null;

    return (
        <div className="event-view-wrapper">
            {/* ===== EVENT VIEW HERO SECTION ===== */}
            <section className="event-view-hero" style={{ backgroundImage: `url(${backWallFallback})` }}>
                <div className="event-view-overlay"></div>

                <div className="event-view-container">
                    <div className="event-view-header animate-on-scroll">
                        <p className="event-view-cursive-tag">{event.detailTag || 'Exclusive Performance Highlights'}</p>
                        <h1 className="event-view-main-title">{event.detailHeading || event.title}</h1>
                        {event.detailSubheading && (
                            <h2 className="event-view-sub-title">{event.detailSubheading}</h2>
                        )}
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
                                    <img src={photo.imageUrl} alt={photo.title} className="event-view-img" />
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

                            <img src={selectedImage.imageUrl} alt={selectedImage.title} className="event-view-modal-img" />
                            <p className="event-view-modal-caption">{selectedImage.title}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default EventView;
