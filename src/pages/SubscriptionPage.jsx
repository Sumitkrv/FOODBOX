import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, Truck, Percent, Calendar } from "lucide-react";
import { subscriptionPlans } from "@/lib/data";
import PageHero from "@/components/ui/PageHero";

export default function SubscriptionPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen bg-brand-cream dark:bg-gray-950 pb-20">
      <PageHero
        title="Subscription Plans"
        subtitle="Weekly meal plans with free delivery, exclusive discounts, and scheduled deliveries"
        breadcrumbs={[{ label: "Subscription" }]}
      />

      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        {/* Glassmorphic Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {[
            { icon: Truck, label: "Free Delivery" },
            { icon: Percent, label: "Up to 20% Off" },
            { icon: Calendar, label: "Scheduled Deliveries" },
          ].map((b) => (
            <div
              key={b.label}
              className="flex items-center gap-3.5 rounded-full bg-white/90 backdrop-blur-md px-6 py-2.5 shadow-sm dark:bg-gray-900/90 border border-gray-100 dark:border-gray-800 transition hover:-translate-y-0.5"
            >
              <div className="rounded-full bg-brand-green/10 p-1.5 dark:bg-brand-green/20">
                <b.icon className="h-5 w-5 text-brand-green" />
              </div>
              <span className="text-sm font-semibold text-gray-800 dark:text-gray-200">{b.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Plans Grid with stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-stretch"
        >
          {subscriptionPlans.map((plan) => (
            <motion.div
              key={plan.id}
              variants={itemVariants}
              className="h-full flex"
            >
              <div
                className={`card-base relative flex flex-col p-8 w-full border border-gray-150 dark:border-gray-800/80 hover:shadow-card-hover duration-300 ${
                  plan.popular
                    ? "scale-105 ring-2 ring-brand-orange shadow-lg shadow-brand-orange/15 dark:bg-gray-900"
                    : ""
                }`}
              >
                {plan.popular && (
                  <>
                    <div className="absolute -inset-1 rounded-2xl bg-brand-orange/5 blur-xl -z-10" />
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-4 py-1 text-xs font-bold text-white shadow-md shadow-brand-orange/20 animate-pulse-soft">
                      Best Value
                    </span>
                  </>
                )}
                <h2 className="text-xl font-extrabold text-gray-900 dark:text-white">{plan.name}</h2>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-brand-green">₹{plan.price}</span>
                  <span className="text-sm text-gray-500 ml-1 font-medium">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm font-semibold text-brand-orange">{plan.meals}</p>
                <ul className="mt-8 flex-1 space-y-3.5">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-350">
                      <Check className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-green bg-brand-green/10 rounded-full p-0.5" />
                      <span className="leading-tight">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/dashboard"
                  className={`mt-8 block rounded-full py-3.5 text-center font-bold text-sm shadow-md transition-all duration-300 ${
                    plan.popular
                      ? "bg-brand-orange text-white hover:bg-orange-600 shadow-orange-500/20 hover:shadow-orange-500/35 hover:-translate-y-0.5"
                      : "bg-brand-green text-white hover:bg-brand-green-dark shadow-brand-green/15 hover:shadow-brand-green/30 hover:-translate-y-0.5"
                  }`}
                >
                  Subscribe Now
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

