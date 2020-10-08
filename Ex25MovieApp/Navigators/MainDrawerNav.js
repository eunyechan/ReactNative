import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import MovieStackNav from './MovieStackNav';

const Drawer= createDrawerNavigator();

export default function MainDrawerNav(){
    return (
        <Drawer.Navigator>
            <Drawer.Screen name='MovieStackNav' component={MovieStackNav}></Drawer.Screen>
        </Drawer.Navigator>
    );
}