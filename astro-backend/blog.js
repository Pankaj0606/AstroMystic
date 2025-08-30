// const express = require('express');
// const fs = require('fs');
// const path = require('path');

// const router = express.Router();

// // Endpoint to get list of PDF files in 'myblogs' directory
// router.get('/api/blogs', (req, res) => {
//   const blogsDir = path.join(__dirname, '../astro-frontend/src/blog/myblogs');
//   fs.readdir(blogsDir, (err, files) => {
//     if (err) {
//       return res.status(500).json({ error: 'Failed to read directory' });
//     }
//     // Filter only PDF files
//     const pdfFiles = files.filter(file => path.extname(file) === '.pdf');
//     res.json(pdfFiles);
//   });
// });

// module.exports = router;


// astro-backend/blog.js

const express = require('express');
const router = express.Router();

// Problem: The original code tried to read a local directory that won't exist on the server.
// Solution: For now, we will return a hardcoded list of the PDF files.
router.get('/blogs', (req, res) => {
  // NOTE: I also changed the route from '/api/blogs' to just '/blogs'.
  // Because server.js already uses '/api', the final URL will correctly be /api/blogs
  const pdfFiles = [
    "1.pdf"
    // Add other blog PDF filenames here as strings
  ];
  res.json(pdfFiles);
});

module.exports = router;