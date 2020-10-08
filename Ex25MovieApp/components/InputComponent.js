import React  from 'react';
import {View,TextInput, StyleSheet} from 'react-native';

//단순 스타일링된 TextInput을 만드는 것이므로
//state는 사용할 필요 없음..그렇기에.. 간단한 함수형 컴포넌트로 제작
export default InputComponent= (props)=>{
    return(
        <View style={styles.container}>

            <TextInput
                selectionColor='#929292'//글씨 드래그 색깔
                autoCapitalize="none"   //대소문자
                autoCorrect={false}     //글씨 자동교정
                placeholderTextColor='#567891'
                secureTextEntry={props.secureTextEntry}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText} //글씨 변경시마다 실행된 메소드 지정- property로 전달받음
                style={styles.input}></TextInput>

        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingLeft:16,
        paddingRight:16,
        borderWidth:1,
        borderColor:'#d3d3d3',
        borderRadius:4,
        backgroundColor:'#FAFAFA',
        marginTop:8,
        marginBottom:8
    },

    input:{
        flex:1,
        color:'#929292',
 
    }
})