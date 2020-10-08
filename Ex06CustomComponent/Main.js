import React, {Component} from 'react';
import {View, Button, StyleSheet, Text, Alert} from 'react-native';

import MyComponent3 from './MyComponent3';
import MyComponent4 from './MyComponent4';
import MyComponent5 from './MyComponent5';
export default class Main extends Component{



    render(){

        //6. 실습에서 사용할 render메소드의 지역변수
        let titles=['first', 'second', 'third'];
        //먼저 titles적용 후에 추가로..색상도..
        let colors=['green', 'blue', 'black']
        return(
            
            //1. 나만의 Component를 만들어서 사용하기..
            // <View style={style.container}>
            //     <Text>Hello</Text>

            //     {/* MyComponent 사용 */}
            //     <MyComponent></MyComponent>
            //     <MyComponent></MyComponent>
            // </View>
            //이를 이용하여 header, baby, nav등을 영역별로 나누어 작성할 수 있음.

            //2. 가만보면 글씨가 똑같은. "Hello sam!".
            //MyComponent를 사용할 때 전달해 줄 수 있는 방법이 있음. props [propety:속성]
            // <View style={style.container}>
            //     <Text>Hello world</Text>

            //     {/* MyComponent2 사용 */}
            //     {/* 컴포넌트를 사용할 때 속성(property)으로 값을 전달: 속성명은 임의로 지정 */}
            //     <MyComponent2 name='sam'></MyComponent2>
            //     <MyComponent2 name='robin'></MyComponent2>
            //     <MyComponent2 name='hong'></MyComponent2>

            // </View>

            //3.1 함수를 커스텀컴포넌트에 전달하기
            // <View style={style.container}>
            //     <Text>Hello world</Text>

            //     {/* onPress속성에 함수객체 전달 */}
            //     <MyComponent3 onPress={this.clickBtn} title="first"></MyComponent3>
            //     <MyComponent3 onPress={this.clickBtn} title="second"></MyComponent3>

            // </View>

            //3.2 혹시 MyComponent3에서 사용하는 속성을 모두 전달하지 않는다면?
            // <View style={style.container}>
            //     <Text>Hello</Text>

            //     <MyComponent3 onPress={this.clickBtn} title="first"></MyComponent3>
            //     {/* onPress속성으로 함수를 전달하지 않으면 단지 클릭했을 때 아무 반응을 안할 뿐임 */}
            //     <MyComponent3 title="second"></MyComponent3>
            //     {/* 하지만 title속성은 필수로 문자열을 전달해야 하므로 title속성이 전달되지 않으면 에러남 */}
            //     <MyComponent3></MyComponent3>

            // </View>

            //4. 이럴 때 props를 전달받지 못했을 때의 기본값(default props)가 필요할 수 있음.
            //MyComponent4.js를 만들어서 defaultProps 만들기
            // <View style={style.container}>
            //     <Text>Hello</Text>

            //     {/* onPress속성에 함수객체 전달 */}
            //     <MyComponent4 title='first' color='indigo' onPress={this.clickBtn}></MyComponent4>
            //     <MyComponent4 title='second' color='blue' onPress={this.clickBtn}></MyComponent4>
            //     {/* 전달 안하기 */}
            //     <MyComponent4></MyComponent4>

            //     {/* color만 전달 안하기 */}
            //     <MyComponent4 title='third' onPress={this.clickBtn}></MyComponent4>
            // </View>

            //5. 속성이 여러개일때 한번에 줄 수 있는가? c와 js에 파라미터의 ...argument 기법 사용
            // <View style={style.container}>
            //     <MyComponent5 title='first' color='green' onPress={this.clickBtn}></MyComponent5>
            //     <MyComponent5 title='second' color='orange'></MyComponent5>
            //     <MyComponent5 title='third' onPress={this.clickBtn}></MyComponent5>
            // </View>

            //## 추가 1.서로 다른 컴포넌트들끼리 제어하고자 할때는 부모컨테이너를 통해서 서로 제어해야함.: 수업할 수 있다면 소개 ##//
            //## state와 props의 상호간의 연결에 대한 연습 ################################//

            //## 추가 2. 새로운 Component를 만들 때 statless 컴포넌트도 있음: 지금 수업하기 보다는 나중에 수업하는 것이 혼동스럽지 않을 듯 함####/


            //6.title의 문자열 값을 배열데이터로 전달해보기 [render()메소드 안에 지역변수로 만들어 보기]
            <View style={style.container}>
                {/* js의 지역변수이므로 {}안에 this키워드 없이 배열요소 사용 */}
                {/* <MyComponent5 title={titles[0]}></MyComponent5>
                <MyComponent5 title={titles[1]}></MyComponent5>
                <MyComponent5 title={titles[2]}></MyComponent5> */}

                {/* 먼저 위의 title만 실습 한 후에 추가로 colors지역변수 추가 후 적용 */}

                <MyComponent5 color={colors[0]} title={titles[0]}></MyComponent5>
                <MyComponent5 color={colors[1]} title={titles[1]}></MyComponent5>
                <MyComponent5 color={colors[2]} title={titles[2]}></MyComponent5>

            </View>
            
            //Ex07ListView1프로젝트를 만들어서 위 기법을 응용한 기본 리스트 뷰의 형태 만들어 보기!!
            
        );
    }//render method..

    //3.1실습에서 사용하는 멤버함수[메소드]..화살표함수
    clickBtn=()=>{
        alert('click');
    }

}//Main class..



//1. 실습 진행할 때
//Custom Component만들기 [android custom view]
class MyComponent extends Component{
    render(){
        return(
            <View style={{margin:16}}>
                <Text style={{marginBottom:8}}>Hello sam!</Text>
                <Button title='click me'></Button>
            </View>
        );
    }
}


//2. 실습 진행할 때
//Cumtom Component만들기 [android custom view]
class MyComponent2 extends Component{
    render(){
        return(
            <View style={{margin:16}}>
                {/* MyComponent2컴포넌트를 사용할 때 설정한 속성(프로퍼티)중 name속성으로 지정한 값 사용하기 */}
                <Text style={{marginBottom:8}}>Hello{this.props.name}</Text>
                <Button title='click me'></Button>

            </View>
        );
    }
}

//스타일 객체
const style= StyleSheet.create({
    container:{
        flex:1,
    },
});





