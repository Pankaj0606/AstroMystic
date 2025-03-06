import React, { useState, useEffect } from 'react';
import './Socialmedia.css'; // Optional CSS for Review section

const Socialmedia = () => {
    return (
        <div className="social-media-strip">
        <div className="social-media-text">
          <a href="https://www.youtube.com" className="social-link">YouTube</a>
          <a href="https://www.facebook.com" className="social-link">Facebook</a>
          <a href="https://www.instagram.com" className="social-link">Instagram</a>
        </div>
      </div>
    );
  };
  
  export default Socialmedia;
