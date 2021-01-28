import React from 'react';
import {StyleSheet, Image, Text, View,Button,
        TextInput, Alert} from 'react-native';
import Imsv from '../images/image.jpg'
export default function Login (props){
  return(
    <View>
       <View style={styles.container}>
         <Image source= {Imsv}
           style={{width:500,height:200}}
         />
         <TextInput
            style={{height: 40}}
            placeholder="Username"/>
        <TextInput
               style={{height: 40}}
               placeholder="Password"/>
         <Button title='Sign In'
          onPress={() => Alert.alert('Nhấn chi rồi éo vào được! Hehe')}/>

       </View>
       <View>
        <Button title='Create Account?'/>
        <Button title='I forget password!'/>
       </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
