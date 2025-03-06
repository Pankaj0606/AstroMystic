import React, { useEffect, useState, useContext } from 'react';
import './Birthchart.css'; 
import { AstrologyContext } from '../Context'; // Use context to access data
import { useNavigate } from 'react-router-dom'; // Import useLocation hook


const D2chart = () => {
  const { astrologyData } = useContext(AstrologyContext); // Get astrology data from context
  const { chartData, setChartData } = useContext(AstrologyContext); // Use chartData from context
  
  const [error, setError] = useState(null); // Store error state
  const [ascendantSign, setAscendantSign] = useState(1); // Default to 1st house for initial load

  useEffect(() => {
    // Make sure astrologyData exists before making API call
    if (astrologyData) {
      // Make API call with astrologyData input
      const fetchD2Chart = async () => {
        try {
          const response = await fetch("https://json.freeastrologyapi.com/d2-chart-info", {
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': 'eXiD7UyNku6IyWMxfoSVq1BWNNrX829w5M81QlRk',
            },
            body: JSON.stringify(astrologyData.input), // Use data from context
          });

          const data = await response.json(); // Parse JSON response
          setChartData(data); // Store data in state
          setAscendantSign(data.output["0"].current_sign); // Set the ascendant sign from the fetched data
        } catch (error) {
          setError('Error fetching D2 chart data'); // Handle errors
        }
      };

      fetchD2Chart(); // Trigger API call
    }
  }, [astrologyData, setChartData]);

  if (error) {
    return <div>{error}</div>; // Display error if present
  }

  if (!chartData) {
    return <div>Loading D2 Chart...</div>; // Loading state
  }

  console.log(chartData);
  console.log(ascendantSign);

  // Abbreviation for planets
  const planetAbbreviations = {
    Ascendant: 'Asc',
    Sun: 'Su',
    Moon: 'Mo',
    Mars: 'Ma',
    Mercury: 'Me',
    Jupiter: 'Ju',
    Venus: 'Ve',
    Saturn: 'Sa',
    Rahu: 'Ra',
    Ketu: 'Ke',
  };

  // Function to get house numbers anticlockwise starting from Ascendant's current_sign
  const getHouseNumber = (house) => {
    const startHouse = ascendantSign;
    return ((startHouse + house - 1) % 12) + 1; // Ensure house wraps around 1-12
  };

  const getPlanetsInHouse = (houseNumber) => {
    const planetsInHouse = [];
    const seenPlanets = new Set(); // Keep track of planets we've already added

    

    // Calculate the adjusted house number based on the ascendant's sign
    const adjustedHouseNumber = ((houseNumber + ascendantSign - 2) % 12) + 1;

    Object.entries(chartData.output).forEach(([planetKey, details]) => {
        // Check if the planet's current sign matches the adjusted house number
        if (details.current_sign === adjustedHouseNumber) {
            const planetName = planetAbbreviations[details.name] || planetAbbreviations[planetKey];
            
            // Check if the planet was already added
            if (!seenPlanets.has(planetName)) {  
                planetsInHouse.push(planetName);
                seenPlanets.add(planetName); // Mark this planet as added
            }
        }
    });

    return planetsInHouse;
};


      // Function to get the polygon coordinates for each house
      const getPolygonCoordinates = (house) => {
        const regions = {
            1: "150,0 75,75 150,150 225,75", // Example polygon for house 1
            2: "0,0 150,0 75,75", // Polygon for house 2
            3: "0,0 0,150 75,75", // Polygon for house 3
            4: "0,150 75,75 150,150 75,225", // Polygon for house 4
            5: "0,150 0,300 75,225", // Polygon for house 5
            6: "0,300 150,300 75,225", // Polygon for house 6
            7: "150,150 75,225 150,300, 225,225", // Polygon for house 7
            8: "150,300 300,300 225,225", // Polygon for house 8
            9: "225,225 300,150 300,300", // Polygon for house 9
            10: "150,150 225,75 300,150, 225,225", // Polygon for house 10
            11: "300,0 300,150 225,75", // Polygon for house 11
            12: "150,0 300,0 225,75", // Polygon for house 12
        };
        return regions[house];
    };

    // Function to calculate the centroid of a polygon
    const calculateCentroid = (polygon) => {
        const points = polygon.split(' ').map(point => point.split(',').map(Number));
        let xSum = 0, ySum = 0;
        points.forEach(([x, y]) => {
            xSum += x;
            ySum += y;
        });
        const centroidX = xSum / points.length;
        const centroidY = ySum / points.length;
        return { x: centroidX, y: centroidY };
    };

    // Function to arrange planets in a grid layout inside the polygon area
    const arrangePlanetsInHouse = (planets, centroid, houseNumber) => {
        const numPlanets = planets.length;
        let planetPositions = [];

        if(houseNumber==1 || houseNumber==4 || houseNumber==7 || houseNumber==10) {
            if (numPlanets === 1) {
                // Center the single planet at the centroid
                planetPositions.push({ x: centroid.x - 10, y: centroid.y });
            } else if (numPlanets === 2) {
                // Arrange two planets side by side
                planetPositions.push({ x: centroid.x - 20, y: centroid.y });
                planetPositions.push({ x: centroid.x + 15, y: centroid.y });
            } else if (numPlanets === 3) {
                // Two planets side by side, one below them
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 5, y: centroid.y + 10 });
            } else if (numPlanets === 4) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 10 });
            } else if (numPlanets >= 5) {
                // Create a grid layout for more planets (row-wise stacking)
                let offset = -20;
                for (let i = 0; i < numPlanets; i++) {
                    const xOffset = (i % 2 === 0) ? -15 : 15;
                    const yOffset = offset + Math.floor(i / 2) * 15;
                    planetPositions.push({ x: centroid.x + xOffset, y: centroid.y + yOffset });
                }
            }
        }

        else if(houseNumber==2 || houseNumber==12) {
            if (numPlanets === 1) {
                // Center the single planet at the centroid
                planetPositions.push({ x: centroid.x - 10, y: centroid.y });
            } else if (numPlanets === 2) {
                // Arrange two planets side by side
                planetPositions.push({ x: centroid.x - 20, y: centroid.y });
                planetPositions.push({ x: centroid.x + 15, y: centroid.y });
            } else if (numPlanets === 3) {
                // Two planets side by side, one below them
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 5, y: centroid.y + 10 });
            } else if (numPlanets === 4) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 10 });
            } else if (numPlanets === 5) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 10 });
            } else if (numPlanets === 6) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 0, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 10 });
            } else if (numPlanets >= 7) {
                // Create a grid layout for more planets (row-wise stacking)
                let offset = -20;
                for (let i = 0; i < numPlanets; i++) {
                    const xOffset = (i % 2 === 0) ? -15 : 15;
                    const yOffset = offset + Math.floor(i / 2) * 15;
                    planetPositions.push({ x: centroid.x + xOffset, y: centroid.y + yOffset });
                }
            }
        }

        else if(houseNumber==6 || houseNumber==8) {
            if (numPlanets === 1) {
                // Center the single planet at the centroid
                planetPositions.push({ x: centroid.x - 10, y: centroid.y });
            } else if (numPlanets === 2) {
                // Arrange two planets side by side
                planetPositions.push({ x: centroid.x - 20, y: centroid.y });
                planetPositions.push({ x: centroid.x + 15, y: centroid.y });
            } else if (numPlanets === 3) {
                // Two planets side by side, one below them
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 5, y: centroid.y + 10 });
            } else if (numPlanets === 4) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 10 });
            } else if (numPlanets >= 5) {
                // Create a grid layout for more planets (row-wise stacking)
                let offset = -20;
                for (let i = 0; i < numPlanets; i++) {
                    const xOffset = (i % 2 === 0) ? -15 : 15;
                    const yOffset = offset + Math.floor(i / 2) * 15;
                    planetPositions.push({ x: centroid.x + xOffset, y: centroid.y + yOffset });
                }
            }
        }

        else if(houseNumber==3 || houseNumber==5) {
            if (numPlanets === 1) {
                // Center the single planet at the centroid
                planetPositions.push({ x: centroid.x - 10, y: centroid.y });
            } else if (numPlanets === 2) {
                // Arrange two planets side by side
                planetPositions.push({ x: centroid.x - 20, y: centroid.y });
                planetPositions.push({ x: centroid.x + 15, y: centroid.y });
            } else if (numPlanets === 3) {
                // Two planets side by side, one below them
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 5, y: centroid.y + 10 });
            } else if (numPlanets === 4) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 10 });
            } else if (numPlanets >= 5) {
                // Create a grid layout for more planets (row-wise stacking)
                let offset = -20;
                for (let i = 0; i < numPlanets; i++) {
                    const xOffset = (i % 2 === 0) ? -15 : 15;
                    const yOffset = offset + Math.floor(i / 2) * 15;
                    planetPositions.push({ x: centroid.x + xOffset, y: centroid.y + yOffset });
                }
            }
        }

        if(houseNumber==9 || houseNumber==11) {
            if (numPlanets === 1) {
                // Center the single planet at the centroid
                planetPositions.push({ x: centroid.x - 10, y: centroid.y });
            } else if (numPlanets === 2) {
                // Arrange two planets side by side
                planetPositions.push({ x: centroid.x, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x, y: centroid.y + 10 });
            } else if (numPlanets === 3) {
                // Two planets side by side, one below them
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 5, y: centroid.y + 10 });
            } else if (numPlanets === 4) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 10 });
            } else if (numPlanets >= 5) {
                // Create a grid layout for more planets (row-wise stacking)
                let offset = -20;
                for (let i = 0; i < numPlanets; i++) {
                    const xOffset = (i % 2 === 0) ? -15 : 15;
                    const yOffset = offset + Math.floor(i / 2) * 15;
                    planetPositions.push({ x: centroid.x + xOffset, y: centroid.y + yOffset });
                }
            }
        }
        

        return planetPositions;
    };

    // Positioning for text inside houses (for house numbers)
