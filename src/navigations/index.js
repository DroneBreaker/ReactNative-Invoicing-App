import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AppStack from './modules/AppStack';

const Stack = createStackNavigator();

function MainNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="App" options={{ headerShown: false }} component={AppStack} />
        </Stack.Navigator>
    );
}

export default MainNavigation;