import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform } from 'react-native';
// Import Tailwind CSS
import 'tailwindcss/tailwind.css';

/* eslint-disable @typescript-eslint/no-var-requires */
const AppNavigator = Platform.select({
  web: () => require('./src/navigation/AppNavigator.web').default,
  default: () => require('./src/navigation/AppNavigator.native').default,
})();
/* eslint-enable @typescript-eslint/no-var-requires */

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
  },
});

export default App;
