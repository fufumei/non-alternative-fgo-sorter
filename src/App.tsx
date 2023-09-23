import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      Test
    </MantineProvider>
  );
}

export default App;
