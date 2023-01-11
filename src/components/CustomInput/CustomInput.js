import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Controller } from 'react-hook-form'

const CustomInput = ({ control, name, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Controller control={control} name={name} render={({
        field: { onChange, onBlur, value }
      }) => (
        <TextInput placeholder={placeholder} value={value} onChangeText={onChange} onBlur={onBlur} style={styles.input} secureTextEntry={secureTextEntry} />
      )} />
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