import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen name="(home)" options={{ 
        title: 'Home',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
      }} />


      <Tabs.Screen name="more" options={{
        title: 'More',
        tabBarIcon: ({ color }) => <Feather name="more-horizontal" size={28} color={color} />,
      }}/>

      <Tabs.Screen name="settings" options={{
        title: 'Settings',
        tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
      }}/>

    </Tabs>
  );
}
