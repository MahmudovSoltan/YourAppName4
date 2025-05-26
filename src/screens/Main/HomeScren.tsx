import { View } from 'react-native'
import React from 'react'
import Button from '../../ui/button'
import { useNavigation, NavigationProp } from '@react-navigation/native'
import AppHeader from '../../components/appHeader';

type RootStackParamList = {
  HomeScren: undefined;
  Details: undefined;
};

const HomeScren = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>
      <AppHeader title='home screen' />
      <Button
        title='Go to Details'
        onPress={() => {
          navigation.navigate('Details');
        }}
      />
    </View>
  )
}

export default HomeScren