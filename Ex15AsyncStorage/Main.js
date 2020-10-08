import React, {Component} from 'react';
import {View, Button, Text, StyleSheet, TextInput} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default class Main extends Component{
    state={
        text:'result',
        //TextInput에 입력된 글씨를 가진 변수
        inputText:''
    }
    render(){
        return(
            <View style={styles.root}>
                <TextInput
                    value={this.state.inputText}
                    onChangeText={this.changeText}
                    style={styles.textInput}
                    placeholder='Enter Some Text here'>

                </TextInput>
                <Button onPress={this.saveData} title='save button'></Button>

                <View style={{marginTop:16}}></View>

                <Button onPress={this.loadData} color='orange' title='load button'></Button>
                <Text style={styles.text}>{this.state.text}</Text>

                <Button onPress={this.getData} title='ES7을 이용한 비동기 처리'></Button>
            </View>
        );
    }

    getData= async ()=>{
        const value= await AsyncStorage.getItem('Data');
        if(value !=null) this.setState({text:value})
    }

    loadData=()=>{
        //저장되어 있는 값 읽기 'Data' 식별자로 저장된!!
        //비동기 방식임 - 별도 스레드라는 것..
        //즉.. 값을 주세여..라는 요청과 별도로 메인스레드 진행됨
        //비동기처리는 promiss문법으로 처리 .then()
        AsyncStorage.getItem('Data').then((value)=>{this.setState({text:value})});
    }

    changeText=(value)=>{
        this.setState({inputText:value});
    }

    saveData= async ()=>{
        //AsyncStorage에 저장 (마치 android SharedPreferencesd와 비슷: 키-value)
        AsyncStorage.setItem('Data', this.state.inputText);
        alert('save data');

        this.setState({inputText:''});
    }
    

}

const styles= StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },
    textInput:{
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderRadius:8,
        borderColor:'black',
        marginBottom:16
    },

    text:{
        marginTop:16,
        paddingRight:8,
        fontWeight:'bold',
        fontSize:24

    }
});