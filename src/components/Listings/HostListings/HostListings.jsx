import React from 'react';
import { Flex } from '@chakra-ui/react';

import AddListing from './AddListing';
import FilterListings from './FilterListings';
import SearchField from './SearchField';

const HostListings = () => {
  return (
    <Flex
      px={5}
      w={450}
      flexDir="column"
      overflow="scroll"
      sx={{
        '&::-webkit-scrollbar': {
          display: 'none',
        },
        '&::-webkit-scrollbar-thumb': {
          display: 'none',
        },
      }}
    >
      <SearchField />
      <AddListing />
      <FilterListings />
    </Flex>
  );
};

export default HostListings;
