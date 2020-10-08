import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, Alert} from 'react-native';
class MainComponent extends Component{

    //멤버변수
    msg="Hello world";

    //리액트의 독특한 멤버변수(객체) [state]
    state={
        data: "H",
        text: "E",
        text2: 'L',
        text3: 'L',
        text4: 'O',
        text5: 'H',
        text6: 'I',
    };

    render(){
        return (
            <View style={styels.root}>
                {/* 버튼의 클릭함수는 전역함수를 권장하지 않음 - 즉, 멤버 메소드로 함수를 만들것을 권장 */}
                {/* 멤버를 사용할때는 반드시 this. 키워드 필요!! */}
                <Button title='purple' onPress={this.purple} color='purple'></Button>

                {/* 글씨를 보여주는 뷰(컴포넌트) */}
                <Text style={styels.text}>{this.state.data}</Text>

                <Button title='indigo' color="indigo" onPress={this.indigo}></Button>
                <Text style={styels.text2}>{this.state.text}</Text>

                <View>
                    <Button title="blue" color="blue" onPress={this.blue}></Button>
                    <Text style={styels.text3}>{this.state.text2}</Text>
                </View>

                <Button title='green' color='green' onPress={this.green}></Button>
                <Text style={styels.text4}>{this.state.text3}</Text>

                <Button title="Yellow" color="yellow" onPress={this.yellow}></Button>
                <Text style={styels.text5}>{this.state.text4}</Text>

                <Button title="orange" color="orange" onPress={this.orange}></Button>
                <Text style={styels.text6}>{this.state.text5}</Text>

                <Button title="red" color="red" onPress={this.red}></Button>
                <Text style={styels.text7}>{this.state.text6}</Text>
                
            </View>
        );
    }//render method..

    indigo= ()=> {
        this.setState({text:"녕"});
    }

    blue= ()=> {
        this.setState({text2:"하"})
    }

    green= ()=> {
        this.setState({text3:'세'})
    }

    yellow= ()=> {
        this.setState({text4:'요'})
    }

    orange= ()=> {
        this.setState({text5:'안'})
    }

    red=() => {
        this.setState({text6:'녕'})
    }

    //멤버함수 - 메소드
    // function show() {} ERROR
    show(){
        // Alert.alert('clicked');
        //Text컴포넌트가 보여주는 글씨 변경
        //기존 기법과 완전 다름!!
        //글씨를 가진 뷰를 제어하는 것이 아니라
        //그 뷰가 보여주는 내용물을 가진 변수의 값을 변경하는 방식!!
        //this.msg='nice'; //error
        //이 버튼 클릭시 발동하는 함수를 선언적 함수로 만들면 
        //그 함수 안에서 this. 키워드는 이 클래스가 아니라 
        //이 함수를 실행시키는 Button을 의미함
        //그렇기에 this.msg가 MainComponent의 msg가 아니라
        //Button객체의 멤버 중에서 msg를 찾기 때문에 에러!!
    }

    //그래서 RN에서는 이벤트를 처리하는 함수를
    //반드시 화살표 함수로 만들 것을 권장함!!!
    show2= ()=>{
        
        //이 화살표함수 안에서 this. 는 MainComponent객체를 의미함
        this.msg= "Nice";
        Alert.alert(this.msg);

        //변수값을 바꿔도 화면을 갱신하지 않으면
        //화면에 변화가 없음
        //this.forceUpdate(); re render()함수 호출
        //이 방법은 권장하지 않음
    }

    purple= ()=>{
        //Alert.alert();

        //이 컴포넌트의 특별한 멤버변수[state]의
        //값을 변경하면 자동 화면갱신됨!!
        //반드시 변경은 setState()메소드를 이용해야만 함
        //this.state.data= 'Nice';
        this.setState({data:'안'});
    }


}//MainComponent class..

//가급적 버튼 이벤트 함수들은
//그 버튼을 가진 class 안에서 처리하는 것을 권장

//전역함수
function clickBtn(){
    Alert.alert('clicked button');
}

let clickBtn2= function(){
    Alert.alert('clicked!!');
}

let clickBtn3= ()=>{
    Alert.alert('화살표 함수 클릭');
}

//스타일시트 객체 생성
const styels= StyleSheet.create({
    root:{
        marginTop: 16,
        padding: 16,
        flex: 1
    },
    
    text:{
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        color: 'red',
        backgroundColor: 'black',
        marginBottom: 16
    },

    text2:{
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        color: 'orange',
        backgroundColor: 'black',
        marginBottom: 16
    },

    text3:{
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        color: 'yellow',
        backgroundColor: 'black',
        marginBottom: 16
    },

    text4:{
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        color: 'green',
        backgroundColor: 'black',
        marginBottom: 16
    },

    text5:{
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        color: 'blue',
        backgroundColor: 'black',
        marginBottom: 16
    },

    text6:{
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        color: 'indigo',
        backgroundColor: 'black',
        marginBottom: 16
    },

    text7:{
        fontWeight: 'bold',
        paddingLeft: 10,
        paddingRight: 10,
        color: 'purple',
        backgroundColor: 'black',
        marginBottom: 16
    }
});

//다른 문서인 index.js에서 이 MainComponent를 인식할 수 있도록
export default MainComponent