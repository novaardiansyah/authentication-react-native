import react, { useState } from 'react'
import { View, Text, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'

import Logo from '../../../assets/images/Logo_1.png'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'

const SignInScreen = () => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const { height } = useWindowDimensions()

  const onSignIn = () => {
    console.warn('Sign in pressed')
  }

  const onSignUp = () => {
    console.warn('Sign up pressed')
  }

  const onForgotPassword = () => {
    console.warn('Forgot password pressed')
  }

  const onSignInWithFacebook = () => {
    console.warn('Sign in with Facebook pressed')
  }

  const onSignInWithGoogle = () => {
    console.warn('Sign in with Google pressed')
  }

  const onSignInWithApple = () => {
    console.warn('Sign in with Apple pressed')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />

        <CustomButton text="Sign In" onPress={onSignIn} />
        <CustomButton text="Forgot Password" onPress={onForgotPassword} variant="tertiary" />
        <CustomButton text="Sign In with Facebook" onPress={onSignInWithFacebook} bgColor="#E7EAF4" color="#4765A9" />
        <CustomButton text="Sign In with Google" onPress={onSignInWithGoogle} bgColor="#FAE9EA" color="#DD4D44" />
        <CustomButton text="Sign In with Apple" onPress={onSignInWithApple} bgColor="#E3E3E3" color="#363636" />
        <CustomButton text="Don't have an account? Create one" onPress={onSignUp} variant="tertiary" />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20
  },
  logo: {
    width: '70%',
    maxWidth: 300,
    maxHeight: 200
  }
})

export default SignInScreen