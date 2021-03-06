import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './src/global/theme';
import { Dashboard } from './src/screens/Dashboard';
export default function App() {
  return (
    <ThemeProvider theme ={theme}>
      <Dashboard/>
    </ThemeProvider>
  );
}
