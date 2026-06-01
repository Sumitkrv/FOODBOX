import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ChefHat, Truck, Clock, Star, ArrowRight,
  CheckCircle2, Leaf, MapPin, Package,
} from 'lucide-react';

/* ──────────────────────────────────────────────────────
   LEFT PANEL — rich product mockup (no images needed)
────────────────────────────────────────────────────── */
function ProductMockup() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.97, y: 20 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative h-full flex items-center justify-center"
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 30% 50%, rgba(255,107,53,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative w-full max-w-[380px] space-y-3">

        {/* ── Meal kit card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl overflow-hidden"
          style={{
            background: 'white',
            border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
          }}
        >
          {/* "Image" area — styled gradient to suggest food */}
          <div
            className="relative h-40 flex items-end p-4"
            style={{
              background: 'linear-gradient(145deg, #FFF3E8 0%, #FFE4CC 40%, #FFDDB5 100%)',
            }}
          >
            {/* Decorative food-like blobs */}
            <div className="absolute top-4 right-6 w-16 h-16 rounded-full opacity-40"
              style={{ background: 'radial-gradient(circle, #FF6B35 0%, #FF9A6C 100%)' }} />
            <div className="absolute top-10 right-14 w-10 h-10 rounded-full opacity-30"
              style={{ background: 'radial-gradient(circle, #22C55E 0%, #4ADE80 100%)' }} />
            <div className="absolute top-6 right-24 w-8 h-8 rounded-full opacity-35"
              style={{ background: 'radial-gradient(circle, #FBBF24 0%, #FDE68A 100%)' }} />
            <div className="absolute bottom-6 left-4 w-12 h-12 rounded-full opacity-25"
              style={{ background: 'radial-gradient(circle, #FF6B35 0%, transparent 100%)' }} />

            {/* Badge */}
            <div className="relative z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
              style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)' }}>
              <Clock size={10} />
              15 min cook
            </div>

            {/* Rating */}
            <div className="absolute top-3 left-4 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold"
              style={{ background: 'rgba(255,255,255,0.9)', color: '#D97706' }}>
              <Star size={10} className="fill-current" />
              4.9
            </div>
          </div>

          {/* Card body */}
          <div className="p-4">
            <p className="text-[10px] font-semibold tracking-wide uppercase text-gray-400 mb-0.5">Chef's Pick · Italian</p>
            <h4 className="font-bold text-gray-900 text-sm leading-snug">Truffle Mushroom Risotto with Parmesan Crisp</h4>
            <div className="flex items-center justify-between mt-3">
              <div className="flex items-center gap-1.5">
                <Leaf size={12} className="text-green-500" />
                <span className="text-xs text-gray-400">Pre-portioned · 2 servings</span>
              </div>
              <span className="text-sm font-bold text-gray-900">£9.99</span>
            </div>
          </div>
        </motion.div>

        {/* ── Delivery tracker card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.28, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl p-4 flex items-center gap-4"
          style={{
            background: 'white',
            border: '1px solid rgba(0,0,0,0.07)',
            boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
          }}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'rgba(99,102,241,0.1)' }}>
            <Truck size={18} style={{ color: '#6366F1' }} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-gray-900">On its way · Arriving 6:00 – 8:00 PM</p>
            <div className="mt-2 flex items-center gap-1">
              {['Packed', 'In Transit', 'Near You'].map((label, i) => (
                <div key={label} className="flex items-center gap-1">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{ background: i < 2 ? '#6366F1' : '#E5E7EB' }}
                  />
                  {i < 2 && <div className="h-px w-6 rounded" style={{ background: i < 1 ? '#6366F1' : '#E5E7EB' }} />}
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-1.5">
              {['Packed', 'In Transit', 'Near You'].map((label, i) => (
                <span key={label} className="text-[9px] text-gray-400 font-medium">{label}</span>
              ))}
            </div>
          </div>
          <MapPin size={14} style={{ color: '#6366F1' }} className="shrink-0" />
        </motion.div>

        {/* ── Receipt / cook result card ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-2xl px-4 py-3 flex items-center gap-3"
          style={{
            background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
            border: '1px solid rgba(255,255,255,0.06)',
            boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
          }}
        >
          <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'rgba(255,107,53,0.2)' }}>
            <ChefHat size={15} style={{ color: '#FF6B35' }} />
          </div>
          <div className="flex-1">
            <p className="text-xs font-semibold text-white">Meal cooked · 14 minutes</p>
            <p className="text-[10px] text-gray-400 mt-0.5">Step 4 of 4 complete</p>
          </div>
          <div className="flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold"
            style={{ background: 'rgba(34,197,94,0.15)', color: '#22C55E' }}>
            <CheckCircle2 size={10} />
            Done
          </div>
        </motion.div>

      </div>
    </motion.div>
  );
}

/* ──────────────────────────────────────────────────────
   RIGHT PANEL — steps
────────────────────────────────────────────────────── */
const steps = [
  {
    num: '01',
    icon: ChefHat,
    title: 'Choose your kit',
    desc: '40+ chef-designed recipes, filtered by diet, cuisine, or cook time.',
    accent: '#FF6B35',
  },
  {
    num: '02',
    icon: Package,
    title: 'We pack it fresh',
    desc: 'Pre-portioned, farm-sourced ingredients sealed and chilled.',
    accent: '#22C55E',
  },
  {
    num: '03',
    icon: Truck,
    title: 'Delivered to you',
    desc: 'Eco-insulated box. 2-hour window. Live GPS tracking.',
    accent: '#6366F1',
  },
  {
    num: '04',
    icon: ChefHat,
    title: 'Cook in 15 minutes',
    desc: 'Photo step-by-step guide. No prep, no measuring — just cook.',
    accent: '#D97706',
  },
];

function StepsPanel() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="flex flex-col justify-between h-full py-2">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="mb-8"
      >
        <span className="section-label mb-4 inline-flex">How it works</span>
        <h2
          className="mt-4 text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold text-gray-900 leading-tight"
          style={{ letterSpacing: '-0.035em' }}
        >
          Dinner sorted,<br />
          <span style={{ color: '#FF6B35' }}>in four steps.</span>
        </h2>
        <p className="mt-3 text-gray-500 text-base leading-relaxed max-w-sm">
          From browsing to plating — every step is designed to save you time without sacrificing quality.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="flex-1 space-y-0">
        {steps.map((step, i) => {
          const Icon = step.icon;
          const isLast = i === steps.length - 1;
          return (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.09, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-4"
            >
              {/* Line + dot column */}
              <div className="flex flex-col items-center shrink-0">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center z-10 shrink-0"
                  style={{ background: `${step.accent}15`, border: `1.5px solid ${step.accent}35` }}
                >
                  <span className="text-xs font-black" style={{ color: step.accent }}>{step.num}</span>
                </div>
                {!isLast && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.09, duration: 0.4 }}
                    style={{
                      transformOrigin: 'top',
                      width: 1,
                      flex: 1,
                      minHeight: 20,
                      background: `linear-gradient(to bottom, ${step.accent}40, ${steps[i + 1].accent}20)`,
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div className={`pb-5 ${isLast ? '' : ''}`}>
                <h3 className="font-bold text-gray-900 text-[15px] leading-snug">{step.title}</h3>
                <p className="text-sm text-gray-400 mt-0.5 leading-snug max-w-[240px]">{step.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.55, duration: 0.5 }}
        className="mt-2 flex items-center gap-4"
      >
        <Link
          to="/meal-kits"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white text-sm transition-all duration-200"
          style={{
            background: '#FF6B35',
            boxShadow: '0 4px 16px rgba(255,107,53,0.3)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#E85A24';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,107,53,0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#FF6B35';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,107,53,0.3)';
          }}
        >
          Get your first box
          <ArrowRight size={15} />
        </Link>
        <span className="text-xs text-gray-400">40% off. Cancel anytime.</span>
      </motion.div>
    </div>
  );
}

/* ──────────────────────────────────────────────────────
   Main export
────────────────────────────────────────────────────── */
export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative py-16 lg:py-20 overflow-hidden"
      style={{ background: '#FAFAF8' }}
    >
      {/* Single subtle top glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 0%, rgba(255,107,53,0.07) 0%, transparent 65%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* ── Desktop: side-by-side, capped at 680px ── */}
        <div
          className="hidden lg:grid lg:grid-cols-[1fr_1.1fr] gap-16 items-stretch"
          style={{ minHeight: 580, maxHeight: 680 }}
        >
          {/* Left — mockup */}
          <div
            className="rounded-3xl p-8 overflow-hidden relative"
            style={{
              background: 'linear-gradient(145deg, #fff 0%, #F9F8FF 100%)',
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 2px 1px rgba(0,0,0,0.02), 0 8px 40px rgba(0,0,0,0.05)',
            }}
          >
            <ProductMockup />
          </div>

          {/* Right — steps */}
          <div className="pl-4">
            <StepsPanel />
          </div>
        </div>

        {/* ── Mobile: stacked ── */}
        <div className="lg:hidden space-y-10">
          <StepsPanel />
          <div
            className="rounded-2xl p-6"
            style={{
              background: 'linear-gradient(145deg, #fff 0%, #F9F8FF 100%)',
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}
          >
            <ProductMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
