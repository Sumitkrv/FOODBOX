import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Instagram, Twitter, Linkedin, Youtube,
  Mail, Phone, MapPin,
  ArrowRight, CheckCircle,
  ShieldCheck, Leaf, Truck, Star,
  Smartphone,
} from 'lucide-react';

/* ─── Data ──────────────────────────────────────────────── */
const footerNav = [
  {
    title: 'Product',
    links: [
      { label: 'Meal Kits',    href: '/meal-kits' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'Track Order',  href: '/track' },
      { label: 'Dashboard',    href: '/dashboard' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Contact',  href: '/contact' },
      { label: 'Careers',  href: '/about' },
      { label: 'Blog',     href: '/about' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Privacy Policy',   href: '/privacy' },
      { label: 'Refund Policy',    href: '/terms' },
    ],
  },
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram', color: '#E1306C' },
  { icon: Twitter,   href: '#', label: 'Twitter',   color: '#1DA1F2' },
  { icon: Linkedin,  href: '#', label: 'LinkedIn',  color: '#0A66C2' },
  { icon: Youtube,   href: '#', label: 'YouTube',   color: '#FF0000' },
];

const trustBadges = [
  { icon: ShieldCheck, text: '100% Secure Payments' },
  { icon: Leaf,        text: 'Farm-Fresh Ingredients' },
  { icon: Truck,       text: 'Free Delivery Available' },
  { icon: Star,        text: '4.8★ Customer Rating' },
];

const contact = [
  { icon: Mail,   text: 'hello@foodbox.in',   href: 'mailto:hello@foodbox.in' },
  { icon: Phone,  text: '+91 98765 43210',     href: 'tel:+919876543210' },
  { icon: MapPin, text: 'Mumbai, India 🇮🇳',  href: '#' },
];

/* ─── Newsletter form ───────────────────────────────────── */
function Newsletter() {
  const [email, setEmail]       = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]   = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 900);
  };

  return (
    <div
      className="rounded-2xl p-6 md:p-8"
      style={{
        background: 'rgba(255,107,53,0.06)',
        border: '1px solid rgba(255,107,53,0.14)',
      }}
    >
      <div className="flex items-center gap-2 mb-2">
        <span
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold"
          style={{ background: 'rgba(255,107,53,0.12)', color: '#FF6B35' }}
        >
          <Mail className="w-3 h-3" /> Newsletter
        </span>
      </div>
      <h3 className="text-lg font-extrabold text-gray-900 tracking-tight mb-1">
        Get weekly recipes & offers
      </h3>
      <p className="text-gray-500 text-sm mb-5 leading-relaxed">
        Join 12,000+ home cooks. No spam — just great food.
      </p>

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2.5 text-sm font-semibold text-green-700 bg-green-50 border border-green-100 px-4 py-3 rounded-xl"
        >
          <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
          You're in! Check your inbox for a welcome gift 🎁
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="flex gap-2">
          <input
            type="email"
            required
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 min-w-0 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#FF6B35] focus:ring-4 focus:ring-[#FF6B35]/10 transition"
          />
          <motion.button
            type="submit"
            disabled={loading}
            whileTap={{ scale: 0.96 }}
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all"
            style={{
              background: loading
                ? '#FFA07A'
                : 'linear-gradient(135deg, #FF6B35, #FF9A5C)',
              boxShadow: '0 3px 12px rgba(255,107,53,0.30)',
            }}
          >
            {loading ? (
              <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
            ) : (
              <>Subscribe <ArrowRight className="w-3.5 h-3.5" /></>
            )}
          </motion.button>
        </form>
      )}
    </div>
  );
}

/* ─── App download strip ────────────────────────────────── */
function AppDownload() {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
        Coming Soon
      </p>
      {['App Store', 'Google Play'].map((store) => (
        <motion.button
          key={store}
          whileHover={{ scale: 1.03, y: -1 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all text-left"
        >
          <Smartphone className="w-5 h-5 text-gray-500 shrink-0" />
          <div>
            <p className="text-[10px] text-gray-400 leading-none">Download on</p>
            <p className="text-sm font-bold text-gray-800 mt-0.5">{store}</p>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

/* ─── Main footer ───────────────────────────────────────── */
export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">

      {/* ── Trust badge bar ── */}
      <div
        className="border-b border-gray-100"
        style={{ background: 'rgba(255,107,53,0.03)' }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-[#FF6B35] shrink-0" />
                <span className="text-xs font-semibold text-gray-500">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Main body ── */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1.8fr_1fr_1fr_1fr_1.4fr] gap-10 lg:gap-12">

          {/* ── Brand + contact + socials ── */}
          <div className="md:col-span-2 xl:col-span-1">
            {/* Logo */}
            <Link to="/" className="inline-flex items-center gap-0.5">
              <span className="text-2xl font-extrabold tracking-tight text-gray-900">
                FOOD<span style={{ color: '#FF6B35' }}>BOX</span>
              </span>
              <span
                className="ml-0.5 mb-3 w-1.5 h-1.5 rounded-full"
                style={{ background: '#FF6B35' }}
              />
            </Link>

            <p className="mt-4 text-gray-500 text-sm leading-[1.75] max-w-[260px]">
              Restaurant-quality meal kits with farm-fresh ingredients, delivered
              to your door across 25+ Indian cities.
            </p>

            {/* Contact info */}
            <ul className="mt-6 space-y-3">
              {contact.map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="flex items-center gap-2.5 text-sm text-gray-500 hover:text-gray-900 transition-colors group"
                  >
                    <span
                      className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                      style={{ background: 'rgba(255,107,53,0.08)' }}
                    >
                      <Icon className="w-3.5 h-3.5 text-[#FF6B35]" />
                    </span>
                    {text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-2">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-200"
                  style={{ background: 'rgba(0,0,0,0.04)', border: '1px solid rgba(0,0,0,0.07)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${color}15`;
                    e.currentTarget.style.borderColor = `${color}30`;
                    e.currentTarget.style.color = color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(0,0,0,0.04)';
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                    e.currentTarget.style.color = '#9CA3AF';
                  }}
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* ── Nav link columns ── */}
          {footerNav.map(({ title, links }) => (
            <div key={title}>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-widest mb-5">
                {title}
              </h4>
              <ul className="space-y-3.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      to={href}
                      className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* ── Newsletter + App download ── */}
          <div className="md:col-span-2 xl:col-span-1 space-y-8">
            <Newsletter />
            <AppDownload />
          </div>

        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} FOODBOX Technologies Pvt. Ltd. · All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              {[
                { label: 'Terms', href: '/terms' },
                { label: 'Privacy', href: '/privacy' },
                { label: 'Refunds', href: '/terms' },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  to={href}
                  className="text-xs text-gray-400 hover:text-gray-700 transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>

            <p className="text-xs text-gray-400 flex items-center gap-1">
              Made with <span className="text-red-400">♥</span> in India 🇮🇳
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
