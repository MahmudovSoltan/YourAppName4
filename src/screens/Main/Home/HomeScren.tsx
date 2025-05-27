import { View } from 'react-native'
import React from 'react'
// import Button from '../../ui/button'
import { useNavigation, NavigationProp, DrawerActions } from '@react-navigation/native'
import Button from '../../../ui/button';
import AppHeader from '../../../components/appHeader';
// import AppHeader from '../../components/appHeader';

type RootStackParamList = {
  HomeScren: undefined;
  Details: undefined;
};

const HomeScren = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View>
      <AppHeader title='home screen' onMenuPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
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