import React from 'react'
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
    Center,
    Heading,
    Image,SimpleGrid
  } from '@chakra-ui/react'
  import { useDisclosure } from "@chakra-ui/react"
import WithLabelExample from './Percentage'
import {BsPlusCircleFill,BsPlusCircle} from "react-icons/bs"
import { Circle,Line } from 'rc-progress';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input
  } from '@chakra-ui/react'
  import toast, { Toaster } from 'react-hot-toast';
import {
    CircularProgressbar,
   
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";
  import {useState} from 'react'
import { log } from 'console'
const Dashboard2 = () => {
const[num,setnum]=useState('')
const[type,settype]=useState('')
const[status,setstatus]=useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

   console.log("num",status)
  return (
    <>
    <Toaster/>
        <Box w="100%" 
        h='auto'

        >
        <SimpleGrid margin="auto" columns={{ sm: 1, md: 2, lg:2 }}  >
            <Box w="100%"  h="auto">
<Box w="80%" margin="auto" bg="#F0A643" h="20%" borderRadius={"10px"} mt="40px" display="flex" alignItems="center" paddingLeft="10%">
<Heading color="#F4F6F7">Remaing Calories :</Heading>
<Heading color="#F4F6F7">1680</Heading>
</Box>

<Box w="50%" margin="auto" mt="20px" gap="20px"  >
<SimpleGrid margin="auto" columns={{ sm: 1, md: 2, lg:2 }}  >
    <Box  w='100%' paddingLeft='20px' paddingTop='20px' ><Box _hover={{  transform: "scale(1.2)", transition: "all .3s", cursor: "pointer" }} onClick={onOpen}><BsPlusCircle  size={120} color='#45B39D'  /></Box><Text ml='-15%' color='#45B39D' mt="25px" fontSize={20} fontWeight={500}>Add Exercise</Text></Box>
    <Box w='100%'  paddingLeft='20px' paddingTop='20px' ><Box _hover={{  transform: "scale(1.2)", transition: "all .3s", cursor: "pointer" }} ><BsPlusCircle size={120} color='#F1C40F'/></Box><Text ml='-15%' color='#F1C40F'mt="25px" fontSize={20} fontWeight={500}>Add Food</Text></Box>
   

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        
      >
        <ModalOverlay backdropFilter='blur(10px)'  />
        <ModalContent>
          <ModalHeader>Your Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10}>
            <FormControl >
            
              <select onChange={(e)=>settype(e.target.value)} value={type}  style={{width:'100%',fontSize:'20px',paddingLeft:"20px"}}>
                <option value="">Select Exercise</option>
                <option value="push up">push up</option>
                <option value="pull up">pull up</option>
                <option value="jumping">jumping</option>
                <option value="squats">squats</option>
            </select>
            </FormControl>

            <FormControl  w='95%' margin='auto'>
            
              <Input mt='30px' onChange={(e)=>setnum(e.target.value)} value={num}  placeholder='Number of Repetition' paddingLeft={'20px'} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={()=>{toast.success("Saved..!!")
                onClose()
                setstatus(!status)
            }}  colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={()=>{
                onClose()
                toast.error("Not Added")
            }}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
</SimpleGrid>

</Box>
<Box w='100%'  margin='auto' h='200px' bg='#EBEDEF' mt='50px' >
    <Box w="85%" margin='auto'  h="60%" borderBottom='1px solid gray'    alignItems="center" >
        <Box display='flex'  justifyContent='space-evenly' bg='#FADBD8' gap='40px' >
        <Text color='#566573' fontSize={22} fontWeight={600}>Goal </Text>
        <Text color='#566573' fontSize={22} fontWeight={600}>Food </Text>
        <Text color='#566573' fontSize={22} fontWeight={600}>-</Text>
        <Text color='#566573' fontSize={22} fontWeight={600}>Exercise </Text>
        <Text color='#566573' fontSize={22} fontWeight={600}>=</Text>
        <Text color='#566573' fontSize={22} fontWeight={600}>Net </Text>
        </Box>
        <Box mt='15px' display='flex'  justifyContent='space-evenly' bg='#FADBD8' gap='40px' >
        <Text color='#566573' fontSize={22} fontWeight={600}>{status && type}</Text>
        <Text color='#566573' fontSize={22} fontWeight={600}>0</Text>
        <Text color='#566573' fontSize={22} fontWeight={600}></Text>
        <Text color='#566573' fontSize={22} fontWeight={600}>{status? +num*10:0}</Text>
        <Text color='#566573' fontSize={22} fontWeight={600}></Text>
        <Text color='#566573' fontSize={22} fontWeight={600}>{status? +num*10:0}</Text>
        </Box>
        
    </Box>
<Box  p="20px 50px" color='#566573'> <Line percent={40} strokeWidth={3} strokeColor="green" trailColor='gray' /><Text fontSize={25} fontWeight={600}>40%</Text></Box>
</Box>

{/* <Box ml="35%" mt="0px" w="20%"   borderRadius='50%'>   <CircularProgressbar value={50} text={`${50}%`} /></Box> */}

            </Box>
            <Box w="100%" ><Image p="60px" w='90%' h='94%' src="https://promo-theme.com/woxfit/wp-content/uploads/2023/01/fitness-slide-img-1.png"/>
            <Text mt='-38.455%' h='200px' bg='#EBEDEF'></Text>
            
            </Box>
      </SimpleGrid>
        </Box>
    </>
  )
}

export default Dashboard2

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