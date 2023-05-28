import React from 'react'
import { Box, Center, Text, Heading, VStack, HStack, Button } from 'native-base'

export function HomeScreen({ navigation }) {
  return (
    <Center>  
      <Box safeArea p="2" py="24">
          <Heading mb={2} size="3xl" fontWeight="600" color="coolGray.800" _dark={{
              color: "warmGray.50"
            }}>
            Welcome <Text size={'lg'}>to Initiate</Text>
          </Heading>

          <VStack>
            <Text>The official third party invoicing app for everyone</Text>
            <Text mb={4}>Want to create an invoice?</Text>

            <HStack space={3}>
              <Button colorScheme={'green'} onPress={() => navigation.navigate('Invoice')}>Make an invoice</Button>
              <Button colorScheme={'green'}>Submit Monthly invoice</Button>
            </HStack>
          </VStack>
      </Box>
    </Center>
  )
}