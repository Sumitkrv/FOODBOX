import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/lib/data";

export default function Categories() {
  return (
    <section className="py-20 dark:bg-gray-950" id="categories">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Featured Categories</h2>
          <p className="section-subtitle mx-auto">Explore our curated meal kits and add-ons</p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/meal-kits?category=${cat.id}`}
                className="group relative block overflow-hidden rounded-2xl shadow-card transition hover:-translate-y-1 hover:shadow-card-hover"
              >
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark/90 via-brand-green/40 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="mt-1 font-semibold">{cat.name}</h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
