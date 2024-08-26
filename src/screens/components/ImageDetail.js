import React from "react"
import { Text, Image, View } from "react-native"

const ImageDetail = (props) => {
  console.log(props)
  return (
    <View>
      <Image source={props.imageSource} />

      <Text>{props.title}</Text>
      <Text>Score:{props.imageScore}</Text>
    </View>
  )
}
export default ImageDetail
