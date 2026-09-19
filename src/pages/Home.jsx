import React from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';
import heroBg from '../assets/hero-bg.png';
import magicianRajesh from '../assets/magician-rajesh.png';
import igtStage from '../assets/igt-stage.png';
import rajeshSide from '../assets/rajesh-side.png';
import { TextAnimate } from '../components/magicui/text-animate';
import { motion } from 'framer-motion';

const Home = () => {
    return(
        <div className="home-container">
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
                        <motion.button 
                            className="hero-enquire-btn"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.5 }}
                        >
                            ENQUIRE FOR YOUR EVENT
                        </motion.button>
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
                {/* Person standing image placed on the far left */}
                <div className="performer-person-wrap">
                    <img src={rajeshSide} alt="Rajesh Kumar" className="performer-person-img" />
                </div>

                <div className="performer-inner">
                    {/* Header: Title & Subheading */}
                    <div className="performer-header">
                        <p className="performer-italic-tag">The Performer</p>
                        <h2 className="performer-heading">MAGIC BUILT AROUND YOUR AUDIENCE.</h2>
                    </div>

                    {/* Main content grid: Center Stage Image + Right Text */}
                    <div className="performer-content-grid">
                        <div className="performer-stage-column">
                            <div className="performer-stage-wrap">
                                <img src={igtStage} alt="India's Got Talent Stage" className="performer-stage-img" />
                            </div>
                            <div className="performer-btn-row">
                                <button className="performer-book-btn">BOOK RAJESH</button>
                            </div>
                        </div>

                        <div className="performer-text">
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
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;