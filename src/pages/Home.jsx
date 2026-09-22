import React from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';
import heroBg from '../assets/hero-bg.png';
import magicianRajesh from '../assets/magician-rajesh.png';
import igtStage from '../assets/igt-stage.png';
import rajeshSide from '../assets/rajesh-side.png';
import magicService1 from '../assets/magice-service1.png';
import magicService2 from '../assets/magic-service2.png';
import magicService3 from '../assets/magice-service3.png';
import moreBg from '../assets/more-bg.jpg';
import experienceBg from '../assets/experience-bg.jpg';
import experienceRight from '../assets/experience-right.jpg';
import BrandsMarquee from '../components/BrandsMarquee';
import TestimonialsMarquee from '../components/TestimonialsMarquee';
import { TextAnimate } from '../components/magicui/text-animate';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    React.useEffect(() => {
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        } else {
            const script = document.createElement('script');
            script.src = '//www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, []);

    return(
        <div className="home-container">
            {/* HERO SECTION - NO animate-on-scroll as requested */}
            <section className="hero-section" style={{ backgroundImage: `url(${backWall})` }}>
                <div className="hero-content">
                    <div className="hero-text-container">
                        <h1 className="hero-title">
                            <TextAnimate animation="blurIn" as="span" className="text-white text-not-just">
                                NOT JUST
                            </TextAnimate>
                            <br/>
                            <TextAnimate animation="blurIn" delay={0.2} as="span" className="text-yellow text-entertainment">
                                ENTERTAINMENT.
                            </TextAnimate>
                        </h1>
                        <div className="hero-subtitle-container">
                            <motion.span 
                                className="text-cursive"
                                initial={{ scale: 0, opacity: 0, y: -20 }}
                                animate={{ scale: [1.2, 0.9, 1], opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                            >
                                An
                            </motion.span>
                            <TextAnimate animation="blurIn" delay={0.4} as="span" className="text-yellow text-experience">
                                EXPERIENCE
                            </TextAnimate>
                        </div>
                        <h2 className="hero-footer-text">
                            <TextAnimate animation="blurIn" delay={0.6} as="span" className="text-white text-never-forget">
                                THEY WILL NEVER FORGET.
                            </TextAnimate>
                        </h2>
                        <a href="#enquire">
                        <motion.button 
                            className="hero-enquire-btn"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            ENQUIRE FOR YOUR EVENT
                        </motion.button>
                        </a>
                        </div>
                    <div className="hero-image-container">
                        <img src={heroBg} alt="Hero Background" className="hero-bg-img" />
                        <motion.img 
                            src={magicianRajesh} 
                            alt="Magician Rajesh" 
                            className="hero-person-img"
                            initial={{ y: 200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                        />
                    </div>
                </div>
                <div className="hero-vertical-line"></div>
                <div className="hero-slant-bottom"></div>
            </section>

            {/* ===== PERFORMER SECTION ===== */}
            <section className="performer-section">
                <div className="performer-person-wrap animate-on-scroll">
                    <img src={rajeshSide} alt="Rajesh Kumar" className="performer-person-img" />
                </div>

                <div className="performer-inner">
                    <div className="performer-header animate-on-scroll">
                        <p className="performer-italic-tag">The Performer</p>
                        <h2 className="performer-heading">MAGIC BUILT AROUND YOUR AUDIENCE.</h2>
                    </div>

                    <div className="performer-content-grid">
                        <div className="performer-stage-column animate-on-scroll">
                            <div className="performer-stage-wrap">
                                <img src={igtStage} alt="India's Got Talent Stage" className="performer-stage-img" />
                            </div>
                            <div className="performer-btn-row">
                               <a href='#enquire'><button className="performer-book-btn">BOOK RAJESH</button></a> 
                            </div>
                        </div>

                        <div className="performer-text animate-on-scroll">
                            <p className="performer-bio">
                                From a breakthrough on India's Magic Star to appearances on India's Got Talent and Hunarbaaz: Desh Ki Shaan, Rajesh Kumar has spent over sixteen years turning audiences into part of the story.
                            </p>
                            <p className="performer-bio">
                                Every show is alive, interactive and flexible: close-up astonishment among guests, a high-energy stage act, or pure mind reading designed for the room in front of him.
                            </p>
                            <p className="performer-quote">
                                <em>"Not just a show—an experience your guests will keep talking about."</em>
                            </p>
                        </div>

                        {/* Right Side Corner: Instagram Latest Reel Embed */}
                        <div className="performer-reel-column animate-on-scroll">
                            <div className="performer-reel-container">
                                <span className="reel-badge-tag">LATEST REEL</span>
                                <blockquote 
                                    className="instagram-media" 
                                    data-instgrm-permalink="https://www.instagram.com/reel/DdY2zS0yysn/?utm_source=ig_embed&amp;utm_campaign=loading" 
                                    data-instgrm-version="14"
                                    style={{
                                        background: '#FFF',
                                        border: '0',
                                        borderRadius: '8px',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.15)',
                                        margin: '1px auto',
                                        maxWidth: '320px',
                                        minWidth: '260px',
                                        padding: '0',
                                        width: '100%'
                                    }}
                                >
                                    <div style={{ padding: '16px' }}>
                                        <a 
                                            href="https://www.instagram.com/reel/DdY2zS0yysn/?utm_source=ig_embed&amp;utm_campaign=loading" 
                                            style={{ background: '#FFFFFF', lineHeight: '0', padding: '0', textAlign: 'center', textDecoration: 'none', width: '100%' }} 
                                            target="_blank" 
                                            rel="noreferrer"
                                        >
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div style={{ backgroundColor: '#F4F4F4', borderRadius: '50%', flexGrow: 0, height: '40px', marginRight: '14px', width: '40px' }}></div>
                                                <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', marginBottom: '6px', width: '100px' }}></div>
                                                    <div style={{ backgroundColor: '#F4F4F4', borderRadius: '4px', flexGrow: 0, height: '14px', width: '60px' }}></div>
                                                </div>
                                            </div>
                                            <div style={{ padding: '19% 0' }}></div>
                                            <div style={{ paddingTop: '8px' }}>
                                                <div style={{ color: '#3897f0', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: '550', lineHeight: '18px' }}>
                                                    View this post on Instagram
                                                </div>
                                            </div>
                                        </a>
                                        <p style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', lineHeight: '17px', marginBottom: 0, marginTop: '8px', overflow: 'hidden', padding: '8px 0 7px', textAlign: 'center', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                            <a href="https://www.instagram.com/reel/DdY2zS0yysn/?utm_source=ig_embed&amp;utm_campaign=loading" style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }} target="_blank" rel="noreferrer">
                                                A post shared by Rajesh Kumar (@rajeshkumarmagic)
                                            </a>
                                        </p>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== SERVICES SECTION ===== */}
            <section className="services-section">
                <div className="services-green-bg animate-on-scroll">
                    <p className="services-cursive-tag">Suitable for</p>
                    <h2 className="services-heading">EXTRAÖRDINARY EVENTS</h2>
                </div>

                <div className="services-cards-container">
                    <div className="services-card card-gold animate-on-scroll">
                        <div className="services-card-dot"></div>
                        <div className="services-card-img-wrap">
                            <img src={magicService1} alt="Corporate Magic" className="services-card-img" />
                        </div>
                        <div className="services-card-body">
                            <h3 className="services-card-title">CORPORATE MAGIC</h3>
                            <p className="services-card-desc">
                                A 30–45 minute interactive show for conferences, dealer meets, team events and award nights.
                            </p>
                            <Link to='/events' className="services-card-link">READ MORE</Link>
                        </div>
                    </div>

                    <div className="services-card card-light animate-on-scroll">
                        <div className="services-card-dot"></div>
                        <div className="services-card-img-wrap">
                            <img src={magicService2} alt="Product Launch Illusions" className="services-card-img" />
                        </div>
                        <div className="services-card-body">
                            <h3 className="services-card-title">PRODUCT LAUNCH ILLUSIONS</h3>
                            <p className="services-card-desc">
                                Reveal a product, bring your CEO on stage, or make a brand message appear in a truly memorable way.
                            </p>
                            <Link to='/events' className="services-card-link">READ MORE</Link>
                        </div>
                    </div>

                    <div className="services-card card-dark animate-on-scroll">
                        <div className="services-card-dot"></div>
                        <div className="services-card-img-wrap">
                            <img src={magicService3} alt="Close-Up & iPad Magic" className="services-card-img" />
                        </div>
                        <div className="services-card-body">
                            <h3 className="services-card-title">CLOSE-UP & IPAD MAGIC</h3>
                            <p className="services-card-desc">
                                Personal, high-impact magic for cocktail hours, VIP guests, exhibitions and intimate gatherings.
                            </p>
                            <Link to='/events' className="services-card-link">READ MORE</Link>
                        </div>
                    </div>
                </div>

                <div className="services-bottom-btn-wrap animate-on-scroll">
                    <Link to="/services"><button className="services-view-all-btn">VIEW ALL SERVICES</button></Link>
                </div>

                <div className="services-vertical-line" style={{visibility: "hidden"}}></div>
            </section>

            {/* ===== MORE THAN ENTERTAINMENT SECTION ===== */}
            <section className="more-section" style={{ backgroundImage: `url(${moreBg})` }}>
                <div className="more-overlay"></div>
                <div className="more-top-line" style={{visibility: "hidden"}}></div>

                <div className="more-header animate-on-scroll">
                    <p className="more-cursive-tag">More than</p>
                    <h2 className="more-heading">ENTERTAINMENT</h2>
                </div>

                <div className="more-cards-container">
                    <div className="more-card animate-on-scroll">
                        <div className="more-card-dot"></div>
                        <h3 className="more-card-title">PSYCHOLOGICAL<br />EFFECT</h3>
                        <p className="more-card-desc">
                            Moments that feel personal, impossible, and deeply unforgettable.
                        </p>
                    </div>

                    <div className="more-card card-center animate-on-scroll">
                        <div className="more-card-dot"></div>
                        <h3 className="more-card-title">GENUINE INTERACTION<br />WITH A WOW FACTOR</h3>
                        <p className="more-card-desc">
                            Your guests don't just watch —they become part of the experience.
                        </p>
                    </div>

                    <div className="more-card animate-on-scroll">
                        <div className="more-card-dot"></div>
                        <h3 className="more-card-title">ELEGANT<br />ATMOSPHERE</h3>
                        <p className="more-card-desc">
                            Sophisticated, intelligent entertainment that elevates the entire event.
                        </p>
                    </div>
                </div>

                <div className="more-bottom-line"></div>
            </section>

            {/* ===== EXPERIENCE SECTION ===== */}
            <section className="experience-section">
                <div className="experience-bg-layer" style={{ backgroundImage: `url(${experienceBg})` }}></div>
                <div className="experience-top-line"></div>

                <div className="experience-container">
                    <div className="experience-left-content animate-on-scroll">
                        <p className="experience-cursive-tag">The person behind</p>
                        <h2 className="experience-heading">THE EXPERIENCE</h2>
                        <p className="experience-text">
                            Magician Rajesh Kumar is a Mumbai based illusionist and magician who have changed the way we have been looking to magic. Magician Rajesh Kumar has performed for several tv channels national and regional he first came into limelight with his appearance on India's magic star on star one in which he was selected in India's top 10 magician from all over India, after this magician illusionist Rajesh Kumar travelled all across India performing his magic and mentalism shows.
                        </p>
                        <Link to="/about"><button className="experience-read-btn">READ MORE</button></Link>
                    </div>

                    <div className="experience-right-wrap animate-on-scroll">
                        <img src={experienceRight} alt="Magician Rajesh Kumar" className="experience-right-img" />
                    </div>
                </div>

                <div className="experience-bottom-line"></div>
            </section>

            {/* ===== BRANDS MARQUEE SECTION ===== */}
            <div className="animate-on-scroll">
                <BrandsMarquee />
            </div>

            {/* ===== TESTIMONIALS MARQUEE SECTION ===== */}
            <div className="animate-on-scroll">
                <TestimonialsMarquee />
            </div>
        </div>
    )
}

export default Home;