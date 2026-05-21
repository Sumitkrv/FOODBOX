import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ShoppingCart, Menu, X, Sun, Moon, Search, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useTheme } from "@/context/ThemeContext";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/meal-kits", label: "Meal Kits" },
  { to: "/subscription", label: "Subscription Plans" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/track", label: "Track Order" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { itemCount, setIsOpen } = useCart();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = scrolled
    ? "text-gray-700 hover:text-brand-green dark:text-gray-300 dark:hover:text-brand-green-light"
    : "text-white/90 hover:text-white";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 shadow-md backdrop-blur-md dark:bg-gray-950/95" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green text-lg font-bold text-white">
            F
          </span>
          <span
            className={`text-xl font-bold tracking-tight ${
              scrolled ? "text-brand-green dark:text-brand-green-light" : "text-white"
            }`}
          >
            FOOD<span className="text-brand-orange">BOX</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-brand-green/10 ${linkClass}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <div className="relative">
            <Search
              className={`absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 ${scrolled ? "text-gray-400" : "text-white/60"}`}
            />
            <input
              type="search"
              placeholder="Search meals..."
              className={`w-44 rounded-full py-2 pl-9 pr-4 text-sm transition-all focus:w-56 focus:outline-none focus:ring-2 focus:ring-brand-orange lg:w-52 ${
                scrolled
                  ? "bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white"
                  : "bg-white/15 text-white placeholder:text-white/60"
              }`}
            />
          </div>
          <button
            type="button"
            onClick={toggleTheme}
            className={`rounded-full p-2 transition-colors ${
              scrolled
                ? "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                : "text-white hover:bg-white/10"
            }`}
            aria-label="Toggle theme"
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </button>
          <Link to="/login" className={`hidden items-center gap-1 rounded-full px-4 py-2 text-sm font-medium sm:inline-flex ${linkClass}`}>
            <User className="h-4 w-4" />
            Login
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="relative rounded-full bg-brand-orange p-2.5 text-white shadow-lg transition-transform hover:scale-105"
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-brand-orange">
                {itemCount}
              </span>
            )}
          </button>
        </div>

        <button
          type="button"
          className={`rounded-lg p-2 lg:hidden ${scrolled ? "text-gray-900 dark:text-white" : "text-white"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950 lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block rounded-lg px-3 py-2.5 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/login"
            className="mt-2 block rounded-lg px-3 py-2.5 font-medium text-brand-green"
            onClick={() => setMobileOpen(false)}
          >
            Login / Signup
          </Link>
        </div>
      )}
    </header>
  );
}
