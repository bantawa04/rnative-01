import React, { useState } from "react"
import { View, Text, StyleSheet, Button, FlatList } from "react-native"

const ColorGeneratorScreen = () => {
  const [colors, setColors] = useState([])

  const genrateColor = () => {
    const color =
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")

    console.log(color)

    setColors([...colors, color])
    console.log(colors)
  }
  return (
    <View>
      <Text>Color Generator</Text>
      <Button title="Generate color" onPress={genrateColor} />
      <FlatList
        data={colors}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View
              style={{ height: 100, width: 100, backgroundColor: `${item}` }}
            ></View>
          )
        }}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({})

export default ColorGeneratorScreen
