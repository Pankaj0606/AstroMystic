import React, { useEffect, useState, useContext } from 'react';
import './BirthTable.css'; // For styling the table
import { AstrologyContext } from '../Context';

const rashi = [
    "Aries", "Taurus", "Gemini", "Cancer", "Leo",
    "Virgo", "Libra", "Scorpio", "Saggitarius",
    "Capricorn", "Aquarius", "Pisces"
];

const rashiLords = {
    Aries: "Mars",
    Taurus: "Venus",
    Gemini: "Mercury",
    Cancer: "Moon",
    Leo: "Sun",
    Virgo: "Mercury",
    Libra: "Venus",
    Scorpio: "Mars",
    Saggitarius: "Jupiter",
    Capricorn: "Saturn",
    Aquarius: "Saturn",
    Pisces: "Jupiter"
};

const calculateRashi = (planetSign) => {
    return rashi[planetSign - 1];
};

const calculateRashiLord = (rashi) => {
    return rashiLords[rashi] || "-"; // Default to "-" if no match found
};

const calculateHouseNumber = (planetSign, ascendantSign) => {
    const houseNumber = planetSign - ascendantSign + 1; // Offset by ascendant
    return houseNumber > 0 ? houseNumber : 12 + houseNumber; // Handle wraparound
};

const retroOrnot = (planetName, isRetro) => {
    if (planetName !== "Ascendant" && planetName !== "Rahu" && planetName !== "Ketu" && planetName !== "Sun" && planetName !== "Moon") {
        if (isRetro === "true") return "Yes";
        return "No";
    }
    return "-";
};

const calculateAspects = (planetName, houseNumber) => {
    const aspectRules = {
        Mars: [4, 7, 8],
        Jupiter: [5, 7, 9],
        Saturn: [3, 7, 10],
        Rahu: [5, 7, 9],
        Ketu: [5, 7, 9],
        others: [7],
    };

    if (planetName === "Ascendant") return "-";

    const planetAspects = aspectRules[planetName] || aspectRules['others'];

    return planetAspects
        .map(aspect => (houseNumber + aspect - 1) % 12 || 12)
        .join(', ');
};

const checkAspect = (aspectingPlanetName, aspectingPlanetHouse, targetPlanetHouse) => {
    const aspectRules = {
        Mars: [4, 7, 8],
        Jupiter: [5, 7, 9],
        Saturn: [3, 7, 10],
        Rahu: [5, 7, 9],
        Ketu: [5, 7, 9],
        others: [7],
    };

    const planetAspects = aspectRules[aspectingPlanetName] || aspectRules['others'];

    return planetAspects
        .map(aspect => (aspectingPlanetHouse + aspect - 1) % 12 || 12)
        .includes(targetPlanetHouse);
};

const calculateAspectedBy = (planetDetails, targetPlanetHouse) => {
    return Object.keys(planetDetails)
        .filter((key) => key >= 1 && key <= 9)
        .map(key => {
            const aspectingPlanet = planetDetails[key];
            const aspectingPlanetHouse = calculateHouseNumber(aspectingPlanet.current_sign, planetDetails["0"].current_sign);
            if (checkAspect(aspectingPlanet.name, aspectingPlanetHouse, targetPlanetHouse)) {
                return aspectingPlanet.name;
            }
            return null;
        })
        .filter(planet => planet !== null)
        .join(', ');
};



const D9table = () => {
    const { chartData } = useContext(AstrologyContext); // Move useContext here
    console.log(chartData);
    const filterAndMapPlanets = (planetDetails, ascendantSign) => {
        return Object.keys(planetDetails)
            .filter((key) => key >= 0 && key <= 9)
            .map((key, index) => {
                const planetData = planetDetails[key];
                const rashi = calculateRashi(planetData.current_sign);
                const rashiLord = calculateRashiLord(rashi);
                const houseNumber = calculateHouseNumber(planetData.current_sign, ascendantSign);
                const aspects = calculateAspects(planetData.name, houseNumber);
                const aspectedBy = calculateAspectedBy(planetDetails, houseNumber);
                const isRetrograde = retroOrnot(planetData.name, planetData.isRetro);
    
                return (
                    <tr key={index}>
                        <td>{planetData.name}</td>
                        <td>{planetData.current_sign}</td>
                        <td>{rashi}</td>
                        <td>{rashiLord}</td>
                        <td>{houseNumber}</td>
                        <td>{isRetrograde}</td>
                        <td>{aspects}</td>
                        <td>{aspectedBy}</td>
                    </tr>
                );
            });
    };

    if (!chartData || !chartData.output) {
        return <div>No chart data available</div>;
    }

    const ascendantSign = chartData.output["0"].current_sign;

    const renderTableRows = () => {
        const planetDetails = chartData.output; // Access the first object in astrologyData.output
        return filterAndMapPlanets(planetDetails, ascendantSign);
    };

    return (
        <div className="astrology-table-container">
            <table className="astrology-table">
                <thead>
                    <tr>
                        <th>Planet</th>
                        <th>Current Sign</th>
                        <th>Rashi</th>
                        <th>Rashi Lord</th>
                        <th>House</th>
                        <th>Retrograde</th>
                        <th>Aspecting House</th>
                        <th>Aspected By</th>
                    </tr>
                </thead>
                <tbody>
                    {renderTableRows()}
                </tbody>
            </table>
        </div>
    );
};

export default D9table;
