import React, { useEffect, useState } from 'react';
import './style/style.css';
import backWallFallback from '../assets/back-wall.jpg';
import { useParams, useLocation, Link } from 'react-router-dom';
import { api } from '../lib/api';

function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

const BlogView = () => {
    const { slug } = useParams();
    const location = useLocation();
    const [blog, setBlog] = useState(null);
    const [notFound, setNotFound] = useState(false);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    useEffect(() => {
        setBlog(null);
        setNotFound(false);
        api
            .blog(slug)
            .then((data) => setBlog(data))
            .catch(() => setNotFound(true));
    }, [slug]);

    if (notFound) {
        return (
            <div className="blog-view-wrapper">
                <section className="blog-view-hero" style={{ backgroundImage: `url(${backWallFallback})` }}>
                    <div className="blog-view-overlay"></div>
                    <div className="blog-view-container">
                        <h1 className="blog-view-title">Blog not found</h1>
                        <p><Link to="/blogs">Back to Blogs</Link></p>
                    </div>
                </section>
            </div>
        );
    }

    if (!blog) return null;

    const relatedBlogs = blog.related || [];

    return (
        <div className="blog-view-wrapper">
            {/* ===== BLOG VIEW HERO & MAIN SECTION ===== */}
            <section className="blog-view-hero" style={{ backgroundImage: `url(${backWallFallback})` }}>
                <div className="blog-view-overlay"></div>

                <div className="blog-view-container">
                    {/* Top Navigation Back Link */}
                    <div className="blog-view-top-nav animate-on-scroll">
                        <Link to="/blogs" className="blog-back-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                            Back to Blogs
                        </Link>
                    </div>

                    {/* Blog Header Title & Meta */}
                    <div className="blog-view-header animate-on-scroll">
                        <div className="blog-view-badge-row">
                            <span className="blog-view-category-badge">{blog.category}</span>
                            <span className="blog-view-meta-item">• {formatDate(blog.publishedDate)}</span>
                            <span className="blog-view-meta-item">• {blog.readTime}</span>
                        </div>
                        <h1 className="blog-view-title">{blog.title}</h1>
                        <p className="blog-view-author">By <span className="author-name">{blog.author}</span></p>
                    </div>

                    {/* Main Featured Image */}
                    <div className="blog-view-featured-img-wrap animate-on-scroll">
                        <img src={blog.imageUrl} alt={blog.title} className="blog-view-featured-img" />
                    </div>

                    {/* Blog Content Section */}
                    <div className="blog-view-content-body animate-on-scroll">
                        <div className="blog-paragraphs">
                            {blog.content.map((paragraph, idx) => (
                                <p key={idx} className="blog-p">{paragraph}</p>
                            ))}
                        </div>

                        {/* Quote Box */}
                        {blog.quote && (
                            <blockquote className="blog-quote-box">
                                <svg className="quote-icon" width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                                </svg>
                                <p className="quote-text">"{blog.quote}"</p>
                                <cite className="quote-author">— Magician Rajesh Kumar</cite>
                            </blockquote>
                        )}
                    </div>

                    {/* Featured Video Section */}
                    {blog.youtubeVideoId && (
                        <div className="blog-view-video-section animate-on-scroll">
                            <div className="blog-video-header">
                                <h2 className="blog-video-title">WATCH PERFORMANCE HIGHLIGHTS</h2>
                                <p className="blog-video-subtitle">{blog.videoTitle || "Experience the Magic Live in Action"}</p>
                            </div>
                            <div className="blog-video-wrapper">
                                <iframe
                                    src={`https://www.youtube.com/embed/${blog.youtubeVideoId}?rel=0`}
                                    title={blog.videoTitle || blog.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="blog-video-iframe"
                                ></iframe>
                            </div>
                        </div>
                    )}

                    {/* Related Blogs Section */}
                    {relatedBlogs.length > 0 && (
                        <div className="blog-view-related-section animate-on-scroll">
                            <h3 className="related-section-title">EXPLORE MORE BLOGS</h3>
                            <div className="blogs-page-grid related-grid">
                                {relatedBlogs.slice(0, 3).map((item) => (
                                    <Link
                                        key={item.id}
                                        to={`/blogs/${item.slug}`}
                                        className="blogs-grid-card animate-on-scroll"
                                        style={{ textDecoration: 'none', color: 'inherit' }}
                                    >
                                        <div className="blogs-grid-img-wrap">
                                            <img src={item.imageUrl} alt={item.title} className="blogs-grid-img" />
                                            <span className="blogs-category-tag">{item.category}</span>
                                        </div>
                                        <div className="blogs-grid-body">
                                            <div className="blogs-meta-row">
                                                <span className="blogs-grid-date">{formatDate(item.publishedDate)}</span>
                                            </div>
                                            <h4 className="blogs-grid-card-title">{item.title}</h4>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default BlogView;
