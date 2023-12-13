import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const addToCart = (product, price, event) => {
    event.preventDefault();
    const existingProduct = cart.find((item) => item.product === product);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.product === product
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { product, price, quantity: 1 }]);
    }
    setShowModal(true);
  };

  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.product !== product));
  };

  const updateQuantity = (product, quantity) => {
    setCart(
      cart.map((item) =>
        item.product === product ? { ...item, quantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, showModal, addToCart, removeFromCart, updateQuantity, calculateTotal, setShowModal, showMessage }}>
      {children}
    </CartContext.Provider>
  );
};
