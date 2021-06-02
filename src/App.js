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
  return (
    <ChakraProvider theme={theme}>
      <Flex style={{ height: '100vh' }} bg="gray.50">
        <SideNavbar />
        <Flex w="100%">Hello</Flex>
      </Flex>
    </ChakraProvider>
  );
}

const SideNavbar = () => {
  const [selectedMenu, setSelectedMenu] = useState('Dashboard');
  const menus = ['Dashboard', 'Listings', 'Bookings', 'Tasks', 'Inbox'];
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
              onClick={() => setSelectedMenu(menu)}
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
