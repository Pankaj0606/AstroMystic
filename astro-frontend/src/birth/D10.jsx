import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D10() {
  return (
    <>
        <DivisionalChart chartId="D10" />
        <ChartSelector activeChart="D10" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D10" />
    </>
  );
}

export default D10;