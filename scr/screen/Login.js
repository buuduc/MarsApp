import React from 'react';
import {StyleSheet, Image, Text, View,Button,
        TextInput, Alert} from 'react-native';
import Imsv from '../images/mars.jpg'
export default function Login (props){
  return(
    <View>
       <View style={styles.container}>
         <Image source= {Imsv}
           style={{width:400,height:300}}
         />
         <TextInput

            placeholder="Username"
            style={styletextinput.container}/>
         <TextInput
            placeholder="Password"
            style={styletextinput.container}/>
         <Button title='Sign In'
          onPress={() => Alert.alert('Hello')}/>

       </View>
       <View>
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
const styletextinput = StyleSheet.create({
  container:{
    width:300, height: 40,
    borderColor:"#00716F",
    borderRadius:23,
  }
})
