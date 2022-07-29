import { createContext, useEffect, useReducer, useState } from 'react';
import {
  addNewCartItemAction,
  decrementAmountOrRemoveCartItemAction,
  removeCartItemAction,
} from '../reducers/cart/actions';
import { cartReducer } from '../reducers/cart/reducer';

interface ICartContextProvider {
  children: React.ReactNode;
}

interface ICoffee {
  id: number;
  name: string;
  amount: number;
  price: number;
  image_url: string;
}

type ICoffeeCart = Omit<ICoffee, 'amount'>;

interface CartContextType {
  cartItems: ICoffee[];
  addToCart: (coffee: ICoffeeCart) => void;
  decrementToCart: (id: number) => void;
  getAmountOfCoffee: (id: number) => number;
  removeToCart: (id: number) => void;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: ICartContextProvider) {
  const [cartItemsState, dispatch] = useReducer(cartReducer, {
    items: [],
  });

  function removeToCart(id: number) {
    dispatch(removeCartItemAction(id));
  }

  function decrementToCart(id: number) {
    dispatch(decrementAmountOrRemoveCartItemAction(id));
  }

  function addToCart(newItem: ICoffeeCart) {
    dispatch(addNewCartItemAction(newItem));
  }

  function getAmountOfCoffee(id: number) {
    const itemExistsInCart = cartItemsState.items.find(
      (item) => item.id === id
    );

    return !!itemExistsInCart?.amount ? itemExistsInCart.amount : 0;
  }

  return (
    <CartContext.Provider
      value={{
        removeToCart,
        getAmountOfCoffee,
        cartItems: cartItemsState.items,
        decrementToCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
