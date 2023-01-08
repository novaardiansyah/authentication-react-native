import react, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const ResetPasswordScreen = () => {
  const [ code, setCode ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')

  const onResetPassword = () => {
    console.warn('Confirm pressed')
  }

  const onSignIn = () => {
    console.warn('Sign up pressed')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput placeholder="Confirmation Code" value={code} setValue={setCode} />
        <CustomInput placeholder="New Password" value={password} setValue={setPassword} secureTextEntry />
        <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureTextEntry />

        <CustomButton text="Reset Password" onPress={onResetPassword} />
        
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