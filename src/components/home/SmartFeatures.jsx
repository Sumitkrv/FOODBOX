import { useState } from "react";
import { motion } from "framer-motion";
import { Brain, Flame, Scissors, Calendar, Sparkles } from "lucide-react";
import { spiceLabels } from "@/lib/data";

const features = [
  { icon: Brain, title: "AI Recipe Recommendations", desc: "Personalized suggestions based on your taste and diet goals." },
  { icon: Flame, title: "Spice Level Selector", desc: "From mild to extra hot — customize every kit." },
  { icon: Scissors, title: "Custom Chopping Size", desc: "Fine, medium, or coarse — chopped your way." },
  { icon: Calendar, title: "Meal Planner", desc: "Plan your week with drag-and-drop scheduling." },
  { icon: Sparkles, title: "Personalized Picks", desc: "Smart recommendations that learn what you love." },
];

export default function SmartFeatures() {
  const [spice, setSpice] = useState(2);
  const [chop, setChop] = useState("medium");

  return (
    <section className="py-20 bg-brand-cream dark:bg-deep-forest" id="features">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-extrabold text-brand-green dark:text-white md:text-4xl mb-4">
            Smart Features
          </h2>
          <p className="text-gray-650 dark:text-gray-400 max-w-xl mx-auto font-medium">
            Technology that makes healthy cooking effortless.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-black/5 dark:border-gray-800/50 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-brand-green/5 dark:bg-brand-green-light/10 flex items-center justify-center text-brand-green dark:text-brand-green-light">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-lg font-bold text-brand-green dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 rounded-3xl bg-gradient-to-br from-brand-green/5 to-brand-orange/5 p-8 md:grid-cols-2 dark:from-brand-green/10 dark:to-brand-orange/10 border border-brand-green/5 dark:border-gray-800/30">
          <div>
            <h3 className="font-serif text-lg font-bold text-brand-green dark:text-white">Spice Level</h3>
            <div className="mt-4 flex gap-2 flex-wrap">
              {[1, 2, 3, 4, 5].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setSpice(level)}
                  className={`flex-1 min-w-[70px] rounded-xl py-3 text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                    spice === level
                      ? "bg-brand-orange text-white shadow-md shadow-brand-orange/15"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-black/5 dark:border-gray-750"
                  }`}
                >
                  {spiceLabels[level - 1]}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-serif text-lg font-bold text-brand-green dark:text-white">Chopping Size</h3>
            <div className="mt-4 flex gap-2">
              {["fine", "medium", "coarse"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setChop(size)}
                  className={`flex-1 rounded-xl py-3 text-xs font-bold uppercase tracking-wider capitalize transition cursor-pointer ${
                    chop === size
                      ? "bg-brand-green text-white shadow-md shadow-brand-green/15"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-black/5 dark:border-gray-750"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
