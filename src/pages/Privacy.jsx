import React from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';

const Privacy = () => {
    return (
        <div className="legal-page-wrapper">
            <section className="legal-page-hero" style={{ backgroundImage: `url(${backWall})` }}>
                <div className="legal-page-overlay"></div>

                <div className="legal-page-container">
                    <div className="legal-page-header animate-on-scroll">
                        <p className="legal-cursive-tag">Legal & Privacy</p>
                        <h1 className="legal-page-title">PRIVACY POLICY</h1>
                        <h2 className="legal-page-subtitle">Effective Date: September 22, 2026</h2>
                    </div>

                    <div className="legal-content-card animate-on-scroll">
                        <p className="legal-intro-text">
                            Rajesh Magic respects your privacy. This Privacy Policy explains how we collect and use information when you visit rajeshmagic.com.
                        </p>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Information We Collect</h3>
                            <p>
                                When you contact us or submit a booking inquiry, we may collect information such as your name, email address, phone number, event details, and any message you provide.
                            </p>
                            <p>
                                We may also collect basic technical information such as your browser, device, IP address, and pages visited.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">How We Use Your Information</h3>
                            <p>We may use your information to:</p>
                            <ul className="legal-list">
                                <li>Respond to inquiries and booking requests</li>
                                <li>Communicate about our services and events</li>
                                <li>Improve our website and services</li>
                                <li>Maintain website security</li>
                                <li>Comply with applicable laws</li>
                            </ul>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Sharing of Information</h3>
                            <p>
                                We do not sell or rent your personal information. Information may be shared with trusted service providers when necessary to operate our website or provide requested services, or when required by law.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Third-Party Links</h3>
                            <p>
                                Our website may contain links to social media and other third-party websites. We are not responsible for their privacy practices or content.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Data Security</h3>
                            <p>
                                We take reasonable steps to protect your information, but no online transmission or storage system can be guaranteed to be completely secure.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Changes to This Policy</h3>
                            <p>
                                We may update this Privacy Policy from time to time. Any changes will be posted on this page.
                            </p>
                        </div>

                        <div className="legal-section">
                            <h3 className="legal-section-title">Contact</h3>
                            <p>
                                For privacy-related questions, contact us through the contact information provided on rajeshmagic.com.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
