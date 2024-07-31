import React from 'react';
import { View, Text, Image, Button } from 'react-native';

const ProductCard = () => {
  return (
    <View className="border p-4 rounded-lg shadow-lg">
      <Image
        source={{ uri: 'https://picsum.photos/150' }}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <Text className="text-lg font-bold mt-2">Product Title</Text>
      <Text className="text-gray-500 mt-1">$99.99</Text>
      <Button title="Add to Cart" color="#1e40af" onPress={() => {}} />
    </View>
  );
};

export default ProductCard;
