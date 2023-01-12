import { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton'

const SignUpScreen = () => {
  const navigation = useNavigation()

  const onSignUp = () => {
    navigation.navigate('ConfirmEmail')
  }

  const onSignIn = () => {
    navigation.navigate('SignIn')
  }

  const onTermsOfUse = () => {
    console.warn('Terms of use pressed')
  }

  const onPrivacyPolicy = () => {
    console.warn('Privacy policy pressed')
  }

  const { control, handleSubmit, watch } = useForm()
  const password = watch('password')

  const valid_email = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}/

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an Account</Text>

        <CustomInput name="username" placeholder="Username" rules={{ required: 'Username is required.' }} control={control} />
        <CustomInput name="email" placeholder="Email" rules={{ pattern: { value: valid_email, message: 'Email is not valid.' }, required: 'Email is required.' }} control={control} />
        <CustomInput name="password" placeholder="Password" rules={{ required: 'Password is required.', minLength: { value: 5, message: 'Password contains at least 5 characters.' } }} control={control} secureTextEntry />
        <CustomInput name="confirmPassword" placeholder="Confirm Password" rules={{ validate: value => value === password ? true : 'Confirm Password is not valid.' }} control={control} secureTextEntry />

        <CustomButton text="Register" onPress={handleSubmit(onSignUp)} />
        
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