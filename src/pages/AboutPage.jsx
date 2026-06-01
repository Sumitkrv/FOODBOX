import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Sprout, ChefHat, RefreshCw, Award, Sparkles, ArrowRight, Target, ShieldCheck, Flame } from "lucide-react";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <div className="min-h-screen bg-canvas pb-24 relative overflow-hidden">
      {/* Decorative background orbs */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 0%, rgba(255,107,53,0.06) 0%, transparent 65%)' }}
      />
      <div
        className="absolute top-1/4 left-0 w-[450px] h-[350px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)' }}
      />

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column: Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-6"
                style={{
                  background: 'rgba(255,107,53,0.08)',
                  border: '1px solid rgba(255,107,53,0.18)',
                  color: '#FF6B35',
                }}
              >
                <Sparkles size={12} />
                Our Story
              </div>
              
              <h1 className="text-[clamp(2.5rem,5.5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-gray-900 mb-6">
                Bringing traditions to <br />
                <span className="text-cta">modern kitchens.</span>
              </h1>
              
              <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-xl">
                FOODBOX was founded in 2024 with a simple, powerful belief: that the warmth, health, and joy of a home-cooked meal shouldn’t be lost to the hectic pace of modern life. We simplify the prep so you can enjoy the magic of cooking.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/meal-kits"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white text-sm transition-all duration-200"
                  style={{
                    background: '#FF6B35',
                    boxShadow: '0 4px 16px rgba(255,107,53,0.25)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = '#E85A24';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(255,107,53,0.35)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = '#FF6B35';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(255,107,53,0.25)';
                  }}
                >
                  Explore Weekly Menu
                  <ArrowRight size={16} />
                </Link>
                <a
                  href="#philosophy"
                  className="btn-secondary px-6 py-3.5 text-sm font-semibold rounded-xl"
                >
                  Learn Our Philosophy
                </a>
              </div>
            </motion.div>

            {/* Right Column: Visual Composition */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 bg-gray-50">
                <img
                  alt="Our Story Hero"
                  className="w-full h-full object-cover brightness-[0.95]"
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              {/* Floating decorative metric card */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl border border-gray-200/80 shadow-lg max-w-[200px] hidden sm:block"
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">Our Status</span>
                </div>
                <p className="text-xl font-black text-gray-900">100% Organic</p>
                <p className="text-xs text-gray-500 mt-0.5">Farm-fresh guaranteed</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Philosophy Section ── */}
      <section id="philosophy" className="py-24 relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-label mb-4 inline-flex">Core Values</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight mt-4">
            The FOODBOX Philosophy
          </h2>
          <p className="text-gray-555 text-base md:text-lg max-w-xl mx-auto mt-4 leading-relaxed">
            Rooted in quality and dedicated to simplifying healthy eating.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Card 1: Farm to Table */}
          <motion.div
            variants={itemVariants}
            className="group bg-white p-8 rounded-3xl border border-gray-200/85 hover:border-green-200 hover:shadow-[0_16px_36px_rgba(22,163,74,0.05)] transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-green-600 transition"
              style={{ background: 'rgba(22,163,74,0.08)', border: '1px solid rgba(22,163,74,0.18)' }}>
              <Sprout className="h-6 w-6 animate-pulse" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Farm-to-Table</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              We source directly from local, sustainable farms to ensure every single ingredient arrives at your door at its peak nutritional value.
            </p>
          </motion.div>

          {/* Card 2: Chef Curated */}
          <motion.div
            variants={itemVariants}
            className="group bg-white p-8 rounded-3xl border border-gray-200/85 hover:border-orange-200 hover:shadow-[0_16px_36px_rgba(255,107,53,0.05)] transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-cta transition"
              style={{ background: 'rgba(255,107,53,0.08)', border: '1px solid rgba(255,107,53,0.18)' }}>
              <ChefHat className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Chef-Curated</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Our recipes are created by Michelin-experienced chefs who design complex restaurant-style dinners into clean, simple 15-minute tasks.
            </p>
          </motion.div>

          {/* Card 3: Sustainable */}
          <motion.div
            variants={itemVariants}
            className="group bg-white p-8 rounded-3xl border border-gray-200/85 hover:border-indigo-200 hover:shadow-[0_16px_36px_rgba(99,102,241,0.05)] transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm text-indigo-600 transition"
              style={{ background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)' }}>
              <RefreshCw className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Sustainable Packaging</h3>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              We lead the food delivery industry in compostable insulation materials and 100% recyclable shipping kits. Zero-waste cooking.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ── Meet Our Chefs ── */}
      <section className="bg-gray-950 py-24 text-white relative overflow-hidden">
        {/* Glow ambient background element */}
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[350px] pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)' }}
        />
        
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side: Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-5"
            >
              <div className="pt-8">
                <img
                  className="rounded-3xl w-full h-[320px] md:h-[380px] object-cover border border-white/10 shadow-xl"
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&q=80"
                  alt="Michelin Star Chef"
                  loading="lazy"
                />
              </div>
              <div>
                <img
                  className="rounded-3xl w-full h-[320px] md:h-[380px] object-cover border border-white/10 shadow-xl"
                  src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&q=80"
                  alt="Executive Culinary Chef"
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right side: Text */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <span
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold tracking-[0.1em] uppercase mb-5"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#FF8C5A' }}
              >
                Culinary Leadership
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight leading-tight">Meet Our Chefs</h2>
              <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
                Our culinary team is led by veterans of the world's most prestigious commercial kitchens. They bring a lifetime of experience in flavor profiles, seasonal sourcing, and precise technique to every meal kit we deliver.
              </p>
              
              <div className="space-y-5">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center shrink-0 text-orange-400">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Global Expertise</h4>
                    <p className="text-gray-400 text-xs md:text-sm mt-0.5">Techniques refined across the finest culinary institutions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04]">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400">
                    <Sparkles size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base">Modern Flavours</h4>
                    <p className="text-gray-400 text-xs md:text-sm mt-0.5">Redefining classic heritage meals with wholesome, clean ingredients.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Impact Section ── */}
      <section className="py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left side: content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-bold uppercase tracking-widest text-cta mb-4 block">
                Local Ecosystems
              </span>
              <h2 className="text-3xl md:text-[2.5rem] leading-tight font-extrabold text-gray-900 mb-6 tracking-tight">
                Supporting Organic Farms
              </h2>
              <p className="text-gray-500 text-base md:text-lg mb-8 leading-relaxed">
                We partner with over 40 family-owned farms. These partnerships are the heartbeat of FOODBOX, allowing us to support sustainable land management while delivering unrivaled freshness.
              </p>
              
              {/* Counter badges grid */}
              <div className="grid grid-cols-2 gap-6 border-t border-gray-100 pt-8">
                <div>
                  <div className="text-4xl font-extrabold text-cta tracking-tight mb-1">40+</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 leading-tight">
                    Active Farm Partnerships
                  </div>
                </div>
                <div>
                  <div className="text-4xl font-extrabold text-cta tracking-tight mb-1">12M</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 leading-tight">
                    Lbs Carbon Offset
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right side: image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-gray-50 rounded-full -z-10 opacity-70" />
              <img
                className="rounded-3xl shadow-xl w-full h-[400px] md:h-[450px] object-cover border border-gray-200/80"
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&q=80"
                alt="Sustainable organic farm Crop Grid"
                loading="lazy"
              />
              
              {/* Absolute testimonial bubble */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl border border-gray-200/80 shadow-lg max-w-[240px]">
                <p className="text-xs font-semibold text-gray-800 italic leading-relaxed">
                  "Quality begins in the health of the soil. Our farms deliver just that."
                </p>
                <p className="text-[10px] font-bold text-gray-400 mt-2.5 uppercase tracking-wide">
                  — Marcus Thorne, Head Forager
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Call to Action ── */}
      <section className="mt-12 px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-65px' }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto rounded-3xl overflow-hidden p-12 lg:p-16 text-center relative border border-white/5 shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #111827 0%, #1f2937 50%, #111827 100%)',
          }}
        >
          {/* Animated decorative orbs */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-cta/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">Taste the Tradition</h2>
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              Join thousands of busy families rediscovering the joy of cooking wholesome, premium dinners at home.
            </p>
            <Link
              to="/meal-kits"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-sm transition-all duration-200"
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
              Choose Your First Kit
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
