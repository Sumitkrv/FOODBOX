import { motion } from "framer-motion";
import { Package, Truck, ChefHat } from "lucide-react";

const steps = [
  { icon: Package, title: "Choose Your FOODBOX", desc: "Pick from 50+ meal kits, diet boxes, and add-ons like roti & rice." },
  { icon: Truck, title: "Get Fresh Ingredients Delivered", desc: "Pre-chopped veggies and measured spices arrive chilled at your door." },
  { icon: ChefHat, title: "Cook in 15 Minutes", desc: "Follow simple steps and enjoy restaurant-quality homemade food." },
];

export default function HowItWorks() {
  return (
    <section className="bg-brand-cream py-20 dark:bg-gray-900" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle mx-auto">Three simple steps to delicious homemade meals</p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              {i < steps.length - 1 && (
                <div className="absolute left-[60%] top-12 hidden h-0.5 w-[80%] bg-gradient-to-r from-brand-green to-brand-orange md:block" />
              )}
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-card dark:bg-gray-800">
                <step.icon className="h-10 w-10 text-brand-green" />
              </div>
              <span className="mt-4 inline-block rounded-full bg-brand-orange/10 px-3 py-1 text-sm font-bold text-brand-orange">
                Step {i + 1}
              </span>
              <h3 className="mt-4 text-xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
