
import {Box,Container,Image} from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

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
        <Container>
<Box w="100%"
              px={{md:"6"}}
              >
        <Image  
        src="https://gnbdevcdn.s3-ap-southeast-1.amazonaws.com/Marketing/d8cc09f5-5d68-4853-ae9a-233ceabe3acd.jpg?v=12" 
        alt="festive"
        borderRadius="10"/>
    </Box>

 <Box>
    <Carousel autoPlay={true}
    infiniteLoop={true}>
               
                    {bannerImages.map((el,i)=>(
                        <Box>
<Image 
 src={el}
 alt={`bannerImage${i}`} />
                        </Box>
 
                    ))}
                   
                   
              
               
            </Carousel>
    </Box>

        </Container>

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