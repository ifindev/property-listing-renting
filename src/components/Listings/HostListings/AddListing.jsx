import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

const AddListing = () => {
  return (
    <Box mt={8}>
      <Flex justifyContent="space-between" alignItems="center" px={1}>
        <Text fontSize="2xl" color="gray.700">
          <strong>My Listings</strong>
        </Text>
        <Button
          bg="blue.600"
          color="white"
          fontSize={25}
          sx={{
            '&:hover, &:active': {
              backgroundColor: 'blue.500',
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

export default AddListing;
