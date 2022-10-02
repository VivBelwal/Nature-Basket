import { useContext, useEffect } from "react";
import { CartHover } from "../Contexts/CartHover";
import { Box,Image,Text,Button ,Flex,HStack,ModalCloseButton} from "@chakra-ui/react";
import {SmallCloseIcon} from "@chakra-ui/icons"
import { useState } from "react";
import Footer from "../Components/Footer";
export default function Cart (){
  const {cart,setCart} = useContext(CartHover);
  const [count , setCount] =  useState(0);
  const [total , setTotal] = useState(0);

  let num = cart.length;
  console.log("cart")
  const handleDel = (item,i)=>{
      cart.splice(i,1)
      setCount(count +1 )
  }
  useEffect(()=>{
    let sum=0
    for(let i=0;i<cart.length;i++){
      sum += Number(cart[i].search_PSellingP)
    }
     setTotal(sum)
  },[count])
  return <>
    <Box px='2.5vw'>
            <Image  
            src='https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/40ffdf36-959e-49f1-9c5c-e43639e69a01.png?v=2' 
            alt='handPicked'
            borderRadius='10'/>
        </Box>
        <Flex justifyContent = {'space-between'} px='2.5vw' mt='3vw' borderBottom={'1px solid grey'} mr='2.5vw' ml='2.5vw' >
          <Text>MY CART {`${num} (ITEMS)`}</Text>
          <Box mb='2vw'>
            <Button border='1px solid #83B74C' mr='0.5vw'>CONTINUE SHOPPING</Button>
            <Button bg='#83B74C' _hover={{bg:'green.500'}} color='white' >PROCEED TO CHECKOUT</Button>
          </Box>
        </Flex>
        <Text color='#B61671'>GET YOUR ORDER DELIVERED TODAY .</Text>
        <Flex borderBottom={'1px solid #83B74C'} gap='44%' px='2.5vw' mt='3vw' mr='2.5vw' ml='2.5vw'> 
          <Text>Name</Text>
          <HStack justifyContent={'space-evenly'} spacing='6vw' mr='10vw'>
            <Text>Price</Text>
            <Text>Discount</Text>
            <Text>Qty</Text>
            <Text>Sub-Total</Text>
          </HStack>
        </Flex>

        <Box borderBottom={'1px solid black'}  px='2.5vw' mt='3vw' mr='2.5vw' ml='2.5vw' >
          <Text textAlign={'start'}>FRUITS & VEGETABLES</Text>
        </Box>


        <Box   mt='3vw' mr='2.5vw' ml='2.5vw' border='1px solid grey'>
    {cart?.map((el,i)=>(
       
     (i==0||i==2) ?   <Flex justifyContent={'space-evenly'} bg='#FED7D7' >
             <Image src={el['linkdisabled src']}  w='4vw' pt='1vw' pb='1vw'
 alt={el.search_Ptitle} />
  <Text mt='2vw'>{el.search_Ptitle}</Text>
  <Text  mt='2vw'>₹ {el.search_PSellingP}</Text>
  <Text  mt='2vw'>₹ 0.00</Text>
  <Text  mt='2vw'>1</Text>
  <Text  mt='2vw'>₹ {el.search_PSellingP}</Text>
  <Button onClick={()=>handleDel(el,i)}  mt='2vw'><SmallCloseIcon  /></Button>
  

  
        </Flex> : <Flex justifyContent={'space-evenly'} bg='#C6F6D5' >
             <Image src={el['linkdisabled src']}  w='4vw' pt='1vw' pb='1vw'
 alt={el.search_Ptitle} />
  <Text mt='2vw'>{el.search_Ptitle}</Text>
  <Text  mt='2vw'>₹ {el.search_PSellingP}</Text>
  <Text  mt='2vw'>₹ 0.00</Text>
  <Text  mt='2vw'>1</Text>
  <Text  mt='2vw'>₹ {el.search_PSellingP}</Text>
  <Button onClick={()=>handleDel(el,i)}  mt='2vw'><SmallCloseIcon  /></Button>
  

  
        </Flex>
        
    ))}


  </Box>

  <Text color='#1A365D' fontSize={'25px'} mb="10vw">Total : ₹{total}</Text>
  <Footer />
  </> 
    
}