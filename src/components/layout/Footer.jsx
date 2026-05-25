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
    <footer className="bg-brand-green dark:bg-brand-green-dark border-t border-white/5 pt-20 pb-12 text-white">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 mb-16">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-serif text-2xl font-black tracking-tight text-white">
                FOOD<span className="text-brand-orange-light">BOX</span>
              </span>
            </div>
            <p className="mt-6 text-sm text-white/75 leading-relaxed">
              Fresh chopped vegetables and pre-measured ingredients delivered to your doorstep. Experience modern homemade cooking without the hassle of prep.
            </p>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-brand-orange transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/70">
              {quickLinks.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand-orange-light" /> Mumbai, Maharashtra
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand-orange-light" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand-orange-light" /> hello@foodbox.in
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-sm text-white/70 mb-4">Get recipes & exclusive offers.</p>
            <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="bg-white/10 border border-white/20 rounded-lg p-3 text-white placeholder:text-white/40 focus:ring-2 focus:ring-brand-orange-light transition-all outline-none"
              />
              <button type="submit" className="bg-brand-orange text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:bg-orange-700 cursor-pointer">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4 text-sm text-white/50">
          <p>© 2026 FOODBOX. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
