import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import 'tailwindcss/tailwind.css';
import './src/utils/fontAwesomeSetup';

const App: React.FC = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <AppNavigator />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
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
