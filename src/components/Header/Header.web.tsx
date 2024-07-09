import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../navigation/RootNavigation';

const Header = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <nav className="bg-blue-500 p-4 w-full fixed top-0 left-0">
      <View className="flex flex-row items-center justify-between container mx-auto">
        <Text className="text-white text-lg">My E-Commerce App</Text>
        <View className="flex flex-row space-x-4">
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Text className="text-white">Home</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ProductList')}>
            <Text className="text-white">Products</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Cart')}>
            <Text className="text-white">Cart</Text>
          </Pressable>
        </View>
      </View>
    </nav>
  );
};

export default Header;
