import { Link } from "react-router-dom";
import { Clock, Flame, Users, Eye, ShoppingCart } from "lucide-react";
import { spiceLabels } from "@/lib/data";
import { useCart } from "@/context/CartContext";

export default function MealKitCard({ kit }) {
  const { addItem } = useCart();

  return (
    <article className="card-base group overflow-hidden hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={kit.image}
          alt={kit.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition group-hover:opacity-100" />
        <Link
          to={`/product/${kit.id}`}
          className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium opacity-0 transition group-hover:opacity-100"
        >
          <Eye className="h-3.5 w-3.5" /> Quick View
        </Link>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 dark:text-white">{kit.name}</h3>
        <div className="mt-2 flex flex-wrap gap-3 text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 text-brand-green" /> {kit.cookTime} min
          </span>
          <span className="flex items-center gap-1">
            <Flame className="h-3.5 w-3.5 text-brand-orange" /> {spiceLabels[kit.spiceLevel - 1]}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3.5 w-3.5" /> {kit.servings} servings
          </span>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-brand-green">₹{kit.price}</span>
          <button
            type="button"
            onClick={() => addItem(kit)}
            className="flex items-center gap-1.5 rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            <ShoppingCart className="h-4 w-4" /> Add
          </button>
        </div>
      </div>
    </article>
  );
}
