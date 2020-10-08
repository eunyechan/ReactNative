import React,{Component} from 'react';
import {View, Text, Button} from 'react-native';
import Third from './Third';

//Flux패턴을 구현한 클래스 Context객체 생성
export const MyContext= React.createContext();


export default class Main extends Component{
    state={
        data:'Hello'
    }

    changeData=msg=>this.setState({data:msg});

    render(){
        return (
            <MyContext.Provider
            //자식 컴포넌트에 전달할 데이터 설정
                value={{
                    data:this.state.data,       //데이터
                    changeData: this.changeData //메소드
                }}>
                <View style={{padding:16}}>
                    <Text>Main Data: {this.state.data}</Text>                
                    <First></First>
                </View>
            </MyContext.Provider>            
        );
    }
}

class First extends Component{
    render(){
        return (

            //Context.Provider가 제공한 데이터를
            //사용하고자 하는 컴포넌트에서는
            //Context.Consumer를 이용하여 데이터를 소비하면 된다.
            <MyContext.Consumer>
                {/* 이 컴포넌트가 보여질 뷰를 리턴해주는 콜백함수 작성 */}
                {
                    (value)=>{
                        return(
                            <View style={{padding:16}}>
                                <Text>Main의 데이터 : {value.data}</Text>
                
                                <Second></Second>
                                <Third></Third>
                            </View>
                            
                        )
                    }
                }

            </MyContext.Consumer>

           
        );
    }
}

class Second extends Component{
    render(){
        return (
            <MyContext.Consumer>
                {
                    (value)=>{
                        return(
                            <View style={{padding:16}}>
                                <Text>Main data:{value.data}</Text>
                                <Button title='btn' onPress={()=>value.changeData('nice')}></Button>
                            </View>
                        )

                    }
                }
            </MyContext.Consumer>
        );
    }
}