import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D4() {
  return (
    <>
        <DivisionalChart chartId="D4" />
        <ChartSelector activeChart="D4" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D4" />
    </>
  );
}

export default D4;