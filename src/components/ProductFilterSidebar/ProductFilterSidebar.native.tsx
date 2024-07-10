import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView } from '@react-navigation/drawer';

const ProductFilterSidebar = ({ navigation }) => {
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    size: '',
    price: '',
  });

  const applyFilters = () => {
    // Logic to apply filters
    console.log('Filters applied:', filters);
    navigation.closeDrawer();
  };

  const handleFilterSelection = (type, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [type]: value,
    }));
  };

  const isSelected = (type, value) => filters[type] === value;

  return (
    <DrawerContentScrollView>
      <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
          Filters
        </Text>

        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Category
        </Text>
        <TouchableOpacity
          onPress={() => handleFilterSelection('category', 'Category 1')}
          style={{
            marginBottom: 8,
            backgroundColor: isSelected('category', 'Category 1')
              ? 'gray'
              : 'transparent',
          }}
        >
          <Text>Category 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilterSelection('category', 'Category 2')}
          style={{
            marginBottom: 8,
            backgroundColor: isSelected('category', 'Category 2')
              ? 'gray'
              : 'transparent',
          }}
        >
          <Text>Category 2</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Brand
        </Text>
        <TouchableOpacity
          onPress={() => handleFilterSelection('brand', 'Brand 1')}
          style={{
            marginBottom: 8,
            backgroundColor: isSelected('brand', 'Brand 1')
              ? 'gray'
              : 'transparent',
          }}
        >
          <Text>Brand 1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilterSelection('brand', 'Brand 2')}
          style={{
            marginBottom: 8,
            backgroundColor: isSelected('brand', 'Brand 2')
              ? 'gray'
              : 'transparent',
          }}
        >
          <Text>Brand 2</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Size
        </Text>
        <TouchableOpacity
          onPress={() => handleFilterSelection('size', 'Small')}
          style={{
            marginBottom: 8,
            backgroundColor: isSelected('size', 'Small')
              ? 'gray'
              : 'transparent',
          }}
        >
          <Text>Small</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilterSelection('size', 'Medium')}
          style={{
            marginBottom: 8,
            backgroundColor: isSelected('size', 'Medium')
              ? 'gray'
              : 'transparent',
          }}
        >
          <Text>Medium</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilterSelection('size', 'Large')}
          style={{
            marginBottom: 8,
            backgroundColor: isSelected('size', 'Large')
              ? 'gray'
              : 'transparent',
          }}
        >
          <Text>Large</Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 8 }}>
          Price
        </Text>
        <TouchableOpacity
          onPress={() => handleFilterSelection('price', 'Low to High')}
          style={{
            marginBottom: 8,
            backgroundColor: isSelected('price', 'Low to High')
              ? 'gray'
              : 'transparent',
          }}
        >
          <Text>Low to High</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleFilterSelection('price', 'High to Low')}
          style={{
            marginBottom: 8,
            backgroundColor: isSelected('price', 'High to Low')
              ? 'gray'
              : 'transparent',
          }}
        >
          <Text>High to Low</Text>
        </TouchableOpacity>

        <Button title="Apply Filters" onPress={applyFilters} />
      </View>
    </DrawerContentScrollView>
  );
};

ProductFilterSidebar.propTypes = {
  navigation: PropTypes.shape({
    closeDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

export default ProductFilterSidebar;
