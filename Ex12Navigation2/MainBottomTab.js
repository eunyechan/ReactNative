import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FirstTab from './screen_bottomtab/FirstTab';
import SecondTab from './screen_bottomtab/SecondTab';
import ThirdTab from './screen_bottomtab/ThirdTab';
import { Image } from 'react-native';

const BottomTab= createBottomTabNavigator();

export default class MainBottomTab extends Component{
    render(){
        return (
            <NavigationContainer>
                <BottomTab.Navigator
                    initialRouteName="second"
                    tabBarOptions={{
                        activeTintColor:'red',
                        inactiveTintColor:'gray',
                        activeBackgroundColor:'gray',
                        showLabel:true,
                        labelPosition:'below-icon'                       
                    }}>
                    <BottomTab.Screen
                        name="first"
                        component={ FirstTab }
                        options={{
                            tabBarLabel:'첫번째',
                            tabBarBadge: "new",
                            tabBarIcon: ()=>{return <Image source={ require('./icons/RN_logo.png')} style={ {width:24, height:24} }></Image>}
                        }}>
                    </BottomTab.Screen>
                    <BottomTab.Screen name="second" component={ SecondTab }></BottomTab.Screen>
                    <BottomTab.Screen name="third" component={ ThirdTab }></BottomTab.Screen>
                </BottomTab.Navigator>
            </NavigationContainer>
        );
    }
}