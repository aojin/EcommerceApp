import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  return (
    <View className="bg-gray-800 p-4 flex-row justify-between items-center">
      <Text className="text-2xl font-bold text-white">E-Commerce App</Text>
    </View>
  );
};

export default Header;
