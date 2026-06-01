import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { ease, tapPress } from "@/lib/animations";

export default function FloatingOrderButton() {
  const { itemCount, setIsOpen } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 15 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 0.8, ...ease.spring }}
      className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 md:bottom-8 md:right-8 items-end"
    >
      <motion.button
        type="button"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={ease.spring}
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-white shadow-[0_8px_30px_rgba(255,107,53,0.3)] md:h-16 md:w-16 focus:outline-none"
        aria-label="Open cart"
      >
        <ShoppingBag className="h-6 w-6" />
        <AnimatePresence mode="wait">
          {itemCount > 0 && (
            <motion.span
              key={itemCount}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{
                type: "spring",
                stiffness: 550,
                damping: 15
              }}
              className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-brand-green text-xs font-bold text-white shadow-md"
            >
              {itemCount}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      <motion.div
        whileHover={{ y: -2 }}
        whileTap={tapPress}
      >
        <Link
          to="/meal-kits"
          className="hidden rounded-full bg-brand-green px-5 py-3 text-sm font-semibold text-white shadow-float transition hover:bg-brand-green-dark md:block text-center whitespace-nowrap"
        >
          Order Now
        </Link>
      </motion.div>
    </motion.div>
  );
}
