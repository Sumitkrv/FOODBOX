import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Leaf, ShieldCheck, ChevronRight, Flame } from 'lucide-react';
import {
  ease,
  fadeUp,
  fadeIn,
  fadeLeft,
  scaleIn,
  stagger,
  staggerChild,
  viewport,
  hoverLift,
  hoverLiftSm,
  hoverScale,
  tapPress,
  floatLoop,
  floatRotateLoop
} from '../../lib/animations';

/* ─── Food images from public dir ───────────────────── */
const foodImages = [
  { src: '/paneer-butter-masala.jpg', label: 'Paneer Butter Masala', time: '18 min', cal: '380 kcal' },
  { src: '/palak-paneer.jpg',         label: 'Palak Paneer',         time: '15 min', cal: '320 kcal' },
  { src: '/dal-tadka.jpg',            label: 'Dal Tadka',            time: '12 min', cal: '210 kcal' },
  { src: '/gym-bowl.jpg',             label: 'High-Protein Bowl',    time: '12 min', cal: '340 kcal' },
];

/* ─── Trust stats ────────────────────────────────────── */
const stats = [
  { value: '50K+', label: 'Meals Delivered', icon: Truck },
  { value: '4.8★', label: 'Average Rating',  icon: Star  },
  { value: '100%', label: 'Fresh Ingredients',icon: Leaf },
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-screen flex flex-col justify-center pt-24 pb-16 overflow-hidden bg-[#FAFAF8]">

      {/* ── Background atmosphere ──────────────────────── */}
      {/* Warm radial bleed top-left */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 30% 30%, rgba(255,107,53,0.10) 0%, transparent 65%)',
        }}
      />
      {/* Cool counter-bleed bottom-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle at 70% 80%, rgba(99,102,241,0.06) 0%, transparent 60%)',
        }}
      />
      {/* Subtle noise texture overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Floating background decorative elements */}
      {!reduce && (
        <>
          <motion.div
            animate={floatLoop(12, 6, 0.5)}
            className="absolute top-28 left-[12%] text-[#FF6B35]/10 w-8 h-8 pointer-events-none"
          >
            <Leaf className="w-full h-full rotate-[15deg]" />
          </motion.div>
          <motion.div
            animate={floatRotateLoop(15, 8, 8, 1.2)}
            className="absolute bottom-28 left-[6%] text-[#6366F1]/8 w-6 h-6 pointer-events-none"
          >
            <Star className="w-full h-full fill-current rotate-[-10deg]" />
          </motion.div>
          <motion.div
            animate={floatLoop(10, 5, 0)}
            className="absolute top-1/3 right-[8%] text-[#FF6B35]/8 w-9 h-9 pointer-events-none"
          >
            <Flame className="w-full h-full rotate-[-20deg] fill-current" />
          </motion.div>
        </>
      )}

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-14 lg:gap-10 xl:gap-16 items-center">

          {/* ══════════════════════════════════════════════
              LEFT — Copy & CTAs
          ══════════════════════════════════════════════ */}
          <div className="flex flex-col max-w-2xl">

            {/* Pill badge */}
            <motion.div
              variants={fadeUp(0, 18)}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 self-start"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border animate-fade-in"
                style={{
                  background: 'rgba(255,107,53,0.08)',
                  borderColor: 'rgba(255,107,53,0.2)',
                  color: '#FF6B35',
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B35] animate-pulse" />
                India's #1 Home Cooking Kit
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp(0.08, 18)}
              initial="hidden"
              animate="visible"
              className="mt-6 font-extrabold leading-[1.06] tracking-tight text-gray-900"
              style={{ fontSize: 'clamp(2.4rem, 5.5vw, 3.9rem)' }}
            >
              Restaurant Meals,{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #FF9A5C 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Home Cooked.
              </span>
              <br />
              <span className="text-gray-800">In Just 15 Minutes.</span>
            </motion.h1>

            {/* Sub-copy */}
            <motion.p
              variants={fadeUp(0.16, 18)}
              initial="hidden"
              animate="visible"
              className="mt-5 text-[1.05rem] text-gray-500 leading-[1.75] max-w-md"
            >
              Pre-portioned, farm-fresh ingredients with chef-crafted recipes delivered
              to your door. No meal planning, no grocery runs — just great food.
            </motion.p>

            {/* CTA row */}
            <motion.div
              variants={fadeUp(0.24, 18)}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <motion.div
                whileHover={hoverLiftSm}
                whileTap={tapPress}
              >
                <Link
                  to="/meal-kits"
                  className="btn-primary text-[0.95rem] px-7 py-3.5 gap-2 rounded-xl inline-flex items-center"
                >
                  Browse Meal Kits
                  <ArrowRight className="w-4 h-4 animate-bounce-x" />
                </Link>
              </motion.div>

              <motion.a
                href="#how-it-works"
                whileHover={hoverLiftSm}
                whileTap={tapPress}
                className="inline-flex items-center gap-1.5 px-7 py-3.5 rounded-xl text-[0.95rem] font-semibold text-gray-700 border border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 transition-all duration-200"
              >
                How It Works
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </motion.a>
            </motion.div>

            {/* Social proof micro-row */}
            <motion.div
              variants={fadeUp(0.32, 18)}
              initial="hidden"
              animate="visible"
              className="mt-8 flex items-center gap-3 flex-wrap"
            >
              {/* Avatar stack */}
              <div className="flex -space-x-2.5">
                {['AM', 'PS', 'RK', 'AR'].map((init) => (
                  <div
                    key={init}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-bold text-white ring-1 ring-gray-100"
                    style={{ background: `hsl(${init.charCodeAt(0) * 7 % 360}, 55%, 52%)` }}
                  >
                    {init}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-800">4.8</span>
                <span className="text-sm text-gray-400">from 12,000+ happy cooks</span>
              </div>
            </motion.div>

            {/* Trust bullets */}
            <motion.div
              variants={fadeUp(0.38, 18)}
              initial="hidden"
              animate="visible"
              className="mt-7 flex flex-wrap gap-x-5 gap-y-2"
            >
              {[
                { icon: ShieldCheck, text: 'No commitment required' },
                { icon: Truck,       text: 'Free delivery on first order' },
                { icon: Leaf,        text: 'Farm-fresh ingredients' },
              ].map(({ icon: Icon, text }) => (
                <span key={text} className="flex items-center gap-1.5 text-[0.8rem] text-gray-500">
                  <Icon className="w-3.5 h-3.5 text-[#FF6B35] shrink-0" />
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* ══════════════════════════════════════════════
              RIGHT — Visual Composition
          ══════════════════════════════════════════════ */}
          <motion.div
            variants={fadeLeft(0.12, 35)}
            initial="hidden"
            animate="visible"
            className="relative flex items-center justify-center lg:justify-end"
          >
            {/* ── Main image grid ── */}
            <div className="relative w-full max-w-[500px]">

              {/* Grid of 4 food cards */}
              <div className="grid grid-cols-2 gap-3">
                {foodImages.map((img, i) => (
                  <motion.div
                    key={img.label}
                    variants={scaleIn(0.2 + i * 0.08)}
                    initial="hidden"
                    animate="visible"
                    whileHover={reduce ? {} : { y: -6, scale: 1.025 }}
                    transition={{ duration: 0.28, ease: ease.out }}
                    className={`relative overflow-hidden rounded-2xl bg-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.10)] ${
                      i === 0 ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
                    }`}
                  >
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover"
                      loading="eager"
                      fetchpriority={i === 0 ? 'high' : 'auto'}
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Label + meta */}
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      <p className="text-white text-[11px] font-bold leading-tight line-clamp-1">
                        {img.label}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-white/70 text-[10px]">{img.time}</span>
                        <span className="w-0.5 h-0.5 rounded-full bg-white/40" />
                        <span className="text-white/70 text-[10px]">{img.cal}</span>
                      </div>
                    </div>

                    {/* Spice badge on first card */}
                    {i === 0 && (
                      <div
                        className="absolute top-3 left-3 flex items-center gap-1 px-2.5 py-1 rounded-lg text-[10px] font-bold"
                        style={{
                          background: 'rgba(255,255,255,0.92)',
                          backdropFilter: 'blur(8px)',
                          color: '#FF6B35',
                        }}
                      >
                        <Flame className="w-3 h-3" />
                        Chef's Pick
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* ── Floating trust cards ── */}

              {/* Delivery time card — top right */}
              <motion.div
                variants={scaleIn(0.55)}
                initial="hidden"
                animate={reduce ? "visible" : floatLoop(6, 4.2, 0.2)}
                className="absolute -top-5 -right-5 md:-right-8 flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/80"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <div className="w-8 h-8 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-[11px] text-gray-400 leading-none">Delivery in</p>
                  <p className="text-sm font-bold text-gray-900 mt-0.5">Under 60 min</p>
                </div>
              </motion.div>

              {/* Rating card — bottom left */}
              <motion.div
                variants={scaleIn(0.65)}
                initial="hidden"
                animate={reduce ? "visible" : floatLoop(8, 4.8, 0)}
                className="absolute -bottom-5 -left-5 md:-left-8 flex items-center gap-3 px-4 py-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-white/80"
                style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <div className="text-2xl leading-none">⭐</div>
                <div>
                  <p className="text-sm font-extrabold text-gray-900 leading-none">4.8 / 5.0</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">50,000+ meals delivered</p>
                </div>
              </motion.div>

              {/* Meals counter card — mid-right */}
              <motion.div
                variants={scaleIn(0.72)}
                initial="hidden"
                animate={reduce ? "visible" : floatRotateLoop(6, 3, 4.6, 0.4)}
                className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-10 flex flex-col items-center gap-1 px-3.5 py-3 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.10)] border border-white/80"
                style={{
                  background: 'rgba(255,107,53,0.96)',
                  backdropFilter: 'blur(14px)',
                }}
              >
                <p className="text-white text-lg font-extrabold leading-none">50K+</p>
                <p className="text-white/80 text-[10px] font-medium text-center leading-tight">Meals<br/>Delivered</p>
              </motion.div>

              {/* Ambient blur orbs */}
              <div
                aria-hidden
                className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.15) 0%, transparent 70%)', filter: 'blur(32px)' }}
              />
              <div
                aria-hidden
                className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.10) 0%, transparent 70%)', filter: 'blur(32px)' }}
              />
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════
            BOTTOM — Stat bar
        ══════════════════════════════════════════════ */}
        <motion.div
          variants={fadeUp(0.5, 20)}
          initial="hidden"
          animate="visible"
          className="mt-16 lg:mt-20"
        >
          <div
            className="flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-6 sm:gap-0 px-8 py-6 rounded-2xl border border-gray-100"
            style={{ background: 'rgba(255,255,255,0.7)', backdropFilter: 'blur(12px)' }}
          >
            {stats.map(({ value, label, icon: Icon }, i) => (
              <div key={label} className="flex items-center gap-3">
                {/* Divider */}
                {i > 0 && (
                  <div className="hidden sm:block w-px h-10 bg-gray-200 mr-3" />
                )}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(255,107,53,0.10)' }}
                >
                  <Icon className="w-5 h-5 text-[#FF6B35]" />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-gray-900 leading-none">{value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{label}</p>
                </div>
              </div>
            ))}

            {/* Inline CTA */}
            <Link
              to="/meal-kits"
              className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-[#FF6B35] hover:underline underline-offset-4 transition"
            >
              See this week's menu
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
