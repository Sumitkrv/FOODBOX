import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { subscriptionPlans } from "@/lib/data";

export default function SubscriptionPreview() {
  return (
    <section className="bg-brand-cream py-20 dark:bg-gray-900" id="subscription">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Subscription Plans</h2>
          <p className="section-subtitle mx-auto">Save more with weekly meal subscriptions</p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {subscriptionPlans.map((plan) => (
            <div key={plan.id} className={`card-base relative p-6 ${plan.popular ? "ring-2 ring-brand-orange" : ""}`}>
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-3 py-1 text-xs font-bold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-bold">{plan.name}</h3>
              <p className="mt-2 text-3xl font-bold text-brand-green">
                ₹{plan.price}
                <span className="text-sm font-normal text-gray-500">{plan.period}</span>
              </p>
              <p className="mt-1 text-sm text-gray-500">{plan.meals}</p>
              <ul className="mt-6 space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Check className="h-4 w-4 shrink-0 text-brand-green" /> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/subscription"
                className={`mt-6 block w-full rounded-full py-3 text-center text-sm font-semibold transition ${
                  plan.popular ? "bg-brand-orange text-white hover:bg-orange-600" : "bg-brand-green text-white hover:bg-brand-green-dark"
                }`}
              >
                Choose Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
