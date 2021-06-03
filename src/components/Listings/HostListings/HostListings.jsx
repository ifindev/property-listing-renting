import React, { useState, useEffect } from 'react';
import { Flex, Box } from '@chakra-ui/react';

import AddListing from './AddListing';
import FilterListings from './FilterListings';
import SearchField from './SearchField';
import ListingCards from './ListingCards';

const listings = require('../../../data/listings');

const HostListings = () => {
  const [selectedListing, setSelectedListing] = useState(null);
  const listingsData = listings;

  useEffect(() => {
    if (listingsData.length !== 0) {
      setSelectedListing(1);
    } else {
      setSelectedListing(null);
    }
  }, [listingsData]);

  return (
    <Flex px={3} w={500} flexDir="column">
      <Box>
        <SearchField />
        <AddListing />
        <FilterListings />
      </Box>
      <Flex
        flexDir="column"
        overflow="scroll"
        mt={10}
        sx={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '&::-webkit-scrollbar-thumb': {
            display: 'none',
          },
        }}
      >
        <ListingCards
          listingsData={listingsData}
          selectedListing={selectedListing}
          handleSelectedListing={setSelectedListing}
        />
      </Flex>
    </Flex>
  );
};

export default HostListings;
