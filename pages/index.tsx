import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Center, CircularProgress, CircularProgressLabel, Flex } from '@chakra-ui/react'
import { Box } from "@chakra-ui/react"
import { Input } from '@chakra-ui/react'
import Button from '../Components/button1'
import Button1 from '../Components/button1'
import Counter from '../Components/counter'



const Home: NextPage = () => {
  return (
    <div>

      Counter App
      <div>

     <Counter/>

    </div>
          

    </div>
  )
}

export default Home
