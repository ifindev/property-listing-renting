import React, { useState } from 'react';
import {
  ChakraProvider,
  Flex,
  Text,
  List,
  ListItem,
  theme,
} from '@chakra-ui/react';
import {
  MdViewQuilt,
  MdLocationCity,
  MdDateRange,
  MdLibraryBooks,
  MdEmail,
} from 'react-icons/md';

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

const SideNavbar = ({ menus, selectedMenu, handleSelectedMenu }) => {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      py={10}
      w={20}
      bg="white"
      boxShadow="xl"
    >
      <List
        d="flex"
        flexDir="column"
        alignItems="center"
        spacing={10}
        w="100%"
        _hover={{
          cursor: 'pointer',
        }}
      >
        {menus.map(menu => {
          return (
            <ListItem
              d="flex"
              flexDir="column"
              alignItems="center"
              fontSize="xs"
              w="100%"
              color={`${selectedMenu === menu ? 'purple.600' : 'gray.500'}`}
              borderColor={`${selectedMenu === menu ? 'purple.600' : ''}`}
              borderLeft={`${selectedMenu === menu ? '4px' : ''}`}
              onClick={() => handleSelectedMenu(menu)}
            >
              <Text fontSize={30}>
                {menu === 'Dashboard' ? (
                  <MdViewQuilt />
                ) : menu === 'Listings' ? (
                  <MdLocationCity />
                ) : menu === 'Bookings' ? (
                  <MdDateRange />
                ) : menu === 'Tasks' ? (
                  <MdLibraryBooks />
                ) : (
                  <MdEmail />
                )}
              </Text>
              <Text>{menu}</Text>
            </ListItem>
          );
        })}
      </List>
      <div>Hello</div>
    </Flex>
  );
};

export default App;
