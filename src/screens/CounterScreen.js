import React, { useState, useReducer } from "react"
import { Button, View, Text } from "react-native"

const CounterScreen = () => {
  const COUNT = 1
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {...state, count: state.count + COUNT}
      case "decrement":
        return state.count < 0 ? 0 : {...state, count: state.count - COUNT}
      default:
        return state
    }
  }
  const {state, dispatch} = useReducer(reducer,{count:0})

  const setCounter = (type) => {
    dispatch(type)
  }

  return (
    <View>
      <Button onPress={() => setCounter("increment")} title="Increment" />
      <Button onPress={() => setCounter("decrement")} title="Decrement" />

      <Text>Current Count:{state.count}</Text>
    </View>
  )
}
export default CounterScreen
