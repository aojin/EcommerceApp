import React from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const ProductDetailScreen = () => {
  return (
    <View className="flex-1">
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-4">
          <Image
            source={{ uri: 'https://picsum.photos/150' }}
            className="w-full h-64 object-cover mb-4"
          />
          <Text className="text-2xl font-bold">Product Title</Text>
          <Text className="text-lg text-gray-500 mb-4">$99.99</Text>
          <Text className="text-base mb-4">Product Description</Text>
          <Button title="Add to Cart" color="#1e40af" onPress={() => {}} />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default ProductDetailScreen;
