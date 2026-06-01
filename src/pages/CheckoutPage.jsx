import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { CreditCard, MapPin, Check, ShoppingBag, ArrowRight, ArrowLeft, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CheckoutPage() {
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("UPI");

  const baseServings = 1; // standard default for fallback

  if (done) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] pb-24 relative overflow-hidden flex flex-col justify-between">
        {/* Soft decorative background gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,107,53,0.06) 0%, transparent 60%)' }} />
        
        {/* Light Success Header */}
        <section className="pt-24 pb-8 px-5 sm:px-6 lg:px-8 relative z-10 text-center">
          <nav className="flex items-center justify-center text-xs font-semibold text-gray-400 mb-3 space-x-2">
            <Link className="hover:text-gray-900 transition-colors" to="/">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-bold">Order Success</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Order Confirmed!
          </h1>
          <p className="mt-2.5 max-w-xl mx-auto text-sm text-gray-500 font-medium">
            Sit back and relax, your fresh prepped chef ingredients are arriving soon.
          </p>
        </section>

        <div className="flex-grow flex items-center justify-center p-4 pb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="bg-white max-w-md w-full p-8 sm:p-10 text-center rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative overflow-hidden"
          >
            {/* Soft green backdrop inside success card */}
            <div className="absolute -inset-10 bg-green-50/40 rounded-full blur-3xl -z-10" />
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
              className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-600 text-white shadow-lg shadow-green-600/20"
            >
              <Check className="h-10 w-10 stroke-[3px]" />
            </motion.div>
            
            <h2 className="mt-6 text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">Order Placed!</h2>
            <p className="mt-3.5 text-[13.5px] text-gray-550 leading-relaxed font-medium">
              We've received your order. Your fresh prepped vegetables, signature spice mixes, and chilled ingredients are being packed in our eco-insulated containers.
            </p>
            
            <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col gap-3">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/track" className="h-12 inline-flex items-center justify-center gap-1.5 w-full bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white font-black uppercase tracking-wider text-[11px] rounded-2xl shadow-[0_6px_20px_rgba(255,107,53,0.25)] transition-all">
                  Track Your Order
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link to="/meal-kits" className="h-12 inline-flex items-center justify-center w-full bg-[#FAFAF8] hover:bg-gray-100 text-gray-700 font-black uppercase tracking-wider text-[10.5px] rounded-2xl border border-gray-200/80 transition-all">
                  Continue Shopping
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-[#FAF9F5] pb-24 relative overflow-hidden flex flex-col justify-between">
        {/* Soft decorative background gradients */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,107,53,0.06) 0%, transparent 60%)' }} />
        
        {/* Light Empty Header */}
        <section className="pt-24 pb-8 px-5 sm:px-6 lg:px-8 relative z-10 text-center">
          <nav className="flex items-center justify-center text-xs font-semibold text-gray-400 mb-3 space-x-2">
            <Link className="hover:text-gray-900 transition-colors" to="/">Home</Link>
            <span>/</span>
            <span className="text-gray-900 font-bold">Checkout</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            Checkout
          </h1>
          <p className="mt-2.5 max-w-xl mx-auto text-sm text-gray-500 font-medium">
            Your items and delivery information
          </p>
        </section>

        <div className="flex-grow flex flex-col items-center justify-center px-4 py-20 relative z-10">
          <div className="w-20 h-20 rounded-full bg-orange-50 flex items-center justify-center text-[#FF6B35] mb-6 shadow-inner border border-orange-100/50">
            <ShoppingBag className="h-10 w-10" />
          </div>
          <p className="text-gray-900 text-lg font-black tracking-tight">Your cart is empty.</p>
          <p className="text-xs text-gray-450 mt-1 font-semibold">Choose from our collection of chef-curated meals first!</p>
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="mt-6">
            <Link to="/meal-kits" className="h-11 inline-flex items-center justify-center gap-1.5 px-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white font-black uppercase tracking-wider text-[11px] rounded-2xl shadow-[0_6px_20px_rgba(255,107,53,0.25)] transition-all">
              Browse Meal Kits
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F5] pb-24 relative overflow-hidden">
      {/* Soft decorative background gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,107,53,0.06) 0%, transparent 60%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(99,102,241,0.04) 0%, transparent 60%)' }} />

      {/* ── Light-Themed Modern Header ── */}
      <section className="pt-24 pb-8 px-5 sm:px-6 lg:px-8 relative z-10 text-center">
        <nav className="flex items-center justify-center text-xs font-semibold text-gray-400 mb-3 space-x-2">
          <Link className="hover:text-gray-900 transition-colors" to="/">Home</Link>
          <span>/</span>
          <span className="text-gray-950 font-bold">Checkout</span>
        </nav>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
          Checkout
        </h1>
        <p className="mt-2.5 max-w-xl mx-auto text-sm text-gray-500 font-semibold leading-relaxed">
          Complete your order, get your fresh prepped ingredients, and start cooking in minutes!
        </p>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-8 lg:px-8 relative z-10">
        {/* Style the step indicator with gradient fills and shadow-sm pills */}
        <div className="flex gap-2.5 bg-white p-2 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.01)] border border-gray-200/80">
          {["Address", "Payment", "Review"].map((s, i) => {
            const isCompleted = step > i;
            const isActive = step === i + 1;
            return (
              <div
                key={s}
                className={`flex-1 rounded-xl py-3 text-center text-[10.5px] font-black uppercase tracking-wider transition-all duration-300 ${
                  isCompleted
                    ? "bg-green-50 text-green-700 border border-green-100"
                    : isActive
                    ? "bg-[#FF6B35] text-white shadow-[0_4px_14px_rgba(255,107,53,0.22)] border border-[#FF6B35]"
                    : "bg-[#FAFAF8] text-gray-400 border border-gray-150/40"
                }`}
              >
                {i + 1}. {s}
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-5 items-start">
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
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-green-50/30 rounded-full blur-2xl pointer-events-none" />
                  
                  <h2 className="flex items-center gap-2 font-bold text-gray-900 text-lg border-b border-gray-100 pb-4">
                    <span className="p-1.5 rounded-lg bg-green-50 text-green-600 shrink-0 border border-green-100">
                      <MapPin className="h-4.5 w-4.5" />
                    </span>
                    Delivery Address
                  </h2>
                  
                  <div className="space-y-3.5 mt-5">
                    <div>
                      <label className="block text-[9.5px] font-black text-gray-400 uppercase tracking-widest leading-none mb-2">Street Address</label>
                      <input
                        className="w-full rounded-xl border border-gray-250/70 bg-[#FAFAF8] px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20 font-semibold text-sm transition-all shadow-sm"
                        placeholder="Street Address, Apartment, Suite"
                      />
                    </div>
                    <div>
                      <label className="block text-[9.5px] font-black text-gray-400 uppercase tracking-widest leading-none mb-2">City & PIN Code</label>
                      <input
                        className="w-full rounded-xl border border-gray-250/70 bg-[#FAFAF8] px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-[#FF6B35] focus:outline-none focus:ring-2 focus:ring-[#FF6B35]/20 font-semibold text-sm transition-all shadow-sm"
                        placeholder="e.g. Pune, 411001"
                      />
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-gray-100">
                    <motion.button
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setStep(2)}
                      className="h-11 inline-flex items-center justify-center gap-1.5 px-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white font-black uppercase tracking-wider text-[11px] rounded-2xl shadow-[0_6px_20px_rgba(255,107,53,0.2)] transition-all w-full sm:w-auto"
                    >
                      Continue to Payment
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="payment-step"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 15 }}
                  transition={{ duration: 0.25 }}
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-orange-50/30 rounded-full blur-2xl pointer-events-none" />

                  <h2 className="flex items-center gap-2 font-bold text-gray-900 text-lg border-b border-gray-100 pb-4">
                    <span className="p-1.5 rounded-lg bg-orange-50 text-[#FF6B35] shrink-0 border border-orange-100">
                      <CreditCard className="h-4.5 w-4.5" />
                    </span>
                    Select Payment Method
                  </h2>

                  <div className="mt-5 grid grid-cols-3 gap-3.5">
                    {["UPI", "Card", "COD"].map((method) => {
                      const isSelected = paymentMethod === method;
                      return (
                        <motion.button
                          key={method}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.96 }}
                          type="button"
                          onClick={() => setPaymentMethod(method)}
                          className={`rounded-2xl border-2 py-4.5 font-extrabold text-xs uppercase tracking-wider transition-all shadow-sm flex flex-col items-center justify-center gap-1.5 ${
                            isSelected
                              ? "border-[#FF6B35] bg-[#FF6B35]/5 text-[#FF6B35]"
                              : "border-gray-250/70 bg-white hover:border-[#FF6B35]/50 text-gray-600"
                          }`}
                        >
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${isSelected ? "border-[#FF6B35]" : "border-gray-300"}`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35]" />}
                          </span>
                          {method}
                        </motion.button>
                      );
                    })}
                  </div>

                  <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setStep(1)}
                      className="h-11 inline-flex items-center justify-center gap-1.5 px-6 bg-[#FAFAF8] hover:bg-gray-100 text-gray-700 font-black uppercase tracking-wider text-[10.5px] rounded-2xl border border-gray-200/80 transition-all flex-1"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setStep(3)}
                      className="h-11 inline-flex items-center justify-center gap-1.5 px-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white font-black uppercase tracking-wider text-[11px] rounded-2xl shadow-[0_6px_20px_rgba(255,107,53,0.2)] transition-all flex-1"
                    >
                      Review Order
                      <ArrowRight className="h-4 w-4" />
                    </motion.button>
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
                  className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)] relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-purple-50/30 rounded-full blur-2xl pointer-events-none" />

                  <h2 className="flex items-center gap-2 font-bold text-gray-900 text-lg border-b border-gray-100 pb-4">
                    <span className="p-1.5 rounded-lg bg-purple-50 text-purple-600 shrink-0 border border-purple-100">
                      <ShieldCheck className="h-4.5 w-4.5" />
                    </span>
                    Order Summary
                  </h2>

                  <ul className="mt-5 space-y-4">
                    {items.map((item) => (
                      <li key={item.kit.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                        <div className="flex justify-between text-sm font-bold text-gray-900 leading-tight">
                          <span>
                            {item.kit.name} <span className="text-gray-400 font-semibold text-xs ml-1.5">× {item.quantity}</span>
                          </span>
                          <span className="font-extrabold text-gray-800">₹{item.kit.price * item.quantity}</span>
                        </div>
                        
                        {/* Custom Portion scaling details list inside summary */}
                        <div className="mt-2.5 pl-3 border-l-2 border-orange-200">
                          <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="h-3 w-3 text-amber-500" /> Prepped Ingredients ({Math.round((item.persons || item.kit.servings || baseServings) * item.quantity)} servings):
                          </p>
                          <div className="mt-1.5 flex flex-wrap gap-1.5">
                            {item.kit.ingredients.map((ing) => (
                              <span
                                key={ing.name}
                                className="inline-flex items-center gap-1 rounded-lg bg-[#FAFAF8] border border-gray-150/45 px-2 py-0.5 text-[10px] font-bold text-gray-500"
                              >
                                {ing.name}: <strong className="text-[#FF6B35] font-mono font-bold">{Number(((ing.amount / (item.kit.servings || baseServings)) * (item.persons || item.kit.servings || baseServings) * item.quantity).toFixed(1))} {ing.unit}</strong>
                              </span>
                            ))}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-8 pt-5 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setStep(2)}
                      className="h-11 inline-flex items-center justify-center gap-1.5 px-6 bg-[#FAFAF8] hover:bg-gray-100 text-gray-700 font-black uppercase tracking-wider text-[10.5px] rounded-2xl border border-gray-200/80 transition-all flex-1"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => {
                        clearCart();
                        setDone(true);
                      }}
                      className="h-11 inline-flex items-center justify-center gap-1.5 px-6 bg-gradient-to-r from-[#FF6B35] to-[#FF8C5A] text-white font-black uppercase tracking-wider text-[11px] rounded-2xl shadow-[0_6px_20px_rgba(255,107,53,0.2)] transition-all flex-1"
                    >
                      Place Order — ₹{total + 40}
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sticky Summary Card with Modern Styling */}
          <div className="lg:col-span-2">
            <div className="bg-white sticky top-28 overflow-hidden rounded-3xl border border-gray-200/80 shadow-[0_8px_30px_rgba(0,0,0,0.02)]">
              <div className="h-1.5 bg-gradient-to-r from-green-600 to-[#FF6B35]" />
              <div className="p-6">
                <h3 className="font-bold text-gray-900 border-b border-gray-100 pb-3 text-sm flex items-center gap-1.5">
                  <ShoppingBag className="w-4 h-4 text-[#FF6B35]" /> Your Items
                </h3>
                
                {/* Scrollable Summary List */}
                <div className="max-h-72 overflow-y-auto mt-3 space-y-3.5 pr-1.5">
                  {items.map((item) => (
                    <div key={item.kit.id} className="flex gap-3 pb-3.5 border-b border-gray-50 last:border-0 last:pb-0">
                      <img
                        src={item.kit.image}
                        alt=""
                        className="h-12 w-12 rounded-xl object-cover border border-gray-100 shadow-sm shrink-0"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-gray-800 text-xs truncate leading-tight">{item.kit.name}</p>
                        <p className="text-[10px] text-gray-400 font-bold mt-1">Qty: {item.quantity}</p>
                      </div>
                      <p className="font-extrabold text-xs text-gray-900 shrink-0">₹{item.kit.price * item.quantity}</p>
                    </div>
                  ))}
                </div>

                {/* Subtotal, Delivery, and Checkout Values list */}
                <div className="mt-5 space-y-2 border-t border-gray-100 pt-4 text-xs font-semibold text-gray-500">
                  <div className="flex justify-between items-center">
                    <span>Subtotal</span>
                    <span className="font-bold text-gray-800">₹{total}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Delivery</span>
                    <span className="font-bold text-gray-800">₹40</span>
                  </div>
                  
                  <div className="flex justify-between text-base font-extrabold border-t border-dashed border-gray-150 pt-3 mt-2 text-gray-900">
                    <span>Total</span>
                    <span className="text-green-600 font-black">₹{total + 40}</span>
                  </div>
                </div>

                {/* Micro Guarantee security banner */}
                <div className="mt-5 p-2.5 rounded-xl bg-green-50/50 border border-green-100/50 text-[10px] text-green-700/80 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="h-3.5 w-3.5 text-green-600 shrink-0" />
                  <span>Secure 256-bit Encrypted Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
