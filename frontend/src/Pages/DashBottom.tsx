import React from 'react'
import {FaHeart} from 'react-icons/fa'
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
    Image,
    Heading,
    SimpleGrid,
    Center
  } from '@chakra-ui/react'
const Dash3 = () => {
  return (
    <>
      <Box w="100%" h="auto">
      <SimpleGrid margin="auto" columns={{ sm: 1, md: 2, lg:2 }} p="50px" >
<Box w="100%"   _hover={{cursor: "pointer" }}><Image p="20px" w="100%" src="https://x207l.csb.app/images/section5.png"/></Box>
<Box w="100%"  p="20px"  _hover={{cursor: "pointer" }}>
    <Heading textAlign="left"  color='#373636'
   >We Will Take Care Of Your Fitness Goals</Heading>
  <Box w="75%" p="20px">
  <Box display="flex" gap="10px" alignItems="center" mt="50px"><FaHeart color={"#E71D3F"}/><Heading color='#373636' fontSize={20}>We will take care of your fitness goals</Heading></Box>
<Text mt="10px" ml="20px" textAlign="left" color="gray" fontWeight={400}>amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. track your daily habits</Text>
<Box display="flex" gap="10px" alignItems="center" mt="50px"><FaHeart color={"#E71D3F"}/><Heading color='#373636' fontSize={20}>Track your daily habits with water</Heading></Box>
<Text mt="10px" ml="20px" textAlign="left" color="gray" fontWeight={400}>amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. track your daily habits</Text>
<Box display="flex" gap="10px" alignItems="center" mt="50px"><FaHeart color={"#E71D3F"}/><Heading color='#373636' font-style='normal' fontSize={20}> Track your weight and waist</Heading></Box>
<Text mt="10px" ml="20px" textAlign="left" color="gray" fontWeight={400}>amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. track your daily habits</Text>
  </Box>
  
   
</Box>
</SimpleGrid>
      </Box>
    </>
  )
}

export default Dash3
