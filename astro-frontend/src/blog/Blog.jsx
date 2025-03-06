import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Fetch JSON data from the correct path
    fetch('./data/blog.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => setReviewsData(data))
    .catch((error) => console.error("Error fetching data:", error));
}, []);

  const totalReviews = reviewsData.length;

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalReviews) % totalReviews);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalReviews);
  };

  const getVisibleReviews = () => {
    return [
      reviewsData[currentIndex],
      reviewsData[(currentIndex + 1) % totalReviews],
      reviewsData[(currentIndex + 2) % totalReviews]
    ];
  };

  return (
    <div className="blog-section-card">
      <h1 className="blog-title-card">My Blogs</h1>

      <div className="blog-cards-slider">
        <div className="arrow left-arrow" onClick={handlePrev}>
          &#9664;
        </div>

        {totalReviews > 0 ? (
          <div className="blog-cards-container">
            {getVisibleReviews().map((review, index) => (
              <div key={index} className="blog-card">
                <img src={review.profilePic} alt="Profile" className="blog-image" />
                <p className="name">{review.date}</p>
                <h3 className="blog-desc">{review.oneLiner}</h3>
                <p className="blog-text">{review.fullReview}</p>
                <Link to={`/blog/${review.link}`} className="birth-chart-button">Continue Reading</Link>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading reviews...</p>
        )}

        <div className="arrow right-arrow" onClick={handleNext}>
          &#9654;
        </div>
      </div>
    </div>
  );
};

export default Blog;
