import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';
import axios from 'axios';

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
  const [urls, setUrls] = useState(['', '', '']);
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
  };

  /*
   * Handles form submission by sending the URLs to the backend
   * and fetching metadata.
   * 
   * On success, it updates the metadata state with the fetched data.
   * On failure, it sets an error message.
   */
  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/fetch-metadata', { urls });
      setMetadata(response.data);
      setError(null);
    } catch (error) {
      setMetadata([]);
      setError('Failed to fetch metadata. Please check the URLs and try again.');
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom align="center">
        MetaFetch: Fetch Metadata
      </Typography>
      <Grid container spacing={2}>
        {urls.map((url, index) => (
          <Grid item xs={12} key={index}>
            <TextField
              label={`URL ${index + 1}`}
              variant="outlined"
              fullWidth
              value={url}
              onChange={(e) => handleChange(index, e.target.value)}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Submit
          </Button>
        </Grid>
      </Grid>

      {error && (
        <Typography color="error" variant="body1" gutterBottom align="center">
          {error}
        </Typography>
      )}

      <Grid container spacing={3} marginTop={2}>
        {metadata.map((data, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {data.url}
                </Typography>
                <Typography variant="subtitle1">
                  Title: {data.title}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  Description: {data.description}
                </Typography>
              </CardContent>
              {data.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={data.image}
                  alt={data.title}
                />
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default UrlForm;
