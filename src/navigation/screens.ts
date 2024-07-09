/* eslint-disable @typescript-eslint/no-var-requires */
// src/navigation/screens.ts
import { Platform } from 'react-native';

let HomeScreen, ProductListScreen, CartScreen;

if (Platform.OS === 'web') {
  HomeScreen = require('../screens/Home/HomeScreen.web').default;
  ProductListScreen =
    require('../screens/ProductList/ProductListScreen.web').default;
  CartScreen = require('../screens/Cart/CartScreen.web').default;
} else {
  HomeScreen = require('../screens/Home/HomeScreen.native').default;
  ProductListScreen =
    require('../screens/ProductList/ProductListScreen.native').default;
  CartScreen = require('../screens/Cart/CartScreen.native').default;
}

export { HomeScreen, ProductListScreen, CartScreen };
