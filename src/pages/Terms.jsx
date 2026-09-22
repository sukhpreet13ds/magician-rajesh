import React, { useEffect, useState } from 'react';
import './style/style.css';
import backWallFallback from '../assets/back-wall.jpg';
import { api } from '../lib/api';

const DEFAULT_CONTENT = {
    tag: 'Terms of Service',
    heading: 'TERMS & CONDITIONS',
    effectiveDateText: 'Effective Date: September 22, 2026',
    intro: 'By accessing and using rajeshmagic.com, you agree to these Terms & Conditions.',
    sections: [],
};

const Terms = () => {
    const [c, setC] = useState(DEFAULT_CONTENT);
    const [heroImage, setHeroImage] = useState(backWallFallback);

    useEffect(() => {
        api
            .pageContent('terms')
            .then((page) => {
                setC((prev) => ({ ...prev, ...page.content }));
                if (page.heroImage) setHeroImage(page.heroImage);
            })
            .catch(() => {});
    }, []);

    return (
        <div className="legal-page-wrapper">
            <section className="legal-page-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="legal-page-overlay"></div>

                <div className="legal-page-container">
                    <div className="legal-page-header animate-on-scroll">
                        <p className="legal-cursive-tag">{c.tag}</p>
                        <h1 className="legal-page-title">{c.heading}</h1>
                        <h2 className="legal-page-subtitle">{c.effectiveDateText}</h2>
                    </div>

                    <div className="legal-content-card animate-on-scroll">
                        <p className="legal-intro-text">
                            {c.intro}
                        </p>

                        {c.sections.map((section, i) => (
                            <div className="legal-section" key={i}>
                                <h3 className="legal-section-title">{section.heading}</h3>
                                {section.body.split('\n\n').filter(Boolean).map((para, j) => (
                                    <p key={j}>{para}</p>
                                ))}
                                {section.listItems?.length > 0 && (
                                    <ul className="legal-list">
                                        {section.listItems.map((item, k) => (
                                            <li key={k}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
