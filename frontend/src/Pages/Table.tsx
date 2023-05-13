import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/react";
import {useEffect} from 'react'
import {useContext} from 'react'
import { AuthContext } from "../Context/Context";
import { log } from "console";
function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}



export default function BasicTable() {
    const {State,getQut}=useContext(AuthContext)
   console.log("ll5555",State.Qty,State.foodtype)

   const rows = [
    
   State.foodtype=='Chapati'? createData("Chapati", State.Qty*10, State.Qty/4, State.Qty*4, State.Qty*2):createData("Chapati", 0, 0, 0, 0),
   State.foodtype=='Rice'? createData("Rice", State.Qty*10, State.Qty/4, State.Qty*4, State.Qty*2):createData("Rice", 0, 0, 0, 0),
   State.foodtype=='Fruits'? createData("Fruits", State.Qty*10, State.Qty/4, State.Qty*4, State.Qty*2):createData("Food", 0, 0, 0, 0),
   State.foodtype=='Protein'? createData("Protein", State.Qty*10, State.Qty/4, State.Qty*4, State.Qty*2):createData("Protein", 0, 0, 0, 0),
   State.foodtype=='Vegetables'? createData("Vegetables", State.Qty*10, State.Qty/4, State.Qty*4, State.Qty*2):createData("Vegetables", 0, 0, 0, 0)
  ];
    // useEffect(()=>{
    //     getqut()
    // },[])
    
  return (
    <VStack spacing={4} p="20px">
      <Table variant="striped" colorScheme="gray" >
        <Thead>
          <Tr>
            <Th>Dessert (100g serving)</Th>
            <Th isNumeric>Calories</Th>
            <Th isNumeric>Fat&nbsp;(g)</Th>
            <Th isNumeric>Carbs&nbsp;(g)</Th>
            <Th isNumeric>Protein&nbsp;(g)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row) => (
            <Tr key={row.name}>
              <Td>{row.name}</Td>
              <Td isNumeric>{row.calories}</Td>
              <Td isNumeric>{row.fat}</Td>
              <Td isNumeric>{row.carbs}</Td>
              <Td isNumeric>{row.protein}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </VStack>
  );
}