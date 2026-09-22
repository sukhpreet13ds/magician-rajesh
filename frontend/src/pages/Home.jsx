import React from 'react';
import './style/style.css';
import backWallFallback from '../assets/back-wall.jpg';
import heroBgFallback from '../assets/hero-bg.png';
import magicianRajeshFallback from '../assets/magician-rajesh.png';
import igtStageFallback from '../assets/igt-stage.png';
import rajeshSideFallback from '../assets/rajesh-side.png';
import magicService1Fallback from '../assets/magice-service1.png';
import magicService2Fallback from '../assets/magic-service2.png';
import magicService3Fallback from '../assets/magice-service3.png';
import moreBgFallback from '../assets/more-bg.jpg';
import experienceBgFallback from '../assets/experience-bg.jpg';
import experienceRightFallback from '../assets/experience-right.jpg';
import BrandsMarquee from '../components/BrandsMarquee';
import TestimonialsMarquee from '../components/TestimonialsMarquee';
import { TextAnimate } from '../components/magicui/text-animate';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { api } from '../lib/api';

const DEFAULT_CONTENT = {
    heroTitleLine1: 'NOT JUST',
    heroTitleLine2: 'ENTERTAINMENT.',
    heroSubtitleCursive: 'An',
    heroSubtitleWord: 'EXPERIENCE',
    heroFooterText: 'THEY WILL NEVER FORGET.',
    heroCtaText: 'ENQUIRE FOR YOUR EVENT',
    heroBackgroundImage: backWallFallback,
    heroOverlayImage: heroBgFallback,
    heroPersonImage: magicianRajeshFallback,

    performerTag: 'The Performer',
    performerHeading: 'MAGIC BUILT AROUND YOUR AUDIENCE.',
    performerBio1:
        "From a breakthrough on India's Magic Star to appearances on India's Got Talent and Hunarbaaz: Desh Ki Shaan, Rajesh Kumar has spent over sixteen years turning audiences into part of the story.",
    performerBio2:
        'Every show is alive, interactive and flexible: close-up astonishment among guests, a high-energy stage act, or pure mind reading designed for the room in front of him.',
    performerQuote: '"Not just a show—an experience your guests will keep talking about."',
    performerBookBtnText: 'BOOK RAJESH',
    performerStageImage: igtStageFallback,
    performerSideImage: rajeshSideFallback,
    instagramReelPermalink: 'https://www.instagram.com/reel/DdY2zS0yysn/?utm_source=ig_embed&utm_campaign=loading',

    servicesTag: 'Suitable for',
    servicesHeading: 'EXTRAÖRDINARY EVENTS',
    servicesTeaser: [
        { title: 'CORPORATE MAGIC', description: 'A 30–45 minute interactive show for conferences, dealer meets, team events and award nights.', image: magicService1Fallback },
        { title: 'PRODUCT LAUNCH ILLUSIONS', description: 'Reveal a product, bring your CEO on stage, or make a brand message appear in a truly memorable way.', image: magicService2Fallback },
        { title: 'CLOSE-UP & IPAD MAGIC', description: 'Personal, high-impact magic for cocktail hours, VIP guests, exhibitions and intimate gatherings.', image: magicService3Fallback },
    ],
    servicesBtnText: 'VIEW ALL SERVICES',

    moreTag: 'More than',
    moreHeading: 'ENTERTAINMENT',
    moreBackgroundImage: moreBgFallback,
    moreCards: [
        { title: 'PSYCHOLOGICAL<br />EFFECT', description: 'Moments that feel personal, impossible, and deeply unforgettable.' },
        { title: 'GENUINE INTERACTION<br />WITH A WOW FACTOR', description: "Your guests don't just watch —they become part of the experience." },
        { title: 'ELEGANT<br />ATMOSPHERE', description: 'Sophisticated, intelligent entertainment that elevates the entire event.' },
    ],

    experienceTag: 'The person behind',
    experienceHeading: 'THE EXPERIENCE',
    experienceText:
        "Magician Rajesh Kumar is a Mumbai based illusionist and magician who have changed the way we have been looking to magic. Magician Rajesh Kumar has performed for several tv channels national and regional he first came into limelight with his appearance on India's magic star on star one in which he was selected in India's top 10 magician from all over India, after this magician illusionist Rajesh Kumar travelled all across India performing his magic and mentalism shows.",
    experienceImage: experienceRightFallback,
    experienceBtnText: 'READ MORE',

    brandsTag: 'A selection',
    brandsHeading: 'BRANDS RAJESH WORK WITH',
    testimonialsTag: 'Valued by customers',
    testimonialsHeading: 'WITH THE HIGHEST STANDARDS',
};

