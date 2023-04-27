import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import StackNavigator from './StackNavigator';
import ProfileScreen from '../screens/profile';

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>

                <Drawer.Screen name = "Home" component = {StackNavigator} />
                <Drawer.Screen name = "Profile" component = {ProfileScreen} />

        </Drawer.Navigator>
    )
}


export default DrawerNavigator
