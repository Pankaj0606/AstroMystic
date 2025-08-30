// const express = require('express');
// const router = express.Router();
// const request = require('request');
// require('dotenv').config(); // Load environment variables

// // Use dynamic import for node-fetch
// let fetch;
// (async () => {
//   fetch = (await import('node-fetch')).default;
// })();

// // Function to get latitude and longitude from a place name using geocoding API
// async function getGeocodingData(place) {
//   const apiKey = process.env.GEOCODING_API_KEY;

//   const response = await fetch(`https://geocode.maps.co/search?q=${place}&api_key=${apiKey}`);
//   const data = await response.json();

//   // Convert lat/lon from string to numeric and return
//   return {
//     latitude: parseFloat(data[0].lat),
//     longitude: parseFloat(data[0].lon)
//   };
// }

// // Define the route to call the planets API
// router.post('/planets', async (req, res) => {
//   try {
//     const { place, date, time, timezone } = req.body; // Get user input

//     // Extract year, month, and day from the date string
//     const [year, month, day] = date.split('-').map(Number); // Convert to number to remove leading zeros

//     // Extract hours, minutes, and seconds from the time string
//     const [hours, minutes, seconds] = time.split(':').map(Number); // Convert to number to remove leading zeros

//     console.log({ year, month, day, hours, minutes, seconds });

//     // Get latitude and longitude for the place using the geocoding API
//     const { latitude, longitude } = await getGeocodingData(place);

//     // Prepare the astrology API request body
//     const apiData = {
//       year: year, // Year as a number
//       month: month, // Month as a number
//       date: day, // Day as a number
//       hours: hours, // Hours as a number
//       minutes: minutes, // Minutes as a number
//       seconds: seconds, // Seconds as a number
//       latitude: latitude,   // Numeric latitude
//       longitude: longitude, // Numeric longitude
//       timezone: timezone,
//       observation_point: 'topocentric', // Default value
//       ayanamsha: 'lahiri'               // Default value
//     };

//     // Call the astrology API
//     var options = {
//       method: 'POST',
//       url: 'https://json.freeastrologyapi.com/planets',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-api-key': process.env.ASTROLOGY_API_KEY // Hidden API key
//       },
//       body: JSON.stringify(apiData)
//     };

//     // Make the request to the astrology API
//     request(options, function (error, response) {
//       if (error) {
//         res.status(500).send({ error: 'Error calling astrology API' });
//       } else {
//         res.json(JSON.parse(response.body));
//       }
//     });
//   } catch (error) {
//     console.error('Error processing request:', error);
//     res.status(500).send({ error: 'Error processing request' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const jyotishApiBaseUrl = process.env.JYOTISH_API_URL;
require('dotenv').config();

// Use dynamic import for node-fetch
let fetch;
(async () => {
  fetch = (await import('node-fetch')).default;
})();

// Function to get latitude and longitude from a place name using geocoding API
async function getGeocodingData(place) {
  const apiKey = process.env.GEOCODING_API_KEY;
  const response = await fetch(`https://geocode.maps.co/search?q=${place}&api_key=${apiKey}`);
  const data = await response.json();
  return {
    latitude: parseFloat(data[0].lat),
    longitude: parseFloat(data[0].lon)
  };
}

// Function to convert a numeric timezone (e.g., 5.5) to a string format (e.g., "+05:30")
function formatTimezone(tz) {
    const sign = tz >= 0 ? '+' : '-';
    const hours = Math.floor(Math.abs(tz));
    const minutes = (Math.abs(tz) * 60) % 60;
    // Pad with leading zeros to ensure two digits
    const paddedHours = String(hours).padStart(2, '0');
    const paddedMinutes = String(minutes).padStart(2, '0');
    return `${sign}${paddedHours}:${paddedMinutes}`;
}


router.post('/planets', async (req, res) => {
  try {
    const { place, date, time, timezone } = req.body;

    // Get Lat/Lon for the place
    const { latitude, longitude } = await getGeocodingData(place);

    // Split date and time into components for the URL
    const [year, month, day] = date.split('-');
    const [hour, min, sec] = time.split(':');

    // Format the timezone correctly
    const formattedTimezone = formatTimezone(timezone);

    // Build the URL with query parameters
    const params = new URLSearchParams({
        latitude: latitude,
        longitude: longitude,
        year: year,
        month: month,
        day: day,
        hour: hour,
        min: min,
        sec: sec,
        time_zone: formattedTimezone,
        varga: 'D1,D2,D3,D4,D7,D9,D10,D12,D16,D20,D24,D27,D30,D40,D45,D60', // Request all Vargas at once
        infolevel: 'basic,panchanga' // Get basic info and panchanga
    });
    
    const apiUrl = `${jyotishApiBaseUrl}/api/calculate?${params.toString()}`;
    //const apiUrl = `http://localhost:9393/api/calculate?${params.toString()}`;

    console.log("Calling Jyotish API with URL:", apiUrl); // Good for debugging

    // Call the local Jyotish API using GET
    const response = await fetch(apiUrl);

    if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error from Jyotish API: ${response.statusText} - ${errorText}`);
    }

    const astrologyData = await response.json();
    res.json(astrologyData);

  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).send({ error: 'Error processing request' });
  }
});

module.exports = router;