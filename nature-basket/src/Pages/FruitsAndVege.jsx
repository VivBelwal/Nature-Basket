import {Box,Image,Flex,Text,Checkbox,VStack,
     Divider, HStack,Grid,GridItem,Button} from "@chakra-ui/react";
import {ChevronRightIcon,ChevronDownIcon} from "@chakra-ui/icons";
import { CartHover } from "../Contexts/CartHover";
import { Navigate,Link } from "react-router-dom";
  import React from "react";
  import FruitsData from "../fruits.json"
import { useContext } from "react";
import Footer from "../Components/Footer";
export default function FruitsAndVege (){
    const {cart,setCart} = useContext(CartHover)
    const fr = [
        'Fruits',
        'Exotic Fruits',
        'Daily Vegetables',
        'Exotic Vegetables',
        'Baby-Tender Vage..',
        'Organic',
        'Canned & Frozen',
        'Cold-Pressed Fre...'
    ];
    const brands = [
        'Fruits And Veget...',
                       'Fruit & Vegetable',
                        'Healthy Alternat...',
                        'Natures Basket',
                       'Natures Best',
                        'Tong Garden',
                        'Fabbox',
                        'Very',
                        'Spc',
                        'Daucy',
                        'Godrej Nature Ba...',
                        'Vegetables',
                        'American Garden',
                        'Cirio',
                        'Farm2050',
                        'Fnv'
    ];
    const deitary = [
        
                        'Fat Free',
                      'Gluten Free',
                        'Heart Healthy',
                        'Lactose Free',
                   'Vegetarian'
                        
    ]
    
   const addToCart = (item)=>{
    console.log(item)
    item.SearchDropIn1='true'
      setCart(cart=>[...cart,item]);
      alert(`${item.search_Ptitle} Added Successfully`)
       
      

   }

    return (<Box>
 
        <Box px='2vw'>
            <Image  
            src='https://gnbdevcdn.s3.amazonaws.com/Images/Category/Web_Sup_5_F&V.png' 
            alt='handPicked'
            borderRadius='10'/>
        </Box>
       
        <Flex  gap='5' px='2vw' mb='10vw'>
            <Box w="15%" >
                <Box display={'flex'} 
                gap='4vw'
                pl='10px'
             
                border='1px solid grey'
                borderRadius={'2'}>
                    <Text fontSize={'19px'}>FILTER</Text>
                    <Text color='#83B74C' fontSize={'12px'} mt='5px'>CLEAR ALL</Text>
                </Box>
                <Box border='1px solid grey' borderRadius={'5px'} >
                   
                    
                    <Text 
                    fontSize={'14px'} 
                    fontWeight='bold'
                    pt='0.5vh' pb='0.5vh'
                    >Fruits & Vegetables</Text>
                    
                    <Box fontSize={'13px'} 
                    textAlign='start' 
                    color={'#B61671'}
                    pr='1'
                    >
                        {fr.map((el)=>(
                            <Box border='1px solid #B61671'

                            borderRadius={'5'}
                            p='2' mt='2'  _hover={{bg:'#B61671', color:"white"}} cursor='pointer'>
                                <Text pl='4'>
                                    {el}
                                </Text>
                            </Box>
                        ))}
                        </Box>

                        <Text fontSize={'14px'} 
                    fontWeight='bold'
                    pt='0.5vh' pb='0.5vh'>Brands</Text>

                        <VStack  alignItems="start" pl="2vw"  >
                            {brands.map((el)=>(
 <Checkbox border='1px solid #B61671'
 borderRadius={'5'}
 p='2' mt='2'  cursor='pointer'>
     <Text fontSize={'13px'}>{el} </Text>
   </Checkbox>
                            ))}
                        
                       
                       
                        </VStack>
                        <Text fontSize={'14px'} 
                    fontWeight='bold'
                    pt='0.5vh' pb='0.5vh'>Deitary & Lifestyle</Text>
                        <VStack alignItems="start" pl="2vw">
                            {deitary.map((el)=>(
                                 <Checkbox border='1px solid #B61671'
                                 borderRadius={'5'}
                                 p='2' mt='2'  cursor='pointer'>
                                     <Text fontSize={'13px'}>{el} </Text>
                                   </Checkbox>
                            ))}
                      
                        
                        </VStack>
                        <Text fontSize={'14px'} 
                    fontWeight='bold'
                    pt='0.5vh' pb='0.5vh'>Availability</Text>
                        <Box>
                      
                        <Checkbox border='1px solid #B61671'
 borderRadius={'5'}
 p='2' mt='2'  cursor='pointer'>
     <Text fontSize={'13px'}>Exclude Out Of Stock</Text>
   </Checkbox>
                        </Box>
                        <Text fontSize={'14px'} 
                    fontWeight='bold'
                    pt='0.5vh' pb='0.5vh'>Others</Text>
                        <Box>
                       
                        <Checkbox border='1px solid #B61671'
 borderRadius={'5'}
 p='2' mt='2' mb='5' cursor='pointer'>
     <Text fontSize={'13px'}>New Products </Text>
   </Checkbox>
                        </Box>

                </Box>
            </Box>
            <Box w="85%" >
                <HStack ml='1vw' mt='0.5vw'>
                    <Text fontSize={'13px'} color='grey'> <Link to ='/'>Home</Link></Text>
                    <ChevronRightIcon />
                    <Text fontSize={'13px'} color='grey'>Fruits & Vegetables</Text>
                </HStack>

                <HStack ml='1vw' mt='1vw'  justifyContent='space-between'>
                    <HStack>
                    <Text fontSize={'23px'}>FRUITS & VEGETABLES</Text>
                    <Text color='grey'>133 Products</Text>
                    </HStack>

                    <HStack>
                        <Text color='grey'>Relevance</Text>
                        <ChevronDownIcon />
                    </HStack>
                   
                </HStack>
                <Text color="#B61671" pl='1vw' textAlign={'start'} mt='0.5vw'>Fruits And Vegetables</Text>
              
               <Box border='1px solid grey'ml='1vw' mr='1vw' mt='0.5vw' ></Box>
                
                <HStack justifyContent={'space-between'} mr='1vw' mt='2vw'>
                <Text fontSize={'20px'} pl='1vw' textAlign={'start'} >Explore</Text>
                <Box border='1px solid grey' w="86%" ></Box>
                </HStack>
                <Box mt="2vw">
                <Grid
 
  templateRows='repeat(5, 1fr)'
  templateColumns='repeat(4, 1fr)'
  gap={'3vh'}
>
    {FruitsData.map((el)=>(
      
  <Box borderRight={'1px solid grey'} pr='0.5vw' pl='0.5vw' pt='0.5vw'
  _hover={{boxShadow: "#83B74C 5px 5px"}}
  >
  <Image src={el['linkdisabled src']} border='1px solid grey' 
  borderRadius={'10'}
 alt={el.search_Ptitle} />
  <Text mt='1vw'>{el.search_Ptitle}</Text>
  <Text mt='1vw'>{el.search_PSelectedSize}
</Text>
  <Button mb='5vw' mt='1vw'>`MRP' {el.search_PSellingP}</Button>
  <Button mt='1vw' bg='#83B74C' color='white' onClick={()=>addToCart(el)} mb='5vw'>
    Add
     </Button>
</Box>

    ))}
</Grid>
                </Box>
            </Box>
        </Flex>
  
 
 
      
      
        <Footer />
 
    </Box>
    )
}