import { motion } from "framer-motion";
import { Package, Truck, ChefHat } from "lucide-react";

const steps = [
  { icon: Package, title: "Choose Your FOODBOX", desc: "Pick from 50+ meal kits, diet boxes, and add-ons like roti & rice." },
  { icon: Truck, title: "Get Fresh Ingredients Delivered", desc: "Pre-chopped veggies and measured spices arrive chilled at your door." },
  { icon: ChefHat, title: "Cook in 15 Minutes", desc: "Follow simple steps and enjoy restaurant-quality homemade food." },
];

export default function HowItWorks() {
  return (
    <section className="bg-sage-wash py-20 dark:bg-brand-green-light/10" id="how-it-works">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-extrabold text-brand-green dark:text-white md:text-4xl mb-4">
            How It Works
          </h2>
          <p className="text-gray-650 dark:text-gray-400 max-w-xl mx-auto font-medium">
            Three simple steps to delicious homemade meals without the stress.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Horizontal line for desktop */}
          <div className="hidden md:block absolute top-[40px] left-[15%] right-[15%] h-[2px] bg-brand-green/10 dark:bg-white/10" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative flex flex-col items-center text-center group z-10"
            >
              <div className="w-20 h-20 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-md dark:shadow-none border border-black/5 dark:border-gray-700 group-hover:bg-brand-green group-hover:text-white dark:group-hover:bg-brand-green-light transition-all duration-300">
                <step.icon className="h-9 w-9 text-brand-green dark:text-brand-green-light group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="mt-6">
                <span className="text-brand-orange dark:text-brand-orange-light font-bold text-xs uppercase tracking-wider">
                  Step {i + 1}
                </span>
                <h3 className="font-serif text-xl font-bold text-brand-green dark:text-white mt-2 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 max-w-xs text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
