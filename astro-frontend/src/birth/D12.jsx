import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector'; // <-- Import the new component
import './Birthchart.css';

function D12() {
  return (
    <>
        <DivisionalChart chartId="D12" />
        <ChartSelector activeChart="D12" /> {/* <-- Add the selector here */}
        <DivisionalTable chartId="D12" />
    </>
  );
}

export default D12;