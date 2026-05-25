import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { mealKits } from "@/lib/data";
import MealKitCard from "@/components/ui/MealKitCard";

export default function FeaturedProducts() {
  return (
    <section className="py-20 bg-brand-cream dark:bg-deep-forest" id="products">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end mb-12">
          <div>
            <h2 className="font-serif text-3xl font-extrabold text-brand-green dark:text-white md:text-4xl mb-3">
              Popular Meal Kits
            </h2>
            <p className="text-gray-650 dark:text-gray-400 font-medium">
              Chef-curated kits ready to cook in minutes.
            </p>
          </div>
          <Link
            to="/meal-kits"
            className="font-serif font-bold text-brand-orange hover:text-orange-700 dark:text-brand-orange-light dark:hover:text-white flex items-center gap-1.5 hover:underline transition duration-300"
          >
            View All <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mealKits.slice(0, 4).map((kit) => (
            <MealKitCard key={kit.id} kit={kit} />
          ))}
        </div>
      </div>
    </section>
  );
}
