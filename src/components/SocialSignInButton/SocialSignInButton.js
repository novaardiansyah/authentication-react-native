import React from 'react'
import CustomButton from '../CustomButton'

const SocialSignInButton = () => {
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
    <>
      <CustomButton text="Sign In with Facebook" onPress={onSignInWithFacebook} bgColor="#E7EAF4" color="#4765A9" />
      <CustomButton text="Sign In with Google" onPress={onSignInWithGoogle} bgColor="#FAE9EA" color="#DD4D44" />
      <CustomButton text="Sign In with Apple" onPress={onSignInWithApple} bgColor="#E3E3E3" color="#363636" />
    </>
  )
}

export default SocialSignInButton