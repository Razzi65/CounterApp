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
    <div>

      <Heading>Counter App</Heading>

      <div>

      <Counter/>

    </div>
          

    </div>
  )
}

export default Home
