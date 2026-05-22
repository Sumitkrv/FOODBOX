import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Flame, Users, Star, Play, Minus, Plus, ShoppingCart, Apple, ChefHat } from "lucide-react";
import { getMealKit, addOns, spiceLabels } from "@/lib/data";
import { useCart } from "@/context/CartContext";
import PageHero from "@/components/ui/PageHero";

export default function ProductPage() {
  const { id } = useParams();
  const kit = getMealKit(id);
  const [quantity, setQuantity] = useState(1);
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  const { addItem } = useCart();

  if (!kit) {
    return <Navigate to="/404" replace />;
  }

  const addOnTotal = addOns
    .filter((a) => selectedAddOns.includes(a.id))
    .reduce((s, a) => s + a.price, 0);

  const toggleAddOn = (addonId) => {
    setSelectedAddOns((prev) =>
      prev.includes(addonId) ? prev.filter((x) => x !== addonId) : [...prev, addonId]
    );
  };

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-gray-950 pb-20">
      <PageHero
        title={kit.name}
        subtitle={kit.tagline || `${kit.cookTime} minutes cooking, zero hassle`}
        breadcrumbs={[
          { label: "Meal Kits", path: "/meal-kits" },
          { label: kit.name }
        ]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Image side with animations and orange glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-brand-orange/15 blur-3xl" />
            <div className="relative aspect-square overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/20 dark:ring-gray-800/50">
              <img src={kit.image} alt={kit.name} className="h-full w-full object-cover" />
            </div>
          </motion.div>

          {/* Details side with animations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white md:text-4xl">{kit.name}</h1>
            
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1 rounded-full bg-orange-50 dark:bg-orange-950/30 px-3.5 py-1 text-sm font-semibold text-brand-orange shadow-sm">
                <Star className="h-4 w-4 fill-brand-orange text-brand-orange" />
                <span>{kit.rating}</span>
                <span className="text-brand-orange/70 font-normal">({kit.reviews} reviews)</span>
              </div>
            </div>

            {/* Premium Badges */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-gray-150 dark:bg-gray-900 dark:border-gray-800 text-center shadow-sm">
                <Clock className="h-5 w-5 text-brand-green mb-1" />
                <span className="text-xs font-semibold text-gray-900 dark:text-white">{kit.cookTime} Min</span>
                <span className="text-[10px] text-gray-400">Prep & Cook</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-gray-150 dark:bg-gray-900 dark:border-gray-800 text-center shadow-sm">
                <Flame className="h-5 w-5 text-brand-orange mb-1" />
                <span className="text-xs font-semibold text-gray-900 dark:text-white">{spiceLabels[kit.spiceLevel - 1]}</span>
                <span className="text-[10px] text-gray-400">Spiciness</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white border border-gray-150 dark:bg-gray-900 dark:border-gray-800 text-center shadow-sm">
                <Users className="h-5 w-5 text-brand-green mb-1" />
                <span className="text-xs font-semibold text-gray-900 dark:text-white">{kit.servings} Servings</span>
                <span className="text-[10px] text-gray-400">Yields</span>
              </div>
            </div>

            <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed text-base">{kit.description}</p>
            <p className="mt-6 text-3xl font-extrabold text-brand-green">₹{kit.price + addOnTotal}</p>

            <div className="mt-8">
              <h3 className="font-bold text-gray-900 dark:text-white flex items-center gap-1.5">
                <Apple className="h-4.5 w-4.5 text-brand-orange" /> Customize with Add-ons
              </h3>
              <div className="mt-3 space-y-2">
                {addOns.map((addon) => (
                  <label
                    key={addon.id}
                    className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3.5 transition-all duration-200 ${
                      selectedAddOns.includes(addon.id)
                        ? "border-brand-green bg-brand-green/5 dark:border-brand-green/50 dark:bg-brand-green/10"
                        : "border-gray-250 bg-white hover:bg-gray-50 dark:border-gray-800 dark:bg-gray-900 dark:hover:bg-gray-850"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(addon.id)}
                      onChange={() => toggleAddOn(addon.id)}
                      className="h-4 w-4 accent-brand-green rounded border-gray-300 text-brand-green"
                    />
                    <span className="flex-1 font-medium text-sm text-gray-800 dark:text-gray-200">{addon.name}</span>
                    <span className="font-semibold text-sm text-brand-orange">+₹{addon.price}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 rounded-full border border-gray-300 bg-white px-2 py-1 dark:border-gray-700 dark:bg-gray-900">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-white"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-bold text-gray-900 dark:text-white">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:hover:text-white"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                onClick={() => addItem(kit, quantity)}
                className="btn-primary flex-1 sm:flex-initial"
              >
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </button>
            </div>
          </motion.div>
        </div>

        {/* Ingredients, Nutrition, Instructions Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="card-base p-6 bg-gradient-to-b from-brand-green/5 to-transparent border border-brand-green/10 dark:border-brand-green/20"
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-800">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Ingredients</h2>
              <span className="text-[10px] text-brand-green font-bold bg-brand-green/10 px-2 py-0.5 rounded-full">
                For {kit.servings * quantity} servings ({quantity} {quantity === 1 ? 'kit' : 'kits'})
              </span>
            </div>
            <ul className="mt-4 divide-y divide-gray-100 dark:divide-gray-800">
              {kit.ingredients.map((ing) => (
                <li key={ing.name} className="flex items-center justify-between py-2.5 text-sm text-gray-700 dark:text-gray-300">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" />
                    {ing.name}
                  </span>
                  <span className="font-bold text-brand-green bg-brand-green/10 dark:bg-brand-green/20 px-2.5 py-0.5 rounded text-xs font-mono">
                    {ing.amount * quantity} {ing.unit}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="card-base p-6 bg-gradient-to-b from-brand-orange/5 to-transparent border border-brand-orange/10 dark:border-brand-orange/20"
          >
            <div className="pb-3 border-b border-gray-100 dark:border-gray-800">
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Nutrition Info</h2>
            </div>
            <dl className="mt-4 space-y-3.5">
              {kit.nutrition.map((n) => (
                <div key={n.label} className="flex justify-between text-sm py-1 border-b border-dashed border-gray-100 dark:border-gray-800 last:border-0">
                  <dt className="text-gray-500 dark:text-gray-400">{n.label}</dt>
                  <dd className="font-semibold text-gray-800 dark:text-gray-200">{n.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="card-base p-6 bg-gradient-to-b from-brand-green/5 to-transparent border border-brand-green/10 dark:border-brand-green/20"
          >
            <div className="pb-3 border-b border-gray-100 dark:border-gray-800 flex items-center gap-1.5">
              <ChefHat className="h-5 w-5 text-brand-green" />
              <h2 className="text-lg font-bold text-gray-900 dark:text-white">Cooking Steps</h2>
            </div>
            <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {kit.instructions.map((step, i) => (
                <li key={i} className="pl-1 hover:text-brand-green transition duration-150">
                  {step}
                </li>
              ))}
            </ol>
          </motion.div>
        </div>

        {/* Video Tutorial Banner */}
        <div className="card-base mt-12 overflow-hidden shadow-xl group">
          <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-brand-green to-brand-green-dark p-8">
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.3%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
            <div className="absolute -inset-4 bg-brand-orange/10 opacity-0 group-hover:opacity-100 blur-3xl transition duration-500" />
            <button
              type="button"
              className="flex items-center gap-3 rounded-full bg-white/20 px-8 py-4 text-white backdrop-blur-md transition-all duration-350 hover:bg-white/30 hover:scale-105 shadow-lg shadow-black/10"
            >
              <Play className="h-8 w-8 fill-white text-white" />
              <span className="font-semibold text-lg">Watch Cooking Tutorial</span>
            </button>
          </div>
        </div>

        {/* Customer Reviews Overhaul */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Star className="h-6 w-6 text-brand-orange fill-brand-orange" /> What Cooks Are Saying
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {[
              { name: "Amit K.", rating: 5, text: "Perfect spice levels and incredibly fresh vegetables! Best home kit I have ever used." },
              { name: "Sneha R.", rating: 5, text: "Cooked in exactly 15 minutes as promised. Clean and well portioned ingredients." },
            ].map((r) => (
              <div key={r.name} className="card-base p-6 border border-gray-100 dark:border-gray-800 hover:shadow-card-hover hover:-translate-y-0.5 duration-200">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4.5 w-4.5 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-350 leading-relaxed text-sm italic">"{r.text}"</p>
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-brand-green/10 flex items-center justify-center font-bold text-xs text-brand-green">
                    {r.name[0]}
                  </div>
                  <p className="font-semibold text-sm text-gray-800 dark:text-gray-200">{r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

