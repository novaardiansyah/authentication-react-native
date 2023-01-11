import { View, Image, StyleSheet, useWindowDimensions, ScrollView, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'

import Logo from '../../../assets/images/Logo_1.png'

import CustomInput from '../../components/CustomInput'
import CustomButton from '../../components/CustomButton'
import SocialSignInButton from '../../components/SocialSignInButton/SocialSignInButton'

const SignInScreen = () => {
  const { height } = useWindowDimensions()

  const navigation = useNavigation()

  const onSignIn = (data) => {
    navigation.navigate('Home')
    console.log(data)
  }

  const onSignUp = () => {
    navigation.navigate('SignUp')
  }

  const onForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  }

  const { control, handleSubmit } = useForm()

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />

        <CustomInput name="username" placeholder="Username" control={control} />
        <CustomInput name="password" placeholder="Password" control={control} secureTextEntry />
        
        {/* <Controller control={control} name="username" render={({
          field: { onChange, onBlur, value }
        }) => (
          <TextInput placeholder="Username" value={value} onChangeText={onChange} onBlur={onBlur} />
        )} /> */}
 
        <CustomButton text="Sign In" onPress={handleSubmit(onSignIn)} />
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