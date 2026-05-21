import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((kit, qty = 1) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.kit.id === kit.id);
      if (existing) {
        return prev.map((i) => (i.kit.id === kit.id ? { ...i, quantity: i.quantity + qty } : i));
      }
      return [...prev, { kit, quantity: qty }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.kit.id !== id));
  }, []);

  const updateQuantity = useCallback(
    (id, qty) => {
      if (qty < 1) {
        removeItem(id);
        return;
      }
      setItems((prev) => prev.map((i) => (i.kit.id === id ? { ...i, quantity: qty } : i)));
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => sum + i.kit.price * i.quantity, 0);
  const itemCount = items.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        setIsOpen,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
        itemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
