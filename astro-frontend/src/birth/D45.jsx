import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D45() {
  return (
    <>
        <DivisionalChart chartId="D45" />
        <ChartSelector activeChart="D45" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D45" />
    </>
  );
}

export default D45;