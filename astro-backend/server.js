const express = require('express');
const app = express();
const planetsRoute = require('./planetsRoute'); // Import the planets route
const cors = require('cors');

app.use(cors());
app.use(express.json());

// Use the planets API route
app.use('/api', planetsRoute);

// Add more routes here in future as needed

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

