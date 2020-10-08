import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import FirstTab from './screen_toptab/FirstTab';
import SecondTab from './screen_toptab/SecondTab';
import ThirdTab from './screen_toptab/ThirdTab';
import { Image } from 'react-native';

const Tab= createMaterialTopTabNavigator();

export default class MainMaterialTopTab extends Component{
    render(){
        return (
            <NavigationContainer>
                <Tab.Navigator
                    tabBarOptions='top'
                    initialRouteName='second'
                    swipeEnabled={true}
                    tabBarOptions={{
                        activeTintColor:'blue',
                        inactiveTintColor:'gray',
                        showLabel:true,
                        indicatorStyle:{
                            backgroundColor:'green',
                            height:6
                        },
                        showIcon:true
                    }}>
                    <Tab.Screen name="first" component={ FirstTab }></Tab.Screen>
                    <Tab.Screen 
                    name="second"
                    component={ SecondTab }
                    options={{
                        tabBarLabel:'두번재',
                        // tabbarIcon:()=><Image source={require('./icons/RN_logo.png')} style={{width:24, height:24}}></Image>
                    }}>

                    </Tab.Screen>
                    <Tab.Screen name="third" component={ ThirdTab }></Tab.Screen> 
                </Tab.Navigator>
            </NavigationContainer>
        );
    }
}