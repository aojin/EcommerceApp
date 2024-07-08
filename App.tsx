import React, { Suspense } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Platform, Text } from 'react-native';

const AppNavigator = React.lazy(() =>
  Platform.select({
    web: () => import('./src/navigation/AppNavigator.web'),
    default: () => import('./src/navigation/AppNavigator.native'),
  })(),
);

export default function App() {
  return (
    <View style={styles.container}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <AppNavigator />
      </Suspense>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
