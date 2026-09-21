import React, { useState } from 'react';
import './style/style.css';
import unforgetBg from '../assets/unforget-bg.jpg';
import magicianLogo from '../assets/magician-logo.png';

const FooterSection = () => {
    const [formData, setFormData] = useState({
        eventType: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventDate: '',
        location: '',
        guestCount: '',
        knownFor: '',
        privacyConsent: false,
        emailConsent: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your enquiry! Magician Rajesh will contact you soon.');
    };

    return (
        <div className="unforget-footer-wrapper">
            {/* ===== UNFORGETTABLE / CONTACT SECTION ===== */}
            <section className="unforget-section" style={{ backgroundImage: `url(${unforgetBg})` }}>
                <div className="unforget-overlay"></div>
                <div className="unforget-top-line"></div>

                <div className="unforget-content">
                    <p className="unforget-cursive-tag">The Unforgettable</p>
                    <h2 className="unforget-heading">
                        AN EXPERIENCE FOR YOUR <span className="highlight-gold">GUESTS</span>
                    </h2>
                    <p className="unforget-subtext">
                        Would you like to offer your guests an unforgettable experience at your next event?<br />
                        Feel free to contact me – together, we will create magical moments and make your event truly extraordinary.
                    </p>

                    <button className="unforget-avail-btn">CHECK AVAILABILITY</button>

                    <div className="unforget-or-divider">
                        <span className="or-line"></span>
                        <div className="or-circle">Or</div>
                        <span className="or-line"></span>
                    </div>

                    <p className="unforget-form-tag">Fill out the contact form</p>
                </div>

                {/* ===== OVERLAPPING CONTACT FORM ===== */}
                <div className="contact-form-card">
                    <div className="form-notch-arrow"></div>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-row col-3">
                            <div className="form-group">
                                <select name="eventType" value={formData.eventType} onChange={handleChange} required>
                                    <option value="">ART OF EVENTS</option>
                                    <option value="corporate">Corporate Magic</option>
                                    <option value="product_launch">Product Launch</option>
                                    <option value="closeup">Close-Up Magic</option>
                                    <option value="wedding">Wedding & Private Event</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <input type="text" name="firstName" placeholder="FIRST NAME" value={formData.firstName} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="text" name="lastName" placeholder="LAST NAME..." value={formData.lastName} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="form-row col-3">
                            <div className="form-group">
                                <input type="email" name="email" placeholder="YOUR EMAIL ADDRESS..." value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="tel" name="phone" placeholder="PHONE NUMBER..." value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="date" name="eventDate" placeholder="EVENT DATE" value={formData.eventDate} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="form-row col-2">
                            <div className="form-group">
                                <input type="text" name="location" placeholder="WHERE ARE YOU CELEBRATING?" value={formData.location} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <input type="text" name="guestCount" placeholder="APPROXIMATE NUMBER OF GUESTS*" value={formData.guestCount} onChange={handleChange} required />
                            </div>
                        </div>

                        <div className="form-row col-1">
                            <div className="form-group">
                                <select name="knownFor" value={formData.knownFor} onChange={handleChange}>
                                    <option value="">KNOWN FOR</option>
                                    <option value="tv">TV Shows (India's Magic Star / IGT)</option>
                                    <option value="recommendation">Friend / Colleague Recommendation</option>
                                    <option value="social">Social Media</option>
                                    <option value="google">Google Search</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-checkboxes">
                            <label className="checkbox-label">
                                <input type="checkbox" name="privacyConsent" checked={formData.privacyConsent} onChange={handleChange} required />
                                <span>I consent to the processing of the entered data and to the privacy policy.*</span>
                            </label>
                            <label className="checkbox-label">
                                <input type="checkbox" name="emailConsent" checked={formData.emailConsent} onChange={handleChange} />
                                <span>To better serve you, we need to track the emails we send you. For this purpose, we ask for your consent to the declaration of consent.</span>
                            </label>
                        </div>

                        <div className="form-submit-wrap">
                            <button type="submit" className="form-submit-btn">ENQUIRE NOW</button>
                        </div>
                    </form>
                </div>
            </section>

            {/* ===== FOOTER SECTION ===== */}
            <footer className="footer-section">
                <div className="footer-container">
                    <div className="footer-grid">
                        {/* Column 1: Logo & Copyright */}
                        <div className="footer-col footer-brand-col">
                            <div className="footer-logo-wrap">
                                <img src={magicianLogo} alt="Rajesh Kumar Techno Magician" className="footer-logo-img" />
                            </div>
                            <p className="footer-copyright">
                                Copyright © 2026 Rajesh Magic.<br />All Rights Reserved.
                            </p>
                        </div>

                        {/* Column 2: Navigation Links */}
                        <div className="footer-col footer-links-col">
                            <ul className="footer-links-list">
                                <li><a href="#home">HOME</a></li>
                                <li><a href="#about">ABOUT</a></li>
                                <li><a href="#services">SERVICES</a></li>
                                <li><a href="#blogs">BLOGS</a></li>
                            </ul>
                            <ul className="footer-links-list">
                                <li><a href="#gallery">GALLERY</a></li>
                                <li><a href="#contact">CONTACT US</a></li>
                            </ul>
                        </div>

                        {/* Column 3: Contact Info */}
                        <div className="footer-col footer-contact-col">
                            <h4 className="footer-col-title">Contact For Bookings:</h4>
                            <div className="footer-contact-item">
                                <div className="contact-icon-circle">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                                    </svg>
                                </div>
                                <span className="contact-text">
                                    <a href="tel:+919372074683" style={{ color: "inherit", textDecoration: "none" }}>+919372074683</a> | <a href="tel:+919004149683" style={{ color: "inherit", textDecoration: "none" }}>+919004149683</a>, <a href="tel:+918104705133" style={{ color: "inherit", textDecoration: "none" }}>+918104705133</a></span>
                            </div>
                            <div className="footer-contact-item">
                                <div className="contact-icon-circle">
                                    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </div>
                                <span className="contact-text"><a href="mailto:info@rajeshmagic.com" style={{ color: "inherit", textDecoration: "none" }}>INFO@RAJESHMAGIC.COM</a></span>
                            </div>
                        </div>
                    </div>

                    <div className="footer-bottom-bar">
                        <div className="footer-social-row">
                            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="YouTube">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </a>
                            <a href="mailto:INFO@RAJESHMAGIC.COM" className="footer-social-icon" aria-label="Email">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                </svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-icon" aria-label="Instagram">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FooterSection;
