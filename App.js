import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Icon from '@expo/vector-icons/AntDesign';
import { StyleSheet, Text, View, Button } from 'react-native';
import Login from './scr/screen/Login';
import Demo from './scr/screen/Demo';
<<<<<<< Updated upstream
var t=1
=======
>>>>>>> Stashed changes
export default class App extends React.Component {
    render() {
        return (
          <View style = { styles.container }>
<<<<<<< Updated upstream
            <Login/>

=======
            <Demo/>
>>>>>>> Stashed changes
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
