import axios from 'axios';

/*
 * fetchMetadata
 * 
 * Makes a POST request to the backend server to fetch metadata for a list of URLs.
 * 
 * @param {string[]} urls - An array of URLs to fetch metadata from.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of metadata objects.
 * 
 * Each metadata object includes:
 *  - url: The original URL.
 *  - title: The title of the web page.
 *  - description: The description of the web page (if available).
 *  - image: The URL of the image associated with the web page (if available).
 */
const fetchMetadata = async (urls) => {
  const response = await axios.post('http://localhost:5000/fetch-metadata', { urls });
  return response.data;
};

export default fetchMetadata;
