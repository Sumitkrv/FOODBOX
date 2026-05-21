import { useState, useEffect } from "react";
import { Package, Box, Truck, CheckCircle2 } from "lucide-react";

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

  return (
    <div className="min-h-screen bg-gray-50 pt-28 dark:bg-gray-950">
      <div className="mx-auto max-w-3xl px-4 pb-20 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Track Your Order</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">Order #FBX-28471</p>
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
                        <p className="mt-1 text-sm text-brand-green">
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

        <div className="mt-8 rounded-2xl bg-gradient-to-r from-brand-green to-brand-green-light p-6 text-white">
          <p className="font-semibold">Delivery Partner: Rahul M.</p>
          <p className="mt-1 text-sm text-white/80">Vehicle: Bike • Contact: +91 98XXX XXXXX</p>
        </div>
      </div>
    </div>
  );
}
