import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-brand-green py-20 md:py-32 overflow-hidden dark:bg-brand-green-dark">
      {/* Glow flare */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(165,208,185,0.1),transparent)]" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />

      <div className="relative mx-auto max-w-7xl px-4 lg:px-8 z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Text & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8 text-left"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full border border-white/10 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-brand-orange-light animate-pulse" />
            <span className="text-white/95 text-xs font-semibold uppercase tracking-widest">Fresh ingredients, zero prep stress</span>
          </div>

          <h1 className="font-serif text-[44px] md:text-[56px] leading-[1.1] text-white font-extrabold max-w-[500px]">
            Healthy Homemade Food Made Easy
          </h1>

          <p className="text-base md:text-lg text-white/80 max-w-[485px] leading-relaxed">
            Fresh chopped vegetables, spices, and ingredients delivered to your doorstep. Experience the joy of cooking premium meals without the hassle of prep.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/meal-kits" className="bg-brand-orange text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-brand-orange/30 hover:bg-orange-700 transition-all cursor-pointer flex items-center gap-2">
              Order Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link to="/meal-kits" className="border border-white/20 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all">
              Explore Meal Kits
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
            {[
              { value: "15 min", label: "Avg cook time" },
              { value: "100%", label: "Fresh produce" },
              { value: "50K+", label: "Happy cooks" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-white text-2xl font-bold font-serif">{stat.value}</div>
                <div className="text-white/60 text-xs font-medium uppercase tracking-wide mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Interactive Special Kit Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative group w-full flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-square">
            <div className="absolute -inset-4 bg-brand-orange-light/10 blur-3xl rounded-full group-hover:bg-brand-orange-light/20 transition-all duration-500" />
            <img
              src="/palak-paneer.jpg"
              alt="Palak Paneer Meal Kit"
              className="rounded-3xl w-full h-full object-cover shadow-2xl relative z-10 border border-white/10 transition-transform duration-700 group-hover:scale-[1.02]"
              width={600}
              height={600}
              fetchPriority="high"
            />
            <div className="absolute bottom-6 -left-6 bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl z-20 border border-brand-green/5 dark:border-gray-800 animate-slide-up flex flex-col gap-1">
              <span className="text-brand-orange dark:text-brand-orange-light text-xs font-bold uppercase tracking-wider">Today's special</span>
              <span className="text-gray-900 dark:text-white font-serif font-bold text-lg">Palak Paneer Kit</span>
              <span className="text-brand-green dark:text-brand-green-light font-black text-xl mt-1">₹249</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
