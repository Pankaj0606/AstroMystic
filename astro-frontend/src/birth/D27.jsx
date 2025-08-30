import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D27() {
  return (
    <>
        <DivisionalChart chartId="D27" />
        <ChartSelector activeChart="D27" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D27" />
    </>
  );
}

export default D27;