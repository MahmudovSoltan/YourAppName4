import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import HomeScren from '../screens/Main/HomeScren';
import DetailScreen from '../screens/Other/DetailScren';
import { TabStack } from './TabStack';
const Stack = createStackNavigator();
const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name="TabStack" component={TabStack} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack

