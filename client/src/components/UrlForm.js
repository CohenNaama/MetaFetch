import React, { useState } from 'react';
import { Button, Grid, Typography, Container } from '@mui/material';
import fetchMetadata from '../services/metadataService';
import FormInput from './FormInput';
import MetadataCard from './MetadataCard';

/*
 * UrlForm Component
 *
 * This component allows users to input multiple URLs, submit them,
 * and display the fetched metadata (title, description, image) from those URLs.
 * The form is styled using Material UI, and the metadata is displayed in card format.
 */
const UrlForm = () => {
  /*
   * State management for URLs, metadata, and error handling.
   */
  const [urls, setUrls] = useState(['', '', '', '']);
  const [metadata, setMetadata] = useState([]);
  const [error, setError] = useState(null);

  /*
   * Handles changes to the URL input fields.
   *
   * @param {number} index - The index of the URL field being updated.
   * @param {string} value - The new value of the URL field.
   */
  const handleChange = (index, value) => {
    const newUrls = [...urls];
    newUrls[index] = value;
    setUrls(newUrls);
    setError(null);  // Clear any existing error when input changes
  };

  /*
   * Handles form submission by sending the URLs to the backend
   * and fetching metadata.
   *
   * On success, it appends the new metadata to the existing state.
   * On failure, it sets an error message.
   */
  const handleSubmit = async () => {
    try {
      // Filter out URLs that have already been submitted (i.e., already in the metadata)
      const newUrls = urls.filter(url => !metadata.some(data => data.url === url.trim()) && url.trim() !== '');

      if (newUrls.length > 0) {
        // const response = await axios.post('http://localhost:5000/fetch-metadata', { urls: newUrls });
        // const newMetadata = response.data;
        const newMetadata = await fetchMetadata(newUrls);


        // Append the new metadata to the existing metadata
        setMetadata((prevMetadata) => [...prevMetadata, ...newMetadata]);
      }

      setError(null);
    } catch (error) {
      setError('Failed to fetch metadata. Please check the URLs and try again.');
    }
  };

  /*
   * Resets the form fields and clears the metadata display.
   * 
   * This function clears the URL input fields, resets the metadata state,
   * and removes any displayed error messages. It is triggered when the
   * "Reset" button is clicked.
   */
  const handleReset = () => {
    setUrls(['', '', '', '']);  // Clear the URL input fields
    setMetadata([]);             // Clear the metadata display
    setError(null);              // Clear any error messages
  };

  /*
   * Handles the form submission when the Enter key is pressed.
   * 
   * This function listens for the "Enter" key press and triggers
   * the handleSubmit function if the key is pressed.
   */
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevent form from submitting the default way
      handleSubmit(); // Trigger the form submission
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 10 }}>
      <Typography
        variant="subtitle1"
        align="center"
        sx={{
          color: 'text.secondary',
          mb: 4,
        }}
      >
        Enter up to 4 URLs to fetch their metadata, including titles, descriptions, and images.
      </Typography>

      <Grid container spacing={3} onKeyDown={handleKeyDown}>
        {urls.map((url, index) => (
          <FormInput key={index} url={url} index={index} handleChange={handleChange} />
        ))}

        <Grid container spacing={3} marginTop={2}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleSubmit}
              sx={{
                mt: 2,
                bgcolor: '#3498db',
                color: '#ecf0f1',
                '&:hover': {
                  bgcolor: '#263b89',
                },
              }}
            >
              Submit
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="outlined"
              fullWidth
              onClick={handleReset}
              sx={{
                mt: 2,
                borderColor: '#3498db',
                color: '#3498db',
                '&:hover': {
                  borderColor: '#263b89',
                  color: '#263b89',
                },
              }}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Grid>

      {error && (
        <Typography color="error" variant="body1" gutterBottom align="center" sx={{ mt: 2 }}>
          {error}
        </Typography>
      )}

      <Grid container spacing={3} marginTop={2}>
        {metadata.map((data, index) => (
          <MetadataCard key={index} data={data} />
        ))}
      </Grid>
    </Container>
  );
};

export default UrlForm;
