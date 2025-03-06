import React, { useState } from 'react';
import './Reviewcard.css'; // Optional CSS for Review section
import profilePic1 from "./images/Gemini_Generated_Image_x3f4p1x3f4p1x3f4.jpeg";
import profilePic2 from "./images/Gemini_Generated_Image_x3f4p1x3f4p1x3f4.jpeg";

const reviewsData = [
  {
    profilePic: profilePic1,
    name: "Star",
    date: "01/01/2021",
    oneLiner: "Amazing Experience!",
    fullReview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis augue sed erat gravida, ut eleifend neque mollis.",
    stars: 5
  },
  {
    profilePic: profilePic2,
    name: "Star",
    date: "01/01/2021",
    oneLiner: "Worth Every Penny!",
    fullReview: "Proin non orci eu lorem malesuada tincidunt. Pellentesque in justo vitae neque efficitur pharetra.",
    stars: 4
  },
  {
    profilePic: profilePic1,
    name: "Star",
    date: "01/01/2021",
    oneLiner: "Great Customer Service",
    fullReview: "Aliquam vestibulum tincidunt felis, non pellentesque nulla convallis a. Ut ut dictum nulla. Cras ultricies.",
    stars: 4
  },
  {
    profilePic: profilePic2,
    name: "Star",
    date: "01/01/2021",
    oneLiner: "Worth",
    fullReview: "Proin non orci eu lorem malesuada tincidunt. Pellentesque in justo vitae neque efficitur pharetra.",
    stars: 4
  }
  // Add more review data here if needed
];

const Reviewcard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const renderStars = (stars) => {
    return '★'.repeat(stars) + '☆'.repeat(5 - stars); // Display filled and unfilled stars
  };

  return (
    <div className="reviews-section-card">
      <h1 className="review-title-card">Reviews</h1>

      <div className="cards-slider">
        {/* Left Arrow */}
        <div className="arrow left-arrow" onClick={handlePrev}>
          &#9664;
        </div>

        {/* Review Cards */}
        <div className="review-cards-container">
          {getVisibleReviews().map((review, index) => (
            <div key={index} className="review-card">
              <img src={review.profilePic} alt="Profile" className="profile-pic" />
              <p className="name">{review.name} {review.date}</p>
              <h3 className="one-liner">{review.oneLiner}</h3>
              <p className="review-text">{review.fullReview}</p>
              <div className="stars">{renderStars(review.stars)}</div> {/* Star Ratings */}
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <div className="arrow right-arrow" onClick={handleNext}>
          &#9654;
        </div>
      </div>
    </div>
  );
};

export default Reviewcard;
