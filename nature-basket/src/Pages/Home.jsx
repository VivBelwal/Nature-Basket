
import {Box,Container,Image,Grid,GridItem, Divider,Text,HStack,SimpleGrid,Button} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import {ShopByCat , BannerImages} from "../Components/Carousel"


export default function Home (){
    const bannerImages = [
       'https://d1z88p83zuviay.cloudfront.net/BannerImages/038ab40d-af72-4fd1-a8a7-4a91e3feec48_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/11092523-5dc0-417c-926f-c34ac29006b7_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/fdcaf9c5-e607-40db-9ad7-e4373da72fad_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/30c36f71-c01f-41eb-bbbb-a56a1f438c39_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/c17da8de-f8f3-4580-a1b2-9cb1b877557a_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/88b99410-b311-4c4d-a2bd-61859cdc494a_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/bd139272-384b-4d66-8932-8bc8093f5b6d_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/b7641ce5-fd86-485f-bc27-e6c486afc951_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/56d58540-9be6-436e-9046-3a75e7f3928b_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/9bd5bd18-3f11-4062-afe6-380ff6a35dfc_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/a1bb73ba-00a7-4473-ac0a-cafd9500e6eb_1320x376.jpg',
'https://d1z88p83zuviay.cloudfront.net/BannerImages/8f6ba871-ab4e-4f01-b71c-c913dfb63f11_1320x376.jpg'

    ]

    return(
        <Box 
        border={'1px solid red'}>
            <Box 
             
              px={'2vw'}
              >
        <Image  
        src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg?v=12" 
        alt="festive"
        borderRadius="10"
        />
    </Box>

 <Box px={'2vw'}
 mt='2.5vh'>
    <Carousel autoPlay={false}
    infiniteLoop={false}
    breakPoints={{xl:4}}>
               
                    {bannerImages.map((el,i)=>(
                        <Box>
<Image 
 src={el}
 alt={`bannerImage${i}`} 
 borderRadius="10"/>
                        </Box>
 
                    ))}
                   
                   
              
               
            </Carousel>
    </Box>

    <Grid
 px={'2vw'}
  templateRows='repeat(1, 1fr)'
  templateColumns='repeat(3, 1fr)'
  gap={4}
mt="-2.5vh"
>
  <Box 
  >
    <Image src="https://www.naturesbasket.co.in/Images/NaturesBasketGifting.jpeg?v=8" alt="diwali offer" borderRadius="10" />
  </Box>
  <Box>
    <Image  src="https://www.naturesbasket.co.in/Images/Fruits-Vegetables.png?v=15" alt="festive" borderRadius="10"/>
  </Box>
  <Box>
    <Image src="https://www.naturesbasket.co.in/Images/Gluten-free-web%20box%20banner.png?v=15" alt="Gluten" borderRadius="10"/>
  </Box>
</Grid>
<HStack spacing='5px' w="90%" m="auto" mt="10px" mb="10px" >
<Divider orientation='horizontal' w="40%" />
<Text fontSize={'24px'} color='black'>SHOP BY CATEGORY</Text>
<Divider orientation='horizontal' w="40%"  />
</HStack>

<ShopByCat />
<BannerImages />
<HStack spacing='5px' w="90%" m="auto" mt="10px" mb="10px" >
<Divider orientation='horizontal' w="40%" />
<Text fontSize={'24px'} color='black'>WHAT'S TRENDING</Text>
<Divider orientation='horizontal' w="40%"  />
</HStack>

<SimpleGrid columns={4} spacing={10}>
  <Box >
 <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg"
  alt=" TAPIOCA" />
 <Text>HA TAPIOCA FLOUR 400g</Text>
 <Text>1 Pc</Text>
 <Button>MRP ₹210</Button>
 <Button>ADD</Button>
  </Box>
  <Box>
  <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/578a02e6-8e0b-4868-9689-5733471e3b87_425x425.jpg"
  alt=" TAPIOCA" />
 <Text>Kwality Wall's Ice Cream - Magnum C..</Text>
 <Text>1 Pc</Text>
 <Button>MRP ₹149</Button>
 <Button>ADD</Button>
  </Box>
  <Box >
  <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/120d587f-37c9-4743-bc37-2cbb7bd57025_425x425.jpg"
  alt=" TAPIOCA" />
 <Text>HA ORGANIC MOONG DAL YELLOW SPLIT 5..</Text>
 <Text>1 Pc</Text>
 <Button>MRP ₹210</Button>
 <Button>ADD</Button>
  </Box>
  <Box >
  <Image src="https://d1z88p83zuviay.cloudfront.net/ProductVariantThumbnailImages/17d6b165-a222-4e0e-9d2e-20c34236e277_425x425.jpg"
  alt=" TAPIOCA" />
 <Text>HA TAPIOCA FLOUR 400g</Text>
 <Text>1 Pc</Text>
 <Button>MRP ₹210</Button>
 <Button>ADD</Button>
  </Box>
 
</SimpleGrid>

<HStack spacing='5px' w="90%" m="auto" mt="10px" mb="10px" >
<Divider orientation='horizontal' w="40%" />
<Text fontSize={'24px'} color='black'>OUR EVENTS</Text>
<Divider orientation='horizontal' w="40%"  />
</HStack>

<SimpleGrid columns={3} spacing={10} w="95%" m="auto">
  <Box w="100%">
    <Image 
    
    src="https://www.naturesbasket.co.in/Images/PhotoGallery/SanjeevKapoor_at_KolkataGallary.jpg" 
    alt="sanjeev" 
    borderRadius="10"
    w="100%"
    />
  </Box>
  <Box w="100%">
  <Image src="https://d1z88p83zuviay.cloudfront.net/Images/PhotoGallery/20140620_163958.jpg" alt="cook" 
    borderRadius="10"
    w="100%" />
  </Box>
  <Box w="100%">
  <Image src="https://www.naturesbasket.co.in/Images/PhotoGallery/RanveerBrarGallary.png" alt="nature's basket"
    borderRadius="10"
    w="100%"
     />
  </Box>
 
</SimpleGrid>

<HStack spacing='5px' w="90%" m="auto" mt="10px" mb="10px" >
<Divider orientation='horizontal' w="40%" />
<Text fontSize={'24px'} color='black'>SHOP BY WORLD BRANDS</Text>
<Divider orientation='horizontal' w="40%"  />
</HStack>



        </Box>

    ) 
    
    
    
}

