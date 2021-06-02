import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { SideNavbar } from '../components';
import Listings from './Listings';

const HostMainPage = () => {
  const [selectedMenu, setSelectedMenu] = useState('Listings');
  const menus = ['Dashboard', 'Listings', 'Bookings', 'Tasks', 'Inbox'];
  return (
    <div>
      <Flex style={{ height: '100vh', overflow: 'hidden' }} bg="gray.50">
        <SideNavbar
          menus={menus}
          selectedMenu={selectedMenu}
          handleSelectedMenu={setSelectedMenu}
        />
        <Flex w="100%">
          {selectedMenu === 'Dashboard' ? (
            <p>Dashboard</p>
          ) : selectedMenu === 'Listings' ? (
            <Listings />
          ) : selectedMenu === 'Bookings' ? (
            <p>Bookings</p>
          ) : selectedMenu === 'Tasks' ? (
            <p>Tasks</p>
          ) : (
            <p>Inbox</p>
          )}
        </Flex>
      </Flex>
    </div>
  );
};

export default HostMainPage;
