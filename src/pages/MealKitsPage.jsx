import { Suspense, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal } from "lucide-react";
import { mealKits, categories, spiceLabels } from "@/lib/data";
import MealKitCard from "@/components/ui/MealKitCard";
import ProductSkeleton from "@/components/ui/ProductSkeleton";

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

  return (
    <div className="min-h-screen bg-gray-50 pt-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Meal Kits</h1>
          <p className="mt-3 text-gray-600 dark:text-gray-400">
            Fresh prepped ingredients for homemade meals in minutes
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="search"
              placeholder="Search meal kits..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-gray-200 bg-white py-3 pl-12 pr-4 dark:border-gray-700 dark:bg-gray-900"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-gray-400" />
            <button
              type="button"
              onClick={() => setSpiceFilter(null)}
              className={`rounded-full px-4 py-2 text-sm font-medium ${spiceFilter === null ? "bg-brand-green text-white" : "bg-white dark:bg-gray-800"}`}
            >
              All
            </button>
            {spiceLabels.map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => setSpiceFilter(i + 1)}
                className={`rounded-full px-4 py-2 text-sm font-medium ${spiceFilter === i + 1 ? "bg-brand-orange text-white" : "bg-white dark:bg-gray-800"}`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          <Link
            to="/meal-kits"
            className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${!categoryFilter ? "bg-brand-green text-white" : "bg-white dark:bg-gray-800"}`}
          >
            All Categories
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/meal-kits?category=${cat.id}`}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium ${categoryFilter === cat.id ? "bg-brand-green text-white" : "bg-white dark:bg-gray-800"}`}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {loading
            ? Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)
            : filtered.map((kit) => <MealKitCard key={kit.id} kit={kit} />)}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-gray-500">No meal kits found. Try adjusting filters.</p>
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
