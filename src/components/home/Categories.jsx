import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";

export default function Categories() {
  return (
    <section className="py-20 bg-brand-cream dark:bg-deep-forest" id="categories">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-extrabold text-brand-green dark:text-white md:text-4xl mb-4">
            Featured Categories
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto font-medium">
            Explore our curated meal kits and add-ons designed for every culinary preference.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <Link
                to={`/meal-kits?category=${cat.id}`}
                className="relative aspect-square rounded-2xl overflow-hidden mb-4 block shadow-md hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
                  <span className="text-xl shrink-0 filter drop-shadow">{cat.icon}</span>
                  <span className="font-serif font-bold text-sm md:text-base tracking-wide">{cat.name}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
