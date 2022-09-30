
import {Collapse,Box,useDisclosure, Button, Text,Image, Divider} from "@chakra-ui/react";
import {CartHover} from "../Contexts/CartHover";
import {useContext} from "react";



function CollapseEx(props) {
    const {hover} = useContext(CartHover);
    const {val} = props;
    console.log(val)
    const { isOpen, onToggle } = useDisclosure()
    if(val){
        onToggle()
    }
  
    return (
      <Box>
        
        <Collapse in={hover} animateOpacity>
          <Box
            w="50vw"
            color='white'
            mt='4'
            bg='teal.500'
            rounded='md'
            shadow='md'
            p='1vw'
          >
            <Image 
            src="https://d1z88p83zuviay.cloudfront.net/Images/Icon-no-cart.png" 
            alt="Cart"
            m='auto'
            w='10vw' />
            <Text textAlign={"center"} mt="5px" fontSize={'1.5vw'} >No products added to your cart.</Text>
            <Button bgColor={"#83B74C"} mt="5px" mb="5px">Continue Shopping</Button>
            <Divider size={"5px"}/>
            <Text color={"purple"} fontSize={'1.5vw'}>HAND-PICKED OFFERS JUST FOR YOU</Text>

          </Box>
        </Collapse>
      </Box>
    )
  }

  export default CollapseEx

  export const shopDrop = ()=>{
    
    return  
  }


 

