import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import More from './more';
import Settings from './settings';
import RootLayout from './index';

export default function TabLayout() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen component={RootLayout} name="index" options={{ 
        title: 'Home',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
      }} />


      <Tab.Screen component={More} name="more" options={{
        title: 'More',
        tabBarIcon: ({ color }) => <Feather name="more-horizontal" size={28} color={color} />,
      }}/>

      <Tab.Screen component={Settings} name="settings" options={{
        title: 'Settings',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
      }}/>

    </Tab.Navigator>
  );
}
