import React, { createContext, useState, useEffect } from 'react';
import { food_list } from '../../assets/assets';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCartItems = { ...prev };
      if (newCartItems[itemId] > 1) {
        newCartItems[itemId] -= 1;
      } else {
        delete newCartItems[itemId];
      }
      return newCartItems;
    });
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <StoreContext.Provider value={{ cartItems, addToCart, removeFromCart, food_list }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;