const Home = () => {
    const [c, setC] = React.useState(DEFAULT_CONTENT);

    React.useEffect(() => {
        api
            .pageContent('home')
            .then((page) => setC((prev) => ({ ...prev, ...page.content })))
            .catch(() => {});
    }, []);

    React.useEffect(() => {
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        } else {
            const script = document.createElement('script');
            script.src = '//www.instagram.com/embed.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }, [c.instagramReelPermalink]);

    return(
        <div className="home-container">
            {/* HERO SECTION - NO animate-on-scroll as requested */}
            <section className="hero-section" style={{ backgroundImage: `url(${c.heroBackgroundImage})` }}>
                <div className="hero-content">
                    <div className="hero-text-container">
                        <h1 className="hero-title">
                            <TextAnimate animation="blurIn" as="span" className="text-white text-not-just">
                                {c.heroTitleLine1}
                            </TextAnimate>
                            <br/>
                            <TextAnimate animation="blurIn" delay={0.2} as="span" className="text-yellow text-entertainment">
                                {c.heroTitleLine2}
                            </TextAnimate>
                        </h1>
                        <div className="hero-subtitle-container">
                            <motion.span
                                className="text-cursive"
                                initial={{ scale: 0, opacity: 0, y: -20 }}
                                animate={{ scale: [1.2, 0.9, 1], opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
                            >
                                {c.heroSubtitleCursive}
                            </motion.span>
                            <TextAnimate animation="blurIn" delay={0.4} as="span" className="text-yellow text-experience">
                                {c.heroSubtitleWord}
                            </TextAnimate>
                        </div>
                        <h2 className="hero-footer-text">
                            <TextAnimate animation="blurIn" delay={0.6} as="span" className="text-white text-never-forget">
                                {c.heroFooterText}
                            </TextAnimate>
                        </h2>
                        <a href="#enquire">
                        <motion.button
                            className="hero-enquire-btn"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            {c.heroCtaText}
                        </motion.button>
                        </a>
                        </div>
                    <div className="hero-image-container">
                        <img src={c.heroOverlayImage} alt="Hero Background" className="hero-bg-img" />
                        <motion.img
                            src={c.heroPersonImage}
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
                    <img src={c.performerSideImage} alt="Rajesh Kumar" className="performer-person-img" />
                </div>

                <div className="performer-inner">
                    <div className="performer-header animate-on-scroll">
                        <p className="performer-italic-tag">{c.performerTag}</p>
                        <h2 className="performer-heading">{c.performerHeading}</h2>
                    </div>

                    <div className="performer-content-grid">
                        <div className="performer-stage-column animate-on-scroll">
                            <div className="performer-stage-wrap">
                                <img src={c.performerStageImage} alt="India's Got Talent Stage" className="performer-stage-img" />
                            </div>
                            <div className="performer-btn-row">
                               <a href='#enquire'><button className="performer-book-btn">{c.performerBookBtnText}</button></a>
                            </div>
                        </div>

                        <div className="performer-text animate-on-scroll">
                            <p className="performer-bio">
                                {c.performerBio1}
                            </p>
                            <p className="performer-bio">
                                {c.performerBio2}
                            </p>
                            <p className="performer-quote">
                                <em>{c.performerQuote}</em>
                            </p>
                        </div>

                        {/* Right Side Corner: Instagram Latest Reel Embed */}
                        <div className="performer-reel-column animate-on-scroll">
                            <div className="performer-reel-container">
                                <span className="reel-badge-tag">LATEST REEL</span>
                                <blockquote
                                    className="instagram-media"
                                    data-instgrm-permalink={c.instagramReelPermalink}
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
                                            href={c.instagramReelPermalink}
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
                                            <a href={c.instagramReelPermalink} style={{ color: '#c9c8cd', fontFamily: 'Arial,sans-serif', fontSize: '14px', fontStyle: 'normal', fontWeight: 'normal', lineHeight: '17px', textDecoration: 'none' }} target="_blank" rel="noreferrer">
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
                    <p className="services-cursive-tag">{c.servicesTag}</p>
                    <h2 className="services-heading">{c.servicesHeading}</h2>
                </div>

                <div className="services-cards-container">
                    {c.servicesTeaser.map((card, i) => (
                        <div key={i} className={`services-card ${['card-gold', 'card-light', 'card-dark'][i % 3]} animate-on-scroll`}>
                            <div className="services-card-dot"></div>
                            <div className="services-card-img-wrap">
                                <img src={card.image} alt={card.title} className="services-card-img" />
                            </div>
                            <div className="services-card-body">
                                <h3 className="services-card-title">{card.title}</h3>
                                <p className="services-card-desc">
                                    {card.description}
                                </p>
                                <Link to='/events' className="services-card-link">READ MORE</Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="services-bottom-btn-wrap animate-on-scroll">
                    <Link to="/services"><button className="services-view-all-btn">{c.servicesBtnText}</button></Link>
                </div>

                <div className="services-vertical-line" style={{visibility: "hidden"}}></div>
            </section>

            {/* ===== MORE THAN ENTERTAINMENT SECTION ===== */}
            <section className="more-section" style={{ backgroundImage: `url(${c.moreBackgroundImage})` }}>
                <div className="more-overlay"></div>
                <div className="more-top-line" style={{visibility: "hidden"}}></div>

                <div className="more-header animate-on-scroll">
                    <p className="more-cursive-tag">{c.moreTag}</p>
                    <h2 className="more-heading">{c.moreHeading}</h2>
                </div>

                <div className="more-cards-container">
                    {c.moreCards.map((card, i) => (
                        <div key={i} className={`more-card ${i === 1 ? 'card-center' : ''} animate-on-scroll`}>
                            <div className="more-card-dot"></div>
                            <h3 className="more-card-title" dangerouslySetInnerHTML={{ __html: card.title }} />
                            <p className="more-card-desc">
                                {card.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="more-bottom-line"></div>
            </section>

            {/* ===== EXPERIENCE SECTION ===== */}
            <section className="experience-section">
                <div className="experience-bg-layer" style={{ backgroundImage: `url(${experienceBgFallback})` }}></div>
                <div className="experience-top-line"></div>

                <div className="experience-container">
                    <div className="experience-left-content animate-on-scroll">
                        <p className="experience-cursive-tag">{c.experienceTag}</p>
                        <h2 className="experience-heading">{c.experienceHeading}</h2>
                        <p className="experience-text">
                            {c.experienceText}
                        </p>
                        <Link to="/about"><button className="experience-read-btn">{c.experienceBtnText}</button></Link>
                    </div>

                    <div className="experience-right-wrap animate-on-scroll">
                        <img src={c.experienceImage} alt="Magician Rajesh Kumar" className="experience-right-img" />
                    </div>
                </div>

                <div className="experience-bottom-line"></div>
            </section>

            {/* ===== BRANDS MARQUEE SECTION ===== */}
            <div className="animate-on-scroll">
                <BrandsMarquee tag={c.brandsTag} heading={c.brandsHeading} />
            </div>

            {/* ===== TESTIMONIALS MARQUEE SECTION ===== */}
            <div className="animate-on-scroll">
                <TestimonialsMarquee tag={c.testimonialsTag} heading={c.testimonialsHeading} />
            </div>
        </div>
    )
}

export default Home;
