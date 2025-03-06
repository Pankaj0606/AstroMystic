const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

// Endpoint to get list of PDF files in 'myblogs' directory
router.get('/api/blogs', (req, res) => {
  const blogsDir = path.join(__dirname, '../astro-frontend/src/blog/myblogs');
  fs.readdir(blogsDir, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read directory' });
    }
    // Filter only PDF files
    const pdfFiles = files.filter(file => path.extname(file) === '.pdf');
    res.json(pdfFiles);
  });
});

module.exports = router;
