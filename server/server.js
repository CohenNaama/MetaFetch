const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const MetadataController = require('./src/controllers/metadataController');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse incoming JSON requests

// Rate Limiting
const limiter = rateLimit({
  windowMs: 1000, // 1 second
  max: 5, // limit each IP to 5 requests per second
});

if (process.env.NODE_ENV !== 'test') {
  app.use(limiter); // Apply rate limiter only if NOT in test mode
}

// Controller setup
const controller = new MetadataController();

app.post('/fetch-metadata', controller.fetchMetadata.bind(controller));

// Conditionally start the server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
