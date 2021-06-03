import React from 'react';
import { InputGroup, InputLeftElement, Input, Text } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';

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
            borderColor: 'blue.100',
          }}
          _focus={{
            borderColor: 'blue.400',
          }}
        />
      </InputGroup>
    </div>
  );
};

export default SearchField;
