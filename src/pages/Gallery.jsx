import React, { useState, useEffect } from 'react';
import './style/style.css';
import backWallFallback from '../assets/back-wall.jpg';
import FooterSection from '../components/FooterSection';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { api } from '../lib/api';

const DEFAULT_CONTENT = {
    tag: 'Visual Spectacle',
    heading: 'GALLERY',
    subheading: 'Magician Rajesh Kumar',
    description:
        'Explore moments of wonder, mind-bending illusions, stage acts, corporate events, and live performance videos.',
};

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [modalMedia, setModalMedia] = useState(null);
    const [c, setC] = useState(DEFAULT_CONTENT);
    const [heroImage, setHeroImage] = useState(backWallFallback);
    const [galleryItems, setGalleryItems] = useState([]);

    useEffect(() => {
        api
            .pageContent('gallery')
            .then((page) => {
                setC((prev) => ({ ...prev, ...page.content }));
                if (page.heroImage) setHeroImage(page.heroImage);
            })
            .catch(() => {});
        api
            .gallery()
            .then((items) => setGalleryItems(items))
            .catch(() => {});
    }, []);

    const filteredItems = activeFilter === 'all'
        ? galleryItems
        : galleryItems.filter(item => item.category === activeFilter);

    const imageItems = filteredItems.filter(item => item.type === 'image');

    const handlePrevMedia = (e) => {
        if (e) e.stopPropagation();
        if (!modalMedia || imageItems.length === 0) return;
        const currentIndex = imageItems.findIndex(item => item.id === modalMedia.id);
        const prevIndex = (currentIndex - 1 + imageItems.length) % imageItems.length;
        setModalMedia(imageItems[prevIndex]);
    };

    const handleNextMedia = (e) => {
        if (e) e.stopPropagation();
        if (!modalMedia || imageItems.length === 0) return;
        const currentIndex = imageItems.findIndex(item => item.id === modalMedia.id);
        const nextIndex = (currentIndex + 1) % imageItems.length;
        setModalMedia(imageItems[nextIndex]);
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (!modalMedia || modalMedia.type !== 'image') return;
            if (e.key === 'ArrowLeft') {
                handlePrevMedia();
            } else if (e.key === 'ArrowRight') {
                handleNextMedia();
            } else if (e.key === 'Escape') {
                setModalMedia(null);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [modalMedia, filteredItems]);

    return (
        <div className="gallery-page-wrapper">
            {/* ===== GALLERY HERO SECTION ===== */}
            <section className="gallery-page-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="gallery-page-overlay"></div>

                <div className="gallery-page-container">
                    <div className="gallery-page-header animate-on-scroll">
                        <p className="gallery-cursive-tag">{c.tag}</p>
                        <h1 className="gallery-page-title">{c.heading}</h1>
                        <h2 className="gallery-page-subtitle">{c.subheading}</h2>
                        <p className="gallery-page-description">
                            {c.description}
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="gallery-filter-bar animate-on-scroll">
                        <button
                            className={`gallery-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('all')}
                        >
                            ALL MEDIA
                        </button>
                        <button
                            className={`gallery-filter-btn ${activeFilter === 'videos' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('videos')}
                        >
                            VIDEOS
                        </button>
                        <button
                            className={`gallery-filter-btn ${activeFilter === 'stage' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('stage')}
                        >
                            STAGE SHOWS
                        </button>
                        <button
                            className={`gallery-filter-btn ${activeFilter === 'corporate' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('corporate')}
                        >
                            CORPORATE
                        </button>
                        <button
                            className={`gallery-filter-btn ${activeFilter === 'events' ? 'active' : ''}`}
                            onClick={() => setActiveFilter('events')}
                        >
                            EVENTS
                        </button>
                    </div>

                    {/* Masonry / Grid Collage */}
                    <motion.div className="gallery-collage-grid" layout>
                        <AnimatePresence>
                            {filteredItems.map(item => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.4 }}
                                    className={`gallery-card animate-on-scroll ${item.sizeClass} ${item.type === 'video' ? 'video-card' : ''}`}
                                    onClick={() => setModalMedia(item)}
                                >
                                    {item.type === 'video' ? (
                                        <div className="gallery-video-embed-container">
                                            <iframe
                                                src={`https://www.youtube.com/embed/${item.videoEmbedId}`}
                                                title={item.title}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                                className="gallery-video-iframe"
                                            ></iframe>
                                        </div>
                                    ) : (
                                        <div className="gallery-img-container">
                                            <img
                                                src={item.imageUrl}
                                                alt={item.title}
                                                className="gallery-img"
                                            />
                                            <div className="gallery-card-overlay">
                                                <span className="gallery-card-title">{item.title}</span>
                                                <span className="gallery-zoom-icon">
                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                                        <circle cx="11" cy="11" r="8"></circle>
                                                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                                                        <line x1="11" y1="8" x2="11" y2="14"></line>
                                                        <line x1="8" y1="11" x2="14" y2="11"></line>
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Modal Lightbox for Full View */}
            <AnimatePresence>
                {modalMedia && modalMedia.type === 'image' && (
                    <motion.div
                        className="gallery-modal-backdrop"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setModalMedia(null)}
                    >
                        <div className="gallery-modal-content" onClick={e => e.stopPropagation()}>
                            <button className="gallery-modal-close" onClick={() => setModalMedia(null)}>×</button>

                            {imageItems.length > 1 && (
                                <>
                                    <button
                                        className="gallery-modal-nav prev-btn"
                                        onClick={handlePrevMedia}
                                        aria-label="Previous image"
                                    >
                                        <FaChevronLeft />
                                    </button>
                                    <button
                                        className="gallery-modal-nav next-btn"
                                        onClick={handleNextMedia}
                                        aria-label="Next image"
                                    >
                                        <FaChevronRight />
                                    </button>
                                </>
                            )}

                            <img src={modalMedia.imageUrl} alt={modalMedia.title} className="gallery-modal-img" />
                            <p className="gallery-modal-caption">{modalMedia.title}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ===== FOOTER SECTION ===== */}
            <FooterSection />
        </div>
    );
};

export default Gallery;
