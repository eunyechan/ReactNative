import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class MovieDetail extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text>MovieDetail</Text>
            </View>
        );
    }
}

const styles= StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#222222'
    }
})