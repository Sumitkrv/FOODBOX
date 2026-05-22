import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { CreditCard, MapPin, Check, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/ui/PageHero";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="flex min-h-screen flex-col bg-brand-cream dark:bg-gray-950">
        <PageHero
          title="Order Confirmed!"
          subtitle="Sit back and relax, your meal kit box is being prepped."
          breadcrumbs={[{ label: "Checkout", path: "/checkout" }, { label: "Success" }]}
        />
        <div className="flex-1 flex items-center justify-center p-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="card-base max-w-md p-10 text-center relative overflow-hidden border border-brand-green/10"
          >
            <div className="absolute -inset-10 bg-brand-green/5 rounded-full blur-3xl -z-10" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-brand-green text-white shadow-lg shadow-brand-green/30"
            >
              <Check className="h-10 w-10" />
            </motion.div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">Order Placed!</h2>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              We've received your order. Your fresh prepped vegetables, spices, and ingredients will reach your doorstep soon.
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800 flex flex-col gap-3">
              <Link to="/track" className="btn-primary w-full py-3.5 font-bold">
                Track Your Order
              </Link>
              <Link to="/meal-kits" className="btn-secondary w-full py-3 font-bold">
                Continue Shopping
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col bg-brand-cream dark:bg-gray-950">
        <PageHero
          title="Checkout"
          subtitle="Your items and delivery information"
          breadcrumbs={[{ label: "Checkout" }]}
        />
        <div className="flex-1 flex flex-col items-center justify-center px-4 py-20">
          <div className="h-16 w-16 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mb-4">
            <ShoppingBag className="h-8 w-8" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 text-lg font-medium">Your cart is empty.</p>
          <Link to="/meal-kits" className="btn-primary mt-6">
            Browse Meal Kits
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-gray-950 pb-20">
      <PageHero
        title="Checkout"
        subtitle="Complete your order and start cooking"
        breadcrumbs={[{ label: "Checkout" }]}
      />

      <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
        {/* Style the step indicator with gradient fills and shadow-sm pills */}
        <div className="flex gap-3 bg-white dark:bg-gray-900 p-2 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800">
          {["Address", "Payment", "Review"].map((s, i) => {
            const isCompleted = step > i;
            const isActive = step === i + 1;
            return (
              <div
                key={s}
                className={`flex-1 rounded-xl py-3 text-center text-xs font-bold transition-all duration-300 ${
                  isCompleted
                    ? "bg-brand-green/10 text-brand-green dark:bg-brand-green/20"
                    : isActive
                    ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                    : "bg-gray-50 text-gray-400 dark:bg-gray-850 dark:text-gray-500"
                }`}
              >
                {i + 1}. {s}
              </div>
            );
          })}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-5 items-start">
          {/* Framer Motion transitions between steps */}
          <div className="space-y-6 lg:col-span-3">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="address-step"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="card-base p-6 border border-gray-100 dark:border-gray-800"
                >
                  <h2 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
                    <MapPin className="h-5 w-5 text-brand-green" /> Delivery Address
                  </h2>
                  <input
                    className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-950 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 dark:border-gray-850 dark:bg-gray-850 dark:text-white"
                    placeholder="Street address"
                  />
                  <input
                    className="mt-3 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-950 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 dark:border-gray-850 dark:bg-gray-850 dark:text-white"
                    placeholder="City, PIN code"
                  />
                  <button type="button" onClick={() => setStep(2)} className="btn-primary mt-6 w-full sm:w-auto">
                    Continue to Payment
                  </button>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div
                  key="payment-step"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="card-base p-6 border border-gray-100 dark:border-gray-800"
                >
                  <h2 className="flex items-center gap-2 font-bold text-gray-900 dark:text-white">
                    <CreditCard className="h-5 w-5 text-brand-green" /> Select Payment Method
                  </h2>
                  <div className="mt-4 grid grid-cols-3 gap-3">
                    {["UPI", "Card", "COD"].map((m) => (
                      <button
                        key={m}
                        type="button"
                        className="rounded-xl border-2 border-brand-green bg-brand-green/5 py-4 font-bold text-brand-green dark:border-brand-green-light dark:text-brand-green-light hover:bg-brand-green/10 transition"
                      >
                        {m}
                      </button>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn-secondary flex-1 font-bold py-3"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="btn-primary flex-1 font-bold py-3"
                    >
                      Review Order
                    </button>
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div
                  key="review-step"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="card-base p-6 border border-gray-100 dark:border-gray-800"
                >
                  <h2 className="font-bold text-gray-900 dark:text-white pb-3 border-b border-gray-100 dark:border-gray-800">
                    Order Summary
                  </h2>
                  <ul className="mt-4 space-y-4">
                    {items.map((item) => (
                      <li key={item.kit.id} className="border-b border-gray-100 dark:border-gray-800 pb-4 last:border-0">
                        <div className="flex justify-between text-sm font-semibold text-gray-900 dark:text-white">
                          <span>
                            {item.kit.name} × {item.quantity}
                          </span>
                          <span className="font-bold">₹{item.kit.price * item.quantity}</span>
                        </div>
                        <div className="mt-2 pl-3 border-l-2 border-brand-green/30">
                          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                            Prepped Ingredients ({item.kit.servings * item.quantity} servings):
                          </p>
                          <div className="mt-1.5 flex flex-wrap gap-1.5">
                            {item.kit.ingredients.map((ing) => (
                              <span
                                key={ing.name}
                                className="inline-flex items-center gap-1 rounded-md bg-gray-100 dark:bg-gray-800 px-2 py-0.5 text-[10px] text-gray-600 dark:text-gray-400"
                              >
                                {ing.name}: <strong className="text-brand-orange font-semibold font-mono">{ing.amount * item.quantity} {ing.unit}</strong>
                              </span>
                            ))}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-secondary flex-1 font-bold py-3"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        clearCart();
                        setDone(true);
                      }}
                      className="btn-primary flex-1 font-bold py-3.5"
                    >
                      Place Order — ₹{total + 40}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sticky Summary with Gradient Accent Top Border */}
          <div className="lg:col-span-2">
            <div className="card-base sticky top-32 overflow-hidden border border-gray-100 dark:border-gray-800 shadow-lg">
              <div className="h-1.5 bg-gradient-to-r from-brand-green to-brand-orange" />
              <div className="p-6">
                <h3 className="font-bold text-gray-900 dark:text-white border-b border-gray-100 dark:border-gray-800 pb-3">Your Items</h3>
                <div className="max-h-72 overflow-y-auto scrollbar-hide">
                  {items.map((item) => (
                    <div key={item.kit.id} className="mt-4 flex gap-3 pb-3 border-b border-gray-50 dark:border-gray-850 last:border-0">
                      <img
                        src={item.kit.image}
                        alt=""
                        className="h-12 w-12 rounded-xl object-cover ring-2 ring-gray-100 dark:ring-gray-800"
                        width={48}
                        height={48}
                      />
                      <div className="flex-1 text-xs">
                        <p className="font-semibold text-gray-800 dark:text-gray-200">{item.kit.name}</p>
                        <p className="text-gray-400 mt-0.5">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold text-sm text-gray-950 dark:text-white">₹{item.kit.price * item.quantity}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 space-y-2 border-t border-gray-100 dark:border-gray-800 pt-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900 dark:text-white">₹{total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span className="font-medium text-gray-900 dark:text-white">₹40</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold border-t border-dashed border-gray-100 dark:border-gray-800 pt-3 mt-2">
                    <span className="text-gray-900 dark:text-white">Total</span>
                    <span className="text-brand-green">₹{total + 40}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
