import React from 'react';
import { createStackNavigator } from '@react-navigation/drawer';

import BottomTabNavigator from './BottomTab';
import PostScreen from '../screens/PostScreen';

const Stack = createStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator>

                <Stack.Screen name = "Home" component = {BottomTabNavigator} />
                <Stack.Screen name = "PostScreen" component = {PostScreen} />

        </Stack.Navigator>
    )
}


export default StackNavigator
