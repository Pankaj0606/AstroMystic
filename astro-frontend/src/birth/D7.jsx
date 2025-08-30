import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D7() {
  return (
    <>
        <DivisionalChart chartId="D7" />
        <ChartSelector activeChart="D7" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D7" />
    </>
  );
}

export default D7;