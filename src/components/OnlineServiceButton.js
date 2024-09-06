import React from 'react';
import { Button, HStack, Text, Link, Icon, useBreakpointValue } from '@chakra-ui/react';
import { Camera } from 'lucide-react';

const OnlineServiceButton = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Button
      as={Link}
      href="https://us06web.zoom.us/j/5473346643"
      isExternal
      width="full"
     marginTop={10}
      height="60px"
      borderRadius="full"
      bg="white"
      border="2px solid"
      borderColor="blue.600"
      _hover={{ bg: 'blue.50' }}
      _active={{ bg: 'blue.100' }}
      px={{ base: 2, md: 4 }} // Responsive padding
      py={{ base: 2, md: 3 }} // Responsive padding
    >
      <HStack
        width="100%"
        justifyContent="space-between"
        spacing={{ base: 2, md: 4 }} // Responsive spacing
      >
        {!isMobile && (
          <HStack spacing={{ base: 2, md: 3 }} align="center">
            <Icon as={Camera} color="blue.500" boxSize={{ base: 5, md: 6 }} />
            <Text color="blue.600" fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }}>
              for online weekly service
            </Text>
          </HStack>
        )}
        <Text
          bg="blue.600"
          color="white"
          width={'50%'}
          py={{ base: 1, md: 3 }} // Responsive padding
          px={{ base: 2, md: 4 }} // Responsive padding
          borderRadius="full"
          fontSize={{ base: 'xs', md: 'sm' }} // Responsive font size
          textAlign="center"
        >
          https://us06web.zoom.us/j/5473346643
        </Text>
      </HStack>
    </Button>
  );
};

export default OnlineServiceButton;
