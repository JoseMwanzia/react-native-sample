import React,{useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './registration';
import LoginForm from './loginForm';
import { StatusBar } from 'expo-status-bar';
import TabLayout from './(tabs)/_layout';
import Index from './index';


const LoginNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='index'>
      <Stack.Screen name="index" component={Index} />
      <Stack.Screen name="loginForm" component={LoginForm} />
      <Stack.Screen name="registration" component={Registration} />
      <Stack.Screen name="(tabs)" component={StackNav} />
    </Stack.Navigator>
  );
};


// function DrawerNav() {
//   const Drawer = createNativeStackNavigator();
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="(tabs)" component={StackNav} options={{ headerShown: false }} />
//     </Drawer.Navigator>
//   );
// }


const StackNav = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      
      <Stack.Screen
        name="(tabs)"
        component={TabLayout}
      />
    <Stack.Screen name="loginForm" component={LoginForm} />
    </Stack.Navigator>
  );
};

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await AsyncStorage.getItem('isLoggedIn');
      console.log(data, 'at app.js');
      setIsLoggedIn(data === 'true');
    }
    getData();
  }, [isLoggedIn]);


  return (
    <>
      {!isLoggedIn ? <LoginNav/> : <StackNav/>}
      <StatusBar style="dark" />
    </>
  );
}
