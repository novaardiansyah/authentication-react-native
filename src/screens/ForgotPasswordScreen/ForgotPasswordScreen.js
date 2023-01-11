import react, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const ForgotPasswordScreen = () => {
  const navigation = useNavigation()

  const onSend = () => {
    navigation.navigate('ResetPassword')
  }

  const onSignIn = () => {
    navigation.navigate('SignIn')
  }

  const { control, handleSubmit } = useForm()
  
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput name="username" placeholder="Username" rules={{ required: 'Username is required.' }} control={control} />

        <CustomButton text="Send" onPress={handleSubmit(onSend)} />
        
        <CustomButton text="Back to Sign in" onPress={onSignIn} variant="tertiary" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  text: {
    color: 'grey',
    marginVertical: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10
  }
})

export default ForgotPasswordScreen