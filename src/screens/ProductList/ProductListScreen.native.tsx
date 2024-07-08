import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../../components/Header/Header';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';

const ProductListScreen = () => {
  return (
    <View className="flex-1">
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-4">
          <Text className="text-2xl font-bold mb-4">Products</Text>
          <View className="flex flex-wrap -mx-2">
            <View className="w-full md:w-1/2 lg:w-1/4 p-2">
              <ProductCard />
            </View>
            <View className="w-full md:w-1/2 lg:w-1/4 p-2">
              <ProductCard />
            </View>
            <View className="w-full md:w-1/2 lg:w-1/4 p-2">
              <ProductCard />
            </View>
            <View className="w-full md:w-1/2 lg:w-1/4 p-2">
              <ProductCard />
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default ProductListScreen;
