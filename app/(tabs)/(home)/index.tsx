import { Link, Stack } from 'expo-router';
import { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';


export default function HomeScreen() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          title: 'My home',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

          headerTitle: props => <Image style={styles.image} source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} />,
          headerRight: () => <Button onPress={() => setCount(c => c + 1)} title="Update count" />,
        }}
      />
      <Text>Home</Text>
      <Link href='/modal'>Present Modal</Link>
      <Link href={{pathname: '/details', params: {id: 'bacon'}}} >View details</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});