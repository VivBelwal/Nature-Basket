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
export const EnterNum = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {setProcess,enter,setLogin,login} = useContext(CartHover)
    
    const handleProcess = ()=>{
        setProcess(true);
        onClose()
    }
    const handleLogin =() =>{
     setLogin(login=>true)
     onClose()
    }
    useEffect(()=>{
 if(enter){
    onOpen()
 }
    },[])
    
    return (
        
      
          <>
            <Button onClick={handleLogin}>
            <Text 
            fontSize={{base: '10px', md: '15px', lg: '20px',xl:'xs' }} mt={{lg:"0px",md:"0px",sm:"5px",base:"5px",xl:"2px"}}
           >Login/Register</Text>
            </Button>
            
      
            <Modal isOpen={isOpen} onClose={onClose}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>ENTER YOUR 10 DIGIT MOBILE NUMBER</ModalHeader>
              
                <ModalCloseButton onClick={onClose}/>
                <ModalBody>
                 <Input type='number' placeholder='Enter Mobile Number' />
                 <Text>By continuing, you agree to our Refund, Terms and Policies</Text>
                </ModalBody>
      
                <ModalFooter>
                  <Button colorScheme='blue' mr={3}  onClick={handleProcess} >
                 Proceed
                  </Button>
                
                </ModalFooter>
              </ModalContent>
            </Modal>
          </>
    )
      
}

export const NumVeri = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {process, setProcess,setSign} = useContext(CartHover)
    useEffect(()=>{
        console.log(process)
        if(process){
            onOpen()
        } 
        
    },[process])
    const handleClose1 = ()=>{
    setProcess(false)
    onClose()
    }
    const handleClose2 = ()=>{
         
         setProcess(false)
         setSign(true)
        onClose()
        }
    return (
        
      
          <Box >
            {/* <Button onClick={onOpen}>
            <Text 
            fontSize={{base: '10px', md: '15px', lg: '20px',xl:'xs' }} mt={{lg:"0px",md:"0px",sm:"5px",base:"5px",xl:"2px"}}
           >Login/Register</Text> */}
            {/* </Button> */}
      
            <Modal isOpen={isOpen} onClose={handleClose1}>
              <ModalOverlay />
              <ModalContent mt='13vw'>
                <ModalHeader>WELCOME BACK, NICE TO SEE YOU.</ModalHeader>
              
                <ModalCloseButton onClick={onClose}/>
                <ModalBody>
                <Text>We have sent OTP via SMS on your mobile number.</Text>
                 
                 <Text>Enter OTP</Text>
                 <HStack>
  <PinInput>
    <PinInputField />
    <PinInputField />
    <PinInputField />
    <PinInputField />
  </PinInput>
</HStack>
                 <Button onClick={handleClose2}>VERIFY</Button>
                </ModalBody>
      
                <ModalFooter>
                  <Text>Didn't received OTP? <Button onClick={useEffect}>Resend OTP</Button></Text>
                  <Text></Text>
                
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
    )
      
}

export const SignUpPro = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {sign,setSign,setLogin} = useContext(CartHover);
    const [first , setFirst] = useState('');
    const [last , setLast] = useState('');
    const [email , setEmail] = useState('');
    const [pass , setPass] = useState('');
   
    const getData = ({name,email,password})=>{
       
            axios.post(`https://yielding-tongue-8280-viv-project.onrender.com/users`,{
                name,
              email,
              age : password
            })
            .then((res)=>{
               alert('Sign up is Successfull!!!')
               setLogin(true)
              console.log(res)
            })
            .catch((err)=>{
             
              alert("Something went wrong. please refresh.")
            })
              
          
    }
    useEffect(()=>{
        console.log(sign)
        if(sign){
            onOpen()
        } 
    },[sign])
    const handleClose = ()=>{
    setSign(false)
    onClose()
    }
    const handleSign = ()=>{
        let obj = {
            name : `${first} ${last}`,
            email : email,
            password : pass
        }
        getData(obj);
      
    }
    return (
        
      
          <Box >
            {/* <Button onClick={onOpen}>
            <Text 
            fontSize={{base: '10px', md: '15px', lg: '20px',xl:'xs' }} mt={{lg:"0px",md:"0px",sm:"5px",base:"5px",xl:"2px"}}
           >Login/Register</Text> */}
            {/* </Button> */}
      
            <Modal isOpen={isOpen} onClose={handleClose}>
              <ModalOverlay />
              <ModalContent mt='13vw'>
                <ModalHeader>SUBMIT YOUR PERSONAL DETAILS</ModalHeader>
              
                <ModalCloseButton onClick={onClose}/>
                <ModalBody>
                <Text>Hey, you seem to be new here, Please provide your details.</Text>
                <SimpleGrid columns={2} spacing={10}>
                     
                      <Box > 
                         < Input placeholder='Firstname' onChange={(e)=>setFirst(e.target.value)} />
                         </Box>
                      <Box >  <Input placeholder='Lastname' onChange={(e)=>setLast(e.target.value)} ></Input></Box>
                      <Box >  <Input placeholder='Email' type='email' onChange={(e)=>setEmail(e.target.value)} ></Input></Box>
                      <Box >  <Input placeholder='Password' type='password' onChange={(e)=>setPass(e.target.value)} ></Input></Box>
  

  
</SimpleGrid>
              
                 
                
                </ModalBody>
      
                <ModalFooter>
                  <Text color='#83B74C' fontStyle='italic'>Please click on submit for Register. </Text>
                  
                  <Button onClick={handleSign}>Submit</Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
    )
      
}