const express = require('express');
const app = express();
const planetsRoute = require('./planetsRoute'); // Import the planets route
const cors = require('cors');
require('dotenv').config();

const blogRoute = require('./blog');

//app.use(cors());
const corsOptions = {
  origin: 'https://astro-mystic.vercel.app', // Your Vercel frontend URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Use the planets API route
app.use('/api', planetsRoute);
// Tell the server to use the blog route
app.use('/api', blogRoute);


// Use the port from environment variables for Render
const PORT = process.env.PORT || 3000;

// Add more routes here in future as needed

app.listen(PORT, () => {
  console.log(`Server running on port ${3000}`);
});

