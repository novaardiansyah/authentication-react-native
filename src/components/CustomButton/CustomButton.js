import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const CustomInput = ({ text, onPress, variant = 'primary', color, bgColor }) => {
  return (
    <Pressable style={[
      styles.container, 
      styles[`container__${variant}`], 
      bgColor && { backgroundColor: bgColor }
    ]} onPress={onPress}>
      <Text style={[
        styles.text, 
        styles[`text__${variant}`],
        color && { color: color }
      ]}>{text}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',

    padding: 15,
    marginVertical: 5
  },
  container__tertiary: {
    
  },
  container__primary: {
    backgroundColor: '#3B71F3'
  },
  text: {
    fontWeight: 'bold',
    color: '#FFF'
  },
  text__tertiary: {
    color: 'grey'
  },
  text__primary: {}
})

export default CustomInput