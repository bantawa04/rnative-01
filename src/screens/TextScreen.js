import React, { useState, useReducer } from "react"
import { Button, View,StyleSheet, TextInput } from "react-native"

const TextScreen = () => {
    return <View>
        <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}/>
    </View>
}
const styles = StyleSheet.create({
    input:{
        margin:15,
        padding: 0,
        borderColor: 'black',
        borderWidth: 1,
    }

  });
export default TextScreen