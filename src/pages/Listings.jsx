import React from 'react';
import { Flex } from '@chakra-ui/react';
import { HostListings, ListingDetails } from '../components';

const Listings = () => {
  return (
    <Flex pt={10} pb={5} px={5} height="100%" w="100%">
      <HostListings />
      <ListingDetails />
    </Flex>
  );
};

export default Listings;
