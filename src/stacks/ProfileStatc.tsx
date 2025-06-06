import React, { useEffect } from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../screens/Main/Profile/ProfileScreen';
import EditProfileScreen from '../screens/Main/Profile/EditProfileScreen';
import { useAuthtore } from '../store/auth.store';
import { useShallow } from 'zustand/react/shallow';


const Stack = createStackNavigator();

const ProfileStack = () => {
const { getProfileInfoFunc,profileData } = useAuthtore(
  useShallow((state) => ({
    getProfileInfoFunc: state.actions.getProfileInfoFunc,
    profileData:state.profileData
  }))
);

useEffect(()=>{
  getProfileInfoFunc()
},[])

console.log(profileData,"profileData");

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