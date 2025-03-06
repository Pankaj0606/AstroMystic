import React from 'react';
import './Astroread.css'; // Optional CSS for Footer
import Payment from './Payment';
import Consultation from './Consultation';
import Astromain from './Astromain';

const Astroread = () => {
  return (
    <>
        <Astromain />
        <Consultation />
        <Payment />
    </>
    );
};

export default Astroread;