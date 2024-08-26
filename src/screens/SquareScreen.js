import React, { useState, useReducer } from "react"
import { View, Text } from "react-native"
import ColorCounter from "./components/ColorCounter"

const SquareScreen = () => {
  // const [red, setRed] = useState(0)
  // const [green, setGreen] = useState(0)
  // const [blue, setBlue] = useState(0)
  const COLOR_INCREMENT = 15
  const reducer = (state, action) => {
    switch (action.colorToChange) {
      case "red":
        return {...state, red: state.red + action.amount}
      case "green":
        return {...state, green: state.green + action.amount}
      case "blue":
        return {...state, blue: state.blue + action.amount}
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 })

  // const setColor = (color, change) => {
  //     switch (color){
  //       case 'red':
  //         red + change > 255 || red + change < 0 ? null : setRed(red + change)
  //         return
  //       case 'blue':
  //         blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
  //         return
  //       case 'green':
  //         green + change > 255 || green + change < 0 ? null : setGreen(green + change)
  //         return
  //       default:
  //         return
  //     }
  // }

  return (
    <View>
      <ColorCounter
        title={"Red"}
        onIncrease={() => {
          // setColor("red" , COLOR_INCREMENT)
        }}
        onDecrease={() => {
          // setColor("red" , -1 * COLOR_INCREMENT)
        }}
      />
      <ColorCounter
        title={"Green"}
        onIncrease={() => {
          // setColor("green" , COLOR_INCREMENT)
        }}
        onDecrease={() => {
          // setColor("green" , -1 * COLOR_INCREMENT)
        }}
      />
      <ColorCounter
        title={"Blue"}
        onIncrease={() => {
          setColor("blue", COLOR_INCREMENT)
        }}
        onDecrease={() => {
          setColor("blue", -1 * COLOR_INCREMENT)
        }}
      />
      <View
        style={{
          height: 200,
          width: 200,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      ></View>
    </View>
  )
}
export default SquareScreen
