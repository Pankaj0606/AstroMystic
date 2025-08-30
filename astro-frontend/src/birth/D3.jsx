import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D3() {
  return (
    <>
        <DivisionalChart chartId="D3" />
        <ChartSelector activeChart="D3" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D3" />
    </>
  );
}

export default D3;