const express = require('express');
const app = express();
const planetsRoute = require('./planetsRoute'); // Import the planets route
const blogRoute = require('./blog');
const cors = require('cors');
require('dotenv').config();

app.use(cors());
app.use(express.json());

// Use the planets API route
app.use('/api', planetsRoute);
app.use('/api', blogRoute);

const PORT = process.env.PORT || 3000;

// Add more routes here in future as needed

app.listen(PORT, () => {
  console.log(`Server running on port ${3000}`);
});

