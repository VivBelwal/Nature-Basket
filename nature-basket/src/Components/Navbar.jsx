import React from "react";
import {Box,Container, Flex,Image, 
    Input,Button,Text,
    ChevronDownIcon,InputGroup,InputRightAddon} from "@chakra-ui/react";
    import {StarIcon,SearchIcon} from "@chakra-ui/icons";
    import {
        useDisclosure,
        MenuItem,
        Menu,
        MenuButton,
        MenuList,
    } from "@chakra-ui/react"
    // import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons'

function Navbar (){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return <Box 
    border={"1px solid red"}
    width={"100%"}>
        <Flex justifyContent="space-around">
        <Box>
         
         <Image src="https://www.naturesbasket.co.in/Images/logosnew.png?v=2" alt="Nature basket" />

        </Box>
        
        <Box>

            <Flex >

                <Box>
                    <Text fontSize={'xs'}>Online Slots Availability</Text>
                    </Box>
                <Box>
                    <Text fontSize={'xs'}>Fresh & Fast</Text>
                </Box>
                <Box>
                <Text fontSize={'xs'}>Store Locator</Text>
                </Box>
                <Box>
                <Text fontSize={'xs'}>Contact Us</Text>
                </Box>

                <Flex>
                <Text fontSize={'xs'}>Mumbai </Text>
                <Input 
                 placeholder="PIN" size='xs'/>
                </Flex>

                <Box><Text fontSize={'xs'}>Login/Register</Text></Box>
            </Flex>



            <Flex>
            <InputGroup size='sm'>
  
    <Input placeholder='Start shopping...' 
     onMouseEnter={onOpen}
     onMouseLeave={onClose}/>
    <InputRightAddon bg="#83B74C" children={<SearchIcon color="white"  />   }/>
  </InputGroup>

                

                <Menu isOpen={isOpen}>
            {/* <MenuButton
                variant="ghost"
                mx={1}
                py={[1, 2, 2]}
                px={4}
                borderRadius={5}
                _hover={{ bg: "gray.700"}}
                aria-label="Courses"
                fontWeight="normal"
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
            >
                More 
            </MenuButton> */}
            <Box  
            pos='absolute'
            top= ''>
            <MenuList 
            onMouseEnter={onOpen} 
            onMouseLeave={onClose}
           
            >
                <MenuItem>Menu Item 1</MenuItem>
                <MenuItem>Menu Item 2</MenuItem>
                <MenuItem>Menu Item 3</MenuItem>
            </MenuList>
            </Box>
          
        </Menu>  
                

               <StarIcon color={"#83B74C"} boxSize="6"/>          

               <Image src="https://cdn-user-icons.flaticon.com/80433/80433099/1664360942914.svg?token=exp=1664361850~hmac=cb966b3d0dda4945d85d08ba63135e9c" 
               alt="cart" htmlWidth={"30"}/> 
               
                <Box>
                   
                    </Box>
                <Box></Box>
            </Flex>
        </Box>

        </Flex>
        <Box>
            
        </Box>
    </Box>
}

export default Navbar 


//useColorModeValue("gray.100", "gray.700") 