import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { mealKits, categories } from '../../lib/data';
import MealKitCard from '../ui/MealKitCard';
import { stagger, staggerChild, fadeUp, viewport } from '../../lib/animations';

export default function FeaturedMealKits() {
  const featured = mealKits.slice(0, 4);

  return (
    <section className="py-20 lg:py-28 bg-gray-50/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeUp(0, 20)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport('-80px')}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12"
        >
          <div>
            <span className="section-label">Our Menu</span>
            <h2 className="section-title mt-4">Popular Meal Kits</h2>
            <p className="section-subtitle mt-3">
              Chef-curated recipes made with farm-fresh ingredients.
            </p>
          </div>
          <Link
            to="/meal-kits"
            className="inline-flex items-center gap-1.5 text-cta font-semibold text-sm hover:gap-2.5 transition-all shrink-0"
          >
            View All Kits
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        {/* Product Grid with clean Framer Motion stagger orchestrator */}
        <motion.div
          variants={stagger(0.07, 0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport('-40px')}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6"
        >
          {featured.map((kit) => (
            <motion.div
              key={kit.id}
              variants={staggerChild}
            >
              <MealKitCard
                kit={kit}
                categoryName={categories.find((c) => c.id === kit.category)?.name || ''}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
