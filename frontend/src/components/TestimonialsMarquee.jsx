import React, { useRef, useEffect, useState } from 'react';
import './style/style.css';
import { api } from '../lib/api';

const TestimonialsMarquee = ({ tag = 'Valued by customers', heading = 'WITH THE HIGHEST STANDARDS' }) => {
    const trackRef = useRef(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        api
            .testimonials()
            .then((items) => setReviews(items))
            .catch(() => {});
    }, []);

    // 3 copies of reviews array for a 100% infinite seamless loop
    const marqueeReviews = [...reviews, ...reviews, ...reviews];

    useEffect(() => {
        const el = trackRef.current;
        if (!el || reviews.length === 0) return;

        // Initialize scroll position in the middle set of cards
        const singleSetWidth = el.scrollWidth / 3;
        if (singleSetWidth > 0 && el.scrollLeft === 0) {
            el.scrollLeft = singleSetWidth;
        }

        let animationFrameId;
        let isHovered = false;

        const autoScroll = () => {
            if (el && !isHovered) {
                el.scrollLeft += 0.8;
                const setWidth = el.scrollWidth / 3;
                if (setWidth > 0 && el.scrollLeft >= setWidth * 2) {
                    el.scrollLeft -= setWidth;
                }
            }
            animationFrameId = requestAnimationFrame(autoScroll);
        };

        animationFrameId = requestAnimationFrame(autoScroll);

        const onMouseEnter = () => { isHovered = true; };
        const onMouseLeave = () => { isHovered = false; };
        const onTouchStart = () => { isHovered = true; };
        const onTouchEnd = () => { isHovered = false; };

        el.addEventListener('mouseenter', onMouseEnter);
        el.addEventListener('mouseleave', onMouseLeave);
        el.addEventListener('touchstart', onTouchStart);
        el.addEventListener('touchend', onTouchEnd);

        const handleScroll = () => {
            const setWidth = el.scrollWidth / 3;
            if (setWidth > 0) {
                if (el.scrollLeft >= setWidth * 2) {
                    el.scrollLeft -= setWidth;
                } else if (el.scrollLeft <= 5) {
                    el.scrollLeft += setWidth;
                }
            }
        };

        el.addEventListener('scroll', handleScroll);

        return () => {
            cancelAnimationFrame(animationFrameId);
            el.removeEventListener('mouseenter', onMouseEnter);
            el.removeEventListener('mouseleave', onMouseLeave);
            el.removeEventListener('touchstart', onTouchStart);
            el.removeEventListener('touchend', onTouchEnd);
            el.removeEventListener('scroll', handleScroll);
        };
    }, [reviews]);

    const scrollLeft = () => {
        if (trackRef.current) {
            trackRef.current.scrollBy({ left: -320, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (trackRef.current) {
            trackRef.current.scrollBy({ left: 320, behavior: 'smooth' });
        }
    };

    if (reviews.length === 0) return null;

    return (
        <section className="testimonials-section">
            <div className="testimonials-header">
                <p className="testimonials-cursive-tag">{tag}</p>
                <h2 className="testimonials-heading">{heading}</h2>
            </div>

            {/* Simple Horizontal Marquee Container */}
            <div className="testimonials-marquee-wrapper" ref={trackRef}>
                <div className="testimonials-marquee-track">
                    {marqueeReviews.map((review, index) => (
                        <div key={`${review.id}-${index}`} className="review-card">
                            <div className="review-card-badge">
                                <svg width="22" height="22" viewBox="0 0 24 24">
                                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                                    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
                                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                                </svg>
                            </div>

                            <div className="review-stars">
                                {'★'.repeat(review.rating)}
                            </div>

                            <p className="review-text">{review.text}</p>

                            <h4 className="review-author">{review.name}</h4>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Controls */}
            <div className="testimonials-footer">
                <div className="testimonials-nav-btns">
                    <button className="nav-arrow-btn" onClick={scrollLeft} aria-label="Previous">
                        ‹
                    </button>
                    <button className="nav-arrow-btn" onClick={scrollRight} aria-label="Next">
                        ›
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsMarquee;
