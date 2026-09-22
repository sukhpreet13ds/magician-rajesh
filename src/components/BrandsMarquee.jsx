import React, { useEffect, useState } from 'react';
import './style/style.css';
import brandBg from '../assets/brand-bg.jpg';
import { api } from '../lib/api';

const BrandsMarquee = ({ tag = 'A selection', heading = 'BRANDS RAJESH WORK WITH' }) => {
    const [brandImages, setBrandImages] = useState([]);

    useEffect(() => {
        api
            .brands()
            .then((items) => setBrandImages(items.map((b) => b.logoUrl)))
            .catch(() => {});
    }, []);

    if (brandImages.length === 0) return null;

    // Duplicate brand images for a seamless loop marquee
    const marqueeBrands = [...brandImages, ...brandImages];

    return (
        <section className="brands-section" style={{ backgroundImage: `url(${brandBg})` }}>
            <div className="brands-overlay"></div>
            <div className="brands-top-line"></div>

            <div className="brands-header">
                <p className="brands-cursive-tag">{tag}</p>
                <h2 className="brands-heading">{heading}</h2>
            </div>

            {/* Snake Marquee Wrapper */}
            <div className="brands-marquee-wrapper">
                <div className="brands-marquee-track">
                    {marqueeBrands.map((imgSrc, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <div
                                key={index}
                                className={`brand-card ${isEven ? 'card-high' : 'card-low'}`}
                            >

                                <img
                                    src={imgSrc}
                                    alt={`Brand ${(index % brandImages.length) + 1}`}
                                    className="brand-card-img"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="brands-bottom-line" style={{visibility: "hidden"}}></div>
        </section>
    );
};

export default BrandsMarquee;
