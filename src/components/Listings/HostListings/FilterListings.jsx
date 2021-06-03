import React from 'react';
import { Box, Select, Button } from '@chakra-ui/react';
import { MdList } from 'react-icons/md';

const FilterListings = ({ setOccupancyFilter }) => {
  return (
    <Box
      d="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={10}
      px={1}
    >
      <Select
        w="130px"
        bg="white"
        borderWidth={3}
        boxShadow="sm"
        _focus={{
          borderColor: 'blue.400',
        }}
        onChange={e => {
          setOccupancyFilter(e.target.value);
        }}
      >
        <option value="all_listings">All Listings</option>
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
