import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/Main/Profile/ProfileScreen';
import EditProfileScreen from '../screens/Main/Profile/EditProfileScreen';


const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'Profile'}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={'Profile'} component={ProfileScreen} />
      <Stack.Screen name={'EditProfile'} component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default ProfileStack;