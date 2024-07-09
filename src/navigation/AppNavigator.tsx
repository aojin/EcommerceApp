// src/navigation/AppNavigator.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform } from 'react-native';
import Header from '../components/Header/Header.web';
import { HomeScreen, ProductListScreen, CartScreen } from './screens';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: 'Products' }}
      />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: 'Products' }}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {Platform.OS === 'web' ? <StackNavigator /> : <DrawerNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
