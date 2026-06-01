import { Suspense, useMemo, useState, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { Search, SlidersHorizontal, Sparkles, X, ArrowRight, RefreshCw } from "lucide-react";
import { mealKits, categories, spiceLabels } from "@/lib/data";
import MealKitCard from "@/components/ui/MealKitCard";
import ProductSkeleton from "@/components/ui/ProductSkeleton";

/* ─── Animation variants ──────────────────────────────────── */
const containerVariants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.045 } },
  exit:   { opacity: 0, transition: { duration: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1,   transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] } },
  exit:   { opacity: 0, y: -8, scale: 0.96, transition: { duration: 0.2 } },
};

/* ─── Compute auto-fit grid columns based on result count ──── */
function gridClass(count) {
  if (count === 0) return "";
  if (count === 1) return "grid-cols-1 max-w-sm mx-auto";
  if (count === 2) return "grid-cols-1 sm:grid-cols-2 max-w-xl mx-auto";
  if (count === 3) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
}

/* ─── Skeleton loader grid ────────────────────────────────── */
function SkeletonGrid({ count = 8 }) {
  return (
    <div className={`grid ${gridClass(count)} gap-5 mt-12`}>
      {Array.from({ length: count }).map((_, i) => (
        <ProductSkeleton key={i} />
      ))}
    </div>
  );
}

