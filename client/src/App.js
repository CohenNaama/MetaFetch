import React from 'react';
import UrlForm from './components/UrlForm';
import { CssBaseline } from '@mui/material';

/*
 * App Component
 * 
 * This is the root component of the application. It renders the UrlForm component
 * and applies global styles using Material UI's CssBaseline.
 */
function App() {
  return (
    <div>
      <CssBaseline />
      <UrlForm />
    </div>
  );
}

export default App;
