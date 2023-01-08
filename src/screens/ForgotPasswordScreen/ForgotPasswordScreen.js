import react, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const ForgotPasswordScreen = () => {
  const [ username, setUsername ] = useState('')

  const onSend = () => {
    console.warn('Send pressed')
  }

  const onSignIn = () => {
    console.warn('Sign up pressed')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput placeholder="Username" value={username} setValue={setUsername} />

        <CustomButton text="Send" onPress={onSend} />
        
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