import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D20() {
  return (
    <>
        <DivisionalChart chartId="D20" />
        <ChartSelector activeChart="D20" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D20" />
    </>
  );
}

export default D20;