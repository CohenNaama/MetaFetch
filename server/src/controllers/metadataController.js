const MetadataService = require('../services/metadataService');

/*
 * MetadataController Class
 * 
 * This controller handles HTTP requests related to fetching metadata for multiple URLs.
 */
class MetadataController {
  constructor() {
    this.service = new MetadataService();
  }

  /*
   * Handles the /fetch-metadata POST request to fetch metadata for multiple URLs.
   * 
   * @param {Object} req - Express request object.
   * @param {Object} res - Express response object.
   * @returns {void}
   */
  async fetchMetadata(req, res) {
    const { urls } = req.body;

    // Validate input
    if (!Array.isArray(urls) || urls.length < 1) {
      return res.status(400).json({ error: 'Invalid input' });
    }

    try {
      // Fetch metadata for the provided URLs
      const results = await this.service.getMetadataForUrls(urls);
      res.json(results);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  }
}

module.exports = MetadataController;
