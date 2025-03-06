import React, { createContext, useState } from 'react';

export const AstrologyContext = createContext();

export const AstrologyProvider = ({ children }) => {
  const [astrologyData, setAstrologyData] = useState(null);
  const [chartData, setChartData] = useState(null); // Add chartData to context

  return (
    <AstrologyContext.Provider value={{ astrologyData, setAstrologyData, chartData, setChartData}}>
      {children}
    </AstrologyContext.Provider>
  );
};
