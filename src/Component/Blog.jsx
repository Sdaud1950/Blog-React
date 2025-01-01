import React, { useState, useEffect, useRef, useMemo } from 'react';
import data from '../data';
import './Blog.css';

const Blog = () => {
  const tocRef = useRef(null);

  const [tocItems, setTocItems] = useState([]);
  const [readMorePost, setReadMorePost] = useState(null);

  useMemo(() => {
    // Generate TOC items based on blog titles
    const toc = data.map((blogs) => ({
      id: blogs.id,
      title: blogs.title,
    }));
    setTocItems(toc);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(`blog-${id}`);
    if (element) {
      // Adjust scroll position to ensure TOC is still visible
      const offset = tocRef.current.offsetHeight + 10; // Adjust offset to prevent overlap
      const yPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: yPosition, behavior: 'smooth' });
    }
  };

  const toggleReadMore = (id) => {
    setReadMorePost(readMorePost === id ? null : id); // Toggle read more for the clicked post
  };

  return (
    <div className="blog-wrapper">
      {/* Sticky Table of Contents */}
      <aside className="toc" ref={tocRef}>
        <h2>Table of Contents</h2>
        <ul>
          {tocItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleScrollTo(item.id)}>{item.title}</button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Blog Posts */}
      <div className="blog-container">
        {data.map((blogs) => {
          const isReadMore = readMorePost === blogs.id;
          return (
            <div className="blog-post" id={`blog-${blogs.id}`} key={blogs.id}>
              <h1>{blogs.title}</h1>
              <h2>{blogs.author}</h2>

              {/* Displaying blog content and toggle button */}
              <p >
                {isReadMore ? blogs.content : `${blogs.content.substring(0, 100)}...`}
              </p>
              <button style={{
                backgroundColor: '#f7f7f7',
                border: 'none',
                padding: '10px',
                cursor: 'pointer',
                color: 'black',
                fontSize: '16px',
                borderRadius: '5px',
                marginBottom: '10px'
              }} onClick={() => toggleReadMore(blogs.id)}>
                {isReadMore ? 'Read Less' : 'Read More'}
              </button>

              <div className="tags">
                {blogs.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <img src={blogs.thumbnail} alt={blogs.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
