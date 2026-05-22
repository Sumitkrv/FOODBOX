import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useMemo } from "react";

export default function CartSidebar() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, total } = useCart();

  // Aggregate all ingredients in the cart items
  const aggregatedIngredients = useMemo(() => {
    const list = {};
    items.forEach((item) => {
      if (item.kit && item.kit.ingredients) {
        item.kit.ingredients.forEach((ing) => {
          const key = ing.name.toLowerCase().trim();
          if (list[key]) {
            list[key].amount += ing.amount * item.quantity;
          } else {
            list[key] = {
              name: ing.name,
              amount: ing.amount * item.quantity,
              unit: ing.unit,
            };
          }
        });
      }
    });
    return Object.values(list);
  }, [items]);

  if (!isOpen) return null;

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-[60] cursor-default bg-black/50 backdrop-blur-sm"
        aria-label="Close cart"
        onClick={() => setIsOpen(false)}
      />
      <aside className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-white shadow-2xl animate-slide-up dark:bg-gray-950">
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <h2 className="text-lg font-bold">Your Cart ({items.length})</h2>
          <button type="button" onClick={() => setIsOpen(false)} className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="py-12 text-center text-gray-500">Your cart is empty</p>
          ) : (
            <>
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.kit.id} className="flex gap-4 rounded-xl border border-gray-100 p-3 dark:border-gray-800">
                    <img
                      src={item.kit.image}
                      alt={item.kit.name}
                      className="h-20 w-20 rounded-lg object-cover"
                      loading="lazy"
                    />
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.kit.name}</h3>
                      <p className="font-semibold text-brand-orange">₹{item.kit.price}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.kit.id, item.quantity - 1)}
                          className="rounded-full border p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="w-6 text-center text-sm">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.kit.id, item.quantity + 1)}
                          className="rounded-full border p-1 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                        <button type="button" onClick={() => removeItem(item.kit.id)} className="ml-auto text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {aggregatedIngredients.length > 0 && (
                <div className="mt-8 rounded-2xl bg-gray-50 p-4 dark:bg-gray-900 border border-gray-100 dark:border-gray-800">
                  <div className="flex items-center gap-2 border-b border-gray-200 pb-2 dark:border-gray-800">
                    <ShoppingBag className="h-4 w-4 text-brand-green" />
                    <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                      Total Prep Ingredients Arriving
                    </h4>
                  </div>
                  <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
                    {aggregatedIngredients.map((ing) => (
                      <li key={ing.name} className="flex justify-between text-[11px] text-gray-600 dark:text-gray-400 border-b border-dashed border-gray-100 dark:border-gray-800/50 pb-1">
                        <span className="truncate pr-1">{ing.name}</span>
                        <span className="font-semibold text-brand-orange shrink-0 font-mono">
                          {ing.amount} {ing.unit}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[10px] text-gray-400 text-center">
                    *All ingredients pre-portioned & chilled for maximum freshness.
                  </p>
                </div>
              )}
            </>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-4 dark:border-gray-800">
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span className="text-brand-green">₹{total}</span>
            </div>
            <Link to="/checkout" onClick={() => setIsOpen(false)} className="btn-primary mt-4 block w-full text-center">
              Proceed to Checkout
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
