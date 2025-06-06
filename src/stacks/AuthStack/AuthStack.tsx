import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../screens/Auth/WelcomeScreen';
import LoginScreen from '../../screens/Auth/SignInScreen';
import SignUpScreen from '../../screens/Auth/SignUpScreen';

// import LocalStorage from '../../store/localStorage';

const Stack = createStackNavigator();

const AuthStack = () => {
  // const onboarding = LocalStorage.getItem('onboarding');

  return (
    <Stack.Navigator
      // initialRouteName={onboarding ? 'SignIn' : 'Welcome'}
      initialRouteName={'Welcome'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen
        name="SignIn"
        // options={{
        //   animation: 'slide_from_bottom',
        // }}
        options={{
          presentation: 'modal',
        }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="SignUp"
        options={{
          animation: 'fade',
        }}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;