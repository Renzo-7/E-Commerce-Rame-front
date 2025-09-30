import { createContext, useContext, useEffect, useState } from "react";
import {
  getOrCreateCart,
  fetchCart,
  addProductToCart,
  removeProductFromCart,
  clearCart,
} from "../services/api.js";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartId, setCartId] = useState(null);
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const initCart = async () => {
      const id = await getOrCreateCart();
      setCartId(id);
      const cartData = await fetchCart();
      setCart(cartData);
      setLoading(false);
    };
    initCart();
  }, []);

  const addProduct = async (productId, quantity = 1) => {
    const updatedCart = await addProductToCart(productId, quantity);
    setCart(updatedCart);
  };

  const addToCart = async (product) => {
    await addProduct(product._id, 1);
  };

  const removeProduct = async (productId) => {
    const updatedCart = await removeProductFromCart(productId);
    setCart(updatedCart);
  };

  const clear = async () => {
    const updatedCart = await clearCart();
    setCart(updatedCart);
  };

  const cartItems = cart?.products || [];

  const total = cartItems.reduce((acc, item) => {
    const price = item.productId?.precio || 0;
    return acc + price * item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        addProduct,
        addToCart,
        removeProduct,
        clear,
        total,
        cartId,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
