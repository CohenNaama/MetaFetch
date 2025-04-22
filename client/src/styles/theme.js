import { createTheme } from '@mui/material/styles';

/*
 * theme
 *
 * Defines the custom Material UI theme for the application.
 *
 * This theme specifies the primary and secondary colors, typography,
 * and button styles used throughout the application, ensuring consistency
 * and a modern look and feel.
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#3498db', // Primary color from the logo
    },
    secondary: {
      main: '#3393d6', // Secondary color from the logo
    },
    error: {
      main: deepOrange[900],
    },
    background: {
      default: '#ecf0f1', // Light background color from the logo
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
      color: '#3498db', // Primary color for headings
    },
    subtitle1: {
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      color: '#1b3183', // Dark accent color for body text
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;
