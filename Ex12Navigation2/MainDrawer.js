import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Screen1 from './screen_drawer/screen1';
import Screen2 from './screen_drawer/screen2';
import Screen3 from './screen_drawer/screen3';
import { Image } from 'react-native';

const Drawer= createDrawerNavigator();

export default class MainDrawer extends Component{
    render(){
        return(
            <NavigationContainer>
                <Drawer.Navigator
                    drawerPosition='right'
                    hideStatusBar={false}
                    drawerType='back'
                    drawerStyle={{
                        backgroundColor:'white',
                        width:'60%'
                    }}
                    drawerContentOptions={{
                        activeTintColor:'red',
                        itemStyle:{
                            marginVertical:4
                        }
                    }}>
                    <Drawer.Screen name='one' component={Screen1}></Drawer.Screen>
                    <Drawer.Screen
                    name='two' 
                    component={Screen2}
                    options={{
                        drawerLabel:'두번째',
                        drawerIcon: (obj)=>{return <Image style={{width:obj.size, height:obj.size}} source={require('./icons/RN_logo.png')}></Image>}
                    }}>

                    </Drawer.Screen>
                    <Drawer.Screen 
                    name='three' 
                    component={Screen3}
                        options={{drawerIcon:({foucused, color, size})=><Image style={{width:size, height:size}} source={require('./icons/RN_logo.png')}></Image>}}>   

                    </Drawer.Screen>
                </Drawer.Navigator>
            </NavigationContainer>
        );
    }
}