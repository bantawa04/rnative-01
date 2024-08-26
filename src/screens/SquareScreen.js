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
        return state.red + action.amount > 255 || state.red + action.amount < 0
          ? state
          : { ...state, red: state.red + action.amount }

      case "green":
        return state.green + action.amount > 255 ||
          state.red + action.amount < 0
          ? state
          : { ...state, green: state.green + action.amount }
      case "blue":
        return state.blue + action.amount > 255 || state.red + action.amount < 0
          ? state
          : { ...state, blue: state.blue + action.amount }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, { red: 0, blue: 0, green: 0 })
  const { red, blue, green } = state
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
          dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }}
      />
      <ColorCounter
        title={"Green"}
        onIncrease={() => {
          dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }}
      />
      <ColorCounter
        title={"Blue"}
        onIncrease={() => {
          dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }}
        onDecrease={() => {
          dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
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
