import React from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';
import heroBg from '../assets/hero-bg.png';
import magicianRajesh from '../assets/magician-rajesh.png';
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
        </div>
    )
}

export default Home;