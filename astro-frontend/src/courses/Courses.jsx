import React from 'react';
import './Courses.css'; // Import your new CSS file
import { Link } from 'react-router-dom'; // For the button links

// Import icons for each course
import { FaRegStar, FaHeart, FaBriefcase, FaSyncAlt, FaProjectDiagram } from 'react-icons/fa';

// We'll store our course data in an array of objects for easy management.
const coursesData = [
    {
        id: 1,
        title: "The Art of the Birth Chart",
        description: "A comprehensive journey from the basics of planets and signs to advanced techniques in natal chart interpretation. Discover the blueprint of your soul.",
        icon: <FaRegStar />,
        level: "Beginner to Intermediate",
        link: "/contact" // Link to contact page for enrollment for now
    },
    {
        id: 2,
        title: "Sacred Unions: Astrology of Relationships",
        description: "Explore the mysteries of synastry and composite charts. Learn how to analyze compatibility, challenges, and the karmic ties between two souls.",
        icon: <FaHeart />,
        level: "Intermediate",
        link: "/contact"
    },
    {
        id: 3,
        title: "Vocational Astrology: Charting Your Career",
        description: "Unlock your professional potential by analyzing the Midheaven, 10th house, and key planetary placements related to your unique career path and purpose.",
        icon: <FaBriefcase />,
        level: "All Levels",
        link: "/contact"
    },
    {
        id: 4,
        title: "Shadow & Wisdom: Retrograde Planets",
        description: "Dive deep into the misunderstood world of retrograde planets. Learn how these inner journeys represent powerful opportunities for reflection and soul growth.",
        icon: <FaSyncAlt />,
        level: "Intermediate to Advanced",
        link: "/contact"
    },
    {
        id: 5,
        title: "Celestial Geometry: The Power of Aspects",
        description: "Master the dynamic language of planetary aspects. Understand how the geometric relationships between planets create the unique story of any chart.",
        icon: <FaProjectDiagram />,
        level: "Advanced",
        link: "/contact"
    }
];

const Courses = () => {
  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>Master the Language of the Stars</h1>
        <p>
          Our courses are designed to guide you from foundational principles to advanced astrological techniques. 
          Each program is crafted to deepen your cosmic understanding and empower you on your journey of self-discovery.
        </p>
      </div>

      <div className="course-grid">
        {coursesData.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="course-icon">{course.icon}</div>
            <h2 className="course-title">{course.title}</h2>
            <p className="course-level">{course.level}</p>
            <p className="course-description">{course.description}</p>
            <Link to={course.link} className="course-button">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;