//https://www.naturesbasket.co.in/Online-grocery-shopping/International-Cuisine/Australian-Taste/Dairy-Fest/465_0_0
//https://d1z88p83zuviay.cloudfront.net/BannerImages/038ab40d-af72-4fd1-a8a7-4a91e3feec48_1320x376.jpg
//https://d1z88p83zuviay.cloudfront.net/BannerImages/0f2301bb-4607-47f9-859c-1c2c21642159_1320x376.jpg
//https://d1z88p83zuviay.cloudfront.net/BannerImages/11092523-5dc0-417c-926f-c34ac29006b7_1320x376.jpg"
//https://d1z88p83zuviay.cloudfront.net/BannerImages/fdcaf9c5-e607-40db-9ad7-e4373da72fad_1320x376.jpg
//https://d1z88p83zuviay.cloudfront.net/BannerImages/30c36f71-c01f-41eb-bbbb-a56a1f438c39_1320x376.jpg
//https://d1z88p83zuviay.cloudfront.net/BannerImages/c17da8de-f8f3-4580-a1b2-9cb1b877557a_1320x376.jpg
//https://d1z88p83zuviay.cloudfront.net/BannerImages/88b99410-b311-4c4d-a2bd-61859cdc494a_1320x376.jpg
//https://d1z88p83zuviay.cloudfront.net/BannerImages/bd139272-384b-4d66-8932-8bc8093f5b6d_1320x376.jpg
//https://d1z88p83zuviay.cloudfront.net/BannerImages/b7641ce5-fd86-485f-bc27-e6c486afc951_1320x376.jpg
//https://d1z88p83zuviay.cloudfront.net/BannerImages/56d58540-9be6-436e-9046-3a75e7f3928b_1320x376.jpg
//https://d1z88p83zuviay.cloudfront.net/BannerImages/9bd5bd18-3f11-4062-afe6-380ff6a35dfc_1320x376.jpg
//https://d1z88p83zuviay.cloudfront.net/BannerImages/a1bb73ba-00a7-4473-ac0a-cafd9500e6eb_1320x376.jpg
//https://d1z88p83zuviay.cloudfront.net/BannerImages/8f6ba871-ab4e-4f01-b71c-c913dfb63f11_1320x376.jpg
//*************************** */
