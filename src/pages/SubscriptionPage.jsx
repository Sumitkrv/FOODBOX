import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { subscriptionPlans } from "@/lib/data";

const planImages = {
  bachelor: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIGB9_O6n5By2hkYlo87Oko51sxBdblyfL83tMzYd7Qw53CASAkDslqUrJ0g071cO8AmEXjGO2O2drw09Gs8n-ttGJCNGhuFGoE1A6DvcAcA7tXOviqbkVhWgUoyop2mCm_dgtaMyGaZUz3T5laWPC3CBp-ZXNWm9rAJTtTF14TlE8NYmOxQkSVvoPLIHjYagbIXb0FtsgvXRBexIpDijLFTfTMfxuglefUS_72AhuQ5KAg6xs4JqIe1Db14M-WU1dNCRkSTKb87U",
  weekly: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcX3isyPcapK1V1EcuO5_L2VDRgwFhlxCJC7QarLDpPZxQinxEg5bPr9gUmwXkm2qNhofEc33P7mr6YXzExyg0Z7nTCIoBpXHeNLeweHB9GmRMraHmE7W59M3MsmOG66vrPqlwcvttRTW6VaoBTrVHwsqsg2fbYcZgx9mXRJPGxNcuYfUkdSZo6FzxSeRMnLNp8WyvT-nBfafeaOgfgGoE4C0-9z4AhxV6Cczm5_Kw_Bz0UvPuCEFRqPWczvxRBm3QIw1wGfW_Iu4",
  family: "https://lh3.googleusercontent.com/aida/ADBb0uii_g_SeWW9c5RrtBkbZMDbuq9nk5YD6wIs1uUyI65KwxKuqrLEI2JFVCXbT6in5UIuJxBZKv4BOZw3Jw20LsYxtCg94-9kJE-cxx92ZirnaPeVbOBRaWMwZXybpqE8osXlkF2tvvlKxhYcbtfKRMe8VhtloN1I5GZW2QSz-PndgJedDUT0brbM5hNFWf4d4GULvmMrZZ72bs5reot8lQ8klC1s7DhaE-S1hkqDAU0LRIm0mJz2k8u9aQ",
  gym: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdAofyfImtt0Wju3E5w9kSzRe4qnExUD9d2eAQ_ARymQp22eZiwg0rHaojBMioxYBvN3icg33dsdkJhSa69rZPrLeR8Vwjpdky11uT6EoQ6dlhagwDBFVReJ-sXysMNyYELzZJIIgMzhdN_cj08ydJVUm7DrAD6jmkdlv6wuNNiUDdK3BZcD9gbYgDffeoqV-JNNh2cUUonF_fl-JEzx8ZwbmKYZI0yrLWovN-OS0JzGxyhWVY0hn8BSwwIbk9DA4A4z_fFW1Rfto"
};

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
    <div className="min-h-screen bg-brand-cream dark:bg-deep-forest pb-20 pt-28">
      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-4 lg:px-8 text-center mt-12 mb-16">
        <h1 className="font-serif text-[42px] leading-tight font-extrabold text-brand-green dark:text-white mb-4">
          Choose Your Harvest
        </h1>
        <p className="text-base md:text-lg text-gray-650 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
          Chef-curated ingredients and seasonal recipes tailored to your lifestyle. No commitments, skip or cancel anytime.
        </p>
      </header>

      {/* Pricing Grid */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch"
        >
          {subscriptionPlans.map((plan) => {
            const hasImage = planImages[plan.id];
            
            return (
              <motion.div
                key={plan.id}
                variants={itemVariants}
                className="h-full flex"
              >
                <div
                  className={`group relative flex flex-col rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 w-full ${
                    plan.popular
                      ? "bg-sage-wash dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-brand-orange ring-4 ring-brand-orange/10 z-10 lg:scale-105"
                      : "bg-white dark:bg-gray-900 text-gray-900 dark:text-white border border-black/5 dark:border-gray-800/80"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute top-4 right-4 z-20">
                      <span className="bg-brand-orange text-white px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  {hasImage && (
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                        src={planImages[plan.id]}
                        alt={plan.name}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )}

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-brand-green dark:text-white mb-2">
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-2xl font-black text-brand-orange">₹{plan.price}</span>
                        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                          {plan.period}
                        </span>
                      </div>
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-sm text-gray-600 dark:text-gray-300 font-medium"
                          >
                            <Check className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${plan.popular ? "text-brand-orange" : "text-brand-green"}`} />
                            <span className="leading-snug">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/checkout"
                      className={`w-full py-3.5 px-6 rounded-xl font-bold text-xs uppercase tracking-wider text-center transition-all cursor-pointer ${
                        plan.popular
                          ? "bg-brand-orange text-white hover:bg-orange-700 hover:shadow-lg shadow-brand-orange/15"
                          : "bg-brand-green text-white hover:bg-brand-green-light hover:shadow-lg shadow-brand-green/15"
                      }`}
                    >
                      {plan.popular ? "Start Family Feast" : "Select Plan"}
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Artisanal Promise Section */}
      <section className="mt-28 bg-sage-wash/50 dark:bg-brand-green-light/5 py-20 overflow-hidden border-y border-black/5 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl font-extrabold text-brand-green dark:text-white mb-8">
              The FOODBOX Standard
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6">
                <span className="font-serif text-brand-green/20 dark:text-brand-green-light/20 text-4xl leading-none font-bold">01</span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-green dark:text-white mb-2">Farm to Table</h4>
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    We partner with local organic growers to ensure every ingredient in your box was harvested within 48 hours of delivery.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-serif text-brand-green/20 dark:text-brand-green-light/20 text-4xl leading-none font-bold">02</span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-green dark:text-white mb-2">Chef-Tested Recipes</h4>
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    Our culinary team meticulously tests every recipe to ensure a gourmet experience that is simple enough for home kitchens.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="font-serif text-brand-green/20 dark:text-brand-green-light/20 text-4xl leading-none font-bold">03</span>
                <div>
                  <h4 className="font-serif text-lg font-bold text-brand-green dark:text-white mb-2">Eco-Conscious Packaging</h4>
                  <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    Every element of our box, from the insulation to the spice packets, is designed to be composted or recycled.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-orange-light/10 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transition-transform duration-700 hover:rotate-0 border border-white/10">
              <img
                className="w-full aspect-[4/3] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ5DNzNwqjWMTL7Vgkc16aw_IJOrpzPwiepPuEeZBnD583Ca0Q9QkiTQiQbwGBFlzu170mP3s92Qfu1ggMCS5YTi3kIFaXp8TZYeMAoWqqdwe2RKulkyGxwnKV_ddOA1cmg-NSlqi9DtbHFnrxYfoofJmXBLAJt5spN-zEQs5qoJv4g32LVPXu0A0yoHFnTl63qPkqfH_fMFuL5UaNvv8oGTPIam2LrFk50c-Dppcoo5ioqB4MYVjnB9MfMajATXQotYaORdtyWDw"
                alt="Fresh market veggies Morning Market"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="max-w-7xl mx-auto px-4 lg:px-8 mt-24 text-center">
        <div className="bg-brand-green-light dark:bg-gray-900 text-white rounded-3xl p-12 md:p-20 relative overflow-hidden shadow-xl border border-white/5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="relative z-10">
            <h2 className="font-serif text-3xl font-extrabold mb-4">Unsure where to start?</h2>
            <p className="text-base md:text-lg mb-10 max-w-xl mx-auto opacity-90 leading-relaxed font-medium">
              Join 10,000+ home chefs and receive our seasonal menu preview and exclusive artisanal discounts.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
              <input
                className="flex-1 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-xl px-6 py-4 border-none focus:ring-2 focus:ring-brand-orange text-sm outline-none font-semibold placeholder:text-gray-400"
                placeholder="Enter your email"
                type="email"
                required
              />
              <button
                type="submit"
                className="bg-brand-orange text-white px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-wider hover:bg-orange-700 hover:shadow-lg transition-all cursor-pointer shadow-md shadow-brand-orange/10"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
