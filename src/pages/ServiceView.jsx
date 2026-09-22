import React from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';
import inService1 from '../assets/in-service1.png';
import inService2 from '../assets/in-service2.png';

const ServiceView = () => {
    return (
        <div className="service-view-wrapper">
            {/* ===== HERO / SERVICE VIEW SECTION ===== */}
            <section className="service-view-hero" style={{ backgroundImage: `url(${backWall})` }}>
                <div className="service-view-overlay"></div>

                <div className="service-view-container">
                    {/* Top Row: Image Left, Text Right */}
                    <div className="service-view-row animate-on-scroll">
                        <div className="service-view-img-col">
                            <div className="service-view-img-frame">
                                <img src={inService1} alt="Corporate Magician India" className="service-view-img" />
                            </div>
                        </div>

                        <div className="service-view-text-col">
                            <h1 className="service-view-main-title">CORPORATE MAGICIAN INDIA</h1>
                            <h2 className="service-view-sub-title">Magician Rajesh Kumar</h2>

                            <div className="service-view-paragraphs">
                                <p>
                                    While hiring a professional magician for your corporate event, you want your guests to talk about the show for weeks to come. A corporate magician is a perfect cherry on top to make the night memorable for your guests. But, do you know what exactly does a corporate magician do?
                                </p>
                                <p>
                                    Experienced magicians are skilled in customizing and personalizing their performance, depending on the audience and their mood. The same works for corporate magicians! They make sure to customize every magic show that meets the needs of a specific venue.
                                </p>
                                <p>
                                    By hiring a corporate magician in India for your event, you ensure to treat your guests with a unique and surreal experience that they have never seen before, along with having fun!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Text Left, Image Right */}
                    <div className="service-view-row reverse-row animate-on-scroll">
                        <div className="service-view-text-col">
                            <h2 className="service-view-section-title">HIRE A CORPORATE MAGICIAN IN INDIA</h2>

                            <div className="service-view-paragraphs">
                                <p>
                                    Magician Rajesh Kumar is an illusionist and magician. He has been a part of many TV shows which are broadcast across the world. The experienced magician & illusionist traveled all across and outside the country, performing magic and mentalism shows. He has also helped several TV producers and directors to create magic on screen.
                                </p>
                                <p>
                                    Rajesh Kumar specializes in several types of magic, such as corporate magic, iPad magic, illusion shows, etc. Today, Rajesh Kumar has been able to make his name in the corporate world by performing for brands like Hero, Pizza Hut, LG TV, Samsung, Bajaj Alliance, Omex, Coca-Cola, Hindustan Times, Honda, Datsun, Nippon Paints, and many others.
                                </p>
                            </div>
                        </div>

                        <div className="service-view-img-col">
                            <div className="service-view-img-frame">
                                <img src={inService2} alt="Hire A Corporate Magician In India" className="service-view-img" />
                            </div>
                        </div>
                    </div>

                    {/* Contact Callout Banner */}
                    <div className="service-view-contact-box animate-on-scroll">
                        <p className="contact-box-label">For more information, call us at</p>
                        <div className="contact-box-phones">
                            <a href="tel:+919372074683">+91-9372074683</a>, 
                            <a href="tel:+919004775683">+91-9004775683</a>, 
                            <a href="tel:+919417294616">+91-9417294616</a>
                        </div>
                        <p className="contact-box-label email-label">or drop an email at</p>
                        <a href="mailto:rajesh.kumar67@yahoo.in" className="contact-box-email">rajesh.kumar67@yahoo.in</a>
                        <p className="contact-box-footer-tag">Book Magician Kumar for your corporate event now!</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServiceView;
