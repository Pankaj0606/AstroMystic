import './App.css';
import React, { useState, useEffect } from 'react';
import { AstrologyProvider } from './Context';
import Contact from './Contact';
import Navbar from './Navbar';
import Footer from './Footer';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/Home'; // Importing your Home.jsx
import About from './about/About'; // If you have About.jsx
import Services from './services/Services'; // If you have Services.jsx
import Blog from './blog/Blog'; // If you have Blog.jsx
import Courses from './courses/Courses'; // If you have Courses.jsx
import Astroread from './astroread/Astroread';
import Tarotread from './tarotread/Tarotread';
import Cardread from './tarotread/Cardread';
import LoveRead from './tarotread/LoveRead';
import CareerRead from './tarotread/CareerRead';
import PastLifeRead from './tarotread/PastLifeRead';
import PersonalityRead from './tarotread/PersonalityRead';
import Birth from './birth/Birth';
import D1 from './birth/D1';
import D2 from './birth/D2';
import D3 from './birth/D3';
import D4 from './birth/D4';
// import D5 from './birth/D5';
// import D6 from './birth/D6';
import D7 from './birth/D7';
// import D8 from './birth/D8';
import D9 from './birth/D9';
import D10 from './birth/D10';
// import D11 from './birth/D11';
import D12 from './birth/D12';
import D16 from './birth/D16';
import D20 from './birth/D20';
import D24 from './birth/D24';
import D27 from './birth/D27';
import D30 from './birth/D30';
import D40 from './birth/D40';
import D45 from './birth/D45';
import D60 from './birth/D60';
import BlogArticle from './blog/BlogArticle';


function App() {
  return (
    
    <>
   
    <Router>
      <div>
        <Navbar />
        <AstrologyProvider>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home Page */}
        <Route path="/about" element={<About />} /> {/* About Us Page */}
        <Route path="/services" element={<Services />} /> {/* Services Page */}
        <Route path="/blog" element={<Blog />} /> {/* Blog Page */}
        <Route path="/courses" element={<Courses />} /> {/* Courses Page */}
        <Route path="/contact" element={<Contact />} /> {/* Contact Us Page */}
        <Route path="/astroread" element={<Astroread />} />
        <Route path="/tarotread" element={<Tarotread />} />
        <Route path="/tarotread/cardpred" element={<Cardread />} />
        <Route path="/tarotread/love" element={<LoveRead />} />
        <Route path="/tarotread/career" element={<CareerRead />} />
        <Route path="/tarotread/pastlife" element={<PastLifeRead />} />
        <Route path="/tarotread/personality" element={<PersonalityRead />} />
        {/*<Route path="/tarotread/cardpred/love-reading" element={<Loveread />} />*/}
        <Route path="/blog/:slug" element={<BlogArticle />} />

        
        <Route path="/birthchart" element={<Birth />} /> {/* Contact Us Page */}
        <Route path="/birthchart/D1" element={<D1 />} />
        <Route path="/birthchart/D2" element={<D2 />} />
        <Route path="/birthchart/D9" element={<D9 />} />
        <Route path="/birthchart/D3" element={<D3 />} />
        <Route path="/birthchart/D4" element={<D4 />} />
        {/* <Route path="/birthchart/D5" element={<D5 />} />
        <Route path="/birthchart/D6" element={<D6 />} /> */}
        <Route path="/birthchart/D7" element={<D7 />} />
        {/* <Route path="/birthchart/D8" element={<D8 />} /> */}
        <Route path="/birthchart/D10" element={<D10 />} />
        {/* <Route path="/birthchart/D11" element={<D11 />} /> */}
        <Route path="/birthchart/D12" element={<D12 />} />
        <Route path="/birthchart/D16" element={<D16 />} />
        <Route path="/birthchart/D20" element={<D20 />} />
        <Route path="/birthchart/D24" element={<D24 />} />
        <Route path="/birthchart/D27" element={<D27 />} />
        <Route path="/birthchart/D30" element={<D30 />} />
        <Route path="/birthchart/D40" element={<D40 />} />
        <Route path="/birthchart/D45" element={<D45 />} />
        <Route path="/birthchart/D60" element={<D60 />} />
      </Routes>
      </AstrologyProvider>
      <Footer />
      </div>
    </Router>

    </>
  );
}

export default App;
