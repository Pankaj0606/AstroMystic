import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D60() {
  return (
    <>
        <DivisionalChart chartId="D60" />
        <ChartSelector activeChart="D60" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D60" />
    </>
  );
}

export default D60;