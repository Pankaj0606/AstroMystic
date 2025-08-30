import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D30() {
  return (
    <>
        <DivisionalChart chartId="D30" />
        <ChartSelector activeChart="D30" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D30" />
    </>
  );
}

export default D30;