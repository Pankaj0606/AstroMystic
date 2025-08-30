import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D24() {
  return (
    <>
        <DivisionalChart chartId="D24" />
        <ChartSelector activeChart="D24" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D24" />
    </>
  );
}

export default D24;