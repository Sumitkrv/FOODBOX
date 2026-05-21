import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartSidebar() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, total } = useCart();

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
