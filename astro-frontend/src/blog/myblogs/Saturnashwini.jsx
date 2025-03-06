import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as pdfjsLib from 'pdfjs-dist';
import './saturnashwini.css';
import blogImage from '../../images/Gemini_Generated_Image_8y35ur8y35ur8y35.jpeg'; // Sample image for each blog

pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const BlogDisplay = ({ pdfFile, blogTitle, recentBlogs }) => {
  const [blogContent, setBlogContent] = useState('');

  // Load PDF and extract text content
  useEffect(() => {
    const loadPdf = async () => {
      const pdf = await pdfjsLib.getDocument(pdfFile).promise;
      const content = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item) => item.str).join(' ');
        content.push(pageText);
      }
      setBlogContent(content.join('\n'));
    };

    loadPdf();
  }, [pdfFile]);

  // Separate the heading and body content
  const contentArray = blogContent.split('\n');
  const heading = contentArray[0] || blogTitle; // Use first line as heading or fallback to blogTitle
  const bodyContent = contentArray.slice(1).join('\n');

  return (
    <div className="blog-container">
      <h1 className="blog-title">My Blogs</h1>
      <div className="blog-content">
        {/* Main blog content */}
        <div className="main-content">
          <h3 className="blog-heading">{heading}</h3>
          <img src={blogImage} alt="Blog" className="blog-image" />
          <p className="blog-text">{bodyContent}</p>
        </div>

        {/* Sidebar with recent blogs */}
        <div className="sidebar">
          <h3>Recent Blogs</h3>
          <ul>
            {recentBlogs.map((blog, index) => (
              <li key={index}>
                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDisplay;
