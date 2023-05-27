import React from 'react'
import { Center, Heading, VStack, FormControl, Input, Link, Button, HStack, Text, Box } from 'native-base'
import { useState } from 'react';

export function LoginScreen({navigation}) {
    const [tin, setTIN ] = useState('')
    const [tinError, setTINError] = useState('')
    const [otp, setOTP ] = useState('')
    const [otpError, setOTPError] = useState('')
    
    const signin = () => {
        if(tin === 'DroneBreaker001' && otp === 'drone') {
            navigation.navigate('Home')
        }
        if(tin !== "") {
            alert(tin)
            setTINError('')
        } else {
            setTINError('TIN number is required')
        }

        if(otp !== "") {
            alert(otp)
            setOTPError('')
        } else {
            setOTPError('Your OTP is required')
        }
    }


    return <Center w="100%">
        <Box safeArea p="2" py="32" w="90%" maxW="290">
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
              <Input value={tin} onChangeText={(tin) => setTIN(tin)} onChange={() => setTINError('')}/>
              <Text color={'red.600'}>{tinError}</Text>
            </FormControl>

            <FormControl>
              <FormControl.Label>OTP Key</FormControl.Label>
              <Input value={otp} type="password" onChangeText={(otp) => setOTP(otp)} onChange={() => setOTPError('')} />
              <Text color={'red.600'}>{otpError}</Text>
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