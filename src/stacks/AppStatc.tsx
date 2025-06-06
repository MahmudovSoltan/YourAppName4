
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect, useState } from 'react'

import MainStack from './MainStack/MainStack';
import AuthStack from './AuthStack/AuthStack';
import localStore from '../store/localStore';
import { TabStack } from './TabStack';
import { useAuthtore } from '../store/auth.store';
const Stack = createStackNavigator();
const AppStack = () => {

  const [isReady, setIsReady] = useState(false);
  const [token, setToken] = useState<string | null>(null);
   const {profile}= useAuthtore()
  useEffect(() => {
    const checkToken = async () => {
      const storedToken = await localStore.getItem('access_token');
      setToken(storedToken);
      setIsReady(true);
    };

    checkToken();
  }, [profile]);
  // console.log(token);
  
  if (!isReady) return null;
  return (
    <NavigationContainer  >
      <Stack.Navigator screenOptions={{ headerShown: false }} >
        {/* <Stack.Screen name="TabStack" component={TabStack} />
        <Stack.Screen name="Details" component={DetailScreen} /> */}

        {
          token ? <Stack.Screen name="TabStack" component={TabStack} /> : <Stack.Screen name="AuthStack" component={AuthStack}  />
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppStack

