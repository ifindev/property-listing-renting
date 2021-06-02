import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { UserDashboard } from './pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <UserDashboard />
    </ChakraProvider>
  );
}

export default App;
