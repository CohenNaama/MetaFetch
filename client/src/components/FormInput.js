import React from 'react';
import { TextField, Grid, Box } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';

/*
 * FormInput Component
 *
 * Renders a single input field with a label for the URL and an icon.
 * 
 * Props:
 * - url (string): The value of the input field.
 * - index (number): The index of the input field in the form.
 * - handleChange (function): The function to call when the input value changes.
 */
const FormInput = ({ url, index, handleChange }) => {
  return (
    <Grid item xs={12}>
      <Grid container alignItems="flex-end">
        <Grid item>
          <Box
            sx={{
              bgcolor: '#3498db',
              borderRadius: '50%',
              p: 1,
              color: '#ecf0f1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              mr: 2,
              my: 0.5,
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'scale(1.2)',
                bgcolor: '#3393d6',
              },
            }}
          >
            <LinkIcon />
          </Box>
        </Grid>
        <Grid item xs>
          <TextField
            label={`URL ${index + 1}`}
            id={`standard-url-${index}`}
            variant="standard"
            fullWidth
            value={url}
            onChange={(e) => handleChange(index, e.target.value)}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default FormInput;
