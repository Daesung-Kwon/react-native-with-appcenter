import React, { Component } from 'react';
import { Alert, Text, TouchableOpacity, StyleSheet } from 'react-native';

const AlertExample = () => {
    const showAlert = () =>{
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
            {cancelable: false},
          );
    }
    return (
       <TouchableOpacity onPress = {showAlert} style = {styles.button}>
          <Text>Alert</Text>
       </TouchableOpacity>
    )
 }
 export default AlertExample
 
 const styles = StyleSheet.create ({
    button: {
       backgroundColor: '#4ba37b',
       width: 100,
       borderRadius: 50,
       justifyContent: "center",
       alignItems: 'center',
       marginTop: 20,
    }
 })