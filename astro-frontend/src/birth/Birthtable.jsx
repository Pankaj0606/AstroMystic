// import React, { useEffect, useState, useContext } from 'react';
// import './Birthtable.css'; // For styling the table
// import { useLocation } from 'react-router-dom'; // Import useLocation hook
// import { AstrologyContext } from '../Context';

// // Define the Nakshatra mapping
// const nakshatras = [
//     "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira",
//     "Ardra", "Punarvasu", "Pushya", "Ashlesha", "Magha",
//     "Purva Phalguni", "Uttara Phalguni", "Hasta", "Chitra", "Swati",
//     "Vishakha", "Anuradha", "Jyeshtha", "Moola", "Purva Ashadha",
//     "Uttara Ashadha", "Shravana", "Dhanishta", "Shatabhisha", "Purva Bhadrapada",
//     "Uttara Bhadrapada", "Revati"
// ];

// // Define the Nakshatra Lords mapping
// const nakshatraLords = {
//     "Ashwini": "Ketu",
//     "Bharani": "Venus",
//     "Krittika": "Sun",
//     "Rohini": "Moon",
//     "Mrigashira": "Mars",
//     "Ardra": "Rahu",
//     "Punarvasu": "Jupiter",
//     "Pushya": "Saturn",
//     "Ashlesha": "Mercury",
//     "Magha": "Ketu",
//     "Purva Phalguni": "Venus",
//     "Uttara Phalguni": "Sun",
//     "Hasta": "Moon",
//     "Chitra": "Mars",
//     "Swati": "Rahu",
//     "Vishakha": "Jupiter",
//     "Anuradha": "Saturn",
//     "Jyeshtha": "Mercury",
//     "Moola": "Ketu",
//     "Purva Ashadha": "Venus",
//     "Uttara Ashadha": "Sun",
//     "Shravana": "Moon",
//     "Dhanishta": "Mars",
//     "Shatabhisha": "Rahu",
//     "Purva Bhadrapada": "Jupiter",
//     "Uttara Bhadrapada": "Saturn",
//     "Revati": "Mercury"
// };

// // Function to calculate Nakshatra Lord based on the Nakshatra
// const calculateNakshatraLord = (nakshatra) => {
//     return nakshatraLords[nakshatra] || "-"; // Default to "-" if no match found
// };


// // Define the Rashi mapping
// const rashi = [
//     "Aries", "Taurus", "Gemini", "Cancer", "Leo",
//     "Virgo", "Libra", "Scorpio", "Saggitarius",
//     "Capricorn", "Aquarius", "Pisces"
// ];

// // Define the Rashi Lords
// const rashiLords = {
//     Aries: "Mars",
//     Taurus: "Venus",
//     Gemini: "Mercury",
//     Cancer: "Moon",
//     Leo: "Sun",
//     Virgo: "Mercury",
//     Libra: "Venus",
//     Scorpio: "Mars",
//     Saggitarius: "Jupiter",
//     Capricorn: "Saturn",
//     Aquarius: "Saturn",
//     Pisces: "Jupiter"
// };


// // Function to calculate Nakshatra based on degrees
// const calculateNakshatra = (degrees) => {
//     const totalMinutes = (degrees * 60); // Convert degrees to minutes
//     const nakshatraIndex = Math.floor(totalMinutes / 800) % 27; // 800 minutes per Nakshatra
//     return nakshatras[nakshatraIndex];
// };

// // Function to calculate house number based on current_sign and ascendant's current sign
// const calculateRashi = (planetSign) => {
//     return rashi[planetSign-1];
// };

// // Function to calculate Rashi Lord based on the Rashi (sign)
// const calculateRashiLord = (rashi) => {
//     return rashiLords[rashi] || "-"; // Default to "-" if no match found
// };


// // Function to calculate house number based on current_sign and ascendant's current sign
// const calculateHouseNumber = (planetSign, ascendantSign) => {
//     const houseNumber = planetSign - ascendantSign + 1; // Offset by ascendant
//     return houseNumber > 0 ? houseNumber : 12 + houseNumber; // Handle wraparound
// };

// // Function to calculate house number based on current_sign and ascendant's current sign
// const retroOrnot = (planetName, isRetro) => {
//     if(planetName != "Ascendant" && planetName != "Rahu" && planetName != "Ketu" && planetName != "Sun" && planetName != "Moon") {
//         if(planetName != "Rahu" || planetName != "Ketu") {
//             if (isRetro == "true")
//                 return "Yes";
//             else
//                 return "No";
//         }
//     }
//     return "-";
// };

