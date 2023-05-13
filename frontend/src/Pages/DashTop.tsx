import * as React from 'react';
import {
  chakra,
  Stack,
  HStack,
  Text,
  Box,
  Flex,
  Link,
  Button,
  Icon,
  useColorModeValue,
  Center
} from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa';

import Card from '../Card/User';
import HeroPage from '../Images/heropage.png'
const HeroSection: React.FC = () => {
  return (
    <Stack
      p={{ base: 5, md: 1 }}
      direction={{ base: 'column', md: 'row' }}
      bgImage={
    HeroPage
       
        
      }
      backgroundSize="800px"
      backgroundPosition="bottom right"
      backgroundRepeat="no-repeat"
      
    >
       
       
     
      <Box>
      <Card/>
      </Box>
      
       
    
      {/* <Box
       
        width="100%"
        height="500px"
     
     
        >
      <Box w="100%" h="250px"   mt="40px" >
<Flex  w="100%" h="20%"   bg="#068181" >
<Center>
<Text color="white" padding-top="50px"  ml="20px" fontWeight={600} fontSize={20}  textAlign={"left"}>
    Your Todays Status</Text>

</Center>


</Flex>
<Flex  w="100%" h="50%"   bg="#C2D2C4" mt="10px">
<Center>
<Text color="white" padding-top="50px"  ml="20px" fontWeight={600} fontSize={20}  textAlign={"left"}>
Calories Remaining</Text>
<Button>
    1680
</Button>

</Center>


</Flex>
<Box  w="100%" h="80%" >
   

</Box>
      </Box>
    
       
        <HStack spacing={{ base: 0, sm: 2 ,lg:10 }} flexWrap="wrap">
          <chakra.button
            h={100}
            w={150}
            px={6}
            color="white"
            fontWeight={500}
            fontSize="lg"
            rounded="md"
            mb={{ base: 2, sm: 0 }}
            zIndex={5}
            lineHeight={1}
            bg="#55A7EF "
            _hover={{ bg: '#1287EF', transform: "scale(1.1)", transition: "all .5s",}}
          >
           Add Exerciese
          </chakra.button>
          <chakra.button
            h={100}
            w={150}
            px={6}
            color="white"
            fontWeight={500}
            fontSize="lg"
            rounded="md"
            mb={{ base: 2, sm: 0 }}
            zIndex={5}
            lineHeight={1}
            bg="orange.400"
            _hover={{ bg: '#EC5800', transform: "scale(1.1)", transition: "all .5s",}}
          >
           Add Food
          </chakra.button>
        </HStack>
      </Box> */}
    
      
    </Stack>
  );
};

export default HeroSection;
