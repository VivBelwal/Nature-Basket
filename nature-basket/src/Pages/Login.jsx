import { Button , Text,Input,Box ,HStack,PinInput,PinInputField,SimpleGrid} from '@chakra-ui/react';
import { Tooltip } from '@chakra-ui/react'
import { useToast } from '@chakra-ui/react'
import axios from "axios";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
  import {Link} from "react-router-dom";
import { useEffect } from 'react'
import { useState,useContext } from 'react'
import { CartHover } from '../Contexts/CartHover'


export const LoginPro = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {sign,setSign,login,setLogin,enter,setEnter,name,setName} = useContext(CartHover);
    const [data , setData] = useState([]);
    const [last , setLast] = useState('');
    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');
   
    const getData = ()=>{
       
            axios.get(`https://yielding-tongue-8280-viv-project.onrender.com/users`)
            .then((res)=>{
             setData(res.data)
              console.log(res.data)
            })
            .catch((err)=>{
             
              alert("Something went wrong. please refresh.")
            })
              
          
    }
    useEffect(()=>{
        console.log(sign)
        getData();
    },[])
    const handleClose = ()=>{
    
    onClose()
    }
    const handleSign = ()=>{
        setLogin(false)
        setEnter(true)

    }
    let check = 0;
    const handleLogin = ()=>{
        console.log(email)
        console.log(pass)
     for(let i=0;i<data.length;i++){
        if(data[i].email===email && data[i].age===pass){
            alert("Login Successfull !!")
            setName(data[i].name);
            
            onClose();
            

        } else{
           
            check++;
            
        }
        if(check===data.length){
            alert('Please Fill Correct Details')
        }
     }
        

    }
   
    return (
        
      
          <Box >
            {/* <Button onClick={onOpen}>
            <Text 
            fontSize={{base: '10px', md: '15px', lg: '20px',xl:'xs' }} mt={{lg:"0px",md:"0px",sm:"5px",base:"5px",xl:"2px"}}
           >Login/Register</Text> */}
            {/* </Button> */}
            <Button onClick={onOpen}>
            <Text 
            fontSize={{base: '10px', md: '15px', lg: '20px',xl:'xs' }} mt={{lg:"0px",md:"0px",sm:"5px",base:"5px",xl:"2px"}}
           >{name}</Text>
            </Button>
            <Modal isOpen={isOpen} onClose={handleClose}>
              <ModalOverlay />
              <ModalContent mt='13vw'>
                <ModalHeader>SUBMIT YOUR DETAILS TO SIGN IN</ModalHeader>
              
                <ModalCloseButton onClick={onClose}/>
                <ModalBody>
                <Text></Text>
                <SimpleGrid columns={2} spacing={10}>
                     
                      
                       <Box >  <Input placeholder='Email' type='email' onChange={(e)=>setEmail(e.target.value)} ></Input></Box>
                      <Box >  <Input placeholder='Password' type='password' onChange={(e)=>setPass(e.target.value)} ></Input></Box>
  

  
</SimpleGrid>
              
                 
                
                </ModalBody>
      
                <ModalFooter>
                    <Box>  <Text color='#83B74C' fontStyle='italic'>Please click on submit. </Text>
                  
                  <Button onClick={handleLogin}>Submit</Button> </Box>
                    <Box>
                    <Text color='#83B74C' fontStyle='italic'>Please click on SIGN UP button if you are a new user. </Text>
                  
                  <Button onClick={handleSign}>SIGN UP</Button>
                    </Box>
                
                  
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
    )
      
}