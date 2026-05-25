import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { subscriptionPlans } from "@/lib/data";

export default function SubscriptionPreview() {
  const images = {
    family: "https://lh3.googleusercontent.com/aida/ADBb0uii_g_SeWW9c5RrtBkbZMDbuq9nk5YD6wIs1uUyI65KwxKuqrLEI2JFVCXbT6in5UIuJxBZKv4BOZw3Jw20LsYxtCg94-9kJE-cxx92ZirnaPeVbOBRaWMwZXybpqE8osXlkF2tvvlKxhYcbtfKRMe8VhtloN1I5GZW2QSz-PndgJedDUT0brbM5hNFWf4d4GULvmMrZZ72bs5reot8lQ8klC1s7DhaE-S1hkqDAU0LRIm0mJz2k8u9aQ",
    gym: "/gym-bowl.jpg",
  };

  return (
    <section className="bg-brand-green py-24 dark:bg-brand-green-dark relative overflow-hidden text-white" id="subscription">
      {/* Background radial glow */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-cream to-transparent dark:from-deep-forest opacity-10" />

      <div className="mx-auto max-w-7xl px-4 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-3xl font-extrabold text-white md:text-4xl mb-4">
            Subscription Plans
          </h2>
          <p className="text-brand-cream/80 max-w-xl mx-auto font-medium text-lg leading-relaxed">
            Save more with weekly meal subscriptions. Healthy eating made effortless and affordable.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 items-center">
          {subscriptionPlans.map((plan) => {
            const hasImage = images[plan.id];
            
            return (
              <div
                key={plan.id}
                className={`p-8 rounded-3xl flex flex-col h-full transition-transform duration-300 ${
                  plan.popular
                    ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow-2xl lg:scale-105 border-2 border-brand-orange relative z-20"
                    : "bg-brand-green-light dark:bg-gray-800/80 text-white border border-white/10 hover:scale-105 relative z-10"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand-orange px-4 py-1 text-xs font-bold text-white uppercase tracking-widest shadow-md">
                    Most Popular
                  </span>
                )}
                
                <h3 className="font-serif text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-2xl font-black mb-6">
                  ₹{plan.price}
                  <span className={`text-sm font-normal ${plan.popular ? "text-gray-500" : "text-white/60"}`}>
                    {plan.period}
                  </span>
                </p>

                {hasImage && (
                  <img
                    alt={plan.name}
                    className={`rounded-2xl aspect-video object-cover mb-6 border border-white/10 transition duration-500 ${
                      plan.popular ? "hover:scale-[1.02] shadow-md" : "grayscale hover:grayscale-0"
                    }`}
                    src={images[plan.id]}
                    loading="lazy"
                  />
                )}

                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.slice(0, 3).map((f) => (
                    <li
                      key={f}
                      className={`flex items-center gap-3 text-sm font-medium ${
                        plan.popular ? "text-gray-600 dark:text-gray-300" : "text-white/80"
                      }`}
                    >
                      <Check className={`h-5 w-5 shrink-0 ${plan.popular ? "text-brand-orange" : "text-white/80"}`} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/subscription"
                  className={`w-full py-3.5 rounded-xl font-semibold transition text-center ${
                    plan.popular
                      ? "bg-brand-orange text-white hover:bg-orange-700 hover:shadow-lg shadow-brand-orange/15"
                      : "border border-white/20 text-white hover:bg-white/10"
                  }`}
                >
                  Choose Plan
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
