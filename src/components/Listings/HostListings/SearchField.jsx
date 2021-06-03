import React from 'react';
import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Text,
} from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';

const SearchField = () => {
  return (
    <Box>
      <InputGroup>
        <InputLeftElement
          mt={1}
          ml={1}
          pointerEvents="none"
          children={
            <Text fontSize={30} color="gray.300">
              <MdSearch />
            </Text>
          }
        />
        <Input
          type="search"
          placeholder="Search"
          pl={12}
          boxShadow="sm"
          backgroundColor="white"
          color="gray.700"
          borderWidth={2}
          size="lg"
          _hover={{
            borderColor: 'blue.100',
          }}
          _focus={{
            borderColor: 'blue.400',
          }}
          onChange={e => console.log(e.target.value)}
        />
      </InputGroup>
    </Box>
  );
};

export default SearchField;
