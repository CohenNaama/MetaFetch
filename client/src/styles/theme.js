import { createTheme } from '@mui/material/styles';

/*
 * theme
 * 
 * Defines the custom Material UI theme for the application.
 * 
 * This theme specifies the primary and secondary colors used throughout the application,
 * ensuring a consistent look and feel.
 * 
 * - primary: Used for primary actions and highlights (e.g., buttons, links).
 *   - main: The main shade of the primary color (hex code: #1976d2).
 * 
 * - secondary: Used for secondary actions and highlights.
 *   - main: The main shade of the secondary color (hex code: #dc004e).
 */
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

export default theme;
