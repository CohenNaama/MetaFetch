const MetadataFetcher = require('../data/metadataFetcher');

/*
 * MetadataService Class
 * 
 * This service layer handles the business logic for fetching metadata from multiple URLs.
 */
class MetadataService {
  constructor() {
    this.fetcher = new MetadataFetcher();
  }

  /*
   * Fetches metadata for a list of URLs.
   * 
   * @param {string[]} urls - An array of URLs to fetch metadata from.
   * @returns {Promise<Object[]>} - A promise that resolves to an array of objects containing metadata for each URL.
   */
  async getMetadataForUrls(urls) {
    const results = await Promise.all(
      urls.map(async (url) => {
        try {
          const metadata = await this.fetcher.fetchMetadata(url);
          return { url, ...metadata };
        } catch (error) {
          return { url, error: error.message };
        }
      })
    );
    return results;
  }
}

module.exports = MetadataService;
