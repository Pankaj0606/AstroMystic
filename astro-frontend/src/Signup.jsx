import React, { useState, useEffect } from 'react';
import './Signup.css'; // Optional CSS for Review section

const Signup = () => {
    return (
        <div className="signup-section">
        <h1>NICE TO MEET YOU</h1>
        <h1>SUBSCRIBE</h1>
        <p>Sign up to get latest astrology updates</p>
        <div className="signup-container">
          <input type="email" placeholder="Enter your email" className="email-input" />
          <button className="signup-button">Sign Up</button>
        </div>
      </div>
    );
  };
  
  export default Signup;
