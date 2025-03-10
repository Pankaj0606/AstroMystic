import React from 'react';
import { Link } from 'react-router-dom';
import './Mainsec.css'; // Optional CSS for MainSection

const MainSection = () => {
  return (
    <div className="main-section">
        <div className="quote-block">
            <h1>STAR</h1>
            <h2>"A journey of a thousand miles begins with a single step"</h2>
            <div className="buttons">
                <Link to="/astroread" className="mainsec-link">Astro Read</Link>
                <Link to="/tarotread" className="mainsec-link">Tarot Read</Link>
            </div>
        </div>
    </div>
  );
};

export default MainSection;