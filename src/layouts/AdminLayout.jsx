import { Link, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  ShoppingBag,
  Package,
  Truck,
  Users,
  CreditCard,
  BarChart3,
  TicketPercent,
} from "lucide-react";

const nav = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard },
  { to: "/admin/orders", label: "Orders", icon: ShoppingBag },
  { to: "/admin/inventory", label: "Inventory", icon: Package },
  { to: "/admin/delivery", label: "Delivery Agents", icon: Truck },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/payments", label: "Payments", icon: CreditCard },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/admin/coupons", label: "Coupons", icon: TicketPercent },
];

export default function AdminLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex">
        <aside className="fixed bottom-0 left-0 top-0 z-40 hidden w-56 flex-col border-r border-slate-800 bg-slate-900 lg:flex">
          <div className="border-b border-slate-800 p-4">
            <Link to="/" className="text-lg font-bold">
              FOOD<span className="text-brand-orange">BOX</span>
            </Link>
            <p className="mt-1 text-xs text-slate-500">Admin Console</p>
          </div>
          <nav className="flex-1 space-y-1 overflow-y-auto p-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-300 transition hover:bg-slate-800 hover:text-white"
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="min-h-screen flex-1 lg:pl-56">
          <header className="sticky top-0 z-30 border-b border-slate-800 bg-slate-900/95 px-4 py-4 backdrop-blur">
            <div className="flex items-center justify-between">
              <h1 className="text-lg font-semibold">Admin Dashboard</h1>
              <Link to="/" className="text-sm text-brand-orange hover:underline">
                View Site
              </Link>
            </div>
          </header>
          <div className="p-4 lg:p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
