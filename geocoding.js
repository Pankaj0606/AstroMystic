// Function to fetch geocoding data and convert lat/lon to numbers
async function getGeocodingData(place) {
    require('dotenv').config();
    const apiKey = process.env.GEOCODING_API_KEY;


    const response = await fetch(`https://geocode.maps.co/search?q=${place}&api_key=${apiKey}`);
    const data = await response.json();
    
    // Extract latitude and longitude and convert them to numbers
    const latitude = parseFloat(data[0].lat);
    const longitude = parseFloat(data[0].lon);
    
    return { latitude, longitude };
  }
  
  // Example usage
  getGeocodingData('New York')
    .then((result) => {
      console.log('Geocoding result:', result); // { latitude: 40.7128, longitude: -74.0060 }
    })
    .catch((error) => {
      console.error('Error fetching geocoding data:', error);
    });
  