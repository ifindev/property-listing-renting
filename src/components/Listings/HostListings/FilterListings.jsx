import React from 'react';
import { Box, Select, Button } from '@chakra-ui/react';
import { MdList } from 'react-icons/md';

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
        borderWidth={3}
        boxShadow="sm"
        _focus={{
          borderColor: 'purple.600',
        }}
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

export default FilterListings;
