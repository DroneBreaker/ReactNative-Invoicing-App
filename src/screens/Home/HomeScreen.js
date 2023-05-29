import React from 'react'
import { Box, Center, Text, Heading, VStack, HStack, Button } from 'native-base'

export function HomeScreen({ navigation }) {
  return (
    <Center h={'100%'} bg={'amber.400'}>  
      <Box safeArea p="2" py="24">
          <Heading italic mb={2} size="2xl" fontWeight="600" color="coolGray.800" _dark={{
              color: "warmGray.50"
            }}>
            Welcome
          </Heading>

          <VStack>
            <Text>The official third party invoicing app for everyone</Text>
            <Text mb={4}>Want to create an invoice?</Text>

            <HStack mx={8} space={3}>
              <Button p={3} px={4} colorScheme={'green'} onPress={() => navigation.navigate('Invoice')}>Invoicing</Button>
              <Button p={3} px={4} colorScheme={'orange'}>Monthly returns</Button>
            </HStack>
          </VStack>
      </Box>
    </Center>
  )
}