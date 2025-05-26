import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScren from '../screens/Main/HomeScren';
import ProfileStack from './ProfileStatc';

const Tab = createBottomTabNavigator();

 export function TabStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScren} />
      <Tab.Screen name="ProfileScreen" component={ProfileStack} />
    </Tab.Navigator>
  );
}