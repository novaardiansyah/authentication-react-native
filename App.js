import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import SignInScreen from './src/screens/SignInScreen';
// import SignUpScreen from './src/screens/SignUpScreen';
// import ConfirmEmailScreen from './src/screens/ConfirmEmailScreen/ConfirmEmailScreen';
// import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
// import ResetPasswordScreen from './src/screens/ResetPasswordScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignInScreen />
      {/* <SignUpScreen /> */}
      {/* <ConfirmEmailScreen /> */}
      {/* <ForgotPasswordScreen /> */}
      {/* <ResetPasswordScreen /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC'
  }
});

export default App;
