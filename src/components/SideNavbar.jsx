import React from 'react';
import { Flex, Text, List, ListItem } from '@chakra-ui/react';
import {
  MdViewQuilt,
  MdLocationCity,
  MdDateRange,
  MdLibraryBooks,
  MdEmail,
} from 'react-icons/md';

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
        mt={10}
        _hover={{
          cursor: 'pointer',
        }}
      >
        {menus.map(menu => {
          return (
            <ListItem
              key={menu}
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

export default SideNavbar;
