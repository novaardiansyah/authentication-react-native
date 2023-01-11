import React from 'react'
import { View, TextInput, StyleSheet, Text } from 'react-native'
import { Controller } from 'react-hook-form'

const CustomInput = ({ control, name, placeholder, rules = {}, secureTextEntry }) => {
  return (
    <Controller control={control} name={name} rules={rules} render={({
      field: { onChange, onBlur, value },
      fieldState: { error }
    }) => (
      <>
        <View style={[ styles.container, error ? styles.isInvalid : styles.isValid ]}>
          <TextInput placeholder={placeholder} value={value} onChangeText={onChange} onBlur={onBlur} style={styles.input} secureTextEntry={secureTextEntry} />
        </View>
        { error && (<Text style={ styles.textError }>{error.message || 'Something wrong!'}</Text>) }
      </>
    )} />
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '100%',

    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    marginVertical: 9
  },
  input: {},
  isInvalid: {
    borderColor: 'red'
  },
  isValid: {
    borderColor: 'green'
  },
  textError: {
    color: 'red',
    alignSelf: 'stretch',
    marginTop: 0,
    marginBottom: 9
  }
})

export default CustomInput