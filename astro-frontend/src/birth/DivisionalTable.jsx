import React, { useContext } from 'react';
import './Birthtable.css'; // We can reuse the same CSS
import { AstrologyContext } from '../Context';

// Helper constants - repeated here for self-contained component logic
const rashiNames = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Saggitarius", "Capricorn", "Aquarius", "Pisces"
];
const rashiLords = {
    Aries: "Mars", Taurus: "Venus", Gemini: "Mercury", Cancer: "Moon", Leo: "Sun", Virgo: "Mercury",
    Libra: "Venus", Scorpio: "Mars", Saggitarius: "Jupiter", Capricorn: "Saturn", Aquarius: "Saturn", Pisces: "Jupiter"
};

// Add the Nakshatra helpers back into this file
const nakshatraLords = {
    "Ashwini": "Ketu", "Bharani": "Venus", "Krittika": "Sun", "Rohini": "Moon", "Mrigashira": "Mars",
    "Ardra": "Rahu", "Punarvasu": "Jupiter", "Pushya": "Saturn", "Ashlesha": "Mercury", "Magha": "Ketu",
    "Purva Phalguni": "Venus", "Uttara Phalguni": "Sun", "Hasta": "Moon", "Chitra": "Mars", "Swati": "Rahu",
    "Vishakha": "Jupiter", "Anuradha": "Saturn", "Jyeshtha": "Mercury", "Moola": "Ketu", "Purva Ashadha": "Venus",
    "Uttara Ashadha": "Sun", "Shravana": "Moon", "Dhanishta": "Mars", "Shatabhisha": "Rahu",
    "Purva Bhadrapada": "Jupiter", "Uttara Bhadrapada": "Saturn", "Revati": "Mercury"
};

const nakshatraNames = [
    "Ashwini", "Bharani", "Krittika", "Rohini", "Mrigashira", "Ardra",
    "Punarvasu", "Pushya", "Ashlesha", "Magha", "Purva Phalguni",
    "Uttara Phalguni", "Hasta", "Chitra", "Swati", "Vishakha", "Anuradha",
    "Jyeshtha", "Moola", "Purva Ashadha", "Uttara Ashadha", "Shravana",
    "Dhanishta", "Shatabhisha", "Purva Bhadrapada", "Uttara Bhadrapada", "Revati"
];

// We don't use nakshatraLords here since Varga charts don't usually show Nakshatra.

const DivisionalTable = ({ chartId }) => {
    const { astrologyData } = useContext(AstrologyContext);

    // Data validation: Make sure the data and the specific chart we want exist
    if (!astrologyData || !astrologyData.chart || !astrologyData.chart.varga || !astrologyData.chart.varga[chartId]) {
        return <div>Error in Loading {chartId} Table data. Try again...</div>;
    }

    // Get the specific chart data (e.g., the D9 object)
    const vargaData = astrologyData.chart.varga[chartId];
    const ascendantSignInVarga = vargaData.lagna.Lg.rashi;

    // --- NAKSHATRA CALCULATION FUNCTION ---
    const calculateNakshatra = (rashi, degree) => {
        const absoluteLongitude = (rashi - 1) * 30 + degree;
        const nakshatraSize = 360 / 27;
        const nakshatraIndex = Math.floor(absoluteLongitude / nakshatraSize);
        return nakshatraNames[nakshatraIndex] || "Unknown";
    };
    
    // --- ASPECT CALCULATION FUNCTION (Same as Birthtable) ---
    const calculateAspects = (planetKey, houseNumber) => {
        const aspectRules = {
            Ma: [4, 7, 8], Ju: [5, 7, 9], Sa: [3, 7, 10],
            Ra: [5, 7, 9], Ke: [5, 7, 9],
            default: [7]
        };
        const rules = aspectRules[planetKey] || aspectRules.default;
        const aspectedHouses = rules.map(aspect => {
            // houseNumber is guaranteed to be an integer here as it's calculated from rashi numbers
            const targetHouse = houseNumber + aspect - 1;
            return (targetHouse - 1) % 12 + 1;
        });
        return aspectedHouses; // Return an array of numbers
    };


    // --- TWO-PASS LOGIC FOR ASPECTED BY ---

    // 1. Build a map of planets and their houses (since no 'houses' object exists, we calculate it)
    const planetPositions = {};
    for (const [planetKey, planetData] of Object.entries(vargaData.graha)) {
        // Calculate the house number WITHIN this divisional chart based on rashi and lagna
        const houseNumber = ((planetData.rashi - ascendantSignInVarga + 12) % 12) + 1;
        planetPositions[planetKey] = houseNumber;
    }

    // 2. Build the Aspect Map (Which houses are aspected by which planets)
    const houseAspects = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [], 7: [], 8: [], 9: [], 10: [], 11: [], 12: [] };
    for (const [planetKey, houseNumber] of Object.entries(planetPositions)) {
        const aspectedHouses = calculateAspects(planetKey, houseNumber);
        aspectedHouses.forEach(aspectedHouse => {
            houseAspects[aspectedHouse].push(planetKey);
        });
    }

    // --- FINAL PASS: Build the JSX for the table rows ---
    const planetRows = Object.entries(vargaData.graha).map(([planetKey, planetData]) => {
        const rashiName = rashiNames[planetData.rashi - 1];
        const rashiLord = rashiLords[rashiName];

        const nakshatraName = calculateNakshatra(planetData.rashi, planetData.degree);
        const nakshatraLord = nakshatraLords[nakshatraName] || "-";
        
        // Get house number from the map created in Pass 1
        const houseNumber = planetPositions[planetKey]; 

        // Aspecting House (list of houses this planet aspects)
        const aspecting = calculateAspects(planetKey, houseNumber).join(', '); 

        // Aspected By (list of planets aspecting this house)
        const aspectedBy = houseAspects[houseNumber].join(', ');

        return (
            <tr key={planetKey}>
                <td>{planetKey}</td>
                <td>{planetData.rashi}</td>
                <td>{rashiName}</td>
                <td>{rashiLord}</td>
                <td>{planetData.degree.toFixed(2)}</td> {/* Degrees not usually shown */}
                <td>{houseNumber}</td>
                <td>{nakshatraName}</td> {/* Nakshatra details not available in Varga endpoint */}
                <td>{nakshatraLord}</td> {/* Nakshatra Lord */}
                <td>{planetData.speed < 0 ? 'Yes' : 'No'}</td>
                {/*<td>-</td>  Combust not relevant/available for divisional */}
                <td>{aspecting}</td>
                <td>{aspectedBy}</td>
            </tr>
        );
    });

    return (
        <div className="astrology-table-container">
            {/*<h3>{chartId} Planetary Positions</h3>*/}
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
                        <th>Nakshatra Lord</th>
                        <th>Retrograde</th>
                        {/*<th>Combust</th>*/}
                        <th>Aspecting House</th>
                        <th>Aspected By</th>
                    </tr>
                </thead>
                <tbody>{planetRows}</tbody>
            </table>
        </div>
    );
};

export default DivisionalTable;