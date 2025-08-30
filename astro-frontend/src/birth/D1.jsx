import React from 'react';
import BirthChart from './Birthchart';
import AstrologyTable from './Birthtable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D1() {
  return (
    <>
        <BirthChart />
        <ChartSelector activeChart="D1" /> {/* <-- Add the selector here */}
        <AstrologyTable />
    </>
  );
}

export default D1;