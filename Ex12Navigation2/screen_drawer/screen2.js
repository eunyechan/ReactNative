import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class screen2 extends Component{
    render(){
        return (
            <View style={ styles.root }>
                <Text style={ styles.text } >Screen #2</Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    text:{
        padding:8,
        fontWeight:'bold'
    }
});