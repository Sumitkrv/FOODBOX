import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function FloatingOrderButton() {
  const { itemCount, setIsOpen } = useCart();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:bottom-8 md:right-8">
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-white shadow-float transition hover:scale-110 md:h-16 md:w-16"
        aria-label="Open cart"
      >
        <ShoppingBag className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-xs font-bold">
            {itemCount}
          </span>
        )}
      </button>
      <Link
        to="/meal-kits"
        className="hidden rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-float transition hover:bg-brand-green-dark md:block"
      >
        Order Now
      </Link>
    </div>
  );
}
