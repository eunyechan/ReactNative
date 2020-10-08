import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

export default class Main extends Component{

    state={
        msg:'Hello'
    }

    clickBtn=()=>{
        this.setState({msg:'nice'});
    }

    render(){
        return(
            <View style={styles.root}>
                {/* 새로운 컴포넌트를 만드는 2가지 방법 */}
                {/* 1. stateful Component: Component를 상속한 class */}
                {/* 2. stateless Component: 마치 함수만들 듯이 Component 제작 [함수형 컴포넌트라고도 부름] */}

                
                <AAA onPress={ this.clickBtn }></AAA>
                <BBB msg={ this.state.msg }></BBB>     
            </View>
        )
    }
}

const BBB=({msg})=>{
    return(
        <View>
            <Text style={styles.text}>{msg}</Text>
        </View>
    );
}

const AAA= (props)=>{
    return(
        <View>
            <Button title='btn' onPress={props.onPress}>
            </Button>
        </View>
    );
}

//원래 사용하던 컴포넌트 설계
class MyComponent extends Component{
    render(){
        return(
            <View>
                <Text style={styles.text}>Hello {this.props.name}</Text>
            </View>
        );
    }

}

//함수형 컴포넌트
const MyComponent2= ({title,msg})=>{
    return(
        <View>
            <Text style={styles.text}>Nice {title}</Text>
            <Text style={styles.text}>{msg}</Text>
        </View>
    );
}

const styles= StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },

    text:{
        margin:8,
        padding:8,
        fontWeight:'bold'
    }
});