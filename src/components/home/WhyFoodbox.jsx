import { motion } from 'framer-motion';
import { Leaf, Scale, Activity, CalendarClock } from 'lucide-react';
import { stagger, staggerChild, fadeUp, viewport } from '../../lib/animations';

const features = [
  {
    icon: Leaf,
    title: 'Farm-Fresh Ingredients',
    desc: 'Sourced daily from local farms. No preservatives, no compromise on quality or freshness.',
    accent: '#16A34A',
    bg: 'rgba(22,163,74,0.08)',
    border: 'rgba(22,163,74,0.15)',
  },
  {
    icon: Scale,
    title: 'Pre-Portioned Quantities',
    desc: 'Zero waste. Every ingredient measured precisely for your recipe — no leftovers, no guesswork.',
    accent: '#FF6B35',
    bg: 'rgba(255,107,53,0.08)',
    border: 'rgba(255,107,53,0.15)',
  },
  {
    icon: Activity,
    title: 'Nutrition Tracking',
    desc: 'Full calorie and macro breakdown for every meal kit. Stay on top of your health goals effortlessly.',
    accent: '#6366F1',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.15)',
  },
  {
    icon: CalendarClock,
    title: 'Flexible Deliveries',
    desc: 'Pause, skip, or cancel anytime. Choose your delivery day and time — we work around you.',
    accent: '#D97706',
    bg: 'rgba(217,119,6,0.08)',
    border: 'rgba(217,119,6,0.15)',
  },
];

export default function WhyFoodbox() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden">
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(255,107,53,0.04) 0%, transparent 60%)' }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport('-80px')}
          className="text-center mb-16"
        >
          <span className="section-label">Why FOODBOX</span>
          <h2 className="section-title mt-4">Built For How You Live</h2>
          <p className="section-subtitle mx-auto mt-4">
            We've rethought every part of home cooking to save you time
            without sacrificing quality.
          </p>
        </motion.div>

        {/* Feature Grid — staggered */}
        <motion.div
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport('-40px')}
          className="grid sm:grid-cols-2 gap-5 lg:gap-6 max-w-4xl mx-auto"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={staggerChild}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.07)' }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="group p-6 lg:p-8 bg-white rounded-2xl cursor-default"
              style={{
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.03)',
              }}
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: f.bg, border: `1px solid ${f.border}` }}
              >
                <f.icon className="w-6 h-6" style={{ color: f.accent }} />
              </motion.div>

              <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                {f.title}
              </h3>
              <p className="mt-2 text-gray-500 leading-relaxed text-sm">{f.desc}</p>

              {/* Hover accent bar */}
              <motion.div
                className="mt-5 h-0.5 rounded-full"
                style={{ background: f.accent }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
