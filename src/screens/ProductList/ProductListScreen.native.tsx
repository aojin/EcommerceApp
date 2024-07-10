import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import ProductCard from '../../components/ProductCard/ProductCard';
import Footer from '../../components/Footer/Footer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { useNavigation } from '@react-navigation/native';
import ProductFilterSidebar from '../../components/ProductFilterSidebar/ProductFilterSidebar.native';

const Drawer = createDrawerNavigator();

const FilterButton = () => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={{
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={() => navigation.openDrawer()}
    >
      <FontAwesomeIcon icon={faFilter} size={20} color="black" />
      <Text style={{ marginLeft: 10, color: 'black' }}>Filter Products</Text>
    </Pressable>
  );
};

const ProductList = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ padding: 4 }}>
          <View
            style={{
              width: '100%',
              borderWidth: 1,
              borderColor: '#ddd',
              padding: 10,
              marginBottom: 10,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}
          >
            <FilterButton />
          </View>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginHorizontal: -2,
            }}
          >
            <View style={{ width: '50%', padding: 2 }}>
              <ProductCard />
            </View>
            <View style={{ width: '50%', padding: 2 }}>
              <ProductCard />
            </View>
            <View style={{ width: '50%', padding: 2 }}>
              <ProductCard />
            </View>
            <View style={{ width: '50%', padding: 2 }}>
              <ProductCard />
            </View>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </View>
  );
};

const ProductListScreen = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <ProductFilterSidebar {...props} />}
      screenOptions={{ headerShown: false }}
      drawerPosition="right"
      defaultStatus="closed"
    >
      <Drawer.Screen name="ProductListScreen" component={ProductList} />
    </Drawer.Navigator>
  );
};

export default ProductListScreen;
