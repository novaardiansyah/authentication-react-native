import { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const ConfirmEmailScreen = () => {
  const [ email, setEmail ] = useState('')
  const [ code, setCode ] = useState('')

  const navigation = useNavigation()

  const onConfirm = () => {
    navigation.navigate('Home')
  }

  const onSignIn = () => {
    navigation.navigate('SignIn')
  }

  const onResendCode = () => {
    console.warn('Resend code pressed')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm your email account</Text>

        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Confirmation Code" value={code} setValue={setCode} />

        <CustomButton text="Confirm" onPress={onConfirm} />
        
        <CustomButton text="Resend code" onPress={onResendCode} variant="secondary" />
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
  link: {
    color: '#FDB075'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10
  }
})

export default ConfirmEmailScreen