import React, {Component} from 'react';
import{View, Text, Button, StyleSheet} from'react-native';

export default class Home extends Component{
    render(){
        return(
            <View style={styles.root}>
                <Text style={styles.Text}>Home Screen</Text>
                <Button title="Go to second" onPress={this.clickbtn}></Button>
            </View>
        );
    }

    clickbtn=()=>{
        //react-navigation에서 네비게이팅하는 코드
        //[Navigator에 의해 보여지는 컴포넌트들은 자동으로 props변수안에 Navigation이라는 객체가 전달되어 있음]
        //this.props.navigation.navigate('second');

        //현재 컴포넌트를 화면전환하면서 finish()하고 싶다면
        //this.props.navigation.replace('second');

        //화면전환시에 데이터 넘겨주기(android Extra Data와 같음)
        this.props.navigation.navigate('second', {name:"sam", age:20});
    }
}

const styles= StyleSheet.create({
    root:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },

    Text:{
        padding:8,
        fontWeight:'bold'
    }
})