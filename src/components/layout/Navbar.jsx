import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { ShoppingCart, Menu, X, Sun, Moon, Search, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/meal-kits", label: "Meal Kits" },
  { to: "/subscription", label: "Subscription Plans" },
  { to: "/about", label: "About" },
  { to: "/track", label: "Track Order" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-brand-green/5 bg-brand-cream/95 backdrop-blur-md shadow-sm dark:bg-deep-forest/95 transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-serif text-2xl font-black tracking-tight text-brand-green dark:text-white">
            FOOD<span className="text-brand-orange">BOX</span>
          </span>
        </Link>

        {/* Center Navigation Links */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-semibold tracking-wide transition-colors pb-1 border-b-2 hover:text-brand-orange ${
                  isActive
                    ? "text-brand-orange border-brand-orange"
                    : "text-gray-700 dark:text-gray-300 border-transparent"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Right Search, Cart & Theme Toggles */}
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="search"
              placeholder="Search meals..."
              className="w-44 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 py-1.5 pl-9 pr-4 text-sm text-gray-900 focus:w-56 focus:outline-none focus:ring-2 focus:ring-brand-orange dark:text-white transition-all duration-300"
            />
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative rounded-xl bg-brand-orange/10 p-2 text-brand-orange hover:bg-brand-orange hover:text-white transition-all shadow-sm"
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-orange text-xs font-bold text-white shadow-md animate-pulse">
                {itemCount}
              </span>
            )}
          </button>

          <Link
            to="/login"
            className="hidden items-center gap-1 rounded-xl bg-brand-green px-4 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-brand-green-light hover:shadow-lg transition-all md:inline-flex"
          >
            <User className="h-4 w-4" />
            Login
          </Link>

          <button
            type="button"
            className="rounded-lg p-2 lg:hidden text-gray-900 dark:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-100 bg-brand-cream px-4 py-4 dark:border-gray-800 dark:bg-deep-forest lg:hidden animate-slide-up">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block rounded-xl px-4 py-3 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="mt-2 block rounded-xl bg-brand-orange/10 px-4 py-3 font-semibold text-brand-orange text-center"
            onClick={() => setMobileOpen(false)}
          >
            Login / Signup
          </Link>
        </div>
      )}
    </header>
  );
}
