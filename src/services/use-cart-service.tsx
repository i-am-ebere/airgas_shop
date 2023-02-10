import React, {createContext} from 'react';
import {View} from 'react-native';

// Define an interface describing my cart data structure
interface CartItems {
  //TODO: Create information needed
}

const CartItemContext = createContext();

export function useCartItems() {
  return; // my cart data
}

export function CartItemsProvider() {
  return <View />;
}
