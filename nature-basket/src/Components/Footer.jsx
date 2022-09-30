import { Box,Divider,Flex,HStack,SimpleGrid, VStack,Text,Image,Grid,Input,Button } from "@chakra-ui/react"
export default function Footer (){
    const AboutUs = [
        "About Us",
        'Our Vision & Purpose',
        'Quality standards',
        'Awards',
        'FAQs',
        'Available Delivery Slot',
         'Vendor Connect'];

        const News = [
          'Press releases',
'Newsletters',
'Events',
'Photo gallery',
'Recipes',
'NBTV',
'Our Virtual Store'
        ] 

        const International = [
            'Italian & Continental',
'Middle-Eastern',
'Condiments',
'Flours, Grains & More',
'Mexican',
'Salad Dressing',
'Vinegars & Mustards',
'Salt, Sugar & Substitutes',
'Pan-Asian',
'Baking Ingredients',
'Oils',
'Soups'

        ]

        const Health = [
            'Weight Management Foods',
'Heart - Healthy Foods',
'Wellness & Immunity Boosters',
'Diabetic - Friendly Foods',
'Problem Solution Foods',
'Organic'
        ]

        const Conffectionary = [
            'Chocolates',
            'Dessert Mixes, Sauces & Toppings',
            'Ice Creams & Desserts',
            'Confectionery',
            'Baking Ingredients',
            'Patisserie'
        ]

        const Meats = [
            "Fresh Meats & Seafood",
'Cold Cuts & Sausages',
'Packaged Sea food & Meats',
'Eggs',
'Frozen'
        ]

        const BreakFast = [
            'Cereals, Bars & Others',
'Jams, Preserves & Conserves',
'Honey',
'Indian Breakfast Favourites',
'Spreads',
'Milk, Yogurt & Other Dairy Drinks',
'Butters & Margarines',
'Bakery'
        ]

        const Instant = [
            'Ready to Cook',
'Ready to Eat',
'Accessories',
'Books'
        ]

        const Snacks = [
            'Cookies & Crackers',
'Frozen Snacks',
'Antipasti',
'Dry Snacks',
'Fresh Snacks & Party Food',
'Relishes & Pickles',
'Carbonated Drinks',
'Teas',
'Concentrate',
'Energy Drinks & Milk Additives',
'Juice',
'Coffee',
'Dairy Drinks',
'Water'
        ]

        const Grocery = [
            'Flours, Grains & More',
'Cooking Pastes & Sauces',
'Cooking Spices & Powders',
'Salt, Sugar & Substitutes',
'Oils'
        ]
        const footerBot = [
            '© 2020 Natures Basket Limited.',
              'All rights reserved.',
              '|',
              'Privacy Policy',
              '|',
              'Terms of Use',
              '|',
              'Home Delivery Number - 8880077745',
              '|',
              'Site Map',
              '|',
              'Mobile Site',
              '|',
              'FSSAI License Number - 11519002000496'
        ]
    return (
        <Box>
            <SimpleGrid columns={5} spacing={10}>
  <Box >
    <Text>DOWNLOAD THE APP</Text>
    <Image 
    src="https://cdn.worldvectorlogo.com/logos/get-it-on-google-play.svg" 
    alt="GOOGLEPLAY"
    />
    <Image 
    src="https://cdn.worldvectorlogo.com/logos/available-on-the-app-store.svg" 
    alt="APPSTORE"
    />
  </Box>

  <VStack >
    <Text>ABOUT US</Text>
    <Box>
    {AboutUs.map((el)=>{
        return <Text>
            {el}
        </Text>
    })}
    </Box>
    <Text>CAREERS</Text>
    <Text>Work with us</Text>
  </VStack>

  <Box>
  <VStack >
    <Text>NEWS & MEDIA</Text>
    <Box>
    {News.map((el)=>{
        return <Text>
            {el}
        </Text>
    })}
    </Box>
   
  </VStack>

  </Box>

  <Box >
    <VStack>
    <Text>OUR POLICIES</Text>
    <Box>
        <Text>Privacy policy</Text>
        <Text>Payment policy</Text>
        <Text>Disclaimer</Text>
        <Text>Grievance Officer</Text>
    </Box>
    </VStack>
  </Box>

  <Box >
    <VStack>
        <Text>SIGN UP TO STAY UPDATED</Text>
        <Box>
            <Input placeholder="ENTER YOUR EMAIL ADDRESS" />

            <Button >SUBSCRIBE</Button>
        </Box>
    </VStack>
  </Box>
</SimpleGrid>

<Divider orientation='horizontal' />
<Flex>
 <HStack>
    <Text>Payment Mehtod</Text>
    <SimpleGrid>
        <Image src="https://www.naturesbasket.co.in/Images/icons-card-payments-mode.png" alt ="payment" />
    </SimpleGrid>
 </HStack>

 <HStack>
    <Text>Keep in Touch</Text>
    <SimpleGrid>
    <Image src="" alt ="" />
    </SimpleGrid>
 </HStack>
</Flex>

<Divider orientation='horizontal'/>

<Grid>
    <Box>
        <Text> FRESH & FAST</Text>
        <Text>GIFT HAMPERS</Text>
        <VStack>
            <Text>Birthday & Anniversary Gift Hampers</Text>
            <Text>World Cuisine Gift Hampers</Text>
            <Text>Organic & Health Gift Hampers</Text>
            <Text>Coffee & Tea Gift Hampers</Text>
            <Text>Get Well Soon Gift Hampers</Text>
            <Text>Cheese & Meat Platters</Text>
        </VStack>
        <Text>FRUITS & VEGETABLES</Text>
        <VStack>
           <Text>Vegetables</Text>
           <Text>Exotic Vegetables</Text>
           <Text>Fruits</Text>
           <Text>Organic Fruits & Vegetables</Text>
           <Text>Exotic Fruits</Text>
           <Text>Canned & Frozen</Text>
           <Text>Cold - Pressed Fresh Juices</Text>
        </VStack>
       <Text>DELICATESSEN & CHEESE</Text>
       <VStack>
           <Text>Fresh Snacks & Party Food</Text>
           <Text>Antipasti</Text>
           <Text>Gourmet Cheese Shop</Text>
           <Text>Cold Cuts & Sausages</Text>
           <Text>Cheese Spread, Slices & Others</Text>
          
        </VStack>
    </Box>

    <Box>
        <Text>INTERNATIONAL CUISINE</Text>
        <VStack>
            {International.map((el)=>(
                <Text>{el}</Text>
            ))}
        </VStack>
        <Text>HEALTH</Text>
        <VStack>
            {Health.map((el)=>(
                <Text>{el}</Text>
            ))}
        </VStack>

    



    </Box>

    <Box>
    <Text>CONFECTIONARY & PATISSERIE</Text>
        <VStack>
            {Conffectionary.map((el)=>(
                <Text>{el}</Text>
            ))}
        </VStack>
        <Text>MEATS, SEAFOOD AND EGGS</Text>
        <VStack>
            {Meats.map((el)=>(
                <Text>{el}</Text>
            ))}
        </VStack>
        



    </Box>

    <Box>
    <Text>BREAKFAST & DAIRY</Text>
        <VStack>
            {BreakFast.map((el)=>(
                <Text>{el}</Text>
            ))}
        </VStack>
        <Text>INSTANT MEAL & AIDS</Text>
        <VStack>
            {Instant.map((el)=>(
                <Text>{el}</Text>
            ))}
        </VStack>
        



    </Box>

    <Box>
    <Text>SNACKS & BEVERAGES</Text>
        <VStack>
            {Snacks.map((el)=>(
                <Text>{el}</Text>
            ))}
        </VStack>
        <Text>INDIAN GROCERY</Text>
        <VStack>
            {Grocery.map((el)=>(
                <Text>{el}</Text>
            ))}
        </VStack>
        



    </Box>

</Grid>

<Divider orientation='horizontal'/>

   
       <SimpleGrid columns={14} >
        {footerBot.map((el)=>(
            <Text>{el}</Text>
        ))}
        
      
       </SimpleGrid>
        </Box>
    )
}

