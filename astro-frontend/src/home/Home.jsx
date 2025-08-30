import './Home.css';
import React, { useState, useEffect } from 'react';
import MainSection from '../Mainsec';
import Review from '../Review';
import Newcontents from '../Newcontents';
import Signup from '../Signup';
import Socialmedia from '../Socialmedia';
import Videosec from '../Videosec';
import Reviewcard from '../Reviewcard';
import Floatingobj from '../Floatingobj';
import Contact from '../Contact';

function Home() {
  return (
    
    <>
      
      
      {/* Main Section */}
      <MainSection />

      {/* Floating objects */}
      <Floatingobj />

      {/* New Content Sections */}
      <Newcontents />

      {/* Video Section */}
      <Videosec />

      {/* Reviews Section */}
      <Review />
      

      {/* Review Cards Section */}
      <Reviewcard />

      {/* Contact Us */}
      <Contact />

      {/* New Signup Section */}
      <Signup />
      {/* Social Media Strip */}
      <Socialmedia />

      
    </>
  );
}

export default Home;
