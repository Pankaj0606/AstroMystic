import React, { createContext, useState } from 'react';

export const AstrologyContext = createContext();

export const AstrologyProvider = ({ children }) => {
  const [astrologyData, setAstrologyDataState] = useState(null);
  const [chartData, setChartData] = useState(null);

  // Create a new function that logs the data before setting it
  const setAstrologyData = (data) => {
    console.log('--- NEW ASTROLOGY DATA RECEIVED ---', data); // This is our map!
    setAstrologyDataState(data);
  };

  return (
    <AstrologyContext.Provider value={{ astrologyData, setAstrologyData, chartData, setChartData}}>
      {children}
    </AstrologyContext.Provider>
  );
};
