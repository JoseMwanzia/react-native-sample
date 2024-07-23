import { View, Text, StyleSheet } from 'react-native';

export default function More() {
  return (
    <View style={styles.container}>
      <Text>More Settings</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
