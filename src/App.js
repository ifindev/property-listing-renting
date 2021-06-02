import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { HostMainPage } from './pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HostMainPage />
    </ChakraProvider>
  );
}

export default App;
