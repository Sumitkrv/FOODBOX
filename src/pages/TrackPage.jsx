import { useState, useEffect } from "react";
import { Package, Box, Truck, CheckCircle2, CheckSquare, Square, Inbox } from "lucide-react";
import { mealKits } from "@/lib/data";

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
    <div className="min-h-screen bg-gray-50 pt-28 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 pb-20 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Track Your Order</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Order #FBX-28471 • ₹527</p>
        </div>

        <div className="mt-12 card-base p-8">
          <div className="relative">
            <div className="absolute bottom-8 left-8 top-8 w-0.5 bg-gray-200 dark:bg-gray-700" />
            <div
              className="absolute left-8 top-8 w-0.5 bg-brand-green transition-all duration-1000"
              style={{ height: `${(activeStage / 3) * 100}%`, maxHeight: "calc(100% - 4rem)" }}
            />
            <div className="space-y-10">
              {stages.map((stage, i) => {
                const isActive = i <= activeStage;
                const isCurrent = i === activeStage;
                return (
                  <div key={stage.id} className="relative flex items-center gap-6">
                    <div
                      className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-500 ${
                        isActive ? "bg-brand-green text-white shadow-lg" : "bg-gray-100 text-gray-400 dark:bg-gray-800"
                      } ${isCurrent ? "animate-pulse-soft ring-4 ring-brand-green/30" : ""}`}
                    >
                      <stage.icon className="h-7 w-7" />
                    </div>
                    <div>
                      <h3 className={`font-semibold ${isActive ? "text-gray-900 dark:text-white" : "text-gray-400"}`}>
                        {stage.label}
                      </h3>
                      {isCurrent && (
                        <p className="mt-1 text-sm text-brand-green font-medium">
                          {i === 0 && "Chopping fresh vegetables..."}
                          {i === 1 && "Packing your FOODBOX..."}
                          {i === 2 && "Rahul is on the way • ETA 18 min"}
                          {i === 3 && "Enjoy your meal!"}
                        </p>
                      )}
                      {i < activeStage && <p className="mt-1 text-xs text-gray-500">Completed</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-brand-green to-brand-green-light p-6 text-white shadow-md">
          <p className="font-semibold text-lg">Delivery Partner: Rahul M.</p>
          <p className="mt-1 text-sm text-white/80">Vehicle: Bike • Contact: +91 98XXX XXXXX</p>
        </div>

        {/* FOODBOX Unboxing & Ingredients Unpacking Checklist */}
        <div className="mt-8 card-base p-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4 dark:border-gray-800">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green/10 text-brand-green">
                <Inbox className="h-5 w-5" />
              </div>
              <div>
                <h2 className="font-bold text-gray-900 dark:text-white text-lg">FOODBOX Unboxing Checklist</h2>
                <p className="text-xs text-gray-500 dark:text-gray-400">Verify your fresh pre-portioned ingredients as you unpack</p>
              </div>
            </div>
            <span className="font-mono text-xs font-bold text-brand-green bg-brand-green/10 dark:bg-brand-green/20 px-3 py-1 rounded-full shrink-0">
              {percentComplete}% Checked
            </span>
          </div>

          {/* Progress bar */}
          <div className="mt-4 h-2 w-full rounded-full bg-gray-150 dark:bg-gray-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-brand-green to-brand-green-light transition-all duration-500"
              style={{ width: `${percentComplete}%` }}
            />
          </div>

          <div className="mt-6 space-y-3 max-h-[320px] overflow-y-auto pr-1">
            {orderIngredients.map((item) => {
              const isChecked = !!checkedIngredients[item.key];
              return (
                <button
                  key={item.key}
                  type="button"
                  onClick={() => toggleChecked(item.key)}
                  className={`flex w-full items-center gap-3.5 rounded-xl border p-3 text-left transition-all ${
                    isChecked
                      ? "border-brand-green/40 bg-brand-green/5 text-gray-400 dark:text-gray-500 line-through"
                      : "border-gray-200 dark:border-gray-800 hover:border-brand-orange bg-white dark:bg-gray-900 hover:shadow-sm"
                  }`}
                >
                  {isChecked ? (
                    <CheckSquare className="h-5 w-5 text-brand-green shrink-0" />
                  ) : (
                    <Square className="h-5 w-5 text-gray-300 dark:text-gray-600 shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-medium ${isChecked ? "text-gray-400 dark:text-gray-500" : "text-gray-900 dark:text-white"}`}>
                      {item.ingName}
                    </p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500">
                      Packaged for: {item.kitName}
                    </p>
                  </div>
                  <span className={`font-mono text-xs font-bold px-2 py-0.5 rounded shrink-0 ${isChecked ? "bg-gray-100 dark:bg-gray-800 text-gray-400" : "bg-brand-orange/15 text-brand-orange"}`}>
                    {item.amount} {item.unit}
                  </span>
                </button>
              );
            })}
          </div>

          {percentComplete === 100 && (
            <div className="mt-5 rounded-xl bg-green-50 dark:bg-green-950/20 p-4 border border-green-200 dark:border-green-900/30 text-center animate-fade-in">
              <p className="text-sm font-semibold text-green-800 dark:text-green-300">
                🎉 All ingredients verified! Everything is ready for cooking.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
