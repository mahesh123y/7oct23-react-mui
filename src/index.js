// 1. Import area

import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider, createTheme } from '@mui/material';
import App from './App';

//2. Define area

function anil() {
  return 'orange'
}

let clr = anil();

export const ThemeProvider2 = createContext();

let clr2 = "#0000FF";

const customTheme = createTheme({
  palette: {
    primary: {
      main: '#FF0000',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={customTheme}>
      <ThemeProvider2.Provider value = {clr2} >
        <App myclr={clr} />
      </ThemeProvider2.Provider>

    </ThemeProvider>
  </React.StrictMode>
);

