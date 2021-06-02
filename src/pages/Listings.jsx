import React from 'react';
import {
  Box,
  Flex,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
  Button,
} from '@chakra-ui/react';
import { MdSearch, MdAddCircleOutline } from 'react-icons/md';

const Listings = () => {
  return (
    <Flex pt={10} pb={5} px={5} height="100%" w="100%">
      <Flex
        px={5}
        w={350}
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
      </Flex>
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

export default Listings;
