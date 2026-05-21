import { Link } from "react-router-dom";
import { Check, Truck, Percent, Calendar } from "lucide-react";
import { subscriptionPlans } from "@/lib/data";

export default function SubscriptionPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28 dark:bg-gray-950">
      <div className="mx-auto max-w-7xl px-4 pb-20 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold gradient-text">Subscription Plans</h1>
          <p className="mt-4 mx-auto max-w-2xl text-gray-600 dark:text-gray-400">
            Weekly meal plans with free delivery, exclusive discounts, and scheduled deliveries
          </p>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {[
            { icon: Truck, label: "Free Delivery" },
            { icon: Percent, label: "Up to 20% Off" },
            { icon: Calendar, label: "Scheduled Deliveries" },
          ].map((b) => (
            <div key={b.label} className="flex items-center gap-2 rounded-full bg-white px-5 py-2 shadow-sm dark:bg-gray-900">
              <b.icon className="h-5 w-5 text-brand-green" />
              <span className="text-sm font-medium">{b.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.id}
              className={`card-base relative flex flex-col p-8 ${plan.popular ? "scale-105 ring-2 ring-brand-orange shadow-card-hover" : ""}`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-4 py-1 text-xs font-bold text-white">
                  Best Value
                </span>
              )}
              <h2 className="text-xl font-bold">{plan.name}</h2>
              <p className="mt-4">
                <span className="text-4xl font-bold text-brand-green">₹{plan.price}</span>
                <span className="text-gray-500">{plan.period}</span>
              </p>
              <p className="mt-2 font-medium text-brand-orange">{plan.meals}</p>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/dashboard"
                className={`mt-8 block rounded-full py-3 text-center font-semibold transition ${
                  plan.popular ? "bg-brand-orange text-white hover:bg-orange-600" : "bg-brand-green text-white hover:bg-brand-green-dark"
                }`}
              >
                Subscribe Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
