import { Suspense, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal } from "lucide-react";
import { mealKits, categories, spiceLabels } from "@/lib/data";
import MealKitCard from "@/components/ui/MealKitCard";
import ProductSkeleton from "@/components/ui/ProductSkeleton";
import PageHero from "@/components/ui/PageHero";

function MealKitsContent() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const [search, setSearch] = useState("");
  const [spiceFilter, setSpiceFilter] = useState(null);
  const loading = false;

  const filtered = useMemo(() => {
    return mealKits.filter((kit) => {
      const matchCategory = !categoryFilter || kit.category === categoryFilter;
      const matchSearch = kit.name.toLowerCase().includes(search.toLowerCase());
      const matchSpice = spiceFilter === null || kit.spiceLevel === spiceFilter;
      return matchCategory && matchSearch && matchSpice;
    });
  }, [categoryFilter, search, spiceFilter]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-gray-950">
      <PageHero
        title="Meal Kits"
        subtitle="Fresh prepped ingredients for homemade meals in minutes"
        breadcrumbs={[{ label: "Meal Kits" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 pb-20 lg:px-8">
        {/* Filter bar container */}
        <div className="card-base p-6 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-card border border-gray-100 dark:border-gray-800">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search meal kits..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-full border border-gray-200 bg-white py-3 pl-12 pr-4 text-gray-900 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mr-2">
                <SlidersHorizontal className="h-5 w-5" />
                <span className="text-sm font-medium">Spiciness:</span>
              </div>
              <button
                type="button"
                onClick={() => setSpiceFilter(null)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  spiceFilter === null
                    ? "bg-brand-green text-white shadow-md shadow-brand-green/20"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                All
              </button>
              {spiceLabels.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSpiceFilter(i + 1)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    spiceFilter === i + 1
                      ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                      : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <Link
              to="/meal-kits"
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                !categoryFilter
                  ? "bg-brand-green text-white shadow-md shadow-brand-green/20"
                  : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
              }`}
            >
              All Categories
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/meal-kits?category=${cat.id}`}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                  categoryFilter === cat.id
                    ? "bg-brand-green text-white shadow-md shadow-brand-green/20"
                    : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-700"
                }`}
              >
                {cat.icon} {cat.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Meal kits grid with stagger */}
        {loading ? (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {filtered.map((kit) => (
              <motion.div key={kit.id} variants={itemVariants}>
                <MealKitCard kit={kit} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No meal kits found. Try adjusting filters or search.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default function MealKitsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-28 text-center">Loading...</div>}>
      <MealKitsContent />
    </Suspense>
  );
}

