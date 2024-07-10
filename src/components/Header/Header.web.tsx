import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faList,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../../navigation/RootNavigation';

const Header = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <nav className="bg-blue-500 p-4 w-full fixed top-0 left-0">
      <View className="flex flex-row items-center justify-between w-full px-6">
        <Text className="text-white text-lg">My E-Commerce App</Text>
        <View className="flex flex-row space-x-4">
          <Pressable onPress={() => navigation.navigate('Home')}>
            <FontAwesomeIcon icon={faHome} size="lg" className="text-white" />
            <Text className="text-white ml-2">Home</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ProductList')}>
            <FontAwesomeIcon icon={faList} size="lg" className="text-white" />
            <Text className="text-white ml-2">Products</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('Cart')}>
            <FontAwesomeIcon
              icon={faShoppingCart}
              size="lg"
              className="text-white"
            />
            <Text className="text-white ml-2">Cart</Text>
          </Pressable>
        </View>
      </View>
    </nav>
  );
};

export default Header;
