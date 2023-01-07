import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.input} value={value} onChange={setValue} secureTextEntry={secureTextEntry} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '100%',

    borderColor: '#E8E8E8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 5
  },
  input: {}
})

export default CustomInput