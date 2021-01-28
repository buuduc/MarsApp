import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './scr/screen/Login';
import Demo from './scr/screen/Demo';
t=1
export default class App extends React.Component {
    render() {
        return (
          <View style = { styles.container }>
            
            <Login/>

          </View >



        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#373a40',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
