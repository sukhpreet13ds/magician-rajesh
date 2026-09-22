import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './style/style.css';
import backWallFallback from '../assets/back-wall.jpg';
import { api } from '../lib/api';

const ServiceView = () => {
    const { slug } = useParams();
    const [service, setService] = useState(null);
    const [settings, setSettings] = useState({});
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        setService(null);
        setNotFound(false);
        api
            .service(slug)
            .then((data) => setService(data))
            .catch(() => setNotFound(true));
        api
            .site()
            .then((data) => setSettings(data.settings))
            .catch(() => {});
    }, [slug]);

    if (notFound) {
        return (
            <div className="service-view-wrapper">
                <section className="service-view-hero" style={{ backgroundImage: `url(${backWallFallback})` }}>
                    <div className="service-view-overlay"></div>
                    <div className="service-view-container">
                        <h1 className="service-view-main-title">Service not found</h1>
                        <p><Link to="/services">Back to Services</Link></p>
                    </div>
                </section>
            </div>
        );
    }

    if (!service) return null;

    return (
        <div className="service-view-wrapper">
            {/* ===== HERO / SERVICE VIEW SECTION ===== */}
            <section className="service-view-hero" style={{ backgroundImage: `url(${backWallFallback})` }}>
                <div className="service-view-overlay"></div>

                <div className="service-view-container">
                    {/* Top Row: Image Left, Text Right */}
                    <div className="service-view-row animate-on-scroll">
                        {(service.detailImageUrl || service.cardImageUrl) && (
                            <div className="service-view-img-col">
                                <div className="service-view-img-frame">
                                    <img
                                        src={service.detailImageUrl || service.cardImageUrl}
                                        alt={service.detailHeading || service.title}
                                        className="service-view-img"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="service-view-text-col">
                            <h1 className="service-view-main-title">{service.detailHeading || service.title}</h1>
                            {service.detailSubheading && (
                                <h2 className="service-view-sub-title">{service.detailSubheading}</h2>
                            )}

                            <div className="service-view-paragraphs">
                                {(service.detailParagraphs?.length
                                    ? service.detailParagraphs
                                    : service.cardDescription
                                    ? [service.cardDescription]
                                    : []
                                ).map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Text Left, Image Right */}
                    {(service.detailSecondHeading || service.detailParagraphs2?.length) && (
                        <div className="service-view-row reverse-row animate-on-scroll">
                            <div className="service-view-text-col">
                                {service.detailSecondHeading && (
                                    <h2 className="service-view-section-title">{service.detailSecondHeading}</h2>
                                )}

                                <div className="service-view-paragraphs">
                                    {(service.detailParagraphs2 || []).map((p, i) => (
                                        <p key={i}>{p}</p>
                                    ))}
                                </div>
                            </div>

                            {service.detailImageUrl2 && (
                                <div className="service-view-img-col">
                                    <div className="service-view-img-frame">
                                        <img src={service.detailImageUrl2} alt={service.detailSecondHeading || ''} className="service-view-img" />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Contact Callout Banner */}
                    <div className="service-view-contact-box animate-on-scroll">
                        <p className="contact-box-label">For more information, call us at</p>
                        <div className="contact-box-phones">
                            {[settings.phonePrimary, settings.phoneSecondary, settings.phoneTertiary]
                                .filter(Boolean)
                                .map((phone, i, arr) => (
                                    <React.Fragment key={phone}>
                                        <a href={`tel:${phone}`}>{phone}</a>
                                        {i < arr.length - 1 && ', '}
                                    </React.Fragment>
                                ))}
                        </div>
                        <p className="contact-box-label email-label">or drop an email at</p>
                        <a href={`mailto:${settings.emailPrimary}`} className="contact-box-email">{settings.emailPrimary}</a>
                        <p className="contact-box-footer-tag">Book Magician Kumar for your event now!</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceView;
