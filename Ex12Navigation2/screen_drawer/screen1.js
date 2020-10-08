import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class screen1 extends Component{
    render(){
        return (
            <View style={ styles.root }>
                <Text style={ styles.text } >Screen #1</Text>

                <Button title='open drawer' onPress={()=>this.props.navigation.openDrawer()}></Button>
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