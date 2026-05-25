import { Link } from "react-router-dom";
import { Clock, Flame, Users, Eye, ShoppingCart } from "lucide-react";
import { spiceLabels } from "@/lib/data";
import { useCart } from "@/context/CartContext";

export default function MealKitCard({ kit }) {
  const { addItem } = useCart();

  return (
    <article className="bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-black/5 dark:border-gray-800/50 shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={kit.image}
          alt={kit.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
        <Link
          to={`/product/${kit.id}`}
          className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/95 text-gray-900 hover:bg-brand-green hover:text-white dark:bg-gray-900/95 dark:text-white dark:hover:bg-brand-green px-3 py-1.5 text-xs font-bold opacity-0 transition duration-300 group-hover:opacity-100 shadow-md cursor-pointer"
        >
          <Eye className="h-3.5 w-3.5" /> Quick View
        </Link>
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="font-serif text-lg font-bold text-brand-green dark:text-white line-clamp-1">
            {kit.name}
          </h3>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400 line-clamp-2 leading-relaxed">
            {kit.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400 font-medium">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-brand-green" /> {kit.cookTime} min
            </span>
            <span className="flex items-center gap-1">
              <Flame className="h-3.5 w-3.5 text-brand-orange" /> {spiceLabels[kit.spiceLevel - 1]}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5 text-gray-400" /> {kit.servings} servings
            </span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-800">
          <span className="text-xl font-black text-brand-green dark:text-brand-green-light">
            ₹{kit.price}
          </span>
          <button
            type="button"
            onClick={() => addItem(kit)}
            className="flex items-center gap-1.5 rounded-xl bg-brand-orange px-5 py-2 text-xs font-bold text-white shadow-md shadow-brand-orange/15 transition hover:bg-orange-700 hover:shadow-lg cursor-pointer"
          >
            <ShoppingCart className="h-3.5 w-3.5" /> Add
          </button>
        </div>
      </div>
    </article>
  );
}
