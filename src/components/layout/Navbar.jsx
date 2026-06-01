import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

/* ─── Nav links ─────────────────────────────────────────── */
const navLinks = [
  { label: 'Meal Kits', href: '/meal-kits' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'About', href: '/about' },
];

/* ─── Is a link "active" for the current route? ─────────── */
function isActive(href, pathname) {
  if (href === '/') return pathname === '/';
  if (href.startsWith('/#')) return pathname === '/';
  return pathname.startsWith(href);
}

/* ─── Animated underline indicator ──────────────────────── */
function ActiveIndicator() {
  return (
    <motion.span
      layoutId="nav-active-indicator"
      className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full"
      style={{ background: 'linear-gradient(90deg, #FF6B35, #FF9A5C)' }}
      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
    />
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartPulse, setCartPulse] = useState(false);
  const prevCount = useRef(0);
  const { itemCount, setIsOpen } = useCart();
  const location = useLocation();
  const reduce = useReducedMotion();

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => setMobileOpen(false), [location]);

  /* Pulse cart badge when item is added */
  useEffect(() => {
    if (itemCount > prevCount.current) {
      setCartPulse(true);
      const t = setTimeout(() => setCartPulse(false), 600);
      prevCount.current = itemCount;
      return () => clearTimeout(t);
    }
    prevCount.current = itemCount;
  }, [itemCount]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      if (location.pathname === '/') {
        e.preventDefault();
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
      }
    }
  };

  /* ── Navbar surface styles ── */
  const scrolledStyles = scrolled
    ? {
      background: 'rgba(255,255,255,0.82)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0,0,0,0.07)',
      boxShadow: '0 1px 24px rgba(0,0,0,0.06)',
    }
    : {
      background: 'transparent',
      backdropFilter: 'none',
      borderBottom: '1px solid transparent',
      boxShadow: 'none',
    };

  return (
    <motion.nav
      style={{ ...scrolledStyles, transition: 'background 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease' }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[62px] lg:h-[68px]">

          {/* ── Logo ── */}
          <Link to="/" className="shrink-0 group">
            <motion.span
              whileHover={reduce ? {} : { scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="flex items-center text-xl lg:text-[1.35rem] font-extrabold tracking-tight text-gray-900 select-none"
            >
              FOOD
              <span
                className="transition-all duration-300"
                style={{ color: '#FF6B35' }}
              >
                BOX
              </span>
            </motion.span>
          </Link>

          {/* ── Desktop nav links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href, location.pathname);
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-4 py-2 rounded-xl group"
                >
                  {/* Hover bg */}
                  <motion.span
                    className="absolute inset-0 rounded-xl"
                    style={{ background: 'rgba(0,0,0,0.04)' }}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.18 }}
                  />

                  <span
                    className="relative text-[14.5px] font-semibold tracking-[-0.01em] transition-colors duration-200"
                    style={{ color: active ? '#111827' : '#6B7280' }}
                  >
                    {link.label}
                  </span>

                  {/* Active underline */}
                  {active && <ActiveIndicator />}
                </Link>
              );
            })}
          </div>

          {/* ── Right: cart + CTA + hamburger ── */}
          <div className="flex items-center gap-2 lg:gap-3">

            {/* Cart button */}
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={reduce ? {} : { scale: 1.07 }}
              whileTap={reduce ? {} : { scale: 0.93 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="relative p-2.5 rounded-xl transition-colors duration-200 hover:bg-gray-100/80"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-[19px] h-[19px] text-gray-700" />

              <AnimatePresence>
                {itemCount > 0 && (
                  <motion.span
                    key="badge"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{
                      scale: cartPulse ? [1, 1.35, 1] : 1,
                      opacity: 1,
                    }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{
                      scale: cartPulse
                        ? { duration: 0.5, times: [0, 0.4, 1] }
                        : { type: 'spring', stiffness: 500, damping: 25 },
                      opacity: { duration: 0.2 },
                    }}
                    className="absolute -top-1 -right-1 min-w-[18px] h-[18px] px-1 flex items-center justify-center text-[10px] font-bold text-white rounded-full"
                    style={{
                      background: 'linear-gradient(135deg, #FF6B35, #FF8C5A)',
                      boxShadow: '0 2px 6px rgba(255,107,53,0.45)',
                    }}
                  >
                    {itemCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            {/* Desktop CTA */}
            <motion.div
              whileHover={reduce ? {} : { scale: 1.03, y: -1 }}
              whileTap={reduce ? {} : { scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="hidden lg:block"
            >
              <Link
                to="/meal-kits"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold text-white"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)',
                  boxShadow: '0 2px 12px rgba(255,107,53,0.30)',
                }}
              >
                Browse Kits
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Hamburger (mobile) */}
            <motion.button
              onClick={() => setMobileOpen((v) => !v)}
              whileTap={reduce ? {} : { scale: 0.9 }}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100/80 transition-colors duration-200"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.18 }}
                  >
                    <Menu className="w-5 h-5 text-gray-700" />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0,0,0,0.07)',
              boxShadow: '0 12px 40px rgba(0,0,0,0.08)',
            }}
          >
            <div className="max-w-7xl mx-auto px-5 py-5 space-y-1">
              {navLinks.map((link, i) => {
                const active = isActive(link.href, location.pathname);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="flex items-center justify-between px-4 py-3.5 rounded-xl transition-colors duration-200"
                      style={{
                        background: active ? 'rgba(255,107,53,0.07)' : 'transparent',
                        color: active ? '#FF6B35' : '#374151',
                      }}
                    >
                      <span className="font-semibold text-[15px]">{link.label}</span>
                      {active && (
                        <span
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ background: '#FF6B35' }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.06 + 0.05, duration: 0.25 }}
                className="pt-3 mt-1 border-t border-gray-100"
              >
                <Link
                  to="/meal-kits"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-sm font-bold text-white"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #FF8C5A 100%)',
                    boxShadow: '0 4px 16px rgba(255,107,53,0.30)',
                  }}
                >
                  Browse Meal Kits
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
