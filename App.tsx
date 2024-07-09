import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import 'tailwindcss/tailwind.css';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <AppNavigator />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    height: '100vh',
    overflow: 'auto',
  },
});

export default App;
