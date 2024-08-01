import React,{useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Registration from './registration';
import LoginForm from './loginForm';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
// import { Stack } from "expo-router";

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    async function getData() {
      const data = await AsyncStorage.getItem('isLoggedIn');
      console.log( 'Login is '+ data + ' at App.js' );
      setIsLoggedIn(data);
    }
    getData();
  }, [isLoggedIn]);

  const LoginNav = () => {
    const Stack = createNativeStackNavigator();
    return (
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="loginForm" component={LoginForm}/>
        <Stack.Screen name="registration" component={Registration}/>
        <Stack.Screen name="Taabs" component={DrawerNav}/>
      </Stack.Navigator>
    );
  };


  function DrawerNav() {
    const Drawer = createNativeStackNavigator();
    return (
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
      >
        <Drawer.Screen name="dashbozard" component={StackNav} options={{ headerShown: true }} />
      </Drawer.Navigator>
    );
  }


  const StackNav = () => {
    const Stack = createNativeStackNavigator();
    return (
      <>
        <Stack.Screen name="(tabs)" options={{ headerShown: true, title: 'Tabz' }}/>
        <Stack.Screen name="details" />
      </>
    );
  };

  return (
    <>
      {isLoggedIn ? <DrawerNav/> : <LoginNav/>}
      <StatusBar style="dark" />
    </>
  );
}
