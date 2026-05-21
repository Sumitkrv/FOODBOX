import { Link } from "react-router-dom";
import { useState } from "react";
import { Package, MapPin, Heart, Wallet, RefreshCw, ChevronRight } from "lucide-react";
import { mealKits } from "@/lib/data";

const tabs = [
  { id: "orders", label: "Order History", icon: Package },
  { id: "addresses", label: "Saved Addresses", icon: MapPin },
  { id: "favorites", label: "Favorite Meals", icon: Heart },
  { id: "wallet", label: "Wallet", icon: Wallet },
  { id: "subscription", label: "Subscription", icon: RefreshCw },
];

const mockOrders = [
  { id: "FBX-28471", date: "May 18, 2026", total: 527, status: "Delivered" },
  { id: "FBX-28102", date: "May 12, 2026", total: 312, status: "Delivered" },
  { id: "FBX-27988", date: "May 5, 2026", total: 891, status: "Delivered" },
];

export default function DashboardPage() {
  const [active, setActive] = useState("orders");

  return (
    <div className="min-h-screen bg-gray-50 pt-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">My Dashboard</h1>
            <p className="text-gray-600 dark:text-gray-400">Manage orders, wallet, and subscriptions</p>
          </div>
          <Link to="/meal-kits" className="btn-secondary self-start text-sm">
            <RefreshCw className="h-4 w-4" /> Reorder Favorites
          </Link>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-4">
          <aside className="lg:col-span-1">
            <nav className="card-base divide-y dark:divide-gray-800">
              {tabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id)}
                  className={`flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium transition ${
                    active === t.id
                      ? "bg-brand-green/10 text-brand-green dark:text-brand-green-light"
                      : "hover:bg-gray-50 dark:hover:bg-gray-800"
                  }`}
                >
                  <t.icon className="h-5 w-5" />
                  {t.label}
                  <ChevronRight className="ml-auto h-4 w-4 opacity-50" />
                </button>
              ))}
            </nav>
          </aside>

          <div className="lg:col-span-3">
            {active === "orders" && (
              <div className="card-base overflow-hidden">
                <div className="border-b border-gray-100 px-6 py-4 dark:border-gray-800">
                  <h2 className="font-bold">Order History</h2>
                </div>
                <ul className="divide-y dark:divide-gray-800">
                  {mockOrders.map((o) => (
                    <li key={o.id} className="flex flex-wrap items-center justify-between gap-4 px-6 py-4">
                      <div>
                        <p className="font-semibold">{o.id}</p>
                        <p className="text-sm text-gray-500">{o.date}</p>
                      </div>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-800 dark:bg-green-900/40 dark:text-green-300">
                        {o.status}
                      </span>
                      <p className="font-bold text-brand-green">₹{o.total}</p>
                      <Link to="/track" className="text-sm font-medium text-brand-orange hover:underline">
                        Track / Reorder
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {active === "addresses" && (
              <div className="card-base p-6">
                <h2 className="font-bold">Saved Addresses</h2>
                <div className="mt-4 space-y-3">
                  <div className="rounded-xl border-2 border-brand-green bg-brand-green/5 p-4 dark:border-brand-green-light">
                    <p className="font-semibold">Home</p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      42 Lotus Apartments, Andheri West, Mumbai 400058
                    </p>
                    <span className="mt-2 inline-block text-xs font-medium text-brand-green">Default</span>
                  </div>
                  <button type="button" className="w-full rounded-xl border border-dashed border-gray-300 py-4 text-sm text-gray-500 dark:border-gray-600">
                    + Add new address
                  </button>
                </div>
              </div>
            )}

            {active === "favorites" && (
              <div className="grid gap-4 sm:grid-cols-2">
                {mealKits.slice(0, 4).map((kit) => (
                  <Link key={kit.id} to={`/product/${kit.id}`} className="card-base flex gap-4 p-4 transition hover:shadow-card-hover">
                    <img src={kit.image} alt="" className="h-[72px] w-[72px] rounded-lg object-cover" width={72} height={72} />
                    <div>
                      <p className="font-semibold">{kit.name}</p>
                      <p className="font-bold text-brand-green">₹{kit.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            )}

            {active === "wallet" && (
              <div className="card-base overflow-hidden bg-gradient-to-br from-brand-green to-brand-green-dark p-8 text-white">
                <p className="text-white/80">Wallet Balance</p>
                <p className="mt-2 text-4xl font-bold">₹450</p>
                <p className="mt-4 text-sm text-white/80">Includes ₹125 cashback from last order</p>
                <button type="button" className="mt-6 rounded-full bg-white px-6 py-2 text-sm font-semibold text-brand-green">
                  Add Money
                </button>
              </div>
            )}

            {active === "subscription" && (
              <div className="card-base p-6">
                <h2 className="font-bold">Active Subscription</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-400">Family Plan — renews May 25, 2026</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <button type="button" className="btn-secondary text-sm">
                    Pause
                  </button>
                  <button type="button" className="rounded-full border border-red-200 px-4 py-2 text-sm font-medium text-red-600 dark:border-red-900">
                    Cancel
                  </button>
                  <Link to="/subscription" className="btn-primary text-sm">
                    Change Plan
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
