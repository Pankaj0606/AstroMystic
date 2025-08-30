import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D9() {
  return (
    <>
        <DivisionalChart chartId="D9" />
        <ChartSelector activeChart="D9" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D9" />
    </>
  );
}

export default D9;