// // Function to calculate aspects for a planet based on its house number
// const calculateAspects = (planetName, houseNumber) => {
//     const aspectRules = {
//         Mars: [4, 7, 8], // Mars aspects 4th, 7th, and 8th houses from its position
//         Jupiter: [5, 7, 9], // Jupiter aspects 5th, 7th, and 9th houses from its position
//         Saturn: [3, 7, 10], // Saturn aspects 3rd, 7th, and 10th houses from its position
//         Rahu: [5, 7, 9],
//         Ketu: [5, 7, 9],
//         others: [7], // Default aspects for other planets (Sun, Moon, etc.)
//     };

//     if(planetName == "Ascendant")
//     return "-";

//     // Get the aspect rule for the current planet
//     const planetAspects = aspectRules[planetName] || aspectRules['others'];

//     // Calculate the houses aspected by the planet
//     return planetAspects
//         .map(aspect => (houseNumber + aspect - 1) % 12 || 12) // Modulo to wrap house number between 1 and 12
//         .join(', ');
// };


// // Function to calculate whether a planet is combust based on proximity to the Sun
// const isCombust = (planetData, sunData) => {
//     const planetDegree = planetData.fullDegree;
//     const sunDegree = sunData.fullDegree;
//     const name= planetData.name;

//     const combustRanges = {
//         Mercury: 14,
//         Venus: 10,
//         Mars: 17,
//         Jupiter: 11,
//         Saturn: 15,
//         Moon: 12,
//     };

//     if(name == "Sun" || name == "Rahu" || name=="Ketu" || name=="Ascendant")
//     return "-";

//     const maxCombustRange = combustRanges[planetData.name] || 0; // Default 0 for Moon, Rahu, etc.

//     // Check if planets are in the same sign and if their degrees are within combust range
//     return planetData.current_sign === sunData.current_sign &&
//         Math.abs(planetDegree - sunDegree) <= maxCombustRange ? "Yes" : "No";
// };

// // Function to check if one planet aspects another based on house number
// const checkAspect = (aspectingPlanetName, aspectingPlanetHouse, targetPlanetHouse) => {
//     const aspectRules = {
//         Mars: [4, 7, 8],
//         Jupiter: [5, 7, 9],
//         Saturn: [3, 7, 10],
//         Rahu: [5, 7, 9],
//         Ketu: [5, 7, 9],
//         others: [7], // Default aspects for other planets
//     };

//     const planetAspects = aspectRules[aspectingPlanetName] || aspectRules['others'];

//     // Check if the aspecting planet's aspects include the target planet's house
//     return planetAspects
//         .map(aspect => (aspectingPlanetHouse + aspect - 1) % 12 || 12)
//         .includes(targetPlanetHouse);
// };

// // Function to calculate which planets are aspecting a target planet
// const calculateAspectedBy = (planetDetails, targetPlanetHouse) => {
//     return Object.keys(planetDetails)
//         .filter((key) => key >= 1 && key <= 9) // Only loop through valid planet keys
//         .map(key => {
//             const aspectingPlanet = planetDetails[key];
//             const aspectingPlanetHouse = calculateHouseNumber(aspectingPlanet.current_sign, planetDetails["0"].current_sign); // Calculate house based on ascendant
//             // Check if the aspecting planet is affecting the target planet
//             if (checkAspect(aspectingPlanet.name, aspectingPlanetHouse, targetPlanetHouse)) {
//                 return aspectingPlanet.name;
//             }
//             return null;
//         })
//         .filter(planet => planet !== null)
//         .join(', '); // Return names of planets that aspect the target planet
// };

// // Update filterAndMapPlanets to pass the correct data and logic
// const filterAndMapPlanets = (planetDetails, ascendantSign) => {
//     const sunData = planetDetails["1"]; // Assuming Sun is at index "0"

//     return Object.keys(planetDetails)
//         .filter((key) => key >= 0 && key <= 9) // Only loop from key 0 to 11 (12 planets)
//         .map((key, index) => {
//             const planetData = planetDetails[key];
//             // Calculate Rashi based on Sign
//             const rashi = calculateRashi(planetData.current_sign);
//             // Calculate Rashi Lord
//             const rashiLord = calculateRashiLord(rashi);
//             // Calculate Nakshatra based on degrees
//             const nakshatra = calculateNakshatra(planetData.fullDegree);
//             // Calculate Nakshatra Lord
//             const nakshatraLord = calculateNakshatraLord(nakshatra);
//             // Calculate the house number by adjusting the current_sign using ascendantSign
//             const houseNumber = calculateHouseNumber(planetData.current_sign, ascendantSign);
//             // Calculate aspects based on house number and planet type
//             const aspects = calculateAspects(planetData.name, houseNumber);
//             // Calculate which planets are aspecting this planet
//             const aspectedBy = calculateAspectedBy(planetDetails, houseNumber);
//             // Check if the planet is retrograde
//             const isRetrograde = retroOrnot(planetData.name, planetData.isRetro);
//             // Check if the planet is combust (too close to the Sun)
//             const combustStatus = isCombust(planetData, sunData);

