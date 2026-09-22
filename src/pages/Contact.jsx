import React, { useState } from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        }, 4000);
    };

    return (
        <div className="contact-page-wrapper">
            {/* ===== CONTACT HERO & FORM SECTION ===== */}
            <section className="contact-page-hero" style={{ backgroundImage: `url(${backWall})` }}>
                <div className="contact-page-overlay"></div>

                <div className="contact-page-container">
                    {/* Header */}
                    <div className="contact-page-header animate-on-scroll">
                        <p className="contact-cursive-tag">Get In Touch</p>
                        <h1 className="contact-page-title">CONTACT</h1>
                        <h2 className="contact-page-subtitle">Magician Rajesh Kumar</h2>
                    </div>

                    {/* Main 2-Column Section */}
                    <div className="contact-main-grid">
                        {/* Left Column: Form */}
                        <div className="contact-form-column animate-on-scroll">
                            <h2 className="contact-form-heading">SEND US AN EMAIL</h2>

                            {isSubmitted && (
                                <div className="contact-success-msg">
                                    <i className="fa-solid fa-circle-check"></i>
                                    Thank you! Your message has been sent successfully. We will get back to you soon.
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="contact-form">
                                {/* First & Last Name */}
                                <div className="contact-input-row">
                                    <div className="contact-input-group">
                                        <label htmlFor="firstName">FIRST NAME*</label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            required
                                            placeholder="First Name"
                                        />
                                    </div>
                                    <div className="contact-input-group">
                                        <label htmlFor="lastName">LAST NAME*</label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            required
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>

                                {/* Email & Phone */}
                                <div className="contact-input-row">
                                    <div className="contact-input-group">
                                        <label htmlFor="email">EMAIL*</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="Email Address"
                                        />
                                    </div>
                                    <div className="contact-input-group">
                                        <label htmlFor="phone">PHONE*</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>

                                {/* Subject */}
                                <div className="contact-input-group full-width">
                                    <label htmlFor="subject">SUBJECT*</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        placeholder="Subject"
                                    />
                                </div>

                                {/* Message */}
                                <div className="contact-input-group full-width">
                                    <label htmlFor="message">MESSAGE*</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="6"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        placeholder="Write your message here..."
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button type="submit" className="contact-submit-btn">
                                    SEND MESSAGE
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Contact Details */}
                        <div className="contact-info-column animate-on-scroll">
                            <div className="contact-info-card">
                                <h3 className="contact-info-name">MR. ANKIT</h3>
                                <p className="contact-info-designation">(Official Management)</p>

                                <div className="contact-info-section">
                                    <div className="contact-info-item">
                                        <i className="fa-solid fa-phone contact-icon"></i>
                                        <div className="phone-numbers-list">
                                            <a href="tel:+919372074689">+91-93720-74689</a>
                                            <a href="tel:+919004775683">+91-90047-75683</a>
                                            <a href="tel:+919417294616">+91-94172-94616</a>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <i className="fa-solid fa-envelope contact-icon"></i>
                                        <div className="emails-list">
                                            <a href="mailto:rajesh.kumar67@yahoo.in">rajesh.kumar67@yahoo.in</a>
                                            <a href="mailto:info@rajeshmagic.com">info@rajeshmagic.com</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Icons */}
                                <div className="contact-social-section">
                                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Facebook">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Instagram">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="YouTube">
                                        <i className="fa-brands fa-youtube"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
