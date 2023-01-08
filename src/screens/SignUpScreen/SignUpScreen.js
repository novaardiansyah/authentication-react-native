import react, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton'

const SignUpScreen = () => {
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')

  const onSignUp = () => {
    console.warn('Sign up pressed')
  }

  const onSignIn = () => {
    console.warn('Sign up pressed')
  }

  const onTermsOfUse = () => {
    console.warn('Terms of use pressed')
  }

  const onPrivacyPolicy = () => {
    console.warn('Privacy policy pressed')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>

        <CustomInput placeholder="Username" value={username} setValue={setUsername} />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry />
        <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureTextEntry />

        <CustomButton text="Register" onPress={onSignUp} />
        
        <Text style={styles.text}>By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUse}>Terms of Use</Text> and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicy}>Privacy Policy</Text>
        </Text>

        <SocialSignInButton />

        <CustomButton text="Have an account? Sign in" onPress={onSignIn} variant="tertiary" />
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

export default SignUpScreen