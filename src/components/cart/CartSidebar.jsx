import { Link } from "react-router-dom";
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { hoverLiftSm, tapPress, ease } from "@/lib/animations";

export default function CartSidebar() {
  const { items, isOpen, setIsOpen, updateQuantity, removeItem, total } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Blur Overlayer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-[5px]"
            onClick={() => setIsOpen(false)}
          />

          {/* Premium Cart Drawer */}
          <motion.aside
            initial={{ x: "100%", opacity: 0.96 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.96 }}
            transition={{ type: "spring", stiffness: 360, damping: 32 }}
            className="fixed right-0 top-0 z-[70] flex h-full w-full max-w-md flex-col bg-[#FAFAF8] dark:bg-[#121210] shadow-[0_0_50px_rgba(0,0,0,0.15)] border-l border-gray-200/50 dark:border-neutral-800"
          >
            {/* Header section with cross button */}
            <div className="flex items-center justify-between border-b border-gray-150/60 dark:border-neutral-800/80 px-6 py-5 bg-white dark:bg-[#181816]">
              <div>
                <h2 className="text-lg font-extrabold text-gray-900 dark:text-white">Your FoodBox</h2>
                <p className="text-xs text-gray-400 mt-0.5">{items.length} chef-kits selected</p>
              </div>
              <motion.button
                type="button"
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.92 }}
                className="rounded-full w-9 h-9 flex items-center justify-center bg-gray-50 hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-750 text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-orange transition-colors"
                aria-label="Close cart"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6 scrollbar-thin">
              {items.length === 0 ? (
                /* Sleek Empty State */
                <div className="flex flex-col items-center justify-center py-20 text-center h-full">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, ...ease.spring }}
                    className="w-20 h-20 rounded-full bg-orange-50 dark:bg-orange-950/20 flex items-center justify-center text-brand-orange mb-6 shadow-[0_8px_20px_rgba(255,107,53,0.06)]"
                  >
                    <ShoppingBag className="w-10 h-10" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Your Box is Empty</h3>
                  <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-xs leading-relaxed">
                    Choose from our collection of chef-curated meals to start cooking smarter!
                  </p>
                  <motion.div
                    whileHover={hoverLiftSm}
                    whileTap={tapPress}
                    className="mt-8"
                  >
                    <Link
                      to="/meal-kits"
                      onClick={() => setIsOpen(false)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF6B35] hover:bg-[#E85A24] text-white font-semibold text-sm rounded-xl shadow-[0_4px_14px_rgba(255,107,53,0.25)] transition-all duration-200"
                    >
                      Explore Meal Kits
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              ) : (
                <>
                  {/* Cart Items List */}
                  <ul className="space-y-4">
                    {items.map((item) => (
                      <motion.li
                        key={item.id}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-4 bg-white dark:bg-[#1A1A18] rounded-2xl border border-gray-200/60 dark:border-neutral-800/80 p-4 shadow-[0_2px_8px_rgba(0,0,0,0.01)] hover:shadow-[0_4px_14px_rgba(0,0,0,0.02)] transition-shadow"
                      >
                        <img
                          src={item.kit.image}
                          alt={item.kit.name}
                          className="h-20 w-20 rounded-xl object-cover border border-gray-100 dark:border-neutral-800"
                          loading="lazy"
                        />
                        <div className="flex-grow flex flex-col justify-between">
                          <div>
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white line-clamp-1 leading-snug">
                              {item.kit.name}
                            </h3>
                            <p className="text-[10px] font-semibold text-gray-400 mt-0.5">
                              {(item.persons || item.kit.servings || 1)} servings per order
                            </p>
                          </div>

                          <div className="flex items-center justify-between mt-2">
                            <span className="font-extrabold text-sm text-[#FF6B35]">
                              ₹{Math.round((item.kit.price / (item.kit.servings || 1)) * (item.persons || item.kit.servings || 1) * item.quantity)}
                            </span>

                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2.5 bg-gray-50 dark:bg-neutral-800/60 px-2 py-1 rounded-xl border border-gray-150/40 dark:border-neutral-700/30">
                              <motion.button
                                type="button"
                                whileTap={{ scale: 0.85 }}
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-neutral-700 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                              >
                                <Minus className="h-3 w-3" />
                              </motion.button>
                              <span className="w-5 text-center text-xs font-bold text-gray-800 dark:text-gray-200">
                                {item.quantity}
                              </span>
                              <motion.button
                                type="button"
                                whileTap={{ scale: 0.85 }}
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-6 h-6 flex items-center justify-center rounded-lg hover:bg-white dark:hover:bg-neutral-700 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                              >
                                <Plus className="h-3 w-3" />
                              </motion.button>
                            </div>

                            <motion.button
                              type="button"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => removeItem(item.id)}
                              className="p-1.5 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-950/20 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="h-4 w-4" />
                            </motion.button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Footer Summary & Checkout */}
            {items.length > 0 && (
              <div className="border-t border-gray-150/60 dark:border-neutral-800/80 px-6 py-6 bg-white dark:bg-[#181816]">
                <div className="flex justify-between items-center text-gray-900 dark:text-white">
                  <span className="text-sm font-semibold text-gray-500">Subtotal</span>
                  <span className="text-xl font-extrabold text-brand-green">₹{total}</span>
                </div>

                <motion.div
                  whileHover={hoverLiftSm}
                  whileTap={tapPress}
                  className="mt-5"
                >
                  <Link
                    to="/checkout"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary block w-full text-center py-4 rounded-xl font-bold text-sm shadow-[0_6px_18px_rgba(255,107,53,0.3)] bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A]"
                  >
                    Proceed to Checkout
                  </Link>
                </motion.div>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
