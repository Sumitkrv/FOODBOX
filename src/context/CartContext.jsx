import { createContext, useContext, useState, useCallback } from "react";

const CartContext = createContext(undefined);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = useCallback((kit, qty = 1, persons = kit.servings, customIngredients = {}) => {
    setItems((prev) => {
      const cartItemId = crypto.randomUUID();
      return [...prev, { id: cartItemId, kit, quantity: qty, persons, customIngredients }];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQuantity = useCallback(
    (id, qty) => {
      if (qty < 1) {
        removeItem(id);
        return;
      }
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity: qty } : i)));
    },
    [removeItem]
  );

  const clearCart = useCallback(() => setItems([]), []);

  const total = items.reduce((sum, i) => {
    const baseServings = i.kit.servings || 1;
    const pricePerPerson = i.kit.price / baseServings;
    const itemTotal = Math.round(pricePerPerson * i.persons) * i.quantity;
    return sum + itemTotal;
  }, 0);

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
