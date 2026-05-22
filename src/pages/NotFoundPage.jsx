import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HelpCircle, ChefHat, Home } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-950 px-4 pt-20 overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-96 w-96 rounded-full bg-brand-green/10 blur-3xl" />

      <div className="relative z-10 text-center max-w-md">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, damping: 15 }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-brand-orange/10 text-brand-orange mb-8"
        >
          <ChefHat className="h-12 w-12" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-8xl font-black tracking-wider bg-gradient-to-r from-brand-green via-brand-green-light to-brand-orange bg-clip-text text-transparent"
        >
          404
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-4 text-2xl font-bold text-gray-900 dark:text-white"
        >
          Spilled Ingredients!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-3 text-base text-gray-500 dark:text-gray-400"
        >
          We searched our entire kitchen, but we couldn't find the page you're looking for. It might have been devoured or moved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/" className="btn-primary flex items-center justify-center gap-2">
            <Home className="h-5 w-5" /> Back to Home
          </Link>
          <Link to="/contact" className="btn-secondary flex items-center justify-center gap-2">
            <HelpCircle className="h-5 w-5" /> Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
