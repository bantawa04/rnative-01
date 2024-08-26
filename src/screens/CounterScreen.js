import React, { useState } from "react"
import { Button, View, Text } from "react-native"

const CounterScreen = () => {
  const [counter, setCounter] = useState(0)

  return (
    <View>

      <Button
        onPress={() =>
          setCounter(counter+1)
        }
        title="Increment"
        />
      <Button
        onPress={() =>
          setCounter(counter-1)
        }
        title="Decrement"
      />
        
        <Text>Current Count:{counter}</Text>
    </View>
  )
}
export default CounterScreen
