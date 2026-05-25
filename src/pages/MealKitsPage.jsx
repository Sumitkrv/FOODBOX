import { Suspense, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, ShoppingCart, Eye } from "lucide-react";
import { mealKits, categories, spiceLabels } from "@/lib/data";
import { useCart } from "@/context/CartContext";

function MealKitsContent() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const [search, setSearch] = useState("");
  const [spiceFilter, setSpiceFilter] = useState(null);
  const { addItem } = useCart();

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
    <div className="min-h-screen bg-brand-cream dark:bg-deep-forest pb-24 pt-28">
      <main className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Header Section */}
        <header className="mb-12">
          <h1 className="font-serif text-[42px] leading-tight font-extrabold text-brand-green dark:text-white mb-4">
            Indian Culinary Classics
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed font-medium">
            Chef-curated meal kits featuring authentic spices and farm-fresh ingredients. Experience the heritage of traditional Indian kitchens, delivered to your doorstep.
          </p>
        </header>

        {/* Filters/Chips (Visual Context & Interactivity) */}
        <div className="flex gap-3 mb-8 overflow-x-auto pb-3 scrollbar-hide">
          <Link
            to="/meal-kits"
            className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition duration-300 shrink-0 cursor-pointer ${
              !categoryFilter
                ? "bg-brand-green text-white shadow-md shadow-brand-green/20"
                : "bg-sage-wash text-brand-green border border-brand-green/10 hover:bg-brand-green/10 dark:bg-brand-green-light/20 dark:text-brand-green-light"
            }`}
          >
            All Categories
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/meal-kits?category=${cat.id}`}
              className={`px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider transition duration-300 shrink-0 cursor-pointer ${
                categoryFilter === cat.id
                  ? "bg-brand-green text-white shadow-md shadow-brand-green/20"
                  : "bg-sage-wash text-brand-green border border-brand-green/10 hover:bg-brand-green/10 dark:bg-brand-green-light/20 dark:text-brand-green-light"
              }`}
            >
              {cat.icon} {cat.name}
            </Link>
          ))}
        </div>

        {/* Filter bar container (Search & Spiciness) */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 border border-black/5 dark:border-gray-800 shadow-sm mb-12">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search meal kits..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-12 pr-4 text-sm text-gray-900 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/20 dark:border-gray-700 dark:bg-gray-850 dark:text-white"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 mr-2 text-sm font-semibold">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Spiciness:</span>
              </div>
              <button
                type="button"
                onClick={() => setSpiceFilter(null)}
                className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                  spiceFilter === null
                    ? "bg-brand-green text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-755"
                }`}
              >
                All
              </button>
              {spiceLabels.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => setSpiceFilter(i + 1)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold uppercase tracking-wider transition cursor-pointer ${
                    spiceFilter === i + 1
                      ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-755"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Catalog Grid (Visual Overhaul matching exact layout grid: cols-2 gap-12) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12"
        >
          {filtered.map((kit) => {
            const categoryName = categories.find((c) => c.id === kit.category)?.name || "FOODBOX Gourmet";
            return (
              <motion.article
                key={kit.id}
                variants={itemVariants}
                className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-black/5 dark:border-gray-800 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img
                    alt={kit.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={kit.image}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />
                  <Link
                    to={`/product/${kit.id}`}
                    className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white/95 text-gray-900 hover:bg-brand-green hover:text-white dark:bg-gray-900/95 dark:text-white dark:hover:bg-brand-green px-3.5 py-2 text-xs font-bold opacity-0 transition duration-300 group-hover:opacity-100 shadow-md cursor-pointer"
                  >
                    <Eye className="h-4 w-4" /> Quick View
                  </Link>
                </div>
                <div className="p-8 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4 gap-4">
                      <div>
                        <span className="font-serif font-bold text-xs uppercase tracking-widest text-brand-orange mb-2 block">
                          {categoryName}
                        </span>
                        <h2 className="font-serif text-2xl font-bold text-brand-green dark:text-white">
                          {kit.name}
                        </h2>
                      </div>
                      <span className="font-serif text-2xl font-black text-brand-green dark:text-brand-green-light shrink-0">
                        ₹{kit.price}
                      </span>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base mb-8 line-clamp-2 leading-relaxed">
                      {kit.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex gap-2">
                      <span className="px-3 py-1 bg-sage-wash dark:bg-brand-green-light/25 text-brand-green dark:text-brand-green-light rounded-full text-xs font-bold">
                        {kit.cookTime} min prep
                      </span>
                      <span className="px-3 py-1 bg-sage-wash dark:bg-brand-green-light/25 text-brand-green dark:text-brand-green-light rounded-full text-xs font-bold">
                        {spiceLabels[kit.spiceLevel - 1]}
                      </span>
                    </div>
                    <button
                      onClick={() => addItem(kit)}
                      className="bg-brand-orange text-white px-6 py-3.5 rounded-xl font-bold hover:bg-orange-700 transition-all hover:shadow-lg shadow-brand-orange/15 active:scale-95 flex items-center gap-2 cursor-pointer text-xs uppercase tracking-wider"
                    >
                      <ShoppingCart className="h-4 w-4" /> Add to Box
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
              No meal kits found. Try adjusting filters or search query.
            </p>
          </motion.div>
        )}

        {/* Visual-only bottom call to action */}
        <div className="mt-20 flex justify-center">
          <Link
            to="/meal-kits"
            className="border border-brand-green text-brand-green dark:border-brand-green-light dark:text-brand-green-light px-12 py-4 rounded-full font-bold uppercase tracking-wider text-xs hover:bg-brand-green hover:text-white dark:hover:bg-brand-green-light dark:hover:text-gray-900 transition-all duration-300"
          >
            View All Seasonal Kits
          </Link>
        </div>
      </main>
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
