import { Box, Button } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import {BiMenuAltRight} from "react-icons/bi"
import DrawerComp from './DrawerComp'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import logo from "./logo.png"
import { MdShoppingCart } from 'react-icons/md';


const Navbar = () => {
  const state = useSelector(state => state.cart);
  const refToChild = useRef(null);
  const {isAuthenticated, user, message, error} = useSelector(state=> state.auth)
  const dispatch = useDispatch();

  useEffect(()=>{
      if(error){
       toast.error(error)
        // dispatch(clearError())
      }
    
    if(message){
      toast.success(message)
     
    }

  }, [dispatch, message, error])

  const openDrawer = ()=>{
    if(refToChild.current){
      refToChild.current.click()
    }
  }
  return (
    <ChakraProvider>
    <Box h={20} py={13} px={10} display={'flex'} alignItems={'center'} justifyContent={'space-between'} style={{backgroundColor : "#2b6cb0"}}>
      <Link to={"/"}>
      <div className="container1"> 
      <img src= {logo} alt='logo' style={{ height : 90, width : 100}}/>
   <div className="text">
   <h2 style={{ color: "white", fontSize : 40}}>ADVISIONS</h2> 
      </div>
      </div>
      </Link>

      <div  className="hide1 ml-auto px-4">
      <Link to="/cart" >
              <Button color={"white"}   variant={"link"}> 
              <MdShoppingCart size={24} style={{ cursor: 'pointer' }} onClick={() => console.log('Cart Clicked!')} />
                      Cart ({state ? state.length : 0}) </Button>
                                    </Link>
                                    </div>
      <Button colorScheme='blue' onClick={openDrawer}><BiMenuAltRight size={24} /></Button>
      <DrawerComp refFromParent={refToChild} isAuthenticated={isAuthenticated} user={user}/>
    </Box>
    </ChakraProvider>
  )
}

export default Navbar


