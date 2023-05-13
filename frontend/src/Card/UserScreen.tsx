import * as React from 'react';
import {
  Box,
  Text,
  Heading,
  Flex,
  Avatar,
  Link,
  VStack,
  IconButton,
  Divider,
  Button,
  Fade
} from '@chakra-ui/react';
import {BsFillBarChartFill} from 'react-icons/bs'
import { siteConfig } from './SideScreen';
// Here we have used framer-motion package for animations
import { motion } from 'framer-motion';

const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const MainScreen = () => {
  return (
    <VStack spacing={5}>
      <motion.div whileHover={{ y: -5, scale: 1.1 }}>
        <Box boxShadow="xl" _hover={{ boxShadow: 'lg' }} borderRadius="full">
          <Avatar
            _groupHover={{ width: '5rem', height: '5rem' }}
            size="xl"
            src="https://avatars2.githubusercontent.com/u/37842853?v=4"
          />
        </Box>
      </motion.div>
      <Heading fontSize="xl" fontFamily="body" textTransform="capitalize" noOfLines={2}>
       Gaurav Pardeshi
      </Heading>
      <Text
        color="gray.500"
        fontSize="md"
        noOfLines={{ base: 3, md: 4 }}
        _groupHover={{ display: 'none' }}
        display="flex"
        gap="5px"
      >
      <Box><Text>Following</Text>
      <Text fontWeight={500}>0</Text></Box>
      <Box><Text>Followers</Text>
      <Text fontWeight={500}>0</Text></Box>
      <Box><Text>Activites</Text>
      <Text fontWeight={500}>0</Text></Box>
      </Text>
     
      <Fade in>
        <Button
          color="gray.500"
          fontSize="lg"
          noOfLines={{ base: 3, md: 4 }}
          _groupHover={{ display: 'block' }}
          display="none"
          _hover={{ bg: '#1499DB',color:"white", transform: "scale(1.1)", transition: "all .5s",}}
        >
        LET'S START
        </Button>
      </Fade>
      <Box borderTop="1px solid gray">
        <Text color="#F7531B " fontSize={15} mt="10px" ml="10px"  textAlign="left">Add your Activity</Text>
        <Text fontSize={15}  ml="10px" textAlign="left">Learn how to record or upload an activity to Platform.</Text>
      </Box>
      <Divider />
      <Text fontWeight={600}>This Week</Text>
      <Box display='flex' gap='15px'>
       <Text fontWeight={500}>S</Text>
       <Text fontWeight={500}>M</Text>
       <Text fontWeight={500}>T</Text>
       <Text fontWeight={500}>W</Text>
       <Text fontWeight={500}>T</Text>
       <Text fontWeight={500}>F</Text>
       <Text color='orange' fontWeight={500}>S</Text>

      </Box>
      <BsFillBarChartFill color='green' size={60}/>
      <Flex alignItems="center" justify="center" w="100%">
       
      </Flex>
    </VStack>
  );
};

export default MainScreen;