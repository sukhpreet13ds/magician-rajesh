import React, { useEffect } from 'react';
import './style/style.css';
import backWall from '../assets/back-wall.jpg';
import { useLocation, useNavigate, useSearchParams, Link } from 'react-router-dom';
import { blogsData } from '../data/blogsData';

const BlogView = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const blogIdFromQuery = searchParams.get('id');

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    // Find blog from location state, or URL query param, or fallback to first blog
    const blog = location.state?.blog || 
                 blogsData.find(b => b.id === blogIdFromQuery) || 
                 blogsData[0];

    // Other blogs for related reading
    const relatedBlogs = blogsData.filter(b => b.id !== blog.id);

    return (
        <div className="blog-view-wrapper">
            {/* ===== BLOG VIEW HERO & MAIN SECTION ===== */}
            <section className="blog-view-hero" style={{ backgroundImage: `url(${backWall})` }}>
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
                            <span className="blog-view-meta-item">• {blog.date}</span>
                            <span className="blog-view-meta-item">• {blog.readTime}</span>
                        </div>
                        <h1 className="blog-view-title">{blog.title}</h1>
                        <p className="blog-view-author">By <span className="author-name">{blog.author}</span></p>
                    </div>

                    {/* Main Featured Image */}
                    <div className="blog-view-featured-img-wrap animate-on-scroll">
                        <img src={blog.image} alt={blog.title} className="blog-view-featured-img" />
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
                    <div className="blog-view-related-section animate-on-scroll">
                        <h3 className="related-section-title">EXPLORE MORE BLOGS</h3>
                        <div className="blogs-page-grid related-grid">
                            {relatedBlogs.slice(0, 3).map((item) => (
                                <div
                                    key={item.id}
                                    className="blogs-grid-card animate-on-scroll"
                                    onClick={() => navigate('/blog-view', { state: { blog: item } })}
                                    role="button"
                                    tabIndex={0}
                                    onKeyDown={(e) => { if (e.key === 'Enter') navigate('/blog-view', { state: { blog: item } }); }}
                                >
                                    <div className="blogs-grid-img-wrap">
                                        <img src={item.image} alt={item.title} className="blogs-grid-img" />
                                        <span className="blogs-category-tag">{item.category}</span>
                                    </div>
                                    <div className="blogs-grid-body">
                                        <div className="blogs-meta-row">
                                            <span className="blogs-grid-date">{item.date}</span>
                                        </div>
                                        <h4 className="blogs-grid-card-title">{item.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BlogView;
