const axios = require('axios');

/*
 * MetadataFetcher Class
 * 
 * This class is responsible for fetching metadata from a given URL.
 * The metadata includes the title, description, and image of the web page.
 */
class MetadataFetcher {

  /*
   * Fetches metadata from a given URL.
   * 
   * @param {string} url - The URL from which to fetch metadata.
   * @returns {Promise<Object>} - A promise that resolves to an object containing the title, description, and image.
   * @throws {Error} - Throws an error if metadata cannot be retrieved.
   */
  async fetchMetadata(url) {
    try {
      const response = await axios.get(url);
      const data = response.data;

      // Extract the title from the HTML content
      const titleMatch = data.match(/<title>(.*?)<\/title>/);
      const title = titleMatch ? titleMatch[1] : 'No title found';

      // Extract the description from the meta tags
      const descriptionMatch = data.match(/<meta name="description" content="(.*?)"/);
      const description = descriptionMatch ? descriptionMatch[1] : 'No description found';

      // Extract the image URL from the meta tags
      const imageMatch = data.match(/<meta property="og:image" content="(.*?)"/);
      const image = imageMatch ? imageMatch[1] : 'No image found';

      return { title, description, image };
    } catch (error) {
      throw new Error('Failed to fetch metadata');
    }
  }
}

module.exports = MetadataFetcher;
