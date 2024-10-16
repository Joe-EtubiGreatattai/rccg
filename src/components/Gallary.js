import React from 'react';
import { Box, Heading, Text, SimpleGrid, Image, VStack } from '@chakra-ui/react';

const GalleryItem = ({ imageSrc, date }) => (
  <Box
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    position="relative"
    _hover={{ transform: 'scale(1.05)', transition: 'transform 0.3s ease-in-out' }} // Scale effect on hover
    transition="transform 0.3s ease-in-out"
  >
    {/* Full-width image with bottom margin */}
    <Image 
      src={imageSrc} 
      alt="Gallery image" 
      width="100%" 
      height="auto" 
      objectFit="cover" 
    />

    {/* Date container with blur background and space from bottom */}
    <Box
      position="absolute"
      bottom={4} 
      width="90%" 
      left="50%" 
      transform="translateX(-50%)"
      textAlign="center"
      bg="rgba(0, 0, 0, 0.6)"
      backdropFilter="blur(10px)"
      color="white"
      p={2}
      borderRadius="md"
    >
      <Text fontWeight="bold">{date}</Text>
    </Box>
  </Box>
);

const Gallery = ({ galleryData }) => {
  return (
    <VStack spacing={8} align="stretch" p={8}>
      <Heading as="h1" size="2xl" textAlign="center" color="blue.800">
        Gallery
      </Heading>
    
      
      {/* Center the grid */}
      <Box display="flex" justifyContent="center">
        <SimpleGrid columns={[1, 2, 3]} spacing={6} maxW="1200px" mx="auto">
          {galleryData.map((item, index) => (
            <GalleryItem 
              key={index} 
              imageSrc={item.imageSrc}
              date={item.date}
            />
          ))}
        </SimpleGrid>
      </Box>
    </VStack>
  );
};

// Example usage of Gallery component
const imagesArray = [
  { imageSrc: require('./../image/WhatsApp Image 2024-08-07 at 13.03.26_7704f891 1.png'), date: '20th Jan 2024' },
  { imageSrc: require('./../image/past.png'), date: '1st Sept 2024' },
  // Add more images and dates here
];

export default function App() {
  return <Gallery galleryData={imagesArray} />;
}
