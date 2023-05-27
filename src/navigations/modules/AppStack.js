import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { StackRoutes } from './routes';
import { useNavigation } from '@react-navigation/native';
//import TabNavigation from './TabNavigation';

const Stack = createStackNavigator();

const AppStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home">
            {StackRoutes.map(({ name, component, options }) => {
                return <Stack.Screen key={name} name={name} component={component} options={options} />;
            })}
        </Stack.Navigator>
    );
};

export default AppStack;