import React, { useState } from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';
import FooterSection from '../components/FooterSection';
import { motion, AnimatePresence } from 'framer-motion';

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
import magicService1 from '../assets/magice-service1.png';
import magicService2 from '../assets/magic-service2.png';
import magicService3 from '../assets/magice-service3.png';

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    const [modalMedia, setModalMedia] = useState(null);

    const galleryItems = [
        {
            id: 1,
            type: 'video',
            videoEmbedId: 'XWexSwZE6js',
            title: 'Magician Rajesh Kumar Live Show',
            category: 'videos',
            sizeClass: 'gallery-item-large'
        },
        {
            id: 3,
            type: 'image',
            src: inService1,
            title: 'Mentalism & Mind Reading Show',
            category: 'corporate',
            sizeClass: 'gallery-item-small'
        },
        {
            id: 4,
            type: 'image',
            src: inService4,
            title: 'Grand Illusion Performance',
            category: 'stage',
            sizeClass: 'gallery-item-tall'
        },
        {
            id: 5,
            type: 'video',
            videoEmbedId: 'BgpcHOwKw4k',
            title: 'Grand Magic & Escape Act',
            category: 'videos',
            sizeClass: 'gallery-item-large'
        },
        {
            id: 7,
            type: 'image',
            src: inService11,
            title: 'High-Tech iPad Magic',
            category: 'corporate',
            sizeClass: 'gallery-item-small'
        },
        {
            id: 8,
            type: 'image',
            src: inService7,
            title: 'Exclusive Private Party Illusion',
            category: 'events',
            sizeClass: 'gallery-item-wide'
        },
        {
            id: 9,
            type: 'image',
            src: magicService1,
            title: 'Interactive Guest Performance',
            category: 'events',
            sizeClass: 'gallery-item-small'
        },
        {
            id: 11,
            type: 'image',
            src: magicService2,
            title: 'Stage Audience Interaction',
            category: 'stage',
            sizeClass: 'gallery-item-small'
        },
        {
            id: 12,
            type: 'image',
            src: inService9,
            title: 'Corporate Trade Show Event',
            category: 'corporate',
            sizeClass: 'gallery-item-tall'
        },
        {
            id: 13,
            type: 'image',
            src: magicService3,
            title: 'Award Ceremony Magic Show',
            category: 'events',
            sizeClass: 'gallery-item-medium'
        },
        {
            id: 15,
            type: 'image',
            src: inService2,
            title: 'Mentalist Performance',
            category: 'corporate',
            sizeClass: 'gallery-item-medium'
        }
    ];

    const filteredItems = activeFilter === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === activeFilter);

    return (
        <div className="gallery-page-wrapper">
            {/* ===== GALLERY HERO SECTION ===== */}
            <section className="gallery-page-hero" style={{ backgroundImage: `url(${backWall})` }}>
                <div className="gallery-page-overlay"></div>

                <div className="gallery-page-container">
                    <div className="gallery-page-header">
                        <p className="gallery-cursive-tag">Visual Spectacle</p>
                        <h1 className="gallery-page-title">GALLERY</h1>
                        <h2 className="gallery-page-subtitle">Magician Rajesh Kumar</h2>
                        <p className="gallery-page-description">
                            Explore moments of wonder, mind-bending illusions, stage acts, corporate events, and live performance videos.
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="gallery-filter-bar">
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
                                    className={`gallery-card ${item.sizeClass} ${item.type === 'video' ? 'video-card' : ''}`}
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
                                                src={item.src} 
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
                            <img src={modalMedia.src} alt={modalMedia.title} className="gallery-modal-img" />
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
