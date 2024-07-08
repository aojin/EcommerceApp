import React from 'react';
import { View, Text, ScrollView, Button } from 'react-native';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

const CheckoutScreen = () => {
  return (
    <View className="flex-1">
      <Header />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View className="p-4">
          <Text className="text-2xl font-bold mb-4">Checkout</Text>
          <Text className="text-base mb-4">No items to checkout.</Text>
          <Button title="Place Order" color="#1e40af" onPress={() => {}} />
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

export default CheckoutScreen;
