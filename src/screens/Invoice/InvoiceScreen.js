import { Box, Button, Center, FormControl, HStack, 
    Heading, Image, Input, Modal, ScrollView, Text, TextField, VStack } from 'native-base'
import React, { useState } from 'react'
import { TextInput } from 'react-native';
import DatePicker from 'react-native-datepicker';

export function InvoiceScreen({ navigation }) {
    const [ receivedFrom, setReceivedFrom ] = useState('');
    const [ sum, setSum ] = useState('');
    const [ onBehalf, setOnBehalf ] = useState('');
    const [ item, setItem ] = useState('');
    const [ amount, setAmount ] = useState('');
    const [date, setDate] = useState(new Date());
    const [modalVisible, setModalVisible] = React.useState(false);
    const initialRef = React.useRef(null);
    const finalRef = React.useRef(null);

    const handleSubmit = () => {
        alert('Done processing')
        navigation.navigate('Home');
    }

    const handleItem = () => {
        setModalVisible(false);
        alert('Added item')
    }

  return (
    // bg={'gray.600'}
    <Box h={'100%'}>
        <ScrollView>
            {/*  h={'1%'} */}
            <Box mx={4} h={'9%'} flexDirection={'row'}>
                <Image h={24} w={24} my="8" source={ require('../../../assets/coat-of-arms.png')} alt='Logo' />
                <Text size={'xl'} fontWeight={'bold'} mx={20} mt={6}>Hello VAt</Text>
            </Box>

            <Center>
                <Heading mb={4}>Create An Invoice</Heading>
            </Center>  

            <Box mx={4} w={'92%'} maxW="450" >    
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

                    <Box h={'35%'} w={'100%'} flexDirection={'column'} mb={8}>
                        {/* bg={'blue.700'} */}
                        <VStack h={'100%'}>
                            <HStack justifyContent={'betwween'}>
                                <Box w={'50%'} flexWrap={'wrap'}>
                                    <Text size={'lg'} fontWeight={'bold'}>ITEM</Text>
                                </Box>

                                <Box w={'50%'} flexWrap={'wrap'}>
                                    <Text mx={8} size={'lg'} fontWeight={'bold'}>AMOUNT</Text>
                                </Box>
                            </HStack>
                        </VStack>

                        <Heading size={'md'} fontWeight={"bold"}>GRAND TOTAL</Heading>
                    </Box>

                    <Box flexDirection={'row'} mt={4} justifyContent={'space-between'}>
                        <FormControl.Label>Supplier</FormControl.Label>
                        <TextField mx={4} w={'40%'}/>
                    </Box>

                    <Box flexDirection={'row'} justifyContent={'space-between'}>
                        <FormControl.Label>TIN</FormControl.Label>
                        <TextField mx={4} w={'40%'}/>
                    </Box>
                    

                    <Box flexDirection={'row'} justifyContent={'space-between'}>
                        <FormControl.Label>Designation</FormControl.Label>
                        <TextField mr={4} w={'40%'}/>
                    </Box>

                    <Box flexDirection={'row'} justifyContent={'space-between'} mb={4}>
                        <FormControl.Label>Date</FormControl.Label>
                        {/* <Input borderColor={'white'} type='date' placeholder={"22-07-2023"} value={date} mx={4} w={'40%'} onChange={(date) => setDate(date)}/> */}

                        <DatePicker
                        // style={styles.datePickerStyle}
                        date={date}
                        mode="date"
                        placeholder="select date"
                        format="DD/MM/YYYY"
                        minDate="01-01-1900"
                        maxDate="01-01-2000"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                            position: 'absolute',
                            right: -5,
                            top: 4,
                            marginLeft: 0,
                            },

                            dateInput: {
                            borderColor : "gray",
                            alignItems: "flex-start",
                            borderWidth: 0,
                            borderBottomWidth: 1,
                            },

                            placeholderText: {
                            fontSize: 17,
                            color: "gray"
                            },
                            dateText: {
                            fontSize: 17,
                            }
                        }}
                        onDateChange={(date) => {
                            setDate(date);
                        }}
                        />
                    </Box>

                    <Center mr={8}>
                        <HStack space={'10'} justifyContent={'space-between'}>
                            <Modal mt={12} isOpen={modalVisible} avoidKeyboard onClose={() => setModalVisible(false)}
                                justifyContent={'middle'} initialFocusRef={initialRef} finalFocusRef={finalRef}>
                                <Modal.Content>
                                    <Modal.CloseButton />

                                    <Modal.Header>Add an Item</Modal.Header>

                                    <Modal.Body>
                                        <FormControl>
                                            <FormControl.Label>Item Name</FormControl.Label>
                                            <Input ref={initialRef} />
                                        </FormControl>

                                        <FormControl mt="3">
                                            <FormControl.Label>Amount</FormControl.Label>
                                            <Input keyboardType='decimal-pad'/>
                                        </FormControl>

                                        <FormControl mt="3">
                                            <FormControl.Label>Quantity</FormControl.Label>
                                            <Input keyboardType='numeric' type='number-pad' />
                                        </FormControl>

                                        <FormControl mt="3">
                                            <FormControl.Label>Discount</FormControl.Label>
                                            <Input keyboardType='decimal-pad' type='number-pad' />
                                        </FormControl>
                                    </Modal.Body>

                                    <Modal.Footer>
                                        <Button.Group space={2}>
                                            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
                                            setModalVisible(false);
                                            }}>
                                                Cancel
                                            </Button>

                                            <Button onPress={
                                                handleItem
                                            }>
                                                Add
                                            </Button>
                                        </Button.Group>
                                    </Modal.Footer>
                                </Modal.Content>
                            </Modal>

                            <Button colorScheme={'green'} onPress={() => { setModalVisible(!modalVisible)}}>Add Item</Button>
                            <Button colorScheme={'green'} onPress={handleSubmit}>Submit</Button>
                        </HStack>
                    </Center>
                </VStack>
            </Box>
        </ScrollView>
    </Box>
  )
}