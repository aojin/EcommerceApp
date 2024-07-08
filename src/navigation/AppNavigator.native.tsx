import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/Home/HomeScreen.native';
import ProductListScreen from '../screens/ProductList/ProductListScreen.native';
import ProductDetailScreen from '../screens/ProductDetail/ProductDetailScreen.native';
import CartScreen from '../screens/Cart/CartScreen.native';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen.native';
import { RootStackParamList } from './types';
import linking from './linking';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductList" component={ProductListScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
