import React  from 'react'
import {useState} from 'react'
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
  import toast, { Toaster } from 'react-hot-toast';
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
    Input,
useDisclosure
  } from '@chakra-ui/react'
  import {BsPlusCircle} from 'react-icons/bs'
  import {useContext} from 'react'
import { AuthContext } from "../Context/Context";
  
const But = () => {
    const {State,getQut}=useContext(AuthContext)
    const[mill,setmill]=useState('')
    const[food,setfood]=useState('')
    const[Qut,setQut]=useState('')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
         
//    const getqut=()=>{
        
//         return Qut
//     }
    console.log("ooo",State)
  return (
    <>
    <Toaster/>
<Box w='100%'  paddingLeft='20px' paddingTop='20px' ><Box _hover={{  transform: "scale(1.2)", transition: "all .3s", cursor: "pointer" }} onClick={onOpen}><BsPlusCircle size={120} color='#F1C40F'/></Box><Text ml='-15%' color='#F1C40F'mt="25px" fontSize={20} fontWeight={500}>Add Food</Text></Box>        <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        
      >
        <ModalOverlay backdropFilter='blur(10px)'  />
        <ModalContent>
          <ModalHeader>Your Food Status</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={10}>
            <FormControl >
            <select onChange={(e)=>setmill(e.target.value)} value={mill}  style={{width:'100%',fontSize:'20px',paddingLeft:"20px"}}>
                <option value="">Select Meal</option>
                <option value="Dinner">Dinner</option>
                <option value="Lunch">Lunch</option>
                <option value="Breakfast">Breakfast</option>
                <option value="snacks">snacks</option>
            </select>
              <select onChange={(e)=>setfood(e.target.value)} value={food}    style={{width:'100%',fontSize:'20px',paddingLeft:"20px",marginTop:"30px"}}>
                <option value="">Select Food</option>
                <option value="Chapati">Chapati</option>
                <option value="Rice">Rice</option>
                <option value="Vegetables">Vegetables</option>
                        <option value="Fruits">Fruits</option>
                <option value="Protein">Protein</option>
            </select>
            </FormControl>

            <FormControl  w='95%' margin='auto'>
            
              <Input mt='30px' onChange={(e)=>setQut(e.target.value)} value={Qut}    placeholder='Quantity' paddingLeft={'20px'} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button onClick={()=>{
                onClose()
                setQut('')
                setmill('')
                setfood('')
                getQut(Qut,food)
             
                toast.success("Saved..!!")
                console.log(mill,food,Qut)
                }}    colorScheme='blue' mr={3}>
              Save
            </Button>
            <Button onClick={()=>{
                onClose()
                toast.error("Cancled")
            }}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default But
