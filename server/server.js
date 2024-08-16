const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const MetadataController = require('./src/controllers/metadataController');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet()); // Security middleware to protect against common vulnerabilities
app.use(cors());   // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse incoming JSON requests

// Rate Limiting
const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 5 // Limit each IP to 5 requests per second
});
app.use(limiter); // Apply rate limiting to all requests

// Controller setup
const controller = new MetadataController();

/*
 * POST /fetch-metadata
 * 
 * Endpoint to fetch metadata from a list of URLs.
 */
app.post('/fetch-metadata', controller.fetchMetadata.bind(controller));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
