import React from 'react';
import { Flex, Box, Image, Text, Badge } from '@chakra-ui/react';

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
            key={listing.id}
            p={0}
            mt={10}
            _first={{ marginTop: '0px' }}
            _last={{ marginBottom: '620px' }}
            _hover={{
              cursor: 'pointer',
            }}
            borderRadius="xl"
            bg="white"
            boxShadow="md"
            onClick={() => {
              selectedListing = listing.id;
              handleSelectedListing(selectedListing);
            }}
            borderWidth={`${selectedListing === listing.id ? '2px' : '0px'}`}
            borderColor={`${selectedListing === listing.id ? 'blue.400' : ''}`}
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
              <Text
                fontWeight="bold"
                fontSize={19}
                color={`${
                  selectedListing === listing.id ? 'blue.500' : 'blue.700'
                }`}
              >
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
                  listing.status === 'booked'
                    ? 'green.100'
                    : listing.status === 'vacant'
                    ? 'red.100'
                    : 'yellow.100'
                }`}
                color={`${
                  listing.status === 'booked'
                    ? 'green.600'
                    : listing.status === 'vacant'
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

export default ListingCards;
