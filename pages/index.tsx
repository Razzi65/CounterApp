import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Button, Center, CircularProgress, CircularProgressLabel, Flex, Heading } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import Buttons from '../Components/button'
import Counter from '../Components/counter'


const Home: NextPage = () => {
  return (
    
    <Box justifyContent={"center"} w='100%' h='500px' bgGradient='linear(to-l, #7928CA, #FF0080)'>
      
      <Heading ml={550}>Counter App</Heading>

            

     <Flex mt={10} ml={500} background={"blue.400"} rounded={5} height={150} width={"25%"} justifyContent={"center"}>

      <Counter/>

      </Flex>

    

    </Box>
  )
}

export default Home
