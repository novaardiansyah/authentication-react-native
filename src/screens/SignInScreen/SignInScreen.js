import { useState } from 'react'
import { View, Image, StyleSheet, useWindowDimensions, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Logo from '../../../assets/images/Logo_1.png'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton'

const SignInScreen = () => {
  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const { height } = useWindowDimensions()

  const navigation = useNavigation()

  const onSignIn = () => {
    navigation.navigate('Home')
  }

  const onSignUp = () => {
    navigation.navigate('SignUp')
  }

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />

        <CustomButton text="Sign In" onPress={onSignIn} />
        <CustomButton text="Forgot Password" onPress={onForgotPassword} variant="tertiary" />
        
        <SocialSignInButton />

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