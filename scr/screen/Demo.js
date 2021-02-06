import React from 'react';
import {StyleSheet, Image, Text, View,Button,
        TextInput, Alert} from 'react-native';
import Imsv from '../images/LeeHouse.jpg';
import Icon from '@expo/vector-icons/AntDesign';

export default function Demo (props){
  return(
      <View style={{backgroundColor:"#FFF",height:"100%"}}>
              <Image source ={Imsv}
                  style={{width:450,height:300}}
              />
              <View style={{
                    width:300,
                    height:50,
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:80,
                    borderWidth:2,
                    marginTop:20,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:10
                }}>
                    <Icon name="user" color="#00716F" size={24}/>
                    <TextInput
                        placeholder="Username"
                        style={{paddingHorizontal:10}}
                    />



                </View>
                <View style={{
                    width:300,
                    height:50,
                    flexDirection:"row",
                    alignItems:"center",
                    marginHorizontal:80,
                    borderWidth:2,
                    marginTop:15,
                    paddingHorizontal:10,
                    borderColor:"#00716F",
                    borderRadius:23,
                    paddingVertical:10
                }}>
                    <Icon name="lock" color="#00716F" size={24}/>
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={true}
                        style={{paddingHorizontal:10}}
                    />



                </View>
                <View style={{
                    width:300,
                    height:50,
                    marginHorizontal:80,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:10,


                }}>
                    <Button title='sign in'
                    style={{
                        color:"white",
                        }}/>
                </View>

                <View
                style={{
                    width:300,
                    height:50,
                    marginHorizontal:80,
                    alignItems:"center",
                    justifyContent:"center",
                    marginTop:10,


                }}>
                <Button title='New user?'
                  style={{
                    color:"white",
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
