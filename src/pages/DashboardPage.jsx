import { Link } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Package, MapPin, Heart, Wallet, RefreshCw, ChevronRight } from "lucide-react";
import { mealKits } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";

const tabs = [
  { id: "orders", label: "Order History", icon: Package },
  { id: "addresses", label: "Saved Addresses", icon: MapPin },
  { id: "favorites", label: "Favorite Meals", icon: Heart },
  { id: "wallet", label: "Wallet & Credits", icon: Wallet },
  { id: "subscription", label: "Active Subscription", icon: RefreshCw },
];

const mockOrders = [
  { id: "FBX-28471", date: "May 18, 2026", total: 527, status: "Delivered" },
  { id: "FBX-28102", date: "May 12, 2026", total: 312, status: "Delivered" },
  { id: "FBX-27988", date: "May 5, 2026", total: 891, status: "Delivered" },
];

export default function DashboardPage() {
  const [active, setActive] = useState("orders");

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-gray-950 pb-20">
      <PageHero
        title="My Dashboard"
        subtitle="Manage your meal kit subscriptions, active orders, saved addresses and wallet."
        breadcrumbs={[{ label: "Dashboard" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">Welcome Back, Amit!</h2>
            <p className="text-gray-500 text-sm mt-1">Here is a quick look at your food status and subscription history.</p>
          </div>
          <Link to="/meal-kits" className="btn-secondary self-start text-sm py-2 px-5 font-semibold">
            <RefreshCw className="h-4 w-4" /> Reorder Favorites
          </Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-4 items-start">
          {/* Sidebar Nav Overhaul */}
          <aside className="lg:col-span-1">
            <nav className="card-base divide-y divide-gray-100 dark:divide-gray-800 overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm">
              {tabs.map((t) => {
                const isActive = active === t.id;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setActive(t.id)}
                    className={`flex w-full items-center gap-3 px-5 py-4 text-left text-sm font-semibold transition-all relative ${
                      isActive
                        ? "bg-gradient-to-r from-brand-green/10 to-transparent text-brand-green dark:text-brand-green-light"
                        : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-800"
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-brand-green dark:bg-brand-green-light" />
                    )}
                    <t.icon className={`h-5 w-5 ${isActive ? "text-brand-green dark:text-brand-green-light" : "text-gray-400"}`} />
                    <span>{t.label}</span>
                    <ChevronRight className={`ml-auto h-4 w-4 transition-transform duration-200 ${isActive ? "translate-x-1 opacity-100" : "opacity-30"}`} />
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Tab Content with Framer Motion transitions */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              {active === "orders" && (
                <motion.div
                  key="orders-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="card-base overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                  <div className="border-b border-gray-100 px-6 py-4 dark:border-gray-800">
                    <h3 className="font-extrabold text-gray-900 dark:text-white text-lg">Order History</h3>
                  </div>
                  <ul className="divide-y divide-gray-100 dark:divide-gray-800">
                    {mockOrders.map((o) => (
                      <li key={o.id} className="flex flex-wrap items-center justify-between gap-4 px-6 py-5 hover:bg-gray-50/50 dark:hover:bg-gray-900/30 transition">
                        <div>
                          <p className="font-bold text-gray-900 dark:text-white">{o.id}</p>
                          <p className="text-xs text-gray-400 mt-0.5">{o.date}</p>
                        </div>
                        <span className="rounded-full bg-brand-green/10 px-3 py-1 text-xs font-bold text-brand-green">
                          {o.status}
                        </span>
                        <p className="font-extrabold text-brand-green">₹{o.total}</p>
                        <Link to="/track" className="text-sm font-bold text-brand-orange hover:underline">
                          Track / Reorder
                        </Link>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {active === "addresses" && (
                <motion.div
                  key="addresses-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="card-base p-6 border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                  <h3 className="font-extrabold text-gray-900 dark:text-white text-lg border-b border-gray-100 dark:border-gray-800 pb-3">Saved Addresses</h3>
                  <div className="mt-6 space-y-3">
                    <div className="rounded-2xl border-2 border-brand-green bg-brand-green/5 p-5 dark:border-brand-green-light/40 relative">
                      <p className="font-extrabold text-gray-900 dark:text-white">Home Address</p>
                      <p className="mt-1.5 text-sm text-gray-600 dark:text-gray-450 leading-relaxed">
                        42 Lotus Apartments, Andheri West, Mumbai 400058
                      </p>
                      <span className="mt-3 inline-block rounded-full bg-brand-green/10 text-brand-green text-[10px] font-bold px-2.5 py-0.5">
                        Default Delivery Address
                      </span>
                    </div>
                    <button type="button" className="w-full rounded-2xl border border-dashed border-gray-300 py-5 text-sm font-semibold text-gray-500 hover:text-brand-green hover:border-brand-green transition duration-150 dark:border-gray-700 dark:hover:border-brand-green-light">
                      + Add new address
                    </button>
                  </div>
                </motion.div>
              )}

              {active === "favorites" && (
                <motion.div
                  key="favorites-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {mealKits.slice(0, 4).map((kit) => (
                    <Link
                      key={kit.id}
                      to={`/product/${kit.id}`}
                      className="card-base flex gap-4 p-4 border border-gray-100 dark:border-gray-800 hover:shadow-card-hover hover:-translate-y-0.5 duration-200"
                    >
                      <img src={kit.image} alt="" className="h-[72px] w-[72px] rounded-xl object-cover ring-2 ring-gray-50 dark:ring-gray-800" width={72} height={72} />
                      <div className="flex flex-col justify-center">
                        <p className="font-extrabold text-gray-800 dark:text-gray-200 text-sm leading-tight">{kit.name}</p>
                        <p className="font-bold text-brand-green mt-1 text-sm">₹{kit.price}</p>
                      </div>
                    </Link>
                  ))}
                </motion.div>
              )}

              {active === "wallet" && (
                <motion.div
                  key="wallet-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="card-base overflow-hidden bg-gradient-to-br from-brand-green to-brand-green-dark p-8 text-white relative shadow-lg shadow-brand-green/10"
                >
                  <div className="absolute -inset-10 bg-brand-orange/15 rounded-full blur-3xl opacity-30 -z-10" />
                  <p className="text-white/80 text-sm font-semibold uppercase tracking-wider">Available Wallet Balance</p>
                  <p className="mt-3 text-5xl font-extrabold">₹450</p>
                  <p className="mt-4 text-xs text-white/70 font-medium">Includes ₹125 cashback reward from last order</p>
                  <button type="button" className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-bold text-brand-green hover:bg-brand-cream hover:scale-103 transition shadow-md shadow-black/10">
                    Add Money
                  </button>
                </motion.div>
              )}

              {active === "subscription" && (
                <motion.div
                  key="subscription-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="card-base p-6 border border-gray-100 dark:border-gray-800 shadow-sm"
                >
                  <h3 className="font-extrabold text-gray-900 dark:text-white text-lg border-b border-gray-100 dark:border-gray-800 pb-3">Active Subscription</h3>
                  <div className="mt-4 p-5 rounded-2xl bg-brand-cream dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
                    <p className="font-bold text-brand-orange text-lg">Family Plan</p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 font-semibold">Renews automatically on May 25, 2026</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <button type="button" className="btn-secondary text-xs py-2 px-5 font-bold">
                        Pause Subscription
                      </button>
                      <button type="button" className="rounded-full border border-red-200 hover:border-red-500 hover:bg-red-50 hover:text-red-700 px-5 py-2 text-xs font-bold text-red-600 dark:border-red-900/50 dark:hover:bg-red-950/20 transition">
                        Cancel Renewal
                      </button>
                      <Link to="/subscription" className="btn-primary text-xs py-2 px-5 font-bold">
                        Change Plan
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