const getTextPosition = (house) => {
    const positions = {
        1: { x: 145, y: 135 },
        2: { x: 70, y: 60 },
        3: { x: 50, y: 80 },
        4: { x: 130, y: 155 },
        5: { x: 50, y: 230 },
        6: { x: 70, y: 250 },
        7: { x: 145, y: 175 },
        8: { x: 220, y: 250 },
        9: { x: 240, y: 230 },
        10: { x: 160, y: 155 },
        11: { x: 240, y: 80 },
        12: { x: 215, y: 60 },
    };
    return positions[house];
};

// Function to calculate dynamic font size based on number of planets
const getFontSizeForPlanets = (numPlanets) => {
    const baseFontSize = 12; // Default font size
    if (numPlanets <= 2) {
        return baseFontSize;
    } else if (numPlanets <= 4) {
        return baseFontSize - 2; // Slightly smaller
    } else if (numPlanets <= 6) {
        return baseFontSize - 4; // Smaller to fit more
    } else {
        return baseFontSize - 6; // Minimum size for many planets
    }
};

// Drop Down
const [selectedChart, setSelectedChart] = useState("");
const navigate = useNavigate();

// Function to handle the chart selection
const handleChartSelection = (event) => {
    const chart = event.target.value;
    setSelectedChart(chart);

    // Define routes for each chart
    const chartRoutes = {
        D1: '/birthchart/D1',
        D9: '/birthchart/D9',
        D2: '/birthchart/D2',
        D3: '/birthchart/D3',
        D4: '/birthchart/D4',
        D5: '/birthchart/D5',
        D6: '/birthchart/D6',
        D7: '/birthchart/D7',
        D8: '/birthchart/D8',
        D10: '/birthchart/D10',
        D11: '/birthchart/D11',
        D12: '/birthchart/D12',
        D16: '/birthchart/D16',
        D20: '/birthchart/D20',
        D24: '/birthchart/D24',
        D27: '/birthchart/D27',
        D30: '/birthchart/D30',
        D40: '/birthchart/D40',
        D45: '/birthchart/D45',
        D60: '/birthchart/D60',
  };

    // Navigate to the selected chart and pass astrologyData via the state
    if (chart) {
        navigate(chartRoutes[chart], { state: { astrologyData } });
    }
};



  return (
    <div className="birth-chart-container">
      <h1>D2 Chart</h1>
      
      <svg viewBox="0 0 300 300" className="birth-chart-svg">
        {/* Outer square */}
        <rect x="0" y="0" width="300" height="300" stroke="orange" fill="none" />

        {/* Diagonal lines */}
        <line x1="0" y1="0" x2="300" y2="300" stroke="orange" />
        <line x1="300" y1="0" x2="0" y2="300" stroke="orange" />

        {/* Mid lines */}
        <line x1="150" y1="0" x2="0" y2="150" stroke="orange" />
        <line x1="150" y1="0" x2="300" y2="150" stroke="orange" />
        <line x1="150" y1="300" x2="0" y2="150" stroke="orange" />
        <line x1="150" y1="300" x2="300" y2="150" stroke="orange" />

        {/* Number and planets for each house */}
        {[...Array(12)].map((_, house) => {
          const houseNumber = getHouseNumber(house); // Get the house number based on ascendant sign

          const polygon = getPolygonCoordinates(houseNumber);
                    const centroid = calculateCentroid(polygon);
                    const planetsInHouse = getPlanetsInHouse(houseNumber);
                    const planetPositions = arrangePlanetsInHouse(planetsInHouse, centroid, houseNumber);
                    const textPosition = getTextPosition(house + 1);
                    const fontSize = getFontSizeForPlanets(planetsInHouse.length);

          const planetData = chartData.output[houseNumber]; // Assuming planet data is structured in chartData.output

          return (
            <g key={houseNumber}>
                            {/* Display polygon */}
                            <polygon points={polygon} stroke="orange" fill="none" className={`house-polygon house-${houseNumber}`} />
                            {/* House number */}
                            <text x={textPosition.x} y={textPosition.y} className="house-number">
                                {houseNumber}
                            </text>
                            {/* Planet names with dynamic font size */}
                        {planetPositions.map((pos, index) => (
                            <text key={index} x={pos.x} y={pos.y} className="planet-name" style={{ fontSize: `${fontSize}px` }}>
                                {planetsInHouse[index]}
                            </text>
                        ))}
                        </g>
          );
        })}
      </svg>
      {/* Dropdown for selecting "Other Charts" */}
      <div className="other-charts-dropdown-container">
        <select
          value={selectedChart}
          onChange={handleChartSelection}
          className="other-charts-dropdown"
        >
            <option value="D2">Hora Chart (D2)</option>
           <option value="D1">Rasi Chart (D1)</option>
          <option value="D9">Navamsa Chart (D9)</option>
          
        <option value="D3">Drekkana Chart (D3)</option>
        <option value="D4">Chaturthamsa Chart (D4)</option>
        <option value="D5">Panchamsa Chart (D5)</option>
        <option value="D6">Shashtamsa Chart (D6)</option>
        <option value="D7">Saptamsa Chart (D7)</option>
        <option value="D8">Ashtamsa Chart (D8)</option>
        <option value="D10">Dasamsa Chart (D10)</option>
        <option value="D11">Rudramsa Chart (D11)</option>
        <option value="D12">Dwadashamsa Chart (D12)</option>
        <option value="D16">Shodashavarga Chart (D16)</option>
        <option value="D20">Vimsamsa Chart (D20)</option>
        <option value="D24">Chaturvimshamsa Chart (D24)</option>
        <option value="D27">Bhamsa Chart (D27)</option>
        <option value="D30">Trimsamsa Chart (D30)</option>
        <option value="D40">Vimsamsa Chart (D40)</option>
        <option value="D45">Panchavimsamsa Chart (D45)</option>
        <option value="D60">Shashtamsa Chart (D60)</option>
          
        </select>
      </div>
      
    </div>
  );
};

export default D2chart;
