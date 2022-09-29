import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Grid , GridItem,Image,Box,SimpleGrid,Text,Divider } from "@chakra-ui/react";//ChevronRightIcon
import {ChevronRightIcon} from "@chakra-ui/icons"

export const  ShopByCat = () => {
 const font = {
    sm:'13px'
 }

   return  <Box px={'2vw'}
    mt='2.5vh'>
       <Carousel autoPlay={false}
       infiniteLoop={false}
       >
                  
                  <Grid
  
  templateRows='repeat(1, 1fr)'
  templateColumns='repeat(4, 1fr)'
  gap={4}
>
<GridItem   >
    <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png"alt="hearthealthyfoodsweb" />
    <Text>Heart Healthy Foods</Text>
    <SimpleGrid columns={2} spacing={10} borderBottom="2px solid red">
  <Text>Amaranth Couscous Quinoa</Text>
  <ChevronRightIcon />
  <Text>Flours Rice Condiments</Text>
  <ChevronRightIcon />
  <Text>Seafood Lean Meats</Text>
  <ChevronRightIcon />
  <Text>View All</Text>
  <ChevronRightIcon />  
 
  
</SimpleGrid>
  </GridItem>
  <GridItem   >
    <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png"alt="hearthealthyfoodsweb" />
    <Text>Heart Healthy Foods</Text>
    <SimpleGrid columns={2} spacing={10} borderBottom="2px solid red">
  <Text>Amaranth Couscous Quinoa</Text>
  <ChevronRightIcon />
  <Text>Flours Rice Condiments</Text>
  <ChevronRightIcon />
  <Text>Seafood Lean Meats</Text>
  <ChevronRightIcon />
  <Text>View All</Text>
  <ChevronRightIcon />  
 
  
</SimpleGrid>
  </GridItem>
  <GridItem   >
    <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png"alt="hearthealthyfoodsweb" />
    <Text>Heart Healthy Foods</Text>
    <SimpleGrid columns={2} spacing={10} borderBottom="2px solid red">
  <Text>Amaranth Couscous Quinoa</Text>
  <ChevronRightIcon />
  <Text>Flours Rice Condiments</Text>
  <ChevronRightIcon />
  <Text>Seafood Lean Meats</Text>
  <ChevronRightIcon />
  <Text>View All</Text>
  <ChevronRightIcon />  
 
  
</SimpleGrid>
  </GridItem>
  <GridItem   >
    <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png"alt="hearthealthyfoodsweb" />
    <Text>Heart Healthy Foods</Text>
    <SimpleGrid columns={2} spacing={10} borderBottom="2px solid red">
  <Text>Amaranth Couscous Quinoa</Text>
  <ChevronRightIcon />
  <Text>Flours Rice Condiments</Text>
  <ChevronRightIcon />
  <Text>Seafood Lean Meats</Text>
  <ChevronRightIcon />
  <Text>View All</Text>
  <ChevronRightIcon />  
 
  
</SimpleGrid>
  </GridItem>
</Grid>
<Grid
  
  templateRows='repeat(1, 1fr)'
  templateColumns='repeat(4, 1fr)'
  gap={4}
>
  <GridItem   >
    <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png"alt="hearthealthyfoodsweb" />
    <Text>Heart Healthy Foods</Text>
    <SimpleGrid columns={2}  spacingX='1px'>
  <Text fontSize={font} >Amaranth Couscous Quinoa</Text>
  <ChevronRightIcon />
  <Divider orientation='horizontal' />
  <Divider orientation='horizontal' />
  <Text>Flours Rice Condiments</Text>
  <ChevronRightIcon />
  <Divider orientation='horizontal' />
  <Divider orientation='horizontal' />
  <Text>Seafood Lean Meats</Text>
  <ChevronRightIcon />
  <Divider orientation='horizontal' />
  <Divider orientation='horizontal' />
  <Text>View All</Text>
  <ChevronRightIcon />  
  <Divider orientation='horizontal' />
  <Divider orientation='horizontal' />
 
  
</SimpleGrid>
  </GridItem>
  <GridItem   >
  <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png"alt="hearthealthyfoodsweb" />
    <Text>Heart Healthy Foods</Text>
    <SimpleGrid columns={2} spacing={10} borderBottom="2px solid red">

  <Text>Amaranth Couscous Quinoa</Text>
  <ChevronRightIcon />
  
  <Text>Flours Rice Condiments</Text>
  <ChevronRightIcon />
  <Text>Seafood Lean Meats</Text>
  <ChevronRightIcon />
  <Text>View All</Text>
  <ChevronRightIcon />  
 
  
</SimpleGrid>
  </GridItem>
  <GridItem   >
  <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png"alt="hearthealthyfoodsweb" />
    <Text>Heart Healthy Foods</Text>
    <SimpleGrid columns={2} spacing={10} borderBottom="2px solid red">
  <Text>Amaranth Couscous Quinoa</Text>
  <ChevronRightIcon />
  <Text>Flours Rice Condiments</Text>
  <ChevronRightIcon />
  <Text>Seafood Lean Meats</Text>
  <ChevronRightIcon />
  <Text>View All</Text>
  <ChevronRightIcon />  
 
  
</SimpleGrid>
  </GridItem>
  <GridItem   >
  <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png"alt="hearthealthyfoodsweb" />
    <Text>Heart Healthy Foods</Text>
    <SimpleGrid columns={2} spacing={10} borderBottom="2px solid red">
  <Text>Amaranth Couscous Quinoa</Text>
  <ChevronRightIcon />
  <Text>Flours Rice Condiments</Text>
  <ChevronRightIcon />
  <Text>Seafood Lean Meats</Text>
  <ChevronRightIcon />
  <Text>View All</Text>
  <ChevronRightIcon />  
 
  
</SimpleGrid>
  </GridItem>
</Grid>         
                      
                 
                  
               </Carousel>
       </Box>


}
//https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg
//https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg
//https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg

export const BannerImages = ()=>{
    return <Box px={'2vw'}
    mt='2.5vh'>
       <Carousel autoPlay={false}
       infiniteLoop={false}
       >
                  
                 
                           <Box>
   <Image 
    src='https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_pastaBlog_banner.jpg'
    alt={`homepageblogbanner`} 
    borderRadius="10"/>
                           </Box>

                           <Box>
   <Image 
    src='https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_1320x355-blog2.jpg'
    alt={`bannerImage2`} 
    borderRadius="10"/>
                           </Box>

                           <Box>
   <Image 
    src='https://www.naturesbasket.co.in/Images/homepageblogbanner/NB_paneerBlog_banner.jpg'
    alt={`bannerImage3`} 
    borderRadius="10"/>
                           </Box>
    
               
                      
                      
                 
                  
               </Carousel>
       </Box>

} 
//"https://gnbdevcdn.s3.amazonaws.com/Images/Category/hearthealthyfoodsweb.png"
//"https://gnbdevcdn.s3.amazonaws.com/Images/Category/indiangroceryweb.png"
//"https://gnbdevcdn.s3.amazonaws.com/Images/Category/confectionaryweb.png"
//"https://gnbdevcdn.s3.amazonaws.com/Images/Category/internationalcusineweb.png"
//"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png"
//"https://gnbdevcdn.s3.amazonaws.com/Images/Category/coldcutweb.png"
//"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Freshartisinalbreadsweb.png"
//"https://gnbdevcdn.s3.amazonaws.com/Images/Category/dailyessentialsweb.png"
//"https://gnbdevcdn.s3.amazonaws.com/Images/Category/Organicweb.png"
