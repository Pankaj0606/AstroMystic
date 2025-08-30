// import React, { useState } from 'react';
// import './D1.css';
// import D2chart from './D2chart';
// import D9table from './D9table';

// function D9() {


//   return (
//     <>
//         <D2chart />
//         <D9table />
//     </>
//   );
// }

// export default D9;


import React from 'react';
import DivisionalChart from './DivisionalChart';
import DivisionalTable from './DivisionalTable';
import ChartSelector from './ChartSelector';
import './Birthchart.css';

function D2() {
  return (
    <>
        <DivisionalChart chartId="D2" />
        <ChartSelector activeChart="D2" />
        <DivisionalTable chartId="D2" />
    </>
  );
}

export default D2;