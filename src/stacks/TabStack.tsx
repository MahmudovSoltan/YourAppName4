import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import HomeScren from '../screens/Main/HomeScren';
import ProfileStack from './ProfileStatc';
import { HomeStack } from '../screens/Main/Home/HomeStatc';

const Tab = createBottomTabNavigator();

 export function TabStack() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false,  }}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="ProfileScreen" component={ProfileStack} />
    </Tab.Navigator>
  );
}