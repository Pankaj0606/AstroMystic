import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AstrologyContext } from '../Context'; // We don't need useContext here, but good to keep for consistency if needed later
import './ChartSelector.css';

// This is a dedicated component just for the dropdown menu
const ChartSelector = ({ activeChart }) => {
    const [selectedChart, setSelectedChart] = useState(activeChart);
    const navigate = useNavigate();
    
    // This effect ensures the dropdown updates if the user navigates with browser buttons
    useEffect(() => {
        setSelectedChart(activeChart);
    }, [activeChart]);

    const handleChartSelection = (event) => {
        const chart = event.target.value;
        setSelectedChart(chart);

        const chartRoutes = {
            D1: '/birthchart/D1', D9: '/birthchart/D9', D2: '/birthchart/D2',
            D3: '/birthchart/D3', D4: '/birthchart/D4', D7: '/birthchart/D7',
            D10: '/birthchart/D10', D12: '/birthchart/D12', D16: '/birthchart/D16',
            D20: '/birthchart/D20', D24: '/birthchart/D24', D27: '/birthchart/D27',
            D30: '/birthchart/D30', D40: '/birthchart/D40', D45: '/birthchart/D45',
            D60: '/birthchart/D60',
        };
  
        if (chart && chartRoutes[chart]) {
            navigate(chartRoutes[chart]);
        }
    };

    return (
        <div className="chart-selector-wrapper">
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
              <option value="D7">Saptamsa Chart (D7)</option>
              <option value="D10">Dasamsa Chart (D10)</option>
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
    );
};

export default ChartSelector;