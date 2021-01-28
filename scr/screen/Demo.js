import React from 'react';
import {StyleSheet, Image, Text, View,Button,
        TextInput, Alert} from 'react-native';
import Imsv from '../images/LeeHouse.jpg';
import Icon from '@expo/vector-icons/AntDesign';

export default function Demo (props){
  return(
      <View style={{backgroundColor:"#FFF",height:"100%"}}>
              <Image source ={Imsv}
                  style={{width:400,height:400}}
              />
              <Text
               style={{
                   fontSize:30,
                   fontFamily:"SemiBold",
                   alignSelf:"center",
               }}
              >A Product of Mars House</Text>
                <View style={{
                    width:300,
                    height:50,
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:50,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>

                    <TextInput
                        style={{paddingHorizontal:10}}
                    />



                </View>
                <View style={{
                    width:300,
                    height:50,
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:55,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:2
                }}>
                    <Icon name="password" color="#00716F" size={24}/>
                    <TextInput
                        style={{paddingHorizontal:10}}
                    />



                </View>
                <View style={{
                    width:300,
                    height:50,
                    marginHorizontal:55,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:30,
                    backgroundColor:"#00716F",
                    paddingVertical:10,
                    borderRadius:23
                }}>
                    <Button title='Đăng nhập' style={{
                        color:"white",
                        fontFamily:"SemiBold"
                    }}/>
                </View>
        </View>

  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
  },
});
const styletextinput = StyleSheet.create({
  container:{
    width:300, height: 40, borderColor:'black', borderWidth: 1, justifyContent:'space-between',paddingHorizontal:10
  }
})
