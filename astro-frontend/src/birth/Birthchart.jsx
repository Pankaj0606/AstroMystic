import React, { useEffect, useState, useContext } from 'react';
import './Birthchart.css'; // You will style the chart here
import { useNavigate } from 'react-router-dom'; // Import useLocation hook
import { AstrologyContext } from '../Context';

const BirthChart = () => {
    const { astrologyData } = useContext(AstrologyContext); // Get the data from context
    
    //const astrologyData = location.state?.astrologyData; // Safely access astrologyData
    // const [chartData, setChartData] = useState({});
    const [ascendantSign, setAscendantSign] = useState(1); // Default to 1st house for initial load


    console.log(astrologyData);
    // Abbreviation for planets
    const planetAbbreviations = {
        Lg: 'Asc',
        Su: 'Su', Mo: 'Mo', Ma: 'Ma', Me: 'Me',
        Ju: 'Ju', Ve: 'Ve', Sa: 'Sa', Ra: 'Ra', Ke: 'Ke'
    };

    // Use effect to populate chart data and Ascendant's sign
    useEffect(() => {
        if (astrologyData && astrologyData.chart && astrologyData.chart.lagna) {
            // NEW: Get the ascendant sign from the new data structure
            setAscendantSign(astrologyData.chart.lagna.Lg.rashi);
        } else {
            console.log("No astrologyData available yet.");
        }
    }, [astrologyData]);

    const getHouseNumber = (zeroBasedIndex) => {
        // This logic remains the same
        return ((ascendantSign + zeroBasedIndex) % 12) || 12;
    };

    const getPlanetsInHouse = (astrologicalHouseNumber) => {
        if (!astrologyData || !astrologyData.chart) return [];

        const planetsInHouse = [];
        
        // Check for the Ascendant (Lagna)
        if (astrologyData.chart.lagna.Lg.rashi === astrologicalHouseNumber) {
            planetsInHouse.push(planetAbbreviations.Lg); // Now this correctly finds 'Asc'
        }

        // Iterate over the 'graha' object
        for (const planetKey in astrologyData.chart.graha) {
            const planetDetails = astrologyData.chart.graha[planetKey];
            if (planetDetails.rashi === astrologicalHouseNumber) {
                // This lookup now works because the keys match
                planetsInHouse.push(planetAbbreviations[planetKey]);
            }
        }
        
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
        //console.log("x-centroid:" ,centroidX);
        //console.log("y-centroid:" ,centroidY);
        return { x: centroidX, y: centroidY };
    };

    // Function to arrange planets in a grid layout inside the polygon area
    const arrangePlanetsInHouse = (planets, centroid, houseNumber) => {
        const numPlanets = planets.length;
        let planetPositions = [];

        if(houseNumber===1 || houseNumber===4 || houseNumber===7 || houseNumber===10) {
            if (numPlanets === 1) {
                // Center the single planet at the centroid
                planetPositions.push({ x: centroid.x - 10, y: centroid.y });
            } else if (numPlanets === 2) {
                // Arrange two planets side by side
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 10 });
            } else if (numPlanets === 3) {
                // Two planets side by side, one below them
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 10 });
            } else if (numPlanets === 4) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 30 });
            } else if (numPlanets === 5) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 30 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 30 });
            } else if (numPlanets === 6) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 20 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 20 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 20 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 40 });
            } else if (numPlanets === 7) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 20 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 20 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 20 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 40 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 40 });
            } else if (numPlanets === 8) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 35 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 45 });
            } else if (numPlanets === 9) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 35 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 45 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 45 });
            }
        }

        else if(houseNumber==2 || houseNumber==12) {
            if (numPlanets === 1) {
                // Center the single planet at the centroid
                planetPositions.push({ x: centroid.x - 10, y: centroid.y });
            } else if (numPlanets === 2) {
                // Arrange two planets side by side
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 15 });
            } else if (numPlanets === 3) {
                // Two planets side by side, one below them
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 15 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 15 });
            } else if (numPlanets === 4) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 25, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 15 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 15 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
            } else if (numPlanets === 5) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 45, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 15 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 15 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 25, y: centroid.y - 10 });
            } else if (numPlanets === 6) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 45, y: centroid.y - 10 });//30 15
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 25, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 20 });
            } else if (numPlanets === 7) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 45, y: centroid.y - 10 });//30 15
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 25, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 20 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 20 });
            } else if (numPlanets === 8) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 55, y: centroid.y - 10 });//30 15
                planetPositions.push({ x: centroid.x - 25, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 35, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 40, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x + 20, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 20 });
            } else if (numPlanets === 9) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 55, y: centroid.y - 10 });//30 15
                planetPositions.push({ x: centroid.x - 25, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 35, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 40, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x + 20, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 20 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 20 });
            }
        }

        else if(houseNumber==6 || houseNumber==8) {
            if (numPlanets === 1) {
                // Center the single planet at the centroid
                planetPositions.push({ x: centroid.x - 10, y: centroid.y });
            } else if (numPlanets === 2) {
                // Arrange two planets side by side
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 15 });
            } else if (numPlanets === 3) {
                // Two planets side by side, one below them
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 15 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 15 });
            } else if (numPlanets === 4) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 25, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 10 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 15 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y + 15 });
            } else if (numPlanets === 5) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 45, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 25, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 5 });
            } else if (numPlanets === 6) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 45, y: centroid.y + 10 });//30 15
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 25, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 20 });
            } else if (numPlanets === 7) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 45, y: centroid.y + 10 });//30 15
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 25, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y - 20 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 20 });
            } else if (numPlanets === 8) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 55, y: centroid.y + 10 });//30 15
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 35, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x - 40, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x + 20, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 20 });
            } else if (numPlanets === 9) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 55, y: centroid.y + 10 });//30 15
                planetPositions.push({ x: centroid.x - 25, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x + 35, y: centroid.y + 10 });
                planetPositions.push({ x: centroid.x - 40, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x + 20, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 25, y: centroid.y - 20 });
                planetPositions.push({ x: centroid.x + 10, y: centroid.y - 20 });
            }
        }

        else if(houseNumber==3 || houseNumber==5) {
            if (numPlanets === 1) {
                // Center the single planet at the centroid
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 5 });
            } else if (numPlanets === 2) {
                // Arrange two planets side by side
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 15 });
            } else if (numPlanets === 3) {
                // Two planets side by side, one below them
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 25 });
            } else if (numPlanets === 4) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 25 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 15 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 25 });
            } else if (numPlanets === 5) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 35 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 45 });
            } else if (numPlanets === 6) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 35 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 45 });
                planetPositions.push({ x: centroid.x, y: centroid.y + 5 });
            } else if (numPlanets === 7) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 35 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 45 });
                planetPositions.push({ x: centroid.x, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x, y: centroid.y + 15 });
            } else if (numPlanets === 8) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 35 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 45 });
                planetPositions.push({ x: centroid.x, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x, y: centroid.y + 25 });
            } else if (numPlanets === 9) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 35 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x - 20, y: centroid.y + 45 });
                planetPositions.push({ x: centroid.x, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x + 20, y: centroid.y + 5 });
            }
        }

        else if(houseNumber==9 || houseNumber==11) {
            if (numPlanets === 1) {
                // Center the single planet at the centroid
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 5 });
            } else if (numPlanets === 2) {
                // Arrange two planets side by side
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 15 });
            } else if (numPlanets === 3) {
                // Two planets side by side, one below them
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 25 });
            } else if (numPlanets === 4) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 25 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y - 5 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 15 });
                planetPositions.push({ x: centroid.x - 10, y: centroid.y + 25 });
            } else if (numPlanets === 5) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x, y: centroid.y - 35 });
                planetPositions.push({ x: centroid.x, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x, y: centroid.y + 45 });
            } else if (numPlanets === 6) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x + 5, y: centroid.y - 35 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 45 });
                planetPositions.push({ x: centroid.x - 15, y: centroid.y + 5 });
            } else if (numPlanets === 7) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x + 5, y: centroid.y - 35 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 45 });
                planetPositions.push({ x: centroid.x - 15, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 15, y: centroid.y + 15 });
            } else if (numPlanets === 8) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x + 5, y: centroid.y - 35 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 45 });
                planetPositions.push({ x: centroid.x - 15, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 15, y: centroid.y + 15 });
                planetPositions.push({ x: centroid.x - 15, y: centroid.y + 25 });
            } else if (numPlanets === 9) {
                // Two rows of two planets each
                planetPositions.push({ x: centroid.x + 5, y: centroid.y - 35 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y - 15 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x + 5, y: centroid.y + 45 });
                planetPositions.push({ x: centroid.x - 15, y: centroid.y + 5 });
                planetPositions.push({ x: centroid.x - 15, y: centroid.y + 15 });
                planetPositions.push({ x: centroid.x - 15, y: centroid.y + 25 });
                planetPositions.push({ x: centroid.x - 35, y: centroid.y + 5 });
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


    // Drop Down
    // const [selectedChart, setSelectedChart] = useState("D1");
    // const navigate = useNavigate();

    // Function to handle the chart selection
    // const handleChartSelection = (event) => {
    //     const chart = event.target.value;
    //     setSelectedChart(chart);

    //     // Define routes for each chart
    //     const chartRoutes = {
    //         D1: '/birthchart/D1',
    //         D9: '/birthchart/D9',
    //         D2: '/birthchart/D2',
    //         D3: '/birthchart/D3',
    //         D4: '/birthchart/D4',
    //         // D5: '/birthchart/D5',
    //         // D6: '/birthchart/D6',
    //         D7: '/birthchart/D7',
    //         // D8: '/birthchart/D8',
    //         D10: '/birthchart/D10',
    //         // D11: '/birthchart/D11',
    //         D12: '/birthchart/D12',
    //         D16: '/birthchart/D16',
    //         D20: '/birthchart/D20',
    //         D24: '/birthchart/D24',
    //         D27: '/birthchart/D27',
    //         D30: '/birthchart/D30',
    //         D40: '/birthchart/D40',
    //         D45: '/birthchart/D45',
    //         D60: '/birthchart/D60',
    //     };
  
    //     // Navigate to the selected chart and pass astrologyData via the state
    //     if (chart) {
    //         navigate(chartRoutes[chart], { state: { astrologyData } });
    //     }
    // };

    if (!astrologyData) {
        return <div>Error in generating your chart. Try again...</div>;
    }

    return (
        <div className="birth-chart-container">
            <h1>D1 - Rasi Chart</h1>
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
                {[...Array(12)].map((_, index) => {
                    const visualBoxNumber = index + 1; // This is 1, 2, 3... for the screen position
                    const astrologicalHouseNumber = getHouseNumber(index); // This is the calculated house number (e.g., 5, 6, 7...)

                    const polygon = getPolygonCoordinates(visualBoxNumber); // Use the visual number for drawing
                    const centroid = calculateCentroid(polygon);
                    const planetsInHouse = getPlanetsInHouse(astrologicalHouseNumber); // Use the astrological number to find planets
                    const planetPositions = arrangePlanetsInHouse(planetsInHouse, centroid, visualBoxNumber);
                    const textPosition = getTextPosition(visualBoxNumber);

                    // const houseNumber = getHouseNumber(house);
                    // const polygon = getPolygonCoordinates(houseNumber);
                    // const centroid = calculateCentroid(polygon);
                    // const planetsInHouse = getPlanetsInHouse(houseNumber);
                    // const planetPositions = arrangePlanetsInHouse(planetsInHouse, centroid, houseNumber);
                    // const textPosition = getTextPosition(house + 1);

                    return (
                        <g key={visualBoxNumber}>
                            {/* Display polygon */}
                            <polygon points={polygon} stroke="orange" fill="none" className={`house-polygon house-${astrologicalHouseNumber}`} />
                            {/* House number */}
                            <text x={textPosition.x} y={textPosition.y} className="house-number">
                                {astrologicalHouseNumber}
                            </text>
                            {/* Planet names with dynamic font size */}
                            {planetPositions.map((pos, index) => (
                            <text key={index} x={pos.x} y={pos.y} className="planet-name">
                                {planetsInHouse[index]}
                            </text>
                        ))}
                            
                        </g>
                    );
                })}
            </svg>
            {/* Dropdown for selecting "Other Charts" */}
            {/* <div className="other-charts-dropdown-container">
                <select
                value={selectedChart}
                onChange={handleChartSelection}
                className="other-charts-dropdown"
                >
                    <option value="D1">Rasi Chart (D1)</option>
                    <option value="D9">Navamsa Chart (D9)</option>
                    <option value="D2">Hora Chart (D2)</option>
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
            </div> */}
        </div>
        
        
    );
};

export default BirthChart;
