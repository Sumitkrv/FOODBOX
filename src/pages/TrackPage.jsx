import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, Box, Truck, CheckCircle2, Inbox, MessageSquare, Phone, Search, ChevronDown, Check, Square, CheckSquare } from "lucide-react";
import { mealKits } from "@/lib/data";

const stages = [
  { id: "preparing", label: "Preparing", icon: Package, desc: "Chopping fresh vegetables...", date: "May 25, 11:45 AM" },
  { id: "packed", label: "Packed", icon: Box, desc: "Packing your FOODBOX...", date: "May 25, 02:30 PM" },
  { id: "delivery", label: "In Transit", icon: Truck, desc: "Rahul is on the way • ETA 18 min", date: "May 26, 08:30 AM" },
  { id: "delivered", label: "Delivered", icon: CheckCircle2, desc: "Enjoy your meal!", date: "Estimated Today" },
];

const faqs = [
  {
    q: "What time will my delivery arrive?",
    a: "Deliveries typically occur between 8:00 AM and 8:00 PM. On the morning of your delivery, you will receive a 2-hour delivery window notification.",
  },
  {
    q: "Do I need to be home to receive my kit?",
    a: "No! Our insulated boxes are designed to keep your ingredients fresh for up to 24 hours on your doorstep. You can specify a delivery spot in your profile settings.",
  },
  {
    q: "Can I change my delivery address?",
    a: "Changes to delivery addresses must be made at least 48 hours before your scheduled delivery day via your account dashboard.",
  },
];

