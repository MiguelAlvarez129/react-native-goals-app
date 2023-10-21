import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface ButtonProps {
  text: string,
  inverted?: boolean | null,
  onPressHandler: () => void,
  children?: any,
}

export default function Button(props : ButtonProps) {
  const
  inverted = "border-primary bg-accent ",
  normal = "border-accent bg-primary dark:border-primary dark:bg-secondary";
  return (
    <TouchableOpacity className={`flex-1 flex-row justify-center items-center border-1 border-2 border-b-4 active:border-b-0 active:opacity-100 active:mt-1  ${props.inverted ?  inverted : normal}`}
    onPress={props.onPressHandler}
    >
      <Text className={`font-bold  ${ props.inverted ? "text-primary" : "text-accent dark:text-primary" }`}> 
      {props.text} 
      </Text>
      <View className='ml-2'>
      {props.children} 
      </View>
    </TouchableOpacity>
  )
}
