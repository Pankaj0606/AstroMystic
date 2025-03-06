import React, { useState, useEffect } from 'react';
import image1 from "./images/Gemini_Generated_Image_taypcttaypcttayp.jpeg";
import image2 from "./images/Gemini_Generated_Image_x3f4p1x3f4p1x3f4.jpeg";
import './Review.css'; // Optional CSS for Review section

const reviews = [
  { img: image1, alt: "Review 1" },
  { img: image2, alt: "Review 2" },
  { img: image1, alt: "Review 3" },
  { img: image2, alt: "Review 4" },
  { img: image1, alt: "Review 5" }
];

const Review = () => {
  const [current, setCurrent] = useState(0); // Start from the 2nd image
  const totalImages = reviews.length;



  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % totalImages); // Go to the next image
  };
  const getClassForIndex = () => {
    return [
      reviews[current],
      reviews[(current + 1) % totalImages],
      reviews[(current + 2) % totalImages]
    ];
  };


  return (
    <div className="reviews-section">
      <h1 className="review-title">Best Reviews</h1>
      <div className="carousel-container">
      <div className="arrow left-arrow" onClick={handlePrev}>
          &#9664;
        </div>
        <div className="carousel">
          {getClassForIndex().map((review, index) => (
            <div key={index} className={`carousel-item ${getClassForIndex(index)}`}>
              <img src={review.img} alt={review.alt} />
            </div>
          ))}
        </div>
        <div className="arrow right-arrow" onClick={handleNext}>
          &#9654;
        </div>
      </div>
    </div>
  );
};

export default Review;
