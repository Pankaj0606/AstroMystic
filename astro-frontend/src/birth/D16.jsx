import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D16() {
  return (
    <>
        <DivisionalChart chartId="D16" />
        <ChartSelector activeChart="D16" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D16" />
    </>
  );
}

export default D16;