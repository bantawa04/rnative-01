import React, { useState } from "react"
import { View, Text } from "react-native"
import ColorCounter from "./components/ColorCounter"

const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setBlue] = useState(0)
  const [blue, setGreen] = useState(0)

  const COLOR_INCREMENT =15
  
  console.log(red, green, blue);
  
  return (
    <View>
      <ColorCounter
        title={"Red"}
        onIncrease={() => {
          setRed(red + COLOR_INCREMENT)
        }}
        onDecrease={() => {
          setRed(red - COLOR_INCREMENT)
        }}
      />
      <ColorCounter
        title={"Green"}
        onIncrease={() => {
          setBlue(red + COLOR_INCREMENT)
        }}
        onDecrease={() => {
          setBlue(red - COLOR_INCREMENT)
        }}
      />
      <ColorCounter
        title={"Blue"}
        onIncrease={() => {
          setGreen(red + COLOR_INCREMENT)
        }}
        onDecrease={() => {
          setGreen(red - COLOR_INCREMENT)
        }}
      />
      <View style={{height: 100, width:100, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}>

        </View>
    </View>
  )
}
export default SquareScreen
