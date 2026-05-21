import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const quickLinks = [
  { to: "/meal-kits", label: "Meal Kits" },
  { to: "/subscription", label: "Subscriptions" },
  { to: "/track", label: "Track Order" },
  { to: "/about", label: "About Us" },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-green font-bold text-white">
                F
              </span>
              <span className="text-xl font-bold text-brand-green dark:text-brand-green-light">
                FOOD<span className="text-brand-orange">BOX</span>
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Fresh chopped vegetables and pre-measured ingredients delivered to your doorstep. Cook healthy homemade meals in 15 minutes.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="rounded-full bg-white p-2 text-gray-600 shadow-sm transition hover:bg-brand-green hover:text-white dark:bg-gray-800 dark:text-gray-400"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-brand-green">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-gray-600 dark:text-gray-400">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-green" /> Mumbai, Maharashtra
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-green" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-brand-green" /> hello@foodbox.in
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white">Newsletter</h4>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Get recipes & exclusive offers.</p>
            <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-gray-300 px-4 py-2 text-sm dark:border-gray-700 dark:bg-gray-800"
              />
              <button type="submit" className="rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white">
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-gray-500 dark:border-gray-800 md:flex-row">
          <p>© 2026 FOODBOX. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-brand-green">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-brand-green">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
