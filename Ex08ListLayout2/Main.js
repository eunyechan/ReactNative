import React, {Component} from 'react';
import {View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Alert} from 'react-native';

export default class Main extends Component{

//생성자
constructor(){        
    super();//명시적으로 super()없으면 에러

    //대량의 데이터를 멤버변수로 만들기 [ name, message, img를 property(멤버)로 가진 객체들 배열 ]
    this.state={
        datas : [
            {name:"sam", message:"Hello world", img:require('./images/pa.jpg')},
            {name:"robin", message:"Hello RN", img:require('./images/ig.jpg')},
            {name:"hong", message:"Hello react", img:require('./images/im.jpg')},
            {name:"kim", message:"Hello hybrid", img:require('./images/images.jpg')},
            {name:"rosa", message:"Hello ios", img:require('./images/img.jpg')},
            {name:"sam", message:"Hello world", img:require('./images/pa.jpg')},
            {name:"robin", message:"Hello RN", img:require('./images/ig.jpg')},
            {name:"hong", message:"Hello react", img:require('./images/im.jpg')},
            {name:"kim", message:"Hello hybrid", img:require('./images/images.jpg')},
            {name:"rosa", message:"Hello ios", img:require('./images/img.jpg')}
        ]
    }
}

render(){

    return (
        // 대량의 데이터여서 화면의 높이를 벗어날 수 있어서 ScrollView 사용 
        <ScrollView style= { style.container }>
        {/* 대량의 데이터 배열의 요소개수 만큼 Compoent를 리턴하는 map()메소드 사용 */}
        {
            this.state.datas.map( ( element, index )=>{
                return (                        
                    //1. key속성이 없으면 경고문구 보여짐.. 배열요소들의 값을 구별하는 정해진 식별자 key props적용
                    // <View key={index} style={style.item}>
                    //     <Image source={element.img} style={style.itemImg}></Image>
                    //     <View>
                    //         <Text style={style.itemName}>{element.name}</Text>
                    //         <Text style={style.itemMessage}>{element.name}</Text>
                    //     </View>

                    // </View>

                    //2. 아이템뷰를 클릭했을 때 반응하기 : 해당 아이템의 이름 출력 - onPress에 메소드만 넣으면 아이템번호를 구별할 수 없음.
                    // <TouchableOpacity key={index} style={style.item} onPress={this.clickItem}>
                    //     <Image source={element.img} style={style.itemImg}></Image>
                    //     <View>
                    //         <Text style={style.itemName}>{element.name}</Text>
                    //         <Text style={style.itemMessage}>{element.message}</Text>
                    //     </View>
                    // </TouchableOpacity>

                    //3. 아이템뷰를 클릭했을 때 반응하기: 해당 아이템의 이름 출력
                    // -onPress에 익명콜백함수를 넣고 그 곳에서 멤버메소드의 index전달
                    <TouchableOpacity key={index} style={style.item} onPress={()=>{this.clickItem2(index);}}>
                        <Image source={element.img} style={style.itemImg}></Image>
                        <View style={{flexDirection:'column'}}>
                            <Text style={style.itemName}>{element.name}</Text>
                            <Text style={style.itemMessage}>{element.message}</Text>

                        </View>

                    </TouchableOpacity>
                    

                   
                    
                )
            })
        }
        </ScrollView>
    );

}//render method..

//2.실습시에 Item을 클릭했을 때 반응하기
clickItem= ()=>{
    alert();
    //alert("index : " + index);//error : index 식별 불가
}

//3. 실습시에 Item을 클릭했을 때 반응하기 : 파라미터로 index받기
clickItem2=(index)=>{
    //alert('index:'+index;

    //빽틱(``)안에 변수명 바로 결합하기 ``안에 ${변수명}을 넣으면 변수명 구분 [php의 ""와 유사함]
    // -주의! 작은 따옴표 ``아님
    alert(`name: ${this.state.datas[index].name}`);
}



}//MainComponent class...


const style= StyleSheet.create({

    root:{
        flex:1,
        padding:16
    },

    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12
    },

    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight:8
    },

    itemName:{
        fontSize:24,
        fontWeight:"bold",
    },

    itemMessage:{
        fontSize:16,
        fontStyle:'italic'

    }
});