/* ─── "You might also like" recommendation strip ─────────── */
function RecommendedStrip({ excluded, onReset }) {
  const recommended = useMemo(
    () => mealKits.filter((k) => !excluded.includes(k.id)).slice(0, 4),
    [excluded]
  );
  if (recommended.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.45 }}
      className="mt-16"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold mb-2"
            style={{ background: 'rgba(255,107,53,0.08)', color: '#FF6B35', border: '1px solid rgba(255,107,53,0.15)' }}
          >
            <Sparkles size={11} /> You Might Like
          </span>
          <h3 className="text-lg font-extrabold text-gray-900 tracking-tight">Popular picks from our full menu</h3>
        </div>
        <button
          onClick={onReset}
          className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors"
        >
          <RefreshCw size={14} /> Clear filters
        </button>
      </div>

      <div className={`grid ${gridClass(recommended.length)} gap-5`}>
        {recommended.map((kit) => {
          const categoryName = categories.find((c) => c.id === kit.category)?.name || "";
          return (
            <motion.div key={kit.id} variants={itemVariants} initial="hidden" animate="show">
              <MealKitCard kit={kit} categoryName={categoryName} />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

/* ─── Active filter pill row ─────────────────────────────── */
function ActiveFilterPills({ search, spiceFilter, categoryFilter, onClearSearch, onClearSpice }) {
  const activeFilters = [];
  if (categoryFilter) {
    const cat = categories.find((c) => c.id === categoryFilter);
    if (cat) activeFilters.push({ label: `${cat.icon} ${cat.name}`, key: "category" });
  }
  if (spiceFilter !== null) activeFilters.push({ label: `🌶️ ${spiceLabels[spiceFilter - 1]}`, key: "spice", onClear: onClearSpice });
  if (search) activeFilters.push({ label: `"${search}"`, key: "search", onClear: onClearSearch });

  if (activeFilters.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      className="flex flex-wrap items-center gap-2 mb-6 overflow-hidden"
    >
      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Active:</span>
      {activeFilters.map(({ label, key, onClear }) => (
        <span
          key={key}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
          style={{ background: 'rgba(255,107,53,0.08)', color: '#FF6B35', border: '1px solid rgba(255,107,53,0.18)' }}
        >
          {label}
          {onClear && (
            <button onClick={onClear} className="hover:opacity-70 transition-opacity ml-0.5" aria-label={`Remove ${key} filter`}>
              <X size={11} strokeWidth={2.5} />
            </button>
          )}
        </span>
      ))}
    </motion.div>
  );
}

/* ─── Smart empty state ──────────────────────────────────── */
function EmptyState({ search, spiceFilter, onReset }) {
  return (
    <motion.div
      key="empty-state"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.35 }}
      className="py-20 text-center"
    >
      <div
        className="inline-flex w-20 h-20 rounded-full items-center justify-center mx-auto mb-6 text-3xl"
        style={{ background: 'rgba(255,107,53,0.06)', border: '1.5px dashed rgba(255,107,53,0.25)' }}
      >
        {search ? "🔍" : "🌶️"}
      </div>
      <h3 className="text-xl font-extrabold text-gray-900 mb-2 tracking-tight">No results found</h3>
      <p className="text-sm text-gray-400 max-w-xs mx-auto leading-relaxed mb-8">
        {search
          ? `No meal kits matched "${search}". Try a different keyword.`
          : spiceFilter
          ? `No kits at that spice level right now. Try a different heat level.`
          : "No kits match all your filters together. Try relaxing one."}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          onClick={onReset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white"
          style={{ background: '#FF6B35', boxShadow: '0 4px 14px rgba(255,107,53,0.3)' }}
        >
          <RefreshCw size={14} /> Reset All Filters
        </button>
        <Link
          to="/meal-kits"
          className="inline-flex items-center gap-1.5 px-6 py-3 rounded-xl text-sm font-semibold text-gray-600 border border-gray-200 hover:border-gray-300 bg-white transition"
        >
          Browse All Kits <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}

/* ─── Result count badge ─────────────────────────────────── */
function ResultCount({ count, total, isFiltering }) {
  if (!isFiltering) return null;
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-xs font-semibold text-gray-400 ml-auto shrink-0"
    >
      {count} of {total} kits
    </motion.span>
  );
}

/* ═══════════════════════════════════════════════════════════
   Main page component
═══════════════════════════════════════════════════════════ */
function MealKitsContent() {
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category") || "";
  const [search, setSearch]           = useState("");
  const [spiceFilter, setSpiceFilter] = useState(null);
  const [isFiltering, setIsFiltering] = useState(false);
  const filterTimer = useRef(null);

  // Simulate brief transition delay when filters change
  const handleSearch = (val) => {
    setSearch(val);
    setIsFiltering(true);
    clearTimeout(filterTimer.current);
    filterTimer.current = setTimeout(() => setIsFiltering(false), 280);
  };

  const handleSpice = (val) => {
    setSpiceFilter(val);
    setIsFiltering(true);
    clearTimeout(filterTimer.current);
    filterTimer.current = setTimeout(() => setIsFiltering(false), 280);
  };

  useEffect(() => () => clearTimeout(filterTimer.current), []);

  const filtered = useMemo(() => {
    return mealKits.filter((kit) => {
      const matchCategory = !categoryFilter || kit.category === categoryFilter;
      const matchSearch   = kit.name.toLowerCase().includes(search.toLowerCase());
      const matchSpice    = spiceFilter === null || kit.spiceLevel === spiceFilter;
      return matchCategory && matchSearch && matchSpice;
    });
  }, [categoryFilter, search, spiceFilter]);

  const hasActiveFilters = !!search || spiceFilter !== null || !!categoryFilter;
  const showRecommended  = !isFiltering && filtered.length > 0 && filtered.length <= 3 && hasActiveFilters;
  const showEmpty        = !isFiltering && filtered.length === 0;

  const resetFilters = () => {
    setSearch("");
    setSpiceFilter(null);
  };

  return (
    <div className="min-h-screen bg-canvas pb-28 pt-28 relative overflow-hidden">
      {/* ── Ambient glows ── */}
      <div className="absolute top-0 right-0 w-[600px] h-[400px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 0%, rgba(255,107,53,0.06) 0%, transparent 65%)' }} />
      <div className="absolute top-1/3 left-0 w-[400px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.04) 0%, transparent 70%)' }} />

      <main className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative">

        {/* ── Page Header ── */}
        <header className="mb-14 text-center sm:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{ background: 'rgba(255,107,53,0.08)', border: '1px solid rgba(255,107,53,0.18)', color: '#FF6B35' }}
          >
            <Sparkles size={12} /> Our Weekly Menu
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[clamp(2.25rem,5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-5"
          >
            Indian Culinary Classics
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed"
          >
            Chef-curated meal kits featuring authentic spices and farm-fresh ingredients.
            Experience the heritage of traditional Indian kitchens, delivered to your doorstep.
          </motion.p>
        </header>

        {/* ── Category filter chips ── */}
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }} className="mb-8">
          <div className="flex gap-2.5 overflow-x-auto pb-3 scrollbar-hide -mx-5 px-5 sm:mx-0 sm:px-0">
            <Link
              to="/meal-kits"
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                !categoryFilter
                  ? "bg-cta text-white shadow-[0_4px_16px_rgba(255,107,53,0.25)]"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
              }`}
            >
              All Categories
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat.id}
                to={`/meal-kits?category=${cat.id}`}
                className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all duration-200 shrink-0 cursor-pointer ${
                  categoryFilter === cat.id
                    ? "bg-cta text-white shadow-[0_4px_16px_rgba(255,107,53,0.25)]"
                    : "bg-white border border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <span className="mr-1.5">{cat.icon}</span>{cat.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* ── Search & Spice filter bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl p-5 border border-gray-200/80 shadow-[0_2px_12px_rgba(0,0,0,0.03)] mb-6"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search meal kits..."
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full rounded-2xl border border-gray-200 bg-white py-3 pl-11 pr-10 text-sm text-gray-900 focus:border-cta focus:outline-none focus:ring-4 focus:ring-cta/5 transition"
              />
              {search && (
                <button
                  onClick={() => handleSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700 transition-colors"
                  aria-label="Clear search"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            {/* Spice levels */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 text-gray-500 mr-2 text-sm font-semibold">
                <SlidersHorizontal className="h-4 w-4" />
                <span>Spice:</span>
              </div>
              <button
                type="button"
                onClick={() => handleSpice(null)}
                className={`rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  spiceFilter === null
                    ? "bg-gray-900 text-white shadow-md shadow-gray-900/10"
                    : "bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300"
                }`}
              >
                All
              </button>
              {spiceLabels.map((label, i) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => handleSpice(i + 1)}
                  className={`rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    spiceFilter === i + 1
                      ? "bg-cta text-white shadow-md shadow-cta/10"
                      : "bg-gray-50 border border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300"
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Active filter pills + result count ── */}
        <AnimatePresence>
          {hasActiveFilters && (
            <motion.div
              key="filter-row"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="flex items-center gap-3 flex-wrap mb-6 overflow-hidden"
            >
              <ActiveFilterPills
                search={search}
                spiceFilter={spiceFilter}
                categoryFilter={categoryFilter}
                onClearSearch={() => handleSearch("")}
                onClearSpice={() => handleSpice(null)}
              />
              <ResultCount count={filtered.length} total={mealKits.length} isFiltering={hasActiveFilters} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Catalog area ── */}
        <LayoutGroup>
          <AnimatePresence mode="wait">

            {/* Skeleton while filtering transition happens */}
            {isFiltering && (
              <motion.div
                key="skeletons"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <SkeletonGrid count={Math.max(filtered.length, 4)} />
              </motion.div>
            )}

            {/* Empty state */}
            {!isFiltering && showEmpty && (
              <EmptyState
                key="empty"
                search={search}
                spiceFilter={spiceFilter}
                onReset={resetFilters}
              />
            )}

            {/* Results grid */}
            {!isFiltering && !showEmpty && (
              <motion.div key="grid">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  className={`grid ${gridClass(filtered.length)} gap-5`}
                >
                  {filtered.map((kit) => {
                    const categoryName = categories.find((c) => c.id === kit.category)?.name || "FOODBOX Gourmet";
                    return (
                      <motion.div key={kit.id} variants={itemVariants} layout>
                        <MealKitCard kit={kit} categoryName={categoryName} />
                      </motion.div>
                    );
                  })}
                </motion.div>

                {/* Recommendation strip when few results */}
                <AnimatePresence>
                  {showRecommended && (
                    <RecommendedStrip
                      excluded={filtered.map((k) => k.id)}
                      onReset={resetFilters}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            )}

          </AnimatePresence>
        </LayoutGroup>

      </main>
    </div>
  );
}

/* ─── Suspense-wrapped export ─────────────────────────────── */
export default function MealKitsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen pt-28 px-5 max-w-7xl mx-auto">
          <div className="h-12 w-48 rounded-2xl shimmer mb-10" />
          <SkeletonGrid count={8} />
        </div>
      }
    >
      <MealKitsContent />
    </Suspense>
  );
}


