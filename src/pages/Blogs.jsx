import React, { useState } from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';
import { useNavigate } from 'react-router-dom';
import { blogsData } from '../data/blogsData';

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const navigate = useNavigate();

    const categories = ['All', 'Corporate Magic', 'Mentalism', 'Techno Magic', 'Stage Magic'];

    const filteredBlogs = selectedCategory === 'All'
        ? blogsData
        : blogsData.filter(blog => blog.category.toLowerCase() === selectedCategory.toLowerCase());

    const handleBlogClick = (blog) => {
        navigate('/blog-view', { state: { blog } });
    };

    return (
        <div className="blogs-page-wrapper">
            {/* ===== BLOGS HERO SECTION ===== */}
            <section className="blogs-page-hero" style={{ backgroundImage: `url(${backWall})` }}>
                <div className="blogs-page-overlay"></div>

                <div className="blogs-page-container">
                    <div className="blogs-page-header animate-on-scroll">
                        <p className="blogs-cursive-tag">Wisdom & Wonder</p>
                        <h1 className="blogs-page-title">OUR BLOGS</h1>
                        <h2 className="blogs-page-subtitle">Magician Rajesh Kumar</h2>
                        <p className="blogs-page-description">
                            Discover fascinating articles on corporate illusion, mind-reading psychology, techno magic innovation, and behind-the-scenes magic insights.
                        </p>
                    </div>

                    {/* Category Filter Pills */}
                    <div className="blogs-filter-bar animate-on-scroll">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`blogs-filter-btn ${selectedCategory === category ? 'active' : ''}`}
                                onClick={() => setSelectedCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Blogs Cards Grid */}
                    <div className="blogs-page-grid">
                        {filteredBlogs.map((blog) => (
                            <div
                                key={blog.id}
                                className="blogs-grid-card-wrap animate-on-scroll"
                            >
                                <div 
                                    className="blogs-grid-card"
                                    onClick={() => handleBlogClick(blog)}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter') handleBlogClick(blog); }}
                                >
                                    <div className="blogs-grid-img-wrap">
                                        <img src={blog.image} alt={blog.title} className="blogs-grid-img" />
                                        <span className="blogs-category-tag">{blog.category}</span>
                                    </div>
                                    <div className="blogs-grid-body">
                                        <div className="blogs-meta-row">
                                            <span className="blogs-grid-date">{blog.date}</span>
                                            <span className="blogs-grid-readtime">{blog.readTime}</span>
                                        </div>
                                        <h3 className="blogs-grid-card-title">{blog.title}</h3>
                                        <p className="blogs-grid-summary">{blog.summary}</p>
                                        <div className="blogs-card-footer">
                                            <span className="blogs-read-more-btn">
                                                Read Full Blog 
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                    <polyline points="12 5 19 12 12 19"></polyline>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
