import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';

const Header = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View className="bg-gray-800 p-4 flex-row justify-between items-center">
      <Text className="text-2xl font-bold text-white">E-Commerce App</Text>
      <View className="flex-row">
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text className="text-white mx-2">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ProductList')}>
          <Text className="text-white mx-2">Products</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
          <Text className="text-white mx-2">Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
