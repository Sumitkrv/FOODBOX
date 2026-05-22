import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Lock, User, ArrowRight, ChefHat } from "lucide-react";

export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  const handleDemoLogin = () => {
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-24 px-4 bg-gray-950">
      {/* Background gradients and visual flares */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.03%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')]" />
      
      {/* Large glowing orbs */}
      <div className="absolute top-1/4 -left-36 h-96 w-96 rounded-full bg-brand-green/20 blur-3xl" />
      <div className="absolute bottom-1/4 -right-36 h-96 w-96 rounded-full bg-brand-orange/20 blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
        className="relative w-full max-w-md z-10"
      >
        {/* Logo and Name outside the card */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.1 }}
            className="inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-tr from-brand-green to-brand-green-light shadow-xl shadow-brand-green/30 text-white"
          >
            <ChefHat className="h-9 w-9" />
          </motion.div>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white">
            FOOD<span className="text-brand-orange">BOX</span>
          </h2>
          <p className="mt-2 text-sm text-gray-400">Fresh ingredients, premium home-cooked kits.</p>
        </div>

        {/* Form Card */}
        <div className="backdrop-blur-2xl bg-white/95 dark:bg-gray-900/95 shadow-2xl rounded-3xl p-8 border border-gray-200/50 dark:border-gray-800/50">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {isSignup ? "Create Account" : "Welcome Back"}
            </h1>
            <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400">
              {isSignup ? "Join FOODBOX and start cooking fresh meals" : "Sign in to manage your premium kitchen kits"}
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <AnimatePresence mode="popLayout">
              {isSignup && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -10 }}
                  animate={{ opacity: 1, height: "auto", y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <label className="sr-only">Full Name</label>
                  <div className="relative">
                    <User className="absolute top-3.5 left-4 h-5 w-5 text-gray-400 dark:text-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      className="w-full rounded-xl border border-gray-200 bg-white px-4 pl-12 py-3 text-gray-900 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative">
              <Mail className="absolute top-3.5 left-4 h-5 w-5 text-gray-400 dark:text-gray-500" />
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 pl-12 py-3 text-gray-900 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <div className="relative">
              <Lock className="absolute top-3.5 left-4 h-5 w-5 text-gray-400 dark:text-gray-500" />
              <input
                type="password"
                required
                placeholder="Password"
                className="w-full rounded-xl border border-gray-200 bg-white px-4 pl-12 py-3 text-gray-900 focus:border-brand-green focus:ring-2 focus:ring-brand-green/20 focus:outline-none dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              />
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3.5 mt-2 flex items-center justify-center gap-2 cursor-pointer font-bold"
            >
              {isSignup ? "Sign Up" : "Login"} <ArrowRight className="h-5 w-5" />
            </button>
          </form>

          {/* Toggle Button */}
          <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="font-semibold text-brand-green hover:text-brand-green-light hover:underline transition cursor-pointer"
            >
              {isSignup ? "Login here" : "Sign up here"}
            </button>
          </div>

          <div className="relative flex py-4 items-center">
            <div className="flex-grow border-t border-gray-200 dark:border-gray-800"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-xs uppercase tracking-wider font-semibold">Or</span>
            <div className="flex-grow border-t border-gray-200 dark:border-gray-800"></div>
          </div>

          <button
            onClick={handleDemoLogin}
            className="w-full rounded-xl border border-dashed border-brand-orange/45 bg-brand-orange/5 dark:bg-brand-orange/10 hover:bg-brand-orange/10 dark:hover:bg-brand-orange/20 hover:border-brand-orange/70 py-3 text-center text-sm font-semibold text-brand-orange transition cursor-pointer flex items-center justify-center gap-1.5"
          >
            Continue as demo user <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </motion.div>
    </div>
  );
}
