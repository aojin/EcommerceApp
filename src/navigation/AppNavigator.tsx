import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Platform, Pressable } from 'react-native';
import Header from '../components/Header/Header.web';
import { HomeScreen, ProductListScreen, CartScreen } from './screens';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const CustomHeaderRight = ({ navigation }) => (
  <Pressable
    onPress={() => navigation.navigate('Cart')}
    style={{ marginRight: 16 }} // Adjust this value to match the spacing
  >
    <FontAwesomeIcon icon={faShoppingCart} size={24} color="black" />
  </Pressable>
);

CustomHeaderRight.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerRight: () => <CustomHeaderRight navigation={navigation} />,
        drawerPosition: 'right',
      })}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: 'Products' }}
      />
      <Drawer.Screen name="Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        header: () => <Header />,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="ProductList"
        component={ProductListScreen}
        options={{ title: 'Products' }}
      />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {Platform.OS === 'web' ? <StackNavigator /> : <DrawerNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
