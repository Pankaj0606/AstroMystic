// import React, { useState, useEffect } from 'react';
// import './Socialmedia.css'; // Optional CSS for Review section

// const Socialmedia = () => {
//     return (
//         <div className="social-media-strip">
//         <div className="social-media-text">
//           <a href="https://www.youtube.com" className="social-link">YouTube</a>
//           <a href="https://www.facebook.com" className="social-link">Facebook</a>
//           <a href="https://www.instagram.com" className="social-link">Instagram</a>
//         </div>
//       </div>
//     );
//   };
  
//   export default Socialmedia;


import React from 'react';
import './Socialmedia.css';
// Import the specific icons we need from the Font Awesome icon set
import { FaYoutube, FaFacebook, FaInstagram } from 'react-icons/fa';

const Socialmedia = () => {
    return (
        <div className="social-media-strip">
            <div className="social-media-track">
                {/* We repeat the content twice to create a seamless loop */}
                <div className="social-media-content">
                    <span className="star">✦</span>
                    <a href="https://www.youtube.com" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                    <span className="star">✧</span>
                    <a href="https://www.facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <span className="star">✨</span>
                    <a href="https://www.instagram.com" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <span className="star">✦</span>
                </div>
                <div className="social-media-content" aria-hidden="true">
                    <span className="star">✦</span>
                    <a href="https://www.youtube.com" className="social-link" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                        <FaYoutube />
                    </a>
                    <span className="star">✧</span>
                    <a href="https://www.facebook.com" className="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                    </a>
                    <span className="star">✨</span>
                    <a href="https://www.instagram.com" className="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <span className="star">✦</span>
                </div>
            </div>
        </div>
    );
};

export default Socialmedia;