export default function TrackPage() {
  const [orderId, setOrderId] = useState("FBX-28471");
  const [activeStage, setActiveStage] = useState(1);
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [openFaq, setOpenFaq] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((s) => (s < 2 ? s + 1 : s));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const orderItems = [
    { kit: mealKits.find((k) => k.id === "palak-paneer"), quantity: 1 },
    { kit: mealKits.find((k) => k.id === "jeera-rice"), quantity: 1 },
  ];

  const orderIngredients = [];
  orderItems.forEach((item) => {
    if (item.kit && item.kit.ingredients) {
      item.kit.ingredients.forEach((ing) => {
        orderIngredients.push({
          key: `${item.kit.id}-${ing.name}`,
          kitName: item.kit.name,
          ingName: ing.name,
          amount: ing.amount * item.quantity,
          unit: ing.unit,
        });
      });
    }
  });

  const toggleChecked = (key) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const simulateTrack = () => {
    if (!orderId.trim()) return;
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      setActiveStage(0);
      setCheckedIngredients({});
      setTimeout(() => {
        setActiveStage(2);
      }, 300);
      document.getElementById("tracking-result")?.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  const totalIngredients = orderIngredients.length;
  const checkedCount = Object.values(checkedIngredients).filter(Boolean).length;
  const percentComplete = totalIngredients > 0 ? Math.round((checkedCount / totalIngredients) * 100) : 0;

  // Horizontal line progress percentages based on active stage
  const progressWidth = activeStage === 0 ? "0%" : activeStage === 1 ? "33%" : activeStage === 2 ? "66%" : "100%";

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-deep-forest pb-24">
      {/* Hero Header Section */}
      <header className="relative pt-28 pb-32 overflow-hidden bg-sage-wash/30 dark:bg-brand-green-light/5 border-b border-brand-green/5">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10 text-center mt-12">
          <h1 className="font-serif text-[42px] leading-tight font-extrabold text-brand-green dark:text-white mb-6">
            Track Your Harvest
          </h1>
          <p className="text-base md:text-lg text-gray-655 dark:text-gray-400 max-w-2xl mx-auto mb-12 font-medium">
            Enter your order ID found in your confirmation email to see exactly where your farm-fresh ingredients are on their journey to your kitchen.
          </p>

          {/* Search Glassmorphism Card */}
          <div className="max-w-xl mx-auto bg-white/80 dark:bg-gray-900/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-black/5 dark:border-gray-800">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-grow text-left">
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-450 dark:text-gray-500 mb-2 ml-1" htmlFor="order_id">
                  Order ID
                </label>
                <input
                  className="w-full bg-gray-50 dark:bg-gray-850 border-0 focus:ring-2 focus:ring-brand-green focus:outline-none rounded-xl px-4 py-3 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 transition-all font-semibold"
                  id="order_id"
                  placeholder="e.g. FBX-28471"
                  type="text"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                />
              </div>
              <div className="flex items-end">
                <button
                  onClick={simulateTrack}
                  disabled={isSearching}
                  className="w-full md:w-auto bg-brand-green hover:bg-brand-green-light text-white px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-brand-green/10"
                >
                  {isSearching ? (
                    <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Truck className="h-4 w-4" />
                  )}
                  Track Delivery
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating illustrations */}
        <div className="absolute top-0 right-0 w-1/4 h-full opacity-5 dark:opacity-10 pointer-events-none hidden lg:block">
          <img
            alt="Fresh Produce"
            className="object-cover h-full w-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrREh14WYkD58cRetisKDIjT8fUBgM73sRdlxMWfXUwAKlvkFxgADocKurY53zWt34VlDtLyv7BxTGs2c9n7tKkbEjYogKyhfnKs7wWVhoEiy-pSYmq6NYaYJNxElP2gySJ6QGzxG_8OkCePQufrW-lD_Cmb0cdprnlD0TkZq9woYGmde7vjiMkwFpbJAgnTlFcivpOmAONgx-CmcMYSYWPwJL1xZAnoBD_466E7gU-Bcw7PPSqDFGo2vkhI0BU8jWtFQteSXu7Vk"
          />
        </div>
        <div className="absolute top-0 left-0 w-1/4 h-full opacity-5 dark:opacity-10 pointer-events-none hidden lg:block">
          <img
            alt="Cooking Prep"
            className="object-cover h-full w-full"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeeL5a3mOygT22xwv820r7qAFhMq4aY2MQYz14vPU4iCnUwv7zl8mZCsArPt8G0uJmjPCvME0a6uA_PnhtDUkMt2B6yVsZmWvFc1t1JvXpjZREMawg6G3q6xCQYzK2b5_8yo60M_v5jEGM4SSsxlA5g3I1h8oUK5nOSPcrhmwj_W_B-OorOz_UBF8u2yRy3CX5hUdw48B2EHObCyCLXKR4y_EC9cgwBOKRX7an-VdLbRAvwYo2rn4yoE0xI8MWEqJT-ETzu6Uxo1U"
          />
        </div>
      </header>

      {/* Tracking Visualizer Section */}
      <section className="py-20 bg-white dark:bg-gray-900 border-b border-black/5 dark:border-gray-800" id="tracking-result">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Desktop progress bar */}
            <div className="hidden md:block absolute top-8 left-12 right-12 h-0.5 bg-gray-150 dark:bg-gray-800 z-0">
              <div
                className="h-full bg-brand-green dark:bg-brand-green-light transition-all duration-1000"
                style={{ width: progressWidth }}
              />
            </div>

            {stages.map((stage, i) => {
              const isActive = i <= activeStage;
              const isCurrent = i === activeStage;
              
              return (
                <div key={stage.id} className="flex md:flex-col items-center gap-4 md:gap-6 relative z-10">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center shadow-md transition-all duration-500 shrink-0 ${
                      isActive
                        ? "bg-brand-green dark:bg-brand-green-light text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-500"
                    } ${
                      isCurrent
                        ? "border-4 border-sage-wash dark:border-brand-green/30 ring-4 ring-brand-green/20 dark:ring-brand-green-light/20 scale-110 animate-pulse"
                        : ""
                    }`}
                  >
                    <stage.icon className="h-6 w-6" />
                  </div>
                  <div className="md:text-center">
                    <h3
                      className={`font-serif text-sm md:text-base font-bold transition duration-300 ${
                        isActive ? "text-brand-green dark:text-white" : "text-gray-400"
                      }`}
                    >
                      {stage.label}
                    </h3>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1 font-semibold">
                      {isCurrent ? stage.desc : stage.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Delivery Hero Card */}
          {activeStage >= 2 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 rounded-3xl bg-brand-green dark:bg-brand-green-dark p-6 text-white shadow-lg relative overflow-hidden border border-white/5"
            >
              <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
              <div className="relative flex flex-wrap items-center justify-between gap-4 z-10">
                <div>
                  <p className="font-serif font-bold text-lg text-white">Your Delivery Hero: Rahul M.</p>
                  <p className="mt-1 text-sm text-white/80 font-semibold">Vehicle: Bike • Contact: +91 98XXX XXXXX</p>
                </div>
                <div className="flex gap-2">
                  <a href="tel:+919876543210" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur transition cursor-pointer">
                    <Phone className="h-4 w-4 text-white" />
                  </a>
                  <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur transition cursor-pointer">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Map Section */}
          <div className="mt-12 rounded-3xl overflow-hidden border border-black/5 dark:border-gray-800 h-80 relative group shadow-sm">
            <img
              alt="Map View"
              className="w-full h-full object-cover filter grayscale dark:invert dark:opacity-80 transition duration-700 group-hover:scale-[1.01]"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKdpZmdtCjykuYG9df5DcrPQL-vkk0aSGrX_MwBf4tfpz8VCU8_k3iTJzbrum3sf2zRpDbJIy3BX9BlrWoULKXH3uE2nM_njOULjlC_Y3zGcgOozFH8PHyKy7M_sKrTdoqLiZpwsfj8sZ8OVrJDaY3IWZsD0ReLk5ghVfoKqdHLnSejzXd3HM3wETqwJHpAeUMwRnFnZoYd2xS5ZUrz8lKMp-3iUIRpzHX9oZIs1w6V8Zfqb618tvbey28jR2wjmCvtTa18ebHmXE"
            />
            <div className="absolute inset-0 bg-brand-green/5 group-hover:bg-transparent transition-all duration-500" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="bg-white dark:bg-gray-900 p-3.5 rounded-full shadow-2xl border border-black/5 dark:border-gray-800 animate-bounce cursor-pointer hover:scale-110 transition duration-300">
                <span className="font-serif text-brand-orange dark:text-brand-orange-light text-3xl">📍</span>
              </div>
            </div>
            <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-6 py-4 rounded-2xl border border-black/5 dark:border-gray-800 shadow-xl max-w-xs">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Current Location</p>
              <p className="font-serif text-base font-bold text-brand-green dark:text-white mt-1">Heading to Bandra West, Mumbai</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOODBOX Ingredients Checklist */}
      <section className="py-20 bg-brand-cream dark:bg-deep-forest border-b border-black/5 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-black/5 dark:border-gray-850 shadow-sm"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-150 dark:border-gray-800 pb-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green dark:bg-brand-green/20">
                  <Inbox className="h-6 w-6" />
                </div>
                <div>
                  <h2 className="font-serif text-lg font-bold text-brand-green dark:text-white">FOODBOX Unboxing Checklist</h2>
                  <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5 font-medium">Verify your fresh pre-portioned ingredients as you unpack</p>
                </div>
              </div>
              <span className="font-mono text-xs font-bold text-brand-green bg-brand-green/10 dark:bg-brand-green/20 px-3 py-1 rounded-full shrink-0">
                {percentComplete}% Checked
              </span>
            </div>

            {/* Progress bar */}
            <div className="mt-6 h-3 w-full rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden border border-black/5 dark:border-gray-800/40">
              <div
                className="h-full bg-brand-green dark:bg-brand-green-light transition-all duration-500 rounded-full"
                style={{ width: `${percentComplete}%` }}
              />
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[360px] overflow-y-auto pr-1">
              <AnimatePresence>
                {orderIngredients.map((item) => {
                  const isChecked = !!checkedIngredients[item.key];
                  return (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => toggleChecked(item.key)}
                      className={`flex items-center gap-3.5 rounded-2xl border p-4 text-left transition-all duration-200 cursor-pointer ${
                        isChecked
                          ? "border-brand-green/10 bg-brand-green/5 text-gray-400 dark:border-brand-green/5 dark:bg-brand-green/5 line-through"
                          : "border-gray-150 dark:border-gray-800 hover:border-brand-orange bg-white dark:bg-gray-900/60 hover:shadow-sm"
                      }`}
                    >
                      {isChecked ? (
                        <CheckSquare className="h-5 w-5 text-brand-green shrink-0 animate-scale-up" />
                      ) : (
                        <Square className="h-5 w-5 text-gray-300 dark:text-gray-600 shrink-0" />
                      )}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm font-bold ${isChecked ? "text-gray-400 dark:text-gray-500" : "text-gray-900 dark:text-white"}`}>
                          {item.ingName}
                        </p>
                        <p className="text-[10px] text-gray-400 dark:text-gray-550 mt-0.5">
                          Kit: {item.kitName}
                        </p>
                      </div>
                      <span className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-lg shrink-0 ${isChecked ? "bg-gray-100 dark:bg-gray-800 text-gray-450" : "bg-brand-orange/15 text-brand-orange"}`}>
                        {item.amount} {item.unit}
                      </span>
                    </button>
                  );
                })}
              </AnimatePresence>
            </div>

            {percentComplete === 100 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-6 rounded-2xl bg-green-50 dark:bg-green-950/20 p-5 border border-green-200 dark:border-green-900/30 text-center"
              >
                <p className="text-sm font-bold text-green-800 dark:text-green-300 flex items-center justify-center gap-1.5">
                  <span>🎉</span> All ingredients verified! Everything is ready for cooking.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-surface-container-low dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/3">
              <h2 className="font-serif text-3xl font-extrabold text-brand-green dark:text-white mb-4">
                Delivery Support
              </h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                Have questions about your artisanal harvest? Our team is here to ensure your farm-to-table experience is seamless.
              </p>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 text-brand-green hover:text-brand-green-light dark:text-brand-green-light dark:hover:text-white font-bold text-xs uppercase tracking-wider hover:underline decoration-2 underline-offset-4"
              >
                Contact Support <span className="font-serif">➔</span>
              </Link>
            </div>

            <div className="md:w-2/3 grid gap-4 items-start">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white dark:bg-gray-900 rounded-2xl border border-black/5 dark:border-gray-800 shadow-sm overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : idx)}
                      className="w-full text-left p-6 flex justify-between items-center cursor-pointer font-serif font-bold text-sm md:text-base text-brand-green dark:text-white hover:text-brand-orange transition-colors"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <div className="px-6 pb-6 pt-1 text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium leading-relaxed border-t border-gray-50 dark:border-gray-850">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
