import React, { useState } from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { SideNavbar } from './components';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('Listings');
  const menus = ['Dashboard', 'Listings', 'Bookings', 'Tasks', 'Inbox'];
  return (
    <ChakraProvider theme={theme}>
      <Flex style={{ height: '100vh' }} bg="gray.50">
        <SideNavbar
          menus={menus}
          selectedMenu={selectedMenu}
          handleSelectedMenu={setSelectedMenu}
        />
        <Flex w="100%">
          <div className="flex-auto bg-gray-100 p-8">
            {selectedMenu === 'Dashboard' ? (
              <p>Dashboard</p>
            ) : selectedMenu === 'Listings' ? (
              <p>Listings</p>
            ) : selectedMenu === 'Bookings' ? (
              <p>Bookings</p>
            ) : selectedMenu === 'Tasks' ? (
              <p>Tasks</p>
            ) : (
              <p>Inbox</p>
            )}
          </div>
        </Flex>
      </Flex>
    </ChakraProvider>
  );
}

export default App;
