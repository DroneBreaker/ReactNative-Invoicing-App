import React from 'react'
import { Center, Heading, VStack, FormControl, Input, Link, Button, HStack, Text, Box, Image } from 'native-base'
import { useState } from 'react';

export function LoginScreen({navigation}) {
    const [tin, setTIN ] = useState('')
    const [tinError, setTINError] = useState('')
    const [password, setPassword ] = useState('')
    const [passwordError, setPasswordError] = useState('')
    
    const signin = () => {
        if(tin === 'DroneBreaker001' && password === 'drone') {
            navigation.navigate('Home')
        }
        if(tin !== "") {
            alert(tin)
            setTINError('')
        } else {
            setTINError('TIN number is required')
        }

        if(password !== "") {
            alert(password)
            setPasswordError('')
        } else {
            setPasswordError('Your Password is required')
        }
    }


    return <Center h={'100%'} bg={'amber.400'} safeArea p="2" py="12" w="100%">
        <Image mb={6} h={24} w={24} source={ require('../../../assets/initiate.png')} alt='Logo' />

        <Box w="90%" maxW="290">
          <Heading style={{}} size="2xl" fontWeight="600" color="coolGray.800" _dark={{
          color: "warmGray.50"
        }}>
            Initiate
          </Heading>
          <Heading mt="1" _dark={{
          color: "warmGray.200"
        }} color="coolGray.600" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>
  
          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>TIN Number</FormControl.Label>
              <Input borderColor={'white'} value={tin} onChangeText={(tin) => setTIN(tin)} onChange={() => setTINError('')}/>
              <Text color={'red.600'}>{tinError}</Text>
            </FormControl>

            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input borderColor={'white'} value={password} type="password" onChangeText={(password) => setPassword(password)} onChange={() => setPasswordError('')} />
              <Text color={'red.600'}>{passwordError}</Text>
              <Link _text={{
              fontSize: "xs",
              fontWeight: "500",
              color: "indigo.500"
            }} alignSelf="flex-end" mt="1">
                Forget Password?
              </Link>
            </FormControl>

            <Button mt="2" colorScheme="indigo" onPress={signin}>
              Sign in
            </Button>

            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}>
                Don't have an Account? {" "}
              </Text>
              <Link _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }} href="#">
                Sign Up
              </Link>
            </HStack>
          </VStack>
        </Box>
      </Center>;
  };