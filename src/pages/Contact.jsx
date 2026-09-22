import React, { useState, useEffect } from 'react';
import './style/style.css';
import backWallFallback from '../assets/back-wall.jpg';
import { api } from '../lib/api';

const DEFAULT_CONTENT = {
    tag: 'Get In Touch',
    heading: 'CONTACT',
    subheading: 'Magician Rajesh Kumar',
    formHeading: 'SEND US AN EMAIL',
    successMessage: 'Thank you! Your message has been sent successfully. We will get back to you soon.',
};

const DEFAULT_SETTINGS = {
    contactPersonName: 'MR. ANKIT',
    contactPersonTitle: '(Official Management)',
    phonePrimary: '+919372074683',
    phoneSecondary: '+919004775683',
    phoneTertiary: '+919417294616',
    emailPrimary: 'rajesh.kumar67@yahoo.in',
    emailBooking: 'info@rajeshmagic.com',
    facebookUrl: 'https://facebook.com',
    instagramUrl: 'https://instagram.com',
    youtubeUrl: 'https://youtube.com',
};

const Contact = () => {
    const [c, setC] = useState(DEFAULT_CONTENT);
    const [heroImage, setHeroImage] = useState(backWallFallback);
    const [settings, setSettings] = useState(DEFAULT_SETTINGS);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    useEffect(() => {
        api
            .pageContent('contact')
            .then((page) => {
                setC((prev) => ({ ...prev, ...page.content }));
                if (page.heroImage) setHeroImage(page.heroImage);
            })
            .catch(() => {});
        api
            .site()
            .then((data) => setSettings((s) => ({ ...s, ...data.settings })))
            .catch(() => {});
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setSubmitError('');
        try {
            await api.submitContact(formData);
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
        } catch (err) {
            setSubmitError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="contact-page-wrapper">
            {/* ===== CONTACT HERO & FORM SECTION ===== */}
            <section className="contact-page-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="contact-page-overlay"></div>

                <div className="contact-page-container">
                    {/* Header */}
                    <div className="contact-page-header animate-on-scroll">
                        <p className="contact-cursive-tag">{c.tag}</p>
                        <h1 className="contact-page-title">{c.heading}</h1>
                        <h2 className="contact-page-subtitle">{c.subheading}</h2>
                    </div>

                    {/* Main 2-Column Section */}
                    <div className="contact-main-grid">
                        {/* Left Column: Form */}
                        <div className="contact-form-column animate-on-scroll">
                            <h2 className="contact-form-heading">{c.formHeading}</h2>

                            {isSubmitted && (
                                <div className="contact-success-msg">
                                    <i className="fa-solid fa-circle-check"></i>
                                    {c.successMessage}
                                </div>
                            )}
                            {submitError && (
                                <div className="contact-success-msg" style={{ background: '#4a1f1f', color: '#ffb3b3' }}>
                                    {submitError}
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
                                <button type="submit" className="contact-submit-btn" disabled={submitting}>
                                    {submitting ? 'SENDING…' : 'SEND MESSAGE'}
                                </button>
                            </form>
                        </div>

                        {/* Right Column: Contact Details */}
                        <div className="contact-info-column animate-on-scroll">
                            <div className="contact-info-card">
                                <h3 className="contact-info-name">{settings.contactPersonName}</h3>
                                <p className="contact-info-designation">{settings.contactPersonTitle}</p>

                                <div className="contact-info-section">
                                    <div className="contact-info-item">
                                        <i className="fa-solid fa-phone contact-icon"></i>
                                        <div className="phone-numbers-list">
                                            <a href={`tel:${settings.phonePrimary}`}>{settings.phonePrimary}</a>
                                            <a href={`tel:${settings.phoneSecondary}`}>{settings.phoneSecondary}</a>
                                            <a href={`tel:${settings.phoneTertiary}`}>{settings.phoneTertiary}</a>
                                        </div>
                                    </div>

                                    <div className="contact-info-item">
                                        <i className="fa-solid fa-envelope contact-icon"></i>
                                        <div className="emails-list">
                                            <a href={`mailto:${settings.emailPrimary}`}>{settings.emailPrimary}</a>
                                            <a href={`mailto:${settings.emailBooking}`}>{settings.emailBooking}</a>
                                        </div>
                                    </div>
                                </div>

                                {/* Social Icons */}
                                <div className="contact-social-section">
                                    <a href={settings.facebookUrl} target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Facebook">
                                        <i className="fa-brands fa-facebook-f"></i>
                                    </a>
                                    <a href={settings.instagramUrl} target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="Instagram">
                                        <i className="fa-brands fa-instagram"></i>
                                    </a>
                                    <a href={settings.youtubeUrl} target="_blank" rel="noopener noreferrer" className="contact-social-btn" aria-label="YouTube">
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
