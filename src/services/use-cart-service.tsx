import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import {IProduct} from '../types';

// Define an interface describing my cart data structure
interface CartItems {
  cartItems: IProduct[];
  addItemsToCart: (val: IProduct) => void;
  //TODO: Create information needed
}

const CartItemContext = createContext<CartItems | undefined>(undefined);

export function useCartItems() {
  const context = useContext(CartItemContext);
  if (context === undefined) {
    throw new Error('Should ');
  }
  return context; // my cart data
}

type ICartItemsProvider = PropsWithChildren<any>;

export function CartItemsProvider(props: ICartItemsProvider) {
  const [cartItems, setCartItems] = useState([]);
  return (
    <CartItemContext.Provider value={{cartItems, addItemsToCart: setCartItems}}>
      {props.children}
    </CartItemContext.Provider>
  );
}
