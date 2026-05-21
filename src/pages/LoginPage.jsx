import { useState } from "react";
import { Link } from "react-router-dom";
export default function LoginPage() {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pt-28 dark:bg-gray-950">
      <div className="mx-auto max-w-md px-4 pb-20">
        <div className="card-base p-8">
          <div className="text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green text-2xl font-bold text-white">F</span>
            <h1 className="mt-4 text-2xl font-bold">{isSignup ? "Create Account" : "Welcome Back"}</h1>
            <p className="mt-2 text-sm text-gray-500">
              {isSignup ? "Join FOODBOX and start cooking" : "Login to your FOODBOX account"}
            </p>
          </div>

          <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
            {isSignup && (
              <input type="text" placeholder="Full name" className="w-full rounded-xl border border-gray-200 px-4 py-3 dark:border-gray-700 dark:bg-gray-800" />
            )}
            <input type="email" placeholder="Email address" className="w-full rounded-xl border border-gray-200 px-4 py-3 dark:border-gray-700 dark:bg-gray-800" />
            <input type="password" placeholder="Password" className="w-full rounded-xl border border-gray-200 px-4 py-3 dark:border-gray-700 dark:bg-gray-800" />
            <button type="submit" className="btn-primary w-full">{isSignup ? "Sign Up" : "Login"}</button>
          </form>

          <p className="mt-6 text-center text-sm text-gray-500">
            {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
            <button type="button" onClick={() => setIsSignup(!isSignup)} className="font-semibold text-brand-green hover:underline">
              {isSignup ? "Login" : "Sign up"}
            </button>
          </p>

          <Link to="/dashboard" className="mt-4 block text-center text-sm text-brand-orange hover:underline">
            Continue as demo user →
          </Link>
        </div>
      </div>
    </div>
  );
}
