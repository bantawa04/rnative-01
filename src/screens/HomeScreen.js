import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  return <View>
      <Text style={styles.text}>Hi there</Text>
      <Button title="Go to components screen" onPress={()=> navigation.navigate("Components")}/>
      <Button title="Go to components screen" onPress={()=> navigation.navigate("ListScreen")}/>
      <Button title="Go to Image screen" onPress={()=> navigation.navigate("ImageScreen")}/>
      <Button title="Go to Counter screen" onPress={()=> navigation.navigate("CounterScreen")}/>
      <Button title="Go to Color Generator screen" onPress={()=> navigation.navigate("ColorGeneratorScreen")}/>
      <Button title="Go to Color Square screen" onPress={()=> navigation.navigate("SquareScreen")}/>
      <Button title="Go to Text screen" onPress={()=> navigation.navigate("TextScreen")}/>
    </View>
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
