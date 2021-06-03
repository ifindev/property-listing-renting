import React from 'react';
import { Flex, Box, Image, Text } from '@chakra-ui/react';

import AddListing from './AddListing';
import FilterListings from './FilterListings';
import SearchField from './SearchField';

const HostListings = () => {
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
        <ListingCards />
      </Flex>
    </Flex>
  );
};

const ListingCards = () => {
  const listingsData = [
    {
      title: 'Manhattan cozy',
      location: 'Manhattan, New York',
      status: 'Booked',
      image:
        'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80',
    },
    {
      title: 'Minimalistic clean and white',
      location: 'Manhattan, New York',
      status: 'Booked',
      image:
        'https://images.unsplash.com/photo-1554995207-c18c203602cb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    },
    {
      title: "The Artist's Studio",
      location: "Hell's Kitchen, New York",
      status: 'Vacant',
      image:
        'https://images.unsplash.com/photo-1486304873000-235643847519?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    },
    {
      title: 'Central Bright Studio',
      location: 'Manhattan, New York',
      status: 'Pending',
      image:
        'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    },
    {
      title: 'Cozy Living Studio',
      location: '	Hempstead, New York',
      status: 'Vacant',
      image:
        'https://images.unsplash.com/photo-1556593825-c11de986cb0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80',
    },
    {
      title: 'Cozy Family Room',
      location: '	Syracause, New York',
      status: 'Pending',
      image:
        'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80',
    },
  ];

  return (
    <Box px={2}>
      {listingsData.map(listing => {
        return (
          <Flex
            p={0}
            mt={10}
            _first={{ marginTop: '0px' }}
            borderRadius="lg"
            bg="white"
            boxShadow="md"
          >
            <Box w="200px">
              <Image
                src={listing.image}
                borderTopLeftRadius="lg"
                borderBottomLeftRadius="lg"
                boxSize="130px"
                objectFit="cover"
              />
            </Box>
            <Box w="100%" p={2}>
              <Text>{listing.title}</Text>
              <Text>{listing.location}</Text>
              <Text>{listing.status}</Text>
            </Box>
          </Flex>
        );
      })}
    </Box>
  );
};

export default HostListings;
