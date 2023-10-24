import React from 'react';
import { ChakraProvider, Box, Icon } from '@chakra-ui/react';
import { IoPersonCircleOutline } from 'react-icons/io5';

const IconPerson = () => {
  return (
    <ChakraProvider>
      <Box>
        <Icon as={IoPersonCircleOutline} boxSize={12} color='#ECECEC' />
      </Box>
    </ChakraProvider>
  );
};

export default IconPerson;