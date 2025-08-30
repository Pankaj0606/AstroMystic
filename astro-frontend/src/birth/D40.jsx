import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D40() {
  return (
    <>
        <DivisionalChart chartId="D40" />
        <ChartSelector activeChart="D40" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D40" />
    </>
  );
}

export default D40;