//             return (
//                 <tr key={index}>
//                     <td>{planetData.name}</td>
//                     <td>{planetData.current_sign}</td>
//                     <td>{rashi}</td>
//                     <td>{rashiLord}</td> {/* New Rashi Lord column */}
//                     <td>{Math.floor(planetData.normDegree)}°</td> {/* Ensure degrees are integer */}
//                     <td>{houseNumber}</td> {/* Dynamic house number */}
                    
                    
//                     <td>{nakshatra}</td> {/* Display Nakshatra */}
//                     <td>{nakshatraLord}</td> {/* New Nakshatra Lord column */}
//                     <td>{isRetrograde}</td> {/* Retrograde status */}
//                     <td>{combustStatus}</td> {/* Combust status */}
//                     <td>{aspects}</td> {/* Calculated Aspects */}
//                     <td>{aspectedBy}</td> {/* Planets aspecting this planet */}
//                 </tr>
//             );
//         });
// };


// // AstrologyTable component
// const AstrologyTable = () => {
//     const { astrologyData } = useContext(AstrologyContext); // Get the data from context
//     //const location = useLocation(); // Use useLocation to access the state passed via navigate
//     //const astrologyData = location.state?.astrologyData; // Safely access astrologyData

//     // Check if astrologyData is available
//     if (!astrologyData) {
//         return <div>No astrology data available</div>;
//     }

//     // Extract the ascendant's current sign from the astrologyData
//     const ascendantSign = astrologyData.output[0]["0"].current_sign; // Assuming Ascendant is the first entry

//     // Function to get the planet details and return rows
//     const renderTableRows = () => {
//         const planetDetails = astrologyData.output[0]; // Access the first object in astrologyData.output
//         return filterAndMapPlanets(planetDetails, ascendantSign); // Pass ascendantSign for house calculation
//     };

//     return (
//         <div className="astrology-table-container">
//             <table className="astrology-table">
//                 <thead>
//                     <tr>
//                         <th>Planet</th>
//                         <th>Current Sign</th>
//                         <th>Rashi</th>
//                         <th>Rashi Lord</th> {/* New Rashi Lord column */}
//                         <th>Degrees</th>
//                         <th>House</th>
//                         <th>Nakshatra</th>
//                         <th>Nakshatra Lord</th> {/* New Nakshatra Lord column */}
//                         <th>Retrograde</th>
//                         <th>Combust</th>
//                         <th>Aspecting House</th>
//                         <th>Aspected By</th> {/* New Aspected By column */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {renderTableRows()}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default AstrologyTable;


import React, { useContext } from 'react';
import './Birthtable.css';
import { AstrologyContext } from '../Context';

// Define the Rashi mapping
const rashiNames = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", 
    "Libra", "Scorpio", "Saggitarius", "Capricorn", "Aquarius", "Pisces"
];

// Define the Rashi Lords
const rashiLords = {
    Aries: "Mars", Taurus: "Venus", Gemini: "Mercury", Cancer: "Moon", Leo: "Sun", Virgo: "Mercury",
    Libra: "Venus", Scorpio: "Mars", Saggitarius: "Jupiter", Capricorn: "Saturn", Aquarius: "Saturn", Pisces: "Jupiter"
};

const nakshatraLords = {
    "Ashwini": "Ketu",
    "Bharani": "Venus", // Bharni in your table, but API will likely use this spelling
    "Krittika": "Sun",
    "Rohini": "Moon",
    "Mrigashira": "Mars", // Mrigshira in your table
    "Ardra": "Rahu", // Ardara in your table
    "Punarvasu": "Jupiter",
    "Pushya": "Saturn",
    "Ashlesha": "Mercury",
    "Magha": "Ketu",
    "Poorva Phalguni": "Venus",
    "Uttara Phalguni": "Sun",
    "Hasta": "Moon",
    "Chitra": "Mars",
    "Swati": "Rahu",
    "Vishakha": "Jupiter",
    "Anuradha": "Saturn",
    "Jyeshtha": "Mercury",
    "Moola": "Ketu",
    "Purva Ashadha": "Venus", // Poorva-Shada in your table
    "Uttara Ashadha": "Sun", // Uttara-Shadha in your table
    "Shravana": "Moon",
    "Dhanishta": "Mars", // Dhanishtha in your table
    "Shatabhisha": "Rahu", // Shatbhisha in your table
    "Purva Bhadrapada": "Jupiter", // Poorva Bhadrapada in your table
    "Uttara Bhadrapada": "Saturn",
    "Revati": "Mercury"
};


