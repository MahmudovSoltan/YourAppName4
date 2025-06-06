import React from 'react';
import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScren from '../screens/Main/HomeScren';
import ProfileStack from './ProfileStatc';
import { StyleSheet, Pressable, View, Text } from 'react-native';
import { pixelFont, pixelVertical, pixelWidth } from '../utils/metrix';
import FavorotesScreen from '../screens/Main/Favorite/FavorotesScreen';
import SearchScren from '../screens/Main/Search/SearchScren';
import { FavoriteIcon, HomeIcon, ProfileIcon, SeacrhIcon } from '../assets/icons';
import HomePage from '../screens/Main/Home';

const Tab = createBottomTabNavigator();

type TabButtonProps = {
  tabName: string;
  icon: any;
} & BottomTabBarButtonProps;

const TabButton = (props: TabButtonProps) => {
  const Icon = props.icon;
  const active = props['aria-selected'];

  return (
    <Pressable onPress={props.onPress} style={styles.tabButton}>
      {/* {accessibilityState?.selected && <View style={styles.tabLine} />} */}
      <View style={styles.iconContainer}>
        <Icon color={active ? '#5ca4ab' : '#fff'} width={28} height={28} />
        {active && <Text style={styles.tabBarLabelStyle}>{props.tabName}</Text>}
      </View>
    </Pressable>
  );
};

export function TabStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false,    tabBarStyle: styles.tabBarStyle }}   >
      <Tab.Screen name='HomeStack' component={HomePage} options={{
        tabBarButton: (props) => {
          return <TabButton {...props} tabName='Home' icon={HomeIcon} />;
        },
      }} />
      <Tab.Screen name='ProfileScreen' component={ProfileStack} options={{
        tabBarButton: (props) => {
          return <TabButton {...props} tabName='Profile' icon={ProfileIcon} />;
        },
      }} />
      <Tab.Screen name='FavorotesScreen' component={FavorotesScreen} options={{
        tabBarButton: (props) => {
          return <TabButton {...props} tabName='Favorites' icon={FavoriteIcon} />;
        },
      }} />
      <Tab.Screen name='SearchScren' component={SearchScren} options={{
        tabBarButton: (props) => {
          return <TabButton {...props} tabName='Search' icon={SeacrhIcon} />;
        },
      }} />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'black',
    borderTopWidth: 0,
  },
  tabBarLabelStyle: {
    paddingTop: pixelVertical(5),
    fontSize: pixelFont(10),
    color: '#fff',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 6,
    marginBottom: pixelVertical(5),
    backgroundColor: 'transparent',
  },
  iconContainer: {
    marginTop: pixelVertical(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLine: {
    position: 'absolute',
    height: 3,
    width: pixelWidth(48),
    backgroundColor: 'red',
    borderBottomLeftRadius: 3,
    borderBottomRightRadius: 3,
  },
});