import React from 'react';
import './Payment.css'; // Optional CSS for Footer
import Payment from './Payment';
import Consultation from './Option';
import Tarotmain from './Tarotmain';

const Tarotread = () => {
  return (
    <>
        <Tarotmain />
        <Consultation />
        <Payment />
    </>
    );
};

export default Tarotread;