import {Box,Image,Flex,Text,Checkbox} from "@chakra-ui/react";


  import React from "react";

export default function FruitsAndVege (){
    
  

    return (<Box>

        <Box px='2vw'>
            <Image  
            src='https://gnbdevcdn.s3.amazonaws.com/Images/Category/Web_Sup_5_F&V.png' 
            alt='handPicked'
            borderRadius='10'/>
        </Box>
       
        <Flex w='100%'>
            <Box w="15%" border={'1px solid red'}>
                <Box display={'flex'} 
                border='1px solid grey'
                borderRadius={'1vw'}>
                    <Text>FILTER</Text>
                    <Text>CLEAR ALL</Text>
                </Box>
                <Box>
                   
                    <Text>Fruits & Vegetables</Text>
                    <Box>
                        <Text>Fruits</Text>
                        <Text>Exotic Fruits</Text>
                        <Text>Daily Vegetables</Text>
                        <Text>Exotic Vegetables</Text>
                        <Text>Baby-Tender Vage..</Text>
                        <Text>Organic</Text>
                        <Text>Canned & Frozen</Text>
                        <Text>Cold-Pressed Fre...</Text>
                        </Box>

                        <Text>Brands</Text>
                        <Box>
                        
                        <Checkbox >Fruits And Veget...</Checkbox>
                        <Checkbox >Fruit & Vegetable</Checkbox>
                        <Checkbox >Healthy Alternat...</Checkbox>
                        <Checkbox >Natures Basket</Checkbox>
                        <Checkbox >Natures Best</Checkbox>
                        <Checkbox >Tong Garden</Checkbox>
                        <Checkbox >Fabbox</Checkbox>
                        <Checkbox >Very</Checkbox>
                        <Checkbox >Spc</Checkbox>
                        <Checkbox >Daucy</Checkbox>
                        <Checkbox >Godrej Nature Ba...</Checkbox>
                        <Checkbox >Vegetables</Checkbox>
                        <Checkbox >American Garden</Checkbox>
                        <Checkbox >Cirio</Checkbox>
                        <Checkbox >Farm2050</Checkbox>
                        <Checkbox >Fnv</Checkbox>
                        </Box>
                        <Text>Deitary & Lifestyle</Text>
                        <Box>
                        <Checkbox >Fat Free</Checkbox>
                        <Checkbox >Gluten Free</Checkbox>
                        <Checkbox >Heart Healthy</Checkbox>
                        <Checkbox >Lactose Free</Checkbox>
                        <Checkbox >Vegetarian</Checkbox>
                        
                        </Box>
                        <Text>Availability</Text>
                        <Box>
                        <Checkbox >Exclude Out Of Stock</Checkbox> 
                        </Box>
                        <Text>Others</Text>
                        <Box>
                        <Checkbox >New Productsk</Checkbox> 
                        </Box>

                </Box>
            </Box>
            <Box w="70%" border={'1px solid red'}></Box>
        </Flex>
  
 
 
      
      
        
 
    </Box>
    )
}