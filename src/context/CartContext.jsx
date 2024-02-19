import React, { useState, createContext, useContext } from 'react'

const CartContext = createContext(undefined);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  function getFromCart(id) {
    return cart.find(obj => obj.id === id);
  }

  function addToCart(item) {
    if (isInCart(item.id)) {
      setCart(prevCart => {
        const updatedCart = prevCart.map(obj => 
          obj.id === item.id ? { ...obj, quantity: obj.quantity + item.quantity } : obj
        );
        return updatedCart;
      });

      console.log(cart);
      
    } else {
      setCart([...cart, item]);
    }
  }

  function removeFromCart(itemId) {
    const updatedCart = cart.filter(item => item.id !== itemId);
    setCart(updatedCart);
  }

  function isInCart(itemId) {
    return cart.some(item => item.id === itemId);
  }

  function cartQtd() {
    let quantity = 0;

    cart.forEach((item) => {
      quantity += item.quantity;
    });
    
    return quantity;
  }

  function cartTotal() {
    return cart.reduce((acc, item) => acc + item.quantity * (item.priceWithDiscount || item.price), 0);
  }

  function addItem(id) {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((obj) =>
        obj.id === id ? { ...obj, quantity: obj.quantity + 1 } : obj
      );
      return updatedCart;
    });
  }

  function removeItem(id) {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((obj) =>
        obj.id === id && obj.quantity > 0 ? { ...obj, quantity: obj.quantity - 1 } : obj
      );
      return updatedCart;
    });
  }

  function cleanCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, isInCart, cartQtd, cartTotal, addItem, removeItem, cleanCart }}>
      { children }
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('Para usar o useCart seu componente precisa estar dentro do CartProvider');
  }

  return context;
}