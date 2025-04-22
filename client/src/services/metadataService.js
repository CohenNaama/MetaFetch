/*
 * fetchMetadata
 * 
 * Makes a POST request to the backend server to fetch metadata for a list of URLs.
 * 
 * @param {string[]} urls - An array of URLs to fetch metadata from.
 * 
 * @returns {Promise<Object[]>} - A promise that resolves to an array of metadata objects.
 * 
 * Each metadata object includes:
 *  - url: {string} The original URL.
 *  - title: {string} The title of the web page.
 *  - description: {string} The description of the web page (if available).
 *  - image: {string} The URL of the image associated with the web page (if available).
 * 
 * @throws {Error} - Throws an error if the metadata fetch fails (e.g., network issues, invalid URL).
 */

import axios from "axios";



const fetchMetadata = async (urls) => {
  const response = await axios.post('http://localhost:5000/fetch-metadata', { urls });
  return response.data;
};

export default fetchMetadata;
