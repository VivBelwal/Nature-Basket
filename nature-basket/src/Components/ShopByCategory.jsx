import { HStack,Box,Text,Flex,Divider, VStack} from "@chakra-ui/react";
import {TriangleDownIcon,ChevronRightIcon} from '@chakra-ui/icons'
import { shopDrop } from "./Dropdowns";
import {
    useDisclosure,
    MenuItem,
    Menu,
    MenuButton,
    MenuList,
  } from "@chakra-ui/react"
import { Navigate,NavLink} from "react-router-dom";
export default function ShopByCategory (){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const shopCato = [
        'Gifting',
        'Fruits & Vegetables',
        'Cheese, Meat & Fruit Platters',
        'Delicatessen & Cheese',
        'International Cuisine',
        'Health',
        'Indian Grocery',
        'Confectionary & Patisserie',
        'Meats, Seafood And Eggs',
        'Snack Bar',
        'Snacks & Beverages',
        'Breakfast, Dairy & Bakery',
        'Instant Meals & Aids',
        'The Good Food Cafe',
        'Packing Material'
    ]

    const handleClick = (text)=>{

      
       <Navigate to='/fruitsAndVege' />
      

    }
    return (
        <Box w="100%" pr="2.5vw" pl="2.5vw"  >
 <HStack borderRadius={'5px'}  border='1px solid grey' justifyContent={'space-between'}>
          <Box display={'flex'}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
            <Box bg="RGBA(0, 0, 0, 0.16)"   p='0.5vw'> <Text   color='#B61671'>SHOP BY CATEGORY</Text>
           </Box>
            <TriangleDownIcon mt='0.8vw' />

          </Box>
        
          <Box _hover={{bg:"RGBA(0, 0, 0, 0.16)"}} p='0.5vw'>
            <Text >MY ORDERS</Text>
          </Box>
          <Box _hover={{bg:"RGBA(0, 0, 0, 0.16)"}} p='0.5vw'>
            <Text>GIFTING</Text>
          </Box>
          <Box _hover={{bg:"RGBA(0, 0, 0, 0.16)"}} p='0.5vw'>
            <Text>REWARDS</Text>
          </Box>
          <Box _hover={{bg:"RGBA(0, 0, 0, 0.16)"}} p='0.5vw'>
            <Text>BLOG</Text>
          </Box>
          <Box _hover={{bg:"RGBA(0, 0, 0, 0.16)"}} p='0.5vw'>
            <Text>OFFERS</Text>
          </Box>
          <Box _hover={{bg:"RGBA(0, 0, 0, 0.16)"}} p='0.5vw'>
            <Text>CONNOISSEUR’S SELECTION</Text>
          </Box>
          <Box _hover={{bg:"RGBA(0, 0, 0, 0.16)"}} p='0.5vw'>
            <Text>BOOK STORE VISIT</Text>
          </Box>
         
        
        </HStack>
        <Menu isOpen={isOpen}  pos='absolute'>
  
  <Box  
  pos='absolute'
  top= '20'
  
  zIndex={5}
  >
  <MenuList 
  onMouseEnter={onOpen} 
  onMouseLeave={onClose}
w="20vw"
mt='2vw'
  
  >
     {shopCato.map((el,i)=>(
       
           <Box pt={'0.5vw'}
           pl='0.5vw'
           pr='0.5vw'
           pb={'0.5vw'} 
           
           _hover={{bg:'#83B74C', color:"white"}}>
           <Flex justifyContent={'space-between'} onClick={handleClick(el)}>
            
            <NavLink to='/fruitsAndVege'>{el}</NavLink>
            <ChevronRightIcon />
           </Flex>
           <Divider orientation='horizontal' mt="0.5vw" mr="0.5vw" />
           </Box>
     ))}
   
     
  
  </MenuList>
  </Box>
  
  </Menu>  
        </Box>
       
    )
}
// SHOP BY CATEGORY
