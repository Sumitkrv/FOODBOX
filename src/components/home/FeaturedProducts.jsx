import { Link } from "react-router-dom";
import { mealKits } from "@/lib/data";
import MealKitCard from "@/components/ui/MealKitCard";

export default function FeaturedProducts() {
  return (
    <section className="py-20" id="products">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="section-title">Popular Meal Kits</h2>
            <p className="section-subtitle">Chef-curated kits ready to cook in minutes</p>
          </div>
          <Link to="/meal-kits" className="btn-secondary text-sm">
            View All
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mealKits.slice(0, 4).map((kit) => (
            <MealKitCard key={kit.id} kit={kit} />
          ))}
        </div>
      </div>
    </section>
  );
}
