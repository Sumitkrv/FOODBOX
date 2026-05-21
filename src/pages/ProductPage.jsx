import { useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Clock, Flame, Users, Star, Play, Minus, Plus, ShoppingCart } from "lucide-react";
import { getMealKit, addOns, spiceLabels } from "@/lib/data";
import { useCart } from "@/context/CartContext";

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
    <div className="min-h-screen bg-gray-50 pt-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="relative aspect-square overflow-hidden rounded-3xl">
            <img src={kit.image} alt={kit.name} className="h-full w-full object-cover" />
          </div>

          <div>
            <Link to="/meal-kits" className="text-sm text-brand-green hover:underline">
              ← Back to Meal Kits
            </Link>
            <h1 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">{kit.name}</h1>
            <div className="mt-3 flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-brand-orange text-brand-orange" />
                <span className="font-semibold">{kit.rating}</span>
                <span className="text-gray-500">({kit.reviews} reviews)</span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4 text-brand-green" /> {kit.cookTime} min cook
              </span>
              <span className="flex items-center gap-1">
                <Flame className="h-4 w-4 text-brand-orange" /> {spiceLabels[kit.spiceLevel - 1]}
              </span>
              <span className="flex items-center gap-1">
                <Users className="h-4 w-4" /> {kit.servings} servings
              </span>
            </div>
            <p className="mt-6 text-gray-600 dark:text-gray-400">{kit.description}</p>
            <p className="mt-6 text-3xl font-bold text-brand-green">₹{kit.price + addOnTotal}</p>

            <div className="mt-8">
              <h3 className="font-semibold">Add-ons</h3>
              <div className="mt-3 space-y-2">
                {addOns.map((addon) => (
                  <label
                    key={addon.id}
                    className="flex cursor-pointer items-center gap-3 rounded-xl border border-gray-200 p-3 dark:border-gray-700"
                  >
                    <input
                      type="checkbox"
                      checked={selectedAddOns.includes(addon.id)}
                      onChange={() => toggleAddOn(addon.id)}
                      className="h-4 w-4 accent-brand-green"
                    />
                    <span className="flex-1">{addon.name}</span>
                    <span className="font-medium text-brand-orange">+₹{addon.price}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="flex items-center gap-3 rounded-full border border-gray-200 px-2 dark:border-gray-700">
                <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-2">
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-8 text-center font-semibold">{quantity}</span>
                <button type="button" onClick={() => setQuantity(quantity + 1)} className="p-2">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button type="button" onClick={() => addItem(kit, quantity)} className="btn-primary flex-1 sm:flex-initial">
                <ShoppingCart className="h-5 w-5" /> Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          <div className="card-base p-6 lg:col-span-1">
            <h2 className="text-lg font-bold">Ingredients</h2>
            <ul className="mt-4 space-y-2">
              {kit.ingredients.map((ing) => (
                <li key={ing} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green" /> {ing}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-base p-6 lg:col-span-1">
            <h2 className="text-lg font-bold">Nutrition</h2>
            <dl className="mt-4 space-y-3">
              {kit.nutrition.map((n) => (
                <div key={n.label} className="flex justify-between text-sm">
                  <dt className="text-gray-500">{n.label}</dt>
                  <dd className="font-medium">{n.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="card-base p-6 lg:col-span-1">
            <h2 className="text-lg font-bold">Cooking Instructions</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-gray-600 dark:text-gray-400">
              {kit.instructions.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="card-base mt-12 overflow-hidden">
          <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-brand-green to-brand-green-dark">
            <button
              type="button"
              className="flex items-center gap-3 rounded-full bg-white/20 px-8 py-4 text-white backdrop-blur transition hover:bg-white/30"
            >
              <Play className="h-8 w-8 fill-white" />
              <span className="font-semibold">Watch Cooking Tutorial</span>
            </button>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-bold">Customer Reviews</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { name: "Amit K.", rating: 5, text: "Perfect spice levels and fresh veggies!" },
              { name: "Sneha R.", rating: 5, text: "Cooked in exactly 15 minutes as promised." },
            ].map((r) => (
              <div key={r.name} className="card-base p-5">
                <div className="flex gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-brand-orange text-brand-orange" />
                  ))}
                </div>
                <p className="mt-3 text-gray-600 dark:text-gray-400">{r.text}</p>
                <p className="mt-2 font-medium">{r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
