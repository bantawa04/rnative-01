import React from "react";
import {View, Text, StyleSheet,FlatList } from "react-native";

const ListScreen = () => {
    const firends = [
        {name: 'Friend 1', age: 20},
        {name: 'Friend 2', age: 22},
        {name: 'Friend 3', age: 24},
        {name: 'Friend 4', age: 26},
        {name: 'Friend 5', age: 28},
        {name: 'Friend 6', age: 30},
        {name: 'Friend 7', age: 32},
        {name: 'Friend 8', age: 34},
        {name: 'Friend 9', age: 36},
        {name: 'Friend 10', age: 38},
        {name: 'Friend 11', age: 40},
        {name: 'Friend 12', age: 42},
        {name: 'Friend 13', age: 44},
        {name: 'Friend 14', age: 46},
        {name: 'Friend 15', age: 48}
    ]
  return <View>
    <Text style={styles.textStyle}>List Screen</Text>
    <FlatList 
        data={firends} 
        keyExtractor={(firend) => firend.name}
            renderItem={({item}) => {
                return <Text style={styles.listItem}>{item.name} - Age {item.age}</Text>
            }}>

            </FlatList>
  </View>
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  listItem: {
    marginVertical: 15,
    fontSize:20
  }
});

export default ListScreen;
