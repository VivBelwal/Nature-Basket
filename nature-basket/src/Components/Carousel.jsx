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
    <SimpleGrid columns={2} spacing={10} borderBottom="2px solid black">
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
    <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/indiangroceryweb.png"alt="hearthealthyfoodsweb" />
    <Text>Heart Healthy Foods</Text>
    <SimpleGrid columns={2} spacing={10} borderBottom="2px solid black">
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
    <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/confectionaryweb.png"alt="hearthealthyfoodsweb" />
    <Text>Heart Healthy Foods</Text>
    <SimpleGrid columns={2} spacing={10} borderBottom="2px solid black">
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
    <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/internationalcusineweb.png"alt="hearthealthyfoodsweb" />
    <Text>Heart Healthy Foods</Text>
    <SimpleGrid columns={2} spacing={10} borderBottom="2px solid black">
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
    <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/Exoticvegetablesweb.png"alt="hearthealthyfoodsweb" />
    <Text>Heart Healthy Foods</Text>
    <SimpleGrid columns={2}  spacingX='1px'>
  <Text  >Amaranth Couscous Quinoa</Text>
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
    <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/indiangroceryweb.png"alt="hearthealthyfoodsweb" />
    <Text>Heart Healthy Foods</Text>
    <SimpleGrid columns={2} spacing={10} borderBottom="2px solid black">
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
    <Image src="https://gnbdevcdn.s3.amazonaws.com/Images/Category/internationalcusineweb.png"alt="hearthealthyfoodsweb" />
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

const ShopbyWorImages = [
    'https://d1z88p83zuviay.cloudfront.net/Images/lexlusif.jpg',
    'https://d1z88p83zuviay.cloudfront.net/Images/healthy.jpg',
    'https://d1z88p83zuviay.cloudfront.net/Images/cambay-tiger.jpg',
    'https://d1z88p83zuviay.cloudfront.net/Images/barilla.jpg',
    'https://d1z88p83zuviay.cloudfront.net/Images/ceres.jpg',
    'https://d1z88p83zuviay.cloudfront.net/Images/ceres.jpg',
    'https://d1z88p83zuviay.cloudfront.net/Images/silk.jpg',
    'https://d1z88p83zuviay.cloudfront.net/Images/davidoff-cafe.jpg'
]

export function ShopByWor (){
    return <Box px={'2vw'}
    mt='2.5vh'>
       <Carousel autoPlay={false}
       infiniteLoop={false}
       >
        {ShopbyWorImages.map((el,i)=>(
            <Box key={i} display='flex'>
                <Image src={ShopbyWorImages[2]}
                alt ={i}
                borderRadius="10" /><Image src={ShopbyWorImages[0]}
                alt ={i}
                borderRadius="10" />
                <Image src={ShopbyWorImages[1]}
                alt ={i}
                borderRadius="10" />
                <Image src={ShopbyWorImages[3]}
                alt ={i}
                borderRadius="10" />
            </Box>
        ))}
                  
    </Carousel>
       </Box>

}

