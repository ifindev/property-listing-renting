import React, { useState } from 'react';
import { Flex, Box, Image, Text, Badge } from '@chakra-ui/react';

import AddListing from './AddListing';
import FilterListings from './FilterListings';
import SearchField from './SearchField';

const listings = require('../../../data/listings');

const HostListings = () => {
  const [selectedListing, setSelectedListing] = useState(null);
  const listingsData = listings;

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

const ListingCards = ({
  listingsData,
  selectedListing,
  handleSelectedListing,
}) => {
  return (
    <Box px={2}>
      {listingsData.map(listing => {
        return (
          <Flex
            p={0}
            mt={10}
            _first={{ marginTop: '0px' }}
            _last={{ marginBottom: '620px' }}
            _hover={{
              cursor: 'pointer',
            }}
            borderRadius="lg"
            bg="white"
            boxShadow="md"
          >
            <Box w="250px">
              <Image
                src={listing.image}
                borderTopLeftRadius="lg"
                borderBottomLeftRadius="lg"
                boxSize="150px"
                objectFit="cover"
              />
            </Box>
            <Flex flexDir="column" w="100%" p={3}>
              <Text fontWeight="bold" color="purple.800" fontSize={19}>
                {listing.title}
              </Text>
              <Text color="gray.500" mt={2}>
                {listing.location}
              </Text>
              <Badge
                d="flex"
                justifyContent="center"
                w="70px"
                py={1}
                mt={2}
                borderRadius="lg"
                bg={`${
                  listing.status === 'Booked'
                    ? 'green.100'
                    : listing.status === 'Vacant'
                    ? 'red.100'
                    : 'yellow.100'
                }`}
                color={`${
                  listing.status === 'Booked'
                    ? 'green.600'
                    : listing.status === 'Vacant'
                    ? 'red.600'
                    : 'yellow.600'
                }`}
              >
                {listing.status}
              </Badge>
            </Flex>
          </Flex>
        );
      })}
    </Box>
  );
};

export default HostListings;
