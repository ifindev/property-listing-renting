import React from 'react';
import {
  Box,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  Button,
  Select,
} from '@chakra-ui/react';
import { MdSearch, MdList } from 'react-icons/md';

const Listings = () => {
  return (
    <Flex pt={10} pb={5} px={5} height="100%" w="100%">
      <HostListings />
      <ListingDetails />
    </Flex>
  );
};

const ListingDetails = () => {
  return (
    <Flex
      ml={10}
      p={10}
      w="100%"
      bg="whiteAlpha.900"
      boxShadow="md"
      borderRadius={10}
    >
      Listing Details
    </Flex>
  );
};

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

const SearchField = () => {
  return (
    <div>
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={
            <Text fontSize={20} color="gray.400">
              <MdSearch />
            </Text>
          }
        />
        <Input
          type="search"
          placeholder="Search"
          boxShadow="sm"
          backgroundColor="white"
          borderWidth={2}
          _hover={{
            borderColor: 'purple.300',
          }}
          _focus={{
            borderColor: 'purple.600',
          }}
        />
      </InputGroup>
    </div>
  );
};

const AddListing = () => {
  return (
    <Box mt={8}>
      <Flex justifyContent="space-between" alignItems="center" px={1}>
        <Text fontSize="2xl" color="gray.700">
          <strong>My Listings</strong>
        </Text>
        <Button
          bg="purple.600"
          color="white"
          fontSize={25}
          sx={{
            '&:hover, &:active': {
              backgroundColor: 'purple.500',
            },
          }}
          _focus={{
            outline: 'none',
          }}
        >
          +
        </Button>
      </Flex>
    </Box>
  );
};

const FilterListings = () => {
  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={10}
      px={1}
    >
      <Select
        placeholder="All Listings"
        w="130px"
        bg="white"
        borderWidth={2}
        boxShadow="sm"
      >
        <option value="booked">Booked</option>
        <option value="vacant">Vacant</option>
        <option value="pending">Pending</option>
      </Select>
      <Button
        bg="white"
        p={2}
        fontSize={20}
        borderRadius={100}
        borderWidth={2}
        borderColor="gray.200"
      >
        <MdList />
      </Button>
    </Box>
  );
};

export default Listings;
