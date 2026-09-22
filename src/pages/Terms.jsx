import React from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';

const Terms = () => {
    return (
        <div className="legal-page-wrapper">
            <section className="legal-page-hero" style={{ backgroundImage: `url(${backWall})` }}>
                <div className="legal-page-overlay"></div>

                <div className="legal-page-container">
                    <div className="legal-page-header animate-on-scroll">
                        <p className="legal-cursive-tag">Terms of Service</p>
                        <h1 className="legal-page-title">TERMS & CONDITIONS</h1>
                        <h2 className="legal-page-subtitle">Effective Date: September 22, 2026</h2>
                    </div>

                    <div className="legal-content-card animate-on-scroll">
                        <p className="legal-intro-text">
                            By accessing and using rajeshmagic.com, you agree to these Terms & Conditions.
                        </p>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Website Use</h3>
                            <p>
                                The content on this website is provided for general information about Rajesh Magic, its performances, services, and events. You agree to use the website only for lawful purposes.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Bookings</h3>
                            <p>
                                Submitting a booking or contact form does not automatically confirm an event. Availability, pricing, event details, payment terms, cancellation terms, and other requirements will be confirmed separately with Rajesh Magic.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Intellectual Property</h3>
                            <p>
                                All website content, including text, photographs, videos, logos, graphics, and design, belongs to Rajesh Magic or its respective owners and may not be copied, reproduced, or used commercially without permission.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Third-Party Links</h3>
                            <p>
                                The website may contain links to third-party websites or social-media platforms. Rajesh Magic is not responsible for the content, availability, or policies of those websites.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Website Information</h3>
                            <p>
                                We make reasonable efforts to keep the information on this website accurate, but services, availability, pricing, and other information may change without notice.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Limitation of Liability</h3>
                            <p>
                                Rajesh Magic is not responsible for losses arising from website interruptions, third-party services, technical issues, or reliance on website information, to the extent permitted by applicable law.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Changes to These Terms</h3>
                            <p>
                                We may update these Terms & Conditions at any time. Updated terms will be posted on this page.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Governing Law</h3>
                            <p>
                                These Terms shall be governed by the applicable laws of India.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Contact</h3>
                            <p>
                                For questions regarding these Terms, please contact us through rajeshmagic.com.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
