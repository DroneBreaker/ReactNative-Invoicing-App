import { Box, Button, Center, FormControl, HStack, 
    Heading, Image, Input, ScrollView, Text, TextField, VStack } from 'native-base'
import React, { useState } from 'react'
// import '../../../assets/initiate'

export function InvoiceScreen({ navigation }) {
    const [ receivedFrom, setReceivedFrom ] = useState('');
    const [ sum, setSum ] = useState('');
    const [ onBehalf, setOnBehalf ] = useState('');

    const handleSubmit = () => {
        alert('Done processing')
        navigation.navigate('Home');
    }

  return (
    <ScrollView overflow={'hidden'} bg={'amber.400'}>
        {/*  h={'1%'} */}
        <Box h={'0.4%'} m="2" my="8" flexDirection={'row'}>
            <Image h={24} w={24} source={ require('../../../assets/coat-of-arms.png')} alt='Logo' />
            {/* <Text size={'xl'} fontWeight={'bold'} mx={20} mt={6}>Hello VAt</Text> */}
        </Box>

        <Center>
            <Heading mb={4}>Create an Invoices</Heading>

            <Box w={'95%'} maxW="390" >    
                <VStack>
                    <FormControl>
                        <FormControl.Label>Received From</FormControl.Label>
                        <Input value={receivedFrom} onChangeText={(receivedFrom) => setReceivedFrom(receivedFrom)}  onChange={() => setReceivedFrom('')}/> 
                    </FormControl>

                    <FormControl>
                        <FormControl.Label>The Sum of</FormControl.Label>
                        <Input value={sum} onChangeText={(sum) => setSum(sum)} onChange={() => setSum('')}/>
                    </FormControl>

                    <FormControl mb={4}>
                        <FormControl.Label>In Respect of</FormControl.Label>
                        <Input value={onBehalf} onChangeText={(onBehalf) => setOnBehalf(onBehalf)} onChange={() => setOnBehalf('')}/>
                    </FormControl>

                    <Box h={'51%'} w={'100%'} flexDirection={'row'} justifyContent={'space-between'}>
                        {/* bg={'blue.700'} */}
                        <VStack w={'60%'}>
                            <Text>ITEM</Text>

                            <Box flexDirection={'row'}>
                                <FormControl.Label>Accommodation</FormControl.Label>
                                <TextField mx={1} w={'45%'}/>
                            </Box>

                            <Box flexDirection={'row'}>
                                <FormControl.Label>Food</FormControl.Label>
                                <TextField isRequired mx={1} w={'80d%'}/>
                            </Box>

                            <Box flexDirection={'row'}>
                                <FormControl.Label>Drink</FormControl.Label>
                                <TextField mx={1} w={'80%'}/>
                            </Box>

                            <Box flexDirection={'row'}>
                                <FormControl.Label>Others(Specify)</FormControl.Label>
                                <TextField mx={1} w={'47%'}/>
                            </Box>

                            <Box flexDirection={'row'}>
                                <FormControl.Label>Sub Total</FormControl.Label>
                                <TextField mx={1} w={'65%'}/>
                            </Box>

                            <Box flexDirection={'row'}>
                                <FormControl.Label>VAT (12.5%)</FormControl.Label>
                                <TextField mx={1} w={'55%'}/>
                            </Box>

                            <Box flexDirection={'row'}>
                                <FormControl.Label>NHIL (2.5%)</FormControl.Label>
                                <TextField mx={1} w={'55%'}/>
                            </Box>

                            <Box flexDirection={'row'}>
                                <FormControl.Label>VAT + NHIL</FormControl.Label>
                                <TextField mx={1} w={'57%'}/>
                            </Box>

                            <Text mx={16} size={'2xl'} fontWeight={"bold"}>GRAND TOTAL</Text>
                        </VStack>

                        {/*  bg={'red.700'} */}
                        <VStack w={'35%'}> 
                            <Text mx={6}>AMOUNT</Text>
                            <TextField keyboardType='number-pad' type='text' value='acommodation' mb={2}/>
                            <TextField keyboardType='number-pad' value='food' mb={2}/>
                            <TextField keyboardType='number-pad' value='drink' mb={2}/>
                            <TextField keyboardType='number-pad' mb={2}/>
                            <TextField keyboardType='number-pad' mb={2}/>
                            <TextField keyboardType='number-pad' mb={2}/>
                            <TextField keyboardType='number-pad' mb={2}/>
                            <TextField keyboardType='number-pad'/>
                            <TextField keyboardType='number-pad'  mb={10}/>

                            <Box flexDirection={'row'}>
                                <FormControl.Label>Signature</FormControl.Label>
                                <TextField mx={1} w={'40%'}/>
                            </Box>
                        </VStack>
                    </Box>
                    

                        {/* <Box mb={2}>
                            <FormControl.Label>AMOUNT</FormControl.Label>
                        </Box> */}
                        {/* <Text>ITEM</Text>
                        <Text>AMOUNT</Text> */}
                    <Box flexDirection={'row'}>
                        <FormControl.Label>Supplier</FormControl.Label>
                        <TextField mx={1} w={'40%'}/>
                    </Box>

                    <Box flexDirection={'row'}>
                        <FormControl.Label>TIN</FormControl.Label>
                        <TextField mx={8} w={'40%'}/>
                    </Box>

                    <Box flexDirection={'row'}>
                        <FormControl.Label>Designation</FormControl.Label>
                        <TextField mx={1} w={'32%'}/>
                    </Box>

                    <Box flexDirection={'row'}>
                        <FormControl.Label>Date</FormControl.Label>
                        <TextField borderColor={'white'} keyboardType='numeric' mx={6} w={'39%'}/>
                    </Box>
                </VStack>
                
                <Button colorScheme={'green'} onPress={handleSubmit}>Submit</Button>
            </Box>
        </Center>
    </ScrollView>
  )
}