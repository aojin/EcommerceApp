import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from '../screens/Home/HomeScreen.web';
import ProductListScreen from '../screens/ProductList/ProductListScreen.web';
import ProductDetailScreen from '../screens/ProductDetail/ProductDetailScreen.web';
import CartScreen from '../screens/Cart/CartScreen.web';
import CheckoutScreen from '../screens/Checkout/CheckoutScreen.web';

const AppNavigator = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/products" element={<ProductListScreen />} />
        <Route path="/products/:id" element={<ProductDetailScreen />} />
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/checkout" element={<CheckoutScreen />} />
      </Routes>
    </Router>
  );
};

export default AppNavigator;
