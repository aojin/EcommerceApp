import 'tailwindcss/tailwind.css'; // Add this import
import React from 'react';
import { Platform, View, StyleSheet } from 'react-native';
import HomeScreenNative from './src/screens/HomeScreen.native';
import HomeScreenWeb from './src/screens/HomeScreen.web';

const App = () => {
  const HomeScreen = Platform.OS === 'web' ? HomeScreenWeb : HomeScreenNative;

  return (
    <View style={styles.container}>
      <HomeScreen />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
