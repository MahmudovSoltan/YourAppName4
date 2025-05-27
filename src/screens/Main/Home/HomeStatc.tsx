import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScren from './HomeScren';
import SettingsScreen from '../SettingsScreen';
import NotificationsScreen from '../NotificationsScreen';
import SupportScreen from '../SupportScreen';
import CustomDrawerContent from './CustomDrawerConten';
// import HomeScren from '../screens/Main/HomeScren';


const Drawer = createDrawerNavigator();

const renderDrawerContent = (props: any) => <CustomDrawerContent {...props} />;

export function HomeStack() {
  return (
    <Drawer.Navigator drawerContent={renderDrawerContent} screenOptions={{ headerShown: false, drawerType: 'front' }}>
      <Drawer.Screen name="Home" component={HomeScren} />
      <Drawer.Screen name="Profile" component={SettingsScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Support" component={SupportScreen} />
    </Drawer.Navigator>
  );
}