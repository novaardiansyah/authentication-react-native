import { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useForm } from 'react-hook-form'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const ResetPasswordScreen = () => {  
  const navigation = useNavigation()

  const onResetPassword = () => {
    navigation.navigate('SignIn')
  }

  const onSignIn = () => {
    navigation.navigate('SignIn')
  }

  const { control, handleSubmit, watch } = useForm()
  const password = watch('password')

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput name="confirmCode" placeholder="Confirmation Code" rules={{ required: 'Confirmation Code is required.' }} control={control} />
        <CustomInput name="password" placeholder="New Password" rules={{ required: 'New Password is required.', minLength: { value: 5, message: 'Password contains at least 5 characters.' } }} control={control} secureTextEntry />
        <CustomInput name="confirmPassword" placeholder="Confirm Password" rules={{ validate: value => value === password ? true : 'Confirm Password is not valid.' }} control={control} secureTextEntry />

        <CustomButton text="Reset Password" onPress={handleSubmit(onResetPassword)} />
        
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

export default ResetPasswordScreen