const express = require('express');
const router = express.Router();
const request = require('request');

// Use dynamic import for node-fetch
let fetch;
(async () => {
  fetch = (await import('node-fetch')).default;
})();

// Function to get latitude and longitude from a place name using geocoding API
async function getGeocodingData(place) {
  const apiKey = '66f961dc1a5d2290415842ijfd3f30b'; // Geocoding API key
  const response = await fetch(`https://geocode.maps.co/search?q=${place}&api_key=${apiKey}`);
  const data = await response.json();

  // Convert lat/lon from string to numeric and return
  return {
    latitude: parseFloat(data[0].lat),
    longitude: parseFloat(data[0].lon)
  };
}

// Define the route to call the planets API
router.post('/planets', async (req, res) => {
  try {
    const { place, date, time, timezone } = req.body; // Get user input

    // Extract year, month, and day from the date string
    const [year, month, day] = date.split('-').map(Number); // Convert to number to remove leading zeros

    // Extract hours, minutes, and seconds from the time string
    const [hours, minutes, seconds] = time.split(':').map(Number); // Convert to number to remove leading zeros

    console.log({ year, month, day, hours, minutes, seconds });

    // Get latitude and longitude for the place using the geocoding API
    const { latitude, longitude } = await getGeocodingData(place);

    // Prepare the astrology API request body
    const apiData = {
      year: year, // Year as a number
      month: month, // Month as a number
      date: day, // Day as a number
      hours: hours, // Hours as a number
      minutes: minutes, // Minutes as a number
      seconds: seconds, // Seconds as a number
      latitude: latitude,   // Numeric latitude
      longitude: longitude, // Numeric longitude
      timezone: timezone,
      observation_point: 'topocentric', // Default value
      ayanamsha: 'lahiri'               // Default value
    };

    // Call the astrology API
    var options = {
      method: 'POST',
      url: 'https://json.freeastrologyapi.com/planets',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'eXiD7UyNku6IyWMxfoSVq1BWNNrX829w5M81QlRk'
      },
      body: JSON.stringify(apiData)
    };

    // Make the request to the astrology API
    request(options, function (error, response) {
      if (error) {
        res.status(500).send({ error: 'Error calling astrology API' });
      } else {
        res.json(JSON.parse(response.body));
      }
    });
  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send({ error: 'Error processing request' });
  }
});

module.exports = router;
