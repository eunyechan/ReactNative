import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class ThirdTab extends Component{
    render(){
        return (
            <View style={ styles.root }>
                <Text style={ styles.text } >Third Tab</Text>
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