import React from 'react';
import { Card, CardContent,CardMedia, Typography, Box, Grid } from '@mui/material';

/*
 * MetadataCard Component
 *
 * Renders a card displaying metadata for a single URL.
 * 
 * Props:
 * - data (object): The metadata to display.
 */
const MetadataCard = ({ data }) => {
  const isLongContent = data.description && data.description.length > 150;

  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          height: '350px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          transition: 'transform 0.3s',
          '&:hover': { transform: 'scale(1.05)' },
          bgcolor: data.error ? '#f8d7da' : '#ecf0f1', // Red background for errors
        }}
      >
        <Box sx={{ bgcolor: '#263b89', p: 2, borderRadius: '4px 4px 0 0' }}>
          <Typography variant="h6" gutterBottom sx={{ color: '#ffffff' }}>
            {data.url}
          </Typography>
        </Box>
        <CardContent
          sx={{
            overflowY: isLongContent ? 'auto' : 'visible',
            flexGrow: 1,
          }}
        >
          {data.error ? (
            <Typography variant="subtitle1" color="error">
              Error: {data.error}
            </Typography>
          ) : (
            <>
              <Typography variant="subtitle1" sx={{ color: '#1b3183' }}>
                Title: <strong>{data.title}</strong>
              </Typography>
              <Typography variant="subtitle2" color="textSecondary" sx={{ mb: 2 }}>
                Description: {data.description}
              </Typography>
            </>
          )}
        </CardContent>
        {data.image && !data.error && (
          <CardMedia
            component="img"
            height="150"
            image={data.image}
            alt={data.title}
            sx={{ objectFit: 'contain', bgcolor: 'background.default', p: 2 }}
          />
        )}
      </Card>
    </Grid>
  );
};

export default MetadataCard;
