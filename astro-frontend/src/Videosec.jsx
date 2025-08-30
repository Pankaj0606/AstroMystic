import React, { useState, useEffect } from 'react';
import './Videosec.css'; // Optional CSS for Review section

const Videosec = () => {
    return (
        <div className="content-section">
        <h1 className="centered-title">Love from Sarah, Mexico</h1>
        <div className="video-heading-container">
          <div className="youtube-video">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/F2g8gzGEHxM?si=zjwakT9FGNxNwq0Z" 
              title="Sarah" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
          <div className="heading-text">
            <p>Check out this great video</p>
          </div>
        </div>
      </div>
      );
    };
    
    export default Videosec;