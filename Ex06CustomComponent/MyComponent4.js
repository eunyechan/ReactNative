import React, {Component} from 'react';
import {View, Button} from 'react-native';

export default class MyComponent4 extends Component{
    render(){
        return(
            <View style={{margin:16}}>
                <Button title={this.props.title} color={this.props.color} onPress={this.props.onPress}></Button>
            </View>
        );
    }
    
}