const AstrologyTable = () => {
    const { astrologyData } = useContext(AstrologyContext);

    if (!astrologyData || !astrologyData.chart) {
        return <div>Error in Calculating Chart... Try again.</div>;
    }

    // --- NEW ASPECT CALCULATION FUNCTION ---
    const calculateAspects = (planetKey, houseNumber) => {
        const aspectRules = {
            Ma: [4, 7, 8], Ju: [5, 7, 9], Sa: [3, 7, 10],
            Ra: [5, 7, 9], Ke: [5, 7, 9],
            default: [7]
        };
        const rules = aspectRules[planetKey] || aspectRules.default;
        const aspectedHouses = rules.map(aspect => {
            const targetHouse = parseInt(houseNumber) + aspect - 1;
            return (targetHouse - 1) % 12 + 1;
        });
        return aspectedHouses;
        //return aspectedHouses.join(', ');
    };

    // --- NEW LOGIC: FIRST PASS - Build a map of planets and their houses ---
    const planetPositions = {};
    for (const [planetKey, planetData] of Object.entries(astrologyData.chart.graha)) {
        for (const [h_num, h_data] of Object.entries(astrologyData.chart.houses)) {
            if (h_data.graha[planetKey]) {
                planetPositions[planetKey] = parseInt(h_num);
                break;
            }
        }
    }

    // --- NEW LOGIC: SECOND PASS - Build the Aspect Map ---
    const houseAspects = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [] };
    for (const [planetKey, houseNumber] of Object.entries(planetPositions)) {
        const aspectedHouses = calculateAspects(planetKey, houseNumber);
        aspectedHouses.forEach(aspectedHouse => {
            houseAspects[aspectedHouse].push(planetKey);
        });
    }

    // --- FINAL PASS: Build the JSX for the table rows ---
    const planetRows = Object.entries(astrologyData.chart.graha).map(([planetKey, planetData]) => {
        const rashiName = rashiNames[planetData.rashi - 1];
        const rashiLord = rashiLords[rashiName];
        const nakshatraName = planetData.nakshatra.name;
        const nakshatraLord = nakshatraLords[nakshatraName] || "-";

        const houseNumber = planetPositions[planetKey]; // Get house number from our map
        const aspecting = calculateAspects(planetKey, houseNumber).join(', '); // Get aspecting houses as a string

        // Get the list of planets aspecting this house from our map
        const aspectedBy = houseAspects[houseNumber].join(', ');

        return (
            <tr key={planetKey}>
                <td>{planetKey}</td>
                <td>{planetData.rashi}</td>
                <td>{rashiName}</td>
                <td>{rashiLord}</td>
                <td>{planetData.degree.toFixed(2)}°</td>
                <td>{houseNumber}</td>
                <td>{nakshatraName}</td>
                <td>{planetData.nakshatra.pada}</td>
                <td>{nakshatraLord}</td>
                <td>{planetData.speed < 0 ? 'Yes' : 'No'}</td>
                <td>{planetData.astangata ? 'Yes' : 'No'}</td>
                <td>{aspecting}</td>
                <td>{aspectedBy}</td>
            </tr>
        );
    });


    return (
        <div className="astrology-table-container">
            <table className="astrology-table">
                <thead>
                    <tr>
                        <th>Planet</th>
                        <th>Sign No.</th>
                        <th>Rashi</th>
                        <th>Rashi Lord</th>
                        <th>Degrees</th>
                        <th>House</th>
                        <th>Nakshatra</th>
                        <th>Nakshatra Pada</th>
                        <th>Nakshatra Lord</th>
                        <th>Retrograde</th>
                        <th>Combust</th>
                        <th>Aspecting House</th>
                        <th>Aspected By</th>
                    </tr>
                </thead>
                <tbody>
                    {planetRows}
                </tbody>
            </table>
        </div>
    );
};

export default AstrologyTable;