import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, Box, Truck, CheckCircle2, CheckSquare, Square, Inbox, MessageSquare, Phone } from "lucide-react";
import { mealKits } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";

const stages = [
  { id: "preparing", label: "Preparing", icon: Package },
  { id: "packed", label: "Packed", icon: Box },
  { id: "delivery", label: "Out for Delivery", icon: Truck },
  { id: "delivered", label: "Delivered", icon: CheckCircle2 },
];

export default function TrackPage() {
  const [activeStage, setActiveStage] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((s) => (s < 3 ? s + 1 : s));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Mock ordered items for the checklist (totaling approx. ₹527 matching Dashboard)
  const orderItems = [
    { kit: mealKits.find((k) => k.id === "palak-paneer"), quantity: 1 },
    { kit: mealKits.find((k) => k.id === "jeera-rice"), quantity: 1 },
  ];

  // Flatten the ingredients list for our interactive checklist
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

  // Track checked state of each ingredient key
  const [checkedIngredients, setCheckedIngredients] = useState({});

  const toggleChecked = (key) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const totalIngredients = orderIngredients.length;
  const checkedCount = Object.values(checkedIngredients).filter(Boolean).length;
  const percentComplete = totalIngredients > 0 ? Math.round((checkedCount / totalIngredients) * 100) : 0;

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-gray-950 pb-20">
      <PageHero
        title="Track Your Order"
        subtitle="Order #FBX-28471 • Placed on May 18, 2026 • Total ₹527"
        breadcrumbs={[{ label: "Dashboard", path: "/dashboard" }, { label: "Track" }]}
      />

      <div className="mx-auto max-w-3xl px-4 py-12 lg:px-8">
        {/* Timeline Overhaul */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-base p-8 border border-gray-100 dark:border-gray-800 shadow-sm relative overflow-hidden"
        >
          <div className="absolute -inset-10 bg-brand-green/5 rounded-full blur-3xl -z-10" />
          <h2 className="text-xl font-extrabold text-gray-900 dark:text-white mb-8 border-b border-gray-100 dark:border-gray-800 pb-3">Delivery Status</h2>

          <div className="relative">
            {/* Background tracking line */}
            <div className="absolute bottom-8 left-8 top-8 w-1 bg-gray-200 dark:bg-gray-800 rounded-full" />
            {/* Active tracking line */}
            <motion.div
              className="absolute left-8 top-8 w-1 bg-brand-green rounded-full transition-all duration-1000 origin-top"
              style={{ height: `${(activeStage / 3) * 100}%`, maxHeight: "calc(100% - 4rem)" }}
            />
            <div className="space-y-10">
              {stages.map((stage, i) => {
                const isActive = i <= activeStage;
                const isCurrent = i === activeStage;
                return (
                  <div key={stage.id} className="relative flex items-start gap-6">
                    <div
                      className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 shrink-0 ${
                        isActive
                          ? "bg-brand-green text-white shadow-lg shadow-brand-green/20"
                          : "bg-gray-100 text-gray-400 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                      } ${isCurrent ? "animate-pulse-soft ring-4 ring-brand-green/20 scale-103" : ""}`}
                    >
                      <stage.icon className="h-6 w-6" />
                    </div>
                    <div className="pt-1.5 flex-1">
                      <h3 className={`font-bold text-base transition duration-300 ${isActive ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>
                        {stage.label}
                      </h3>
                      {isCurrent && (
                        <p className="mt-1 text-sm text-brand-green font-bold animate-pulse-soft">
                          {i === 0 && "Chopping fresh vegetables..."}
                          {i === 1 && "Packing your FOODBOX..."}
                          {i === 2 && "Rahul is on the way • ETA 18 min"}
                          {i === 3 && "Enjoy your meal!"}
                        </p>
                      )}
                      {i < activeStage && <p className="mt-1 text-xs font-semibold text-gray-400">Completed</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Delivery Partner Card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 rounded-2xl bg-gradient-to-br from-brand-green to-brand-green-dark p-6 text-white shadow-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
          <div className="relative flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="font-extrabold text-lg text-white">Your Delivery Hero: Rahul M.</p>
              <p className="mt-1 text-sm text-white/80 font-semibold">Vehicle: Bike • Contact: +91 98XXX XXXXX</p>
            </div>
            <div className="flex gap-2">
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur transition">
                <Phone className="h-4 w-4 text-white" />
              </button>
              <button type="button" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 hover:bg-white/30 backdrop-blur transition">
                <MessageSquare className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* FOODBOX Unboxing & Ingredients Unpacking Checklist with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 card-base p-6 border border-gray-100 dark:border-gray-800 shadow-sm"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green dark:bg-brand-green/20">
                <Inbox className="h-5.5 w-5.5" />
              </div>
              <div>
                <h2 className="font-extrabold text-gray-900 dark:text-white text-lg">FOODBOX Unboxing Checklist</h2>
                <p className="text-xs text-gray-400">Verify your fresh pre-portioned ingredients as you unpack</p>
              </div>
            </div>
            <span className="font-mono text-xs font-bold text-brand-green bg-brand-green/10 dark:bg-brand-green/20 px-3 py-1 rounded-full shrink-0">
              {percentComplete}% Checked
            </span>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-2.5 w-full rounded-full bg-gray-100 dark:bg-gray-850 overflow-hidden border border-gray-50 dark:border-gray-800">
            <div
              className="h-full bg-gradient-to-r from-brand-green to-brand-green-light transition-all duration-500 rounded-full"
              style={{ width: `${percentComplete}%` }}
            />
          </div>

          <div className="mt-6 space-y-3 max-h-[320px] overflow-y-auto pr-1">
            <AnimatePresence>
              {orderIngredients.map((item) => {
                const isChecked = !!checkedIngredients[item.key];
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => toggleChecked(item.key)}
                    className={`flex w-full items-center gap-3.5 rounded-2xl border p-3.5 text-left transition-all duration-200 ${
                      isChecked
                        ? "border-brand-green/20 bg-brand-green/5 text-gray-400 dark:border-brand-green/10 dark:bg-brand-green/5 line-through"
                        : "border-gray-150 dark:border-gray-800 hover:border-brand-orange bg-white dark:bg-gray-900 hover:shadow-sm"
                    }`}
                  >
                    {isChecked ? (
                      <CheckSquare className="h-5 w-5 text-brand-green shrink-0" />
                    ) : (
                      <Square className="h-5 w-5 text-gray-300 dark:text-gray-650 shrink-0" />
                    )}
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm font-bold ${isChecked ? "text-gray-450 dark:text-gray-500" : "text-gray-900 dark:text-white"}`}>
                        {item.ingName}
                      </p>
                      <p className="text-[10px] text-gray-400">
                        Packaged for: {item.kitName}
                      </p>
                    </div>
                    <span className={`font-mono text-xs font-bold px-2.5 py-0.5 rounded-lg shrink-0 ${isChecked ? "bg-gray-100 dark:bg-gray-800 text-gray-400" : "bg-brand-orange/15 text-brand-orange"}`}>
                      {item.amount} {item.unit}
                    </span>
                  </button>
                );
              })}
            </AnimatePresence>
          </div>

          {percentComplete === 100 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-5 rounded-2xl bg-green-50 dark:bg-green-950/20 p-5 border border-green-200 dark:border-green-900/30 text-center"
            >
              <p className="text-sm font-bold text-green-800 dark:text-green-300 flex items-center justify-center gap-1.5">
                <span>🎉</span> All ingredients verified! Everything is ready for cooking.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
