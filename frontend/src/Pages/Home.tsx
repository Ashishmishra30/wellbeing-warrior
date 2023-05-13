
import React, { Fragment } from 'react'

import {
  chakra,
  Container,
  Stack,
  HStack,
  Text,
  useColorModeValue,
  Button,
  Image,
  Skeleton,
  Box,
  Link,
  Icon,
  Avatar,
  List,
  ListItem,
  ListIcon,
  Flex
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { GoChevronRight } from 'react-icons/go';
import { MdBolt } from 'react-icons/md';
import { Navbar } from '../component/Navbar'
import { ImQuotesLeft } from 'react-icons/im';
import {Footer} from '../component/Footer';
import Milestones from '../component/Timeline';


import Bmi from './BmiCalculator/Bmi';


// nhi krna
const Home = () => {
  return (
    <div>

       
        
        <Container maxW="6xl" px={{ base: 6, md: 3 }} py={24}>
      <Stack direction={{ base: 'column', md: 'row' }} justifyContent="center">
        <Stack direction="column" spacing={6} justifyContent="center" maxW="480px">
          <HStack
            as={Link}
            p={1}
            rounded="full"
            fontSize="sm"
            w="max-content"
            bg={useColorModeValue('gray.300', 'gray.700')}
          >
           
           
          </HStack>
          <chakra.h1 fontSize="5xl" lineHeight={1} fontWeight="bold" textAlign="left">
            Stay Fit Feel Fit <br />
            <chakra.span color="#EF9A9A">with WW</chakra.span>
          </chakra.h1>
          <Text
            fontSize="1.2rem"
            textAlign="left"
            lineHeight="1.375"
            fontWeight="400"
            color="gray.500"
          >
            Wellbeing Warriors provides the best Guidance. Focus on your Health, Stay Healthy.
          </Text>
          <HStack
            spacing={{ base: 0, sm: 2 }}
            mb={{ base: '3rem !important', sm: 0 }}
            flexWrap="wrap"
          >
            <chakra.button
              w={{ base: '100%', sm: 'auto' }}
              h={12}
              px={6}
              color="white"
             
              rounded="md"
              mb={{ base: 2, sm: 0 }}
              zIndex={5}
              lineHeight={1}
              bgGradient="linear(to-l, #673AB7,#B39DDB)"
              _hover={{ bgGradient: 'linear(to-l, #BA68C8,#2563eb)', opacity: 0.9 }}
            >
              <chakra.span> Get Started </chakra.span>
              <Icon as={MdBolt} h={4} w={4} ml={1} />
            </chakra.button>
            
          </HStack>
        </Stack>
        <Box ml={{ base: 0, md: 5 }} pos="relative">
          <DottedBox />
          <Image
            w="100%"
            h="100%"
            // size="2xl"
            minW={{ base: 'auto', md: '30rem' ,lg:'2xl'}}
            objectFit="cover"
            src={`https://swaay.com/api/v1/attachments/739ebf8a-8695-480b-afad-919f106033a1`}
            rounded="md"
            fallback={<Skeleton />}
          />
        </Box>
      </Stack>
    </Container>
    <Container maxW="5xl" p={{ base: 5, md: 8 }}>
      {testimonials.map((obj, index) => (
        <Fragment key={index}>
          <Stack
            direction={{ base: 'column', sm: 'row' }}
            bgGradient="linear(to-br, #B2EBF2, #673AB7)"
            spacing={{ base: 0, sm: 10 }}
            p={{ base: 4, sm: 10 }}
            rounded="lg"
            justify="center"
          >
            <Box width="30rem" pos="relative" >
              <Image
                
                pos="absolute"
                rounded="lg"
                src={obj.image}
                top="-3.8rem"
                boxShadow="lg"
              />
            </Box>

            <Stack direction="column" spacing={4} textAlign="left" maxW="4xl">
              <Icon as={ImQuotesLeft} w={10} h={10} color="gray.700" />
              <Text fontSize="md" fontWeight="medium">
                {obj.content}
              </Text>
              <Stack alignItems={{ base: 'center', sm: 'flex-start' }} spacing={0}>
                <Avatar
                  size="xl"
                  showBorder={true}
                  borderColor="pink"
                  name="avatar"
                  src={obj.image}
                 
                />
                <Text fontWeight="bold" fontSize="lg">
                  {obj.name}
                </Text>
                <Text fontWeight="medium" fontSize="sm" color="gray.600">
                  {obj.position}, {obj.company}
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Fragment>
      ))}
    </Container>
    <Container maxW="5xl" p={{ base: 5, md: 10 }} mt={'70px'}>
      <Flex
        boxShadow={useColorModeValue(
          '0 4px 6px rgba(160, 174, 192, 0.6)',
          '0 4px 6px rgba(9, 17, 28, 0.9)'
        )}
        backgroundSize="cover"
        backgroundImage={`url(${data.image})`}
        p={{ base: 4, sm: 8 }}
        rounded="lg"
      >
        <Stack direction="column" spacing={5} textAlign="left" flexGrow={3}>
          <chakra.h1 fontSize="4xl" lineHeight={1.2} fontWeight="bold">
            {data.heading}
          </chakra.h1>
          <chakra.h1 fontSize="xl" lineHeight={1.2} fontWeight="bold">
            {data.subHeading}
          </chakra.h1>
          <List spacing={3}>
            {data.features.map((feature, index) => (
              <ListItem key={index}>
                <ListIcon  color="green.700" />
                {feature}
              </ListItem>
            ))}
          </List>
          <Link
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            fontSize="md"
            fontWeight="500"
            p={3}
            lineHeight={1.2}
            h={10}
            w="max-content"
            rounded="md"
            textDecoration="none"
            color="white"
            bg="blackAlpha.400"
            shadow="lg"
          >
    Explore More
          </Link>
        </Stack>
      </Flex>
    </Container>
    <Milestones/>
    

       

    </div>
  )
}
interface TestimonialAttributes {
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
}

const testimonials: TestimonialAttributes[] = [
  {
    name: 'Muhammad Ali',
    position: ' professional boxer',
    
    company: 'American',
    image:
      'https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F673ff926-a537-11e7-9cc3-a3b3c6cd90b8.jpg?crop=1571%2C2356%2C999%2C399',
    content:
      'I hated every minute of Training, but I said, do not quit. Suffer now and live the rest of you life as a Champion'
  }
];

const data = {
  heading: 'Be fit with us',
  subHeading: 'Check your BMI. Plan accordingly.',
  features: ['Follow A Great diet plan, Make your diet healthy',"Choose Workout as per your Need"],
  image:
    'https://images.unsplash.com/photo-1508615039623-a25605d2b022?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&auto=format&fit=crop&w=334&q=80'
};
interface DottedBoxProps {}

const DottedBox: React.FC<DottedBoxProps> = () => {
  return (
    <Box position="absolute" left="-45px" top="-30px" height="full" maxW="700px" zIndex={-1}>
      <svg
        color={useColorModeValue('rgba(55,65,81, 0.1)', 'rgba(55,65,81, 0.7)')}
        width="350"
        height="420"
        fill="none"
      >
        <defs>
          <pattern
            id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
            x="0"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect x="0" y="0" width="4" height="4" fill="currentColor"></rect>
          </pattern>
        </defs>
        <rect width="404" height="404" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"></rect>
      </svg>
    </Box>
   
  );
};

export default Home


