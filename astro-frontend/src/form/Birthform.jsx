import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Birthform.css';
import { AstrologyContext } from '../Context'; // Import the context

const Birthform = () => {
  const { setAstrologyData } = useContext(AstrologyContext); // Access the context function to set data

  const [date, setDate] = useState(''); // State for date
  const [time, setTime] = useState(''); // State for time
  const [place, setPlace] = useState(''); // State for place
  const [timezone, setTimezone] = useState(5.5); // Default timezone
  const navigate = useNavigate(); // To navigate to the new page

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    const formattedDate = date; // YYYY-MM-DD format
    const formattedTime = time; // HH:MM:SS format

    // Prepare the data to send to the backend
    const requestData = {
      date: formattedDate,
      time: formattedTime,
      place: place,
      timezone: timezone,
    };

    // Send POST request to the backend
    try {
      const response = /*await fetch('http://localhost:3000/api/planets',*/await fetch('https://astromystic-backend-nae0.onrender.com/api/planets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json(); // Parse JSON response
      console.log('Response from backend:', data); // Log response

      // Set the data in the context using setAstrologyData
      setAstrologyData(data);

      // Navigate to the chart page (without passing the data through state)
      navigate('/birthchart/D1');

    } catch (error) {
      console.error('Error submitting form:', error); // Log any error
    }
  };

  return (
    <div className="astrology-form-container">
      <h1>Astrology Form</h1>
      <form onSubmit={handleSubmit} className="astrology-form">
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required // Ensure date input is required
        />

        <label htmlFor="time">Select Time:</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          step="1" // Allows seconds to be input
          required // Ensure time input is required
        />

        <label htmlFor="place">Place:</label>
        <input
          type="text"
          id="place"
          placeholder="Enter Place"
          value={place}
          onChange={(e) => setPlace(e.target.value)}
          required // Ensure place input is required
        />

        <label htmlFor="timezone">Timezone:</label>
        <input
          type="number"
          id="timezone"
          value={timezone}
          onChange={(e) => setTimezone(e.target.value)}
          step="0.1"
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Birthform;
