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
    <section className="py-20 dark:bg-gray-950" id="features">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Smart Features</h2>
          <p className="section-subtitle mx-auto">Technology that makes healthy cooking effortless</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-base p-6 hover:shadow-card-hover"
            >
              <f.icon className="h-8 w-8 text-brand-green" />
              <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 rounded-3xl bg-gradient-to-br from-brand-green/10 to-brand-orange/10 p-8 md:grid-cols-2 dark:from-brand-green/20 dark:to-brand-orange/20">
          <div>
            <h3 className="text-lg font-bold">Spice Level</h3>
            <div className="mt-4 flex gap-2">
              {[1, 2, 3, 4, 5].map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setSpice(level)}
                  className={`flex-1 rounded-xl py-3 text-sm font-medium transition ${
                    spice === level ? "bg-brand-orange text-white" : "bg-white dark:bg-gray-800"
                  }`}
                >
                  {spiceLabels[level - 1]}
                </button>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold">Chopping Size</h3>
            <div className="mt-4 flex gap-2">
              {["fine", "medium", "coarse"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setChop(size)}
                  className={`flex-1 rounded-xl py-3 text-sm font-medium capitalize transition ${
                    chop === size ? "bg-brand-green text-white" : "bg-white dark:bg-gray-800"
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
