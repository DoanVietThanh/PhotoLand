import React, { createContext, useEffect, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsAmount, setItemsAmount] = useState(0);
  const [amount, setAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalAmount = cart.reduce(
      (accumulator, currentValue) => accumulator + currentValue.amount,
      0
    );
    setItemsAmount(totalAmount);
  }, [cart]);

  // Add Item To Cart
  const addToCart = (item, id) => {
    const itemID = parseInt(id);
    const newItem = { ...item, amount: 1 };
    setCart([...cart, newItem]);
    const cartItem = cart.find((item) => item.id === id);

    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === itemID) {
          setAmount(cartItem.amount + 1);
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  // Remove Cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  // Handle Input
  const handleInput = (e, id) => {
    const cartItem = cart.find((item) => item.id === id);
    let value = parseInt(e.target.value);
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          if (isNaN(value)) {
            return { ...item, amount: 1 };
          }
          setAmount(value);
          return { ...item, amount: value };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
  };

  // Price Cart
  useEffect(() => {
    const total = cart.reduce(
      (accumlator, currentValue) =>
        accumlator + currentValue.amount * currentValue.attributes.price,
      0
    );
    setTotal(total);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        isOpen,
        cart,
        itemsAmount,
        total,
        setIsOpen,
        addToCart,
        removeFromCart,
        handleInput,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
