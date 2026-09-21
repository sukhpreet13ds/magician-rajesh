import React from 'react';
import './style/style.css';
import brandBg from '../assets/brand-bg.jpg';

// Import all brand images dynamically from assets/brands/
const brandModules = import.meta.glob('../assets/brands/*.png', { eager: true });

const brandImages = Object.keys(brandModules)
    .sort((a, b) => {
        const numA = parseInt(a.match(/brand(\d+)\.png/)?.[1] || '0', 10);
        const numB = parseInt(b.match(/brand(\d+)\.png/)?.[1] || '0', 10);
        return numA - numB;
    })
    .map(key => brandModules[key].default);

const BrandsMarquee = () => {
    // Duplicate brand images for a seamless loop marquee
    const marqueeBrands = [...brandImages, ...brandImages];

    return (
        <section className="brands-section" style={{ backgroundImage: `url(${brandBg})` }}>
            <div className="brands-overlay"></div>
            <div className="brands-top-line"></div>

            <div className="brands-header">
                <p className="brands-cursive-tag">A selection</p>
                <h2 className="brands-heading">BRANDS RAJESH WORK WITH</h2>
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
                                    alt={`Brand ${(index % 47) + 1}`}
                                    className="brand-card-img"
                                />
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="brands-bottom-line"></div>
        </section>
    );
};

export default BrandsMarquee;
