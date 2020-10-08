import React,{Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView, Alert} from 'react-native';

export default class Main extends Component{

    constructor(){
        super();//필수

        this.state={
            text:'',
            movies:[]
        };
    }

    render(){
        return(
            <View style={styles.root}>
                <Button title='Fetch data from network' onPress={this.fetchData}></Button>

                <View>

                    <ScrollView style={styles.scroll}>
                        <Text style={styles.text}>{this.state.text}</Text>

                        {/* 영화정보를 가진 배열데이터 출력 */}
                        {/* 원래는 FlatList 컴포넌트 사용!! - 숙제.. */}
                        {
                            // this.state.movies.map((element, index) =>{
                            //     return(
                            //         <View key={index} style={{flexDirection:'row', margin:4, borderWidth:1}}>
                            //             <Text>{element.id}</Text>
                            //             <Text>{element.title}</Text>
                            //             <Text>{element.releaseYear}</Text>
                            //         </View>
                            //     );
                            // })
                        }
                    </ScrollView>

                </View>

                

            </View>
        );
    }

    fetchData=()=>{
        //1. Javascript의 XMLHttpRequest객체 사용하기
    //     let xhr= new XMLHttpRequest();

    //     xhr.onreadystatechange= ()=>{
    //         if(xhr.readyState==4 && xhr.status==200){
    //             this.setState({text:xhr.responseText});
    //         }
    //     }


    //     xhr.open('GET','https://raw.githubusercontent.com/eunyechan/RN/master/aa.txt',true);
    //     xhr.send();

    //2. Fetch 라이브러리 - JS의 기본 통신 라이브러리

    //fetch()함수: Jquery ajax()와 같은 역할
    // fetch('https://raw.githubusercontent.com/eunyechan/RN/master/aa.txt')
    // .then((response)=>{
    //     //response객체가 받은 데이터를 그냥 글씨 문자열로 변화해 주세여
    //     kkk();
    //     return response.text(); //이 처리도 비동기방식!!!

    // }).then((responseText)=>{

    //     this.setState({text: responseText});
    // }). catch((error)=>{alert(error)});

    // fetch('https://raw.githubusercontent.com/eunyechan/RN/master/aa.txt')
    // .then(response=>response.text()).then(responseText=>this.setState({text:responseText})).catch(error=>alert(error));

    //3. JSON파싱[open api 사용]

    // const url= 'https://reactnative.dev/movies.json';
    // fetch(url)
    // .then((res)=>{
    //     return res.json(); //내려받은 데이터 json문자열 ->객체로 변환
    // })
    // .then((jsonObj)=>{
    //     this.setState({text:jsonObj.title, movies: jsonObj.movies})
    // });

    //4. GET Method로 데이터 보내고 (echo(php))응답받기
    //보낼데이터
    let name="sam";
    let msg= "Hello world";

    //GET은 특별할 것이 없음. 왜? URL뒤에 보낼 데이터 붙히면 끝
    // const url='http://eunyechan.dothome.co.kr/RN/getMethod.php?name='+name+"&"+'msg='+msg;
    // const url=`http://eunyechan.dothome.co.kr/RN/getMethod.php?name?name=${name}&msg=${msg}`;
    // fetch(url).then(res=>res.text()).then(resText=>this.setState({text:resText}));

    // //POST방식
    // let data=`name=${name}&msg=${msg}`;
    // const url= 'http://eunyechan.dothome.co.kr/RN/postMethod.php'
    // fetch(url,{
    //     method:'POST',
    //     headers:{
    //         'Content-Type':'application/x-www-form-urlencoded'
    //     },
    //     body:data
    // })
    // .then(res=>res.text()).then(resText=>this.setState({text:resText}));

    //JSON으로 서버에 데이터 전달하기
    //보낼 데이터가 변수로 있는 경우보다는 객체로 있는 경우가 많음
    let dataObj={
        name:"sam",
        msg:"Hello",
        age:20
    }

    //위 객체를 json문자열로 변환!!
    const jsonData= JSON.stringify(dataObj); //객체->json문자열  <->json.parse json문자열->객체
    // alert(jsonData);

    const url='http://eunyechan.dothome.co.kr/RN/jsonRequest.php'
    fetch(url,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:jsonData
        // body: JSON.stringify(dataObj);  줄여서 쓸수도 있음
    })
    .then(res=>{
        return res.json();
    })
    .then(json =>{
        let aaa= jsonObj.name+","+jsonObj.age+','+jsonObj.msg;
        this.setState({text: aaa});
    });


   
    }
}


const styles= StyleSheet.create({
    root:{
        flex:1,
        padding:16
    },

    scroll:{
        marginTop:16,
        backgroundColor:'gray'
        
    },

    text:{
        padding:8,
        color:'white'
    }
});

