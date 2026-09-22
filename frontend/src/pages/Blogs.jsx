import React, { useState, useEffect, useMemo } from 'react';
import './style/style.css';
import backWallFallback from '../assets/back-wall.jpg';
import { Link } from 'react-router-dom';
import { api } from '../lib/api';

const DEFAULT_CONTENT = {
    tag: 'Wisdom & Wonder',
    heading: 'OUR BLOGS',
    subheading: 'Magician Rajesh Kumar',
    description:
        'Discover fascinating articles on corporate illusion, mind-reading psychology, techno magic innovation, and behind-the-scenes magic insights.',
};

function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

const Blogs = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [c, setC] = useState(DEFAULT_CONTENT);
    const [heroImage, setHeroImage] = useState(backWallFallback);
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        api
            .pageContent('blogs')
            .then((page) => {
                setC((prev) => ({ ...prev, ...page.content }));
                if (page.heroImage) setHeroImage(page.heroImage);
            })
            .catch(() => {});
        api
            .blogs()
            .then((items) => setBlogs(items))
            .catch(() => {});
    }, []);

    const categories = useMemo(
        () => ['All', ...Array.from(new Set(blogs.map((b) => b.category)))],
        [blogs]
    );

    const filteredBlogs = selectedCategory === 'All'
        ? blogs
        : blogs.filter(blog => blog.category.toLowerCase() === selectedCategory.toLowerCase());

    return (
        <div className="blogs-page-wrapper">
            {/* ===== BLOGS HERO SECTION ===== */}
            <section className="blogs-page-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="blogs-page-overlay"></div>

                <div className="blogs-page-container">
                    <div className="blogs-page-header animate-on-scroll">
                        <p className="blogs-cursive-tag">{c.tag}</p>
                        <h1 className="blogs-page-title">{c.heading}</h1>
                        <h2 className="blogs-page-subtitle">{c.subheading}</h2>
                        <p className="blogs-page-description">
                            {c.description}
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
                                <Link
                                    to={`/blogs/${blog.slug}`}
                                    className="blogs-grid-card"
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    <div className="blogs-grid-img-wrap">
                                        <img src={blog.imageUrl} alt={blog.title} className="blogs-grid-img" />
                                        <span className="blogs-category-tag">{blog.category}</span>
                                    </div>
                                    <div className="blogs-grid-body">
                                        <div className="blogs-meta-row">
                                            <span className="blogs-grid-date">{formatDate(blog.publishedDate)}</span>
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
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
