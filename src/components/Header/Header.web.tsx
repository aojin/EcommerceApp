import React from 'react';
import { Link } from '@react-navigation/native';
import { View, Text } from 'react-native';

const Header = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <View className="flex flex-row items-center justify-between">
        <Text className="text-white text-lg">My E-Commerce App</Text>
        <View className="flex flex-row space-x-4">
          <Link to="/home" className="text-white">
            Home
          </Link>
          <Link to="/products" className="text-white">
            Products
          </Link>
          <Link to="/cart" className="text-white">
            Cart
          </Link>
        </View>
      </View>
    </nav>
  );
};

export default Header;
