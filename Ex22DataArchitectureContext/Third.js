import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

import {MyContext} from './Main';

export default class Third extends Component{
    render(){
        return(
            <MyContext.Consumer>
                {
                    value=>(
                        <View>
                            <Text>data: {value.date}</Text>
                        </View>
                    )
                   
                }
            </MyContext.Consumer>
        );
    }
}