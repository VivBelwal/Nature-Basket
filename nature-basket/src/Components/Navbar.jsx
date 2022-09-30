import React from "react";
import {Box,Container, Flex,Image, 
    Input,Button,Text,Divider,Center,HStack,
 InputGroup,InputRightAddon,InputLeftAddon} from "@chakra-ui/react";
    import {StarIcon,SearchIcon,   ChevronDownIcon , EditIcon} from "@chakra-ui/icons";
    import { NavLink } from "react-router-dom";
    
    import {
        useDisclosure,
        MenuItem,
        Menu,
        MenuButton,
        MenuList,
    } from "@chakra-ui/react"
    // import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

    import CollapseEx from "./Dropdowns";
    import {CartHover} from "../Contexts/CartHover";
    import {useContext} from "react";
  

function Navbar (){
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {setHover} = useContext(CartHover);
    const TrendingSearches = ['Trending Searches',
       ' Organic',
       ' Fresh Artisinal Breads',
       ' Cold cuts & Seafood',
       ' Diabetic Friendly Foods',
       ' L’Exclusif',
        'Healthy Alternatives',
        'Birthdays & Anniversary Gift Hampers',
       ' Platters & Dips',
        'Smoked Cheese',
        'Ice creams & Desserts',
        'Keto-Paleo']
        const navTop = {xl:"block",base:"none"};
    return <Box 
    border={"1px solid red"}
    width={"100%"}>
        <Flex justifyContent="space-around">
        <Box>
         <NavLink to='/'><Image 
         src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2"
          alt="Nature basket"
           /></NavLink>
         

        </Box>
        
        <Box w = "70%" mt="5px">

            <Flex w="100%" justifyContent={"space-around"} mb="5px" >
             
            <HStack spacing='1vw' ml={"1vw"}  >
            {/* display={{xl:"flex", md:"none", base:"none"}} */}
            <Box display={navTop}>
                    
                    <Text fontSize='1vw'>Online Slots Availability </Text>
                
            </Box>
            <Divider orientation='vertical'   h="2" display={navTop}   />

                <Box display={navTop}>
                    <Text fontSize={'xs'}>Fresh & Fast</Text>
                    
                </Box>
                <Divider orientation='vertical'   h="2" display={navTop} />
                <Box>
                <Text fontSize={'xs'} display={navTop} >Store Locator</Text>
                
                </Box>
                <Divider orientation='vertical' h="2" display={navTop}  />
                <Box>
                <Text fontSize={'xs'} display={navTop} >Contact Us</Text>
               
                </Box>
                <Divider orientation='vertical' h="2" display={navTop}   />
                <Flex gap="2vw">
             
                 <Flex>
                 <Text fontSize={{base: '10px', md: '15px', lg: '20px',xl:'xs' }} mt={{lg:"0px",md:"0px",sm:"5px",base:"5px",xl:"2px"}}> Mumbai </Text>
                <ChevronDownIcon mt="5px"/>
                </Flex>             
          <InputGroup size='0.2vw'>
  
  <Input placeholder='Enter PIN code' 
   />
  <InputLeftAddon bg="#83B74C" children={ <EditIcon /> }/>
</InputGroup>
                </Flex>
            </HStack>

                
            <Box><Text fontSize={{base: '10px', md: '15px', lg: '20px',xl:'xs' }} mt={{lg:"0px",md:"0px",sm:"5px",base:"5px",xl:"2px"}}>Login/Register</Text></Box>
                

                
            </Flex>

            

            <Flex justifyContent={"space-between"}>
            <InputGroup w='85%'>
  
    <Input placeholder='Start shopping...' 
     onMouseEnter={onOpen}
     onMouseLeave={onClose}/>
    <InputRightAddon bg="#83B74C" children={<SearchIcon color="white"  />   }/>
  </InputGroup>

                

                <Menu isOpen={isOpen}
               >
          
            <Box  
            pos='absolute'
            top= '20'
           
           
            >
            <MenuList 
            onMouseEnter={onOpen} 
            onMouseLeave={onClose}
            w='55vw'
             
            >
                {TrendingSearches.map((el,i)=>(
                    i==0 ? <Text textAlign={"center"} color="purple" fontSize={"2vw"}>{el}</Text> : <Text textAlign={"center"} color="black">{el}</Text>
                 
                      
                ))}
              
                

            </MenuList>
            </Box>
          
        </Menu>  
                

               <StarIcon color={"#83B74C"} boxSize="6" mt="5px"/>          

               <Divider orientation='vertical' h="7" mt="5px"  />
               
                <Box 
                 onMouseEnter={()=> setHover(true)}
                 onMouseLeave={()=> setHover(false)}
                //  _hover={<CollapseEx val={true}/>}
                 border="1px solid red"
                 w="2vw"
                 mt="5px"
                >
                <Image src="https://cdn-user-icons.flaticon.com/80433/80433099/1664360942914.svg?token=exp=1664361850~hmac=cb966b3d0dda4945d85d08ba63135e9c" 
               alt="cart" htmlWidth={"30"}/> 
                    </Box>
                    
                <Box pos='absolute'
                top="5.5vw"
                right={"1vw"}
                zIndex='2'>
                <CollapseEx />
                </Box>
            </Flex>
        </Box>

        </Flex>
        <Box>
            
        </Box>
    </Box>
}

export default Navbar 


//useColorModeValue("gray.100", "gray.700") 