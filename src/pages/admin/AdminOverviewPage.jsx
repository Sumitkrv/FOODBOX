import { TrendingUp, AlertTriangle, DollarSign, ShoppingBag } from "lucide-react";

function SimpleBarChart({ data }) {
  const max = Math.max(...data.map((d) => d.value), 1);
  return (
    <div className="space-y-3">
      {data.map((d) => (
        <div key={d.label}>
          <div className="mb-1 flex justify-between text-xs text-slate-400">
            <span>{d.label}</span>
            <span className="font-medium text-white">{d.value}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-800">
            <div className={`h-full rounded-full ${d.color} transition-all duration-700`} style={{ width: `${(d.value / max) * 100}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

const revenueData = [
  { label: "Mon", value: 42, color: "bg-emerald-500" },
  { label: "Tue", value: 58, color: "bg-emerald-500" },
  { label: "Wed", value: 35, color: "bg-emerald-500" },
  { label: "Thu", value: 72, color: "bg-emerald-500" },
  { label: "Fri", value: 89, color: "bg-orange-500" },
  { label: "Sat", value: 95, color: "bg-orange-500" },
  { label: "Sun", value: 68, color: "bg-emerald-500" },
];

const categorySales = [
  { label: "Meal Kits", value: 1240, color: "bg-green-500" },
  { label: "Add-ons", value: 420, color: "bg-amber-500" },
  { label: "Desserts", value: 310, color: "bg-orange-500" },
];

export default function AdminOverviewPage() {
  return (
    <div className="space-y-8">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { label: "Revenue (7d)", value: "₹4.2L", change: "+12%", icon: DollarSign },
          { label: "Orders", value: "1,284", change: "+8%", icon: ShoppingBag },
          { label: "Avg. Order", value: "₹327", change: "+3%", icon: TrendingUp },
          { label: "Active Users", value: "842", change: "+5%", icon: TrendingUp },
        ].map((card) => (
          <div key={card.label} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-5 shadow-lg">
            <div className="flex items-center justify-between">
              <card.icon className="h-8 w-8 text-emerald-400" />
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-400">{card.change}</span>
            </div>
            <p className="mt-4 text-2xl font-bold">{card.value}</p>
            <p className="text-sm text-slate-500">{card.label}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="font-semibold">Sales Analytics</h2>
          <p className="text-sm text-slate-500">Daily orders (last 7 days)</p>
          <div className="mt-6">
            <SimpleBarChart data={revenueData} />
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="font-semibold">Revenue by Category</h2>
          <p className="text-sm text-slate-500">Units sold</p>
          <div className="mt-6">
            <SimpleBarChart data={categorySales} />
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6 lg:col-span-2">
          <h2 className="font-semibold">Order Statistics</h2>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { k: "Pending", v: 24 },
              { k: "Preparing", v: 18 },
              { k: "Out for delivery", v: 31 },
              { k: "Delivered today", v: 156 },
            ].map((s) => (
              <div key={s.k} className="rounded-xl bg-slate-800/50 p-4 text-center">
                <p className="text-2xl font-bold text-orange-400">{s.v}</p>
                <p className="text-xs text-slate-400">{s.k}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-2xl border border-amber-900/50 bg-amber-950/30 p-6">
          <div className="flex items-center gap-2 text-amber-400">
            <AlertTriangle className="h-5 w-5" />
            <h2 className="font-semibold">Inventory Alerts</h2>
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex justify-between border-b border-amber-900/30 pb-2">
              <span>Paneer stock</span>
              <span className="font-medium text-amber-300">Low (2 days)</span>
            </li>
            <li className="flex justify-between border-b border-amber-900/30 pb-2">
              <span>Spinach</span>
              <span className="font-medium text-amber-300">Reorder</span>
            </li>
            <li className="flex justify-between">
              <span>Spice mix sachets</span>
              <span className="text-slate-400">OK</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
