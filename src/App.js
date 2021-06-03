import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { HostMainPage } from './pages';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/">
            <HostMainPage />
          </Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
