import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center gap-12 px-4 pb-20 pt-32 lg:flex-row lg:px-8 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm text-white backdrop-blur">
            <Sparkles className="h-4 w-4 text-brand-orange-light" />
            Fresh ingredients, zero prep stress
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Healthy Homemade Food Made Easy
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85 md:text-xl">
            Fresh chopped vegetables, spices, and ingredients delivered to your doorstep.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Link to="/meal-kits" className="btn-primary">
              Order Now <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/meal-kits"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
            >
              Explore Meal Kits
            </Link>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start">
            {[
              { value: "15 min", label: "Avg cook time" },
              { value: "100%", label: "Fresh produce" },
              { value: "50K+", label: "Happy cooks" },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-2xl font-bold text-white">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative flex-1"
        >
          <div className="relative mx-auto aspect-square max-w-lg">
            <div className="absolute -inset-4 rounded-full bg-brand-orange/30 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80"
              alt="Fresh meal kit ingredients"
              className="relative w-full rounded-3xl object-cover shadow-2xl ring-4 ring-white/20"
              width={600}
              height={600}
              fetchPriority="high"
            />
            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white p-4 shadow-float dark:bg-gray-900">
              <p className="text-xs text-gray-500">Today&apos;s special</p>
              <p className="font-bold text-brand-green">Palak Paneer Kit</p>
              <p className="font-semibold text-brand-orange">₹249</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
