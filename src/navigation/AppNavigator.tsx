import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen.native';
import ProductListScreen from '../screens/ProductListScreen.native';
import ProductDetailScreen from '../screens/ProductDetailScreen.native';
import CartScreen from '../screens/CartScreen.native';
import CheckoutScreen from '../screens/CheckoutScreen.native';

const NativeStack = createNativeStackNavigator();
const WebStack = createStackNavigator();

const isWeb = Platform.OS === 'web';

const Stack = isWeb ? WebStack : NativeStack;

const AppNavigator = () => {
  return (
    <NavigationContainer>
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
