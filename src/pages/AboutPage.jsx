import { motion } from "framer-motion";
import { Leaf, Heart, Clock } from "lucide-react";
import PageHero from "@/components/ui/PageHero";

export default function AboutPage() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 pb-20">
      <PageHero
        title="About FOODBOX"
        subtitle="We're on a mission to make healthy homemade cooking accessible to every Indian household."
        breadcrumbs={[{ label: "About Us" }]}
      />

      {/* Story Section */}
      <section className="py-20 bg-brand-cream dark:bg-gray-900/40">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="section-title">Our Story</h2>
              <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-450 text-base">
                FOODBOX was born from a simple frustration: wanting to cook fresh, healthy meals at home but not having time for chopping, measuring, and shopping. We partner with local farms to deliver pre-chopped vegetables, pre-measured spices, and everything you need — so you can focus on what matters: cooking and enjoying food with your family.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-450 text-base">
                From busy professionals to fitness enthusiasts and families, thousands trust FOODBOX for convenient, restaurant-quality meals made at home in just 15 minutes.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-3xl bg-brand-orange/10 blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
                alt="Fresh ingredients"
                className="relative rounded-3xl object-cover shadow-2xl ring-4 ring-white/10 dark:ring-gray-800/50"
                width={600}
                height={400}
              />
            </motion.div>
          </div>

          {/* Value cards with stagger */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              show: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
            className="mt-24 grid gap-8 md:grid-cols-3"
          >
            {[
              { icon: Leaf, title: "Farm Fresh", desc: "Sourced daily from trusted local farms" },
              { icon: Heart, title: "Health First", desc: "No preservatives, balanced nutrition" },
              { icon: Clock, title: "Time Saving", desc: "Cut prep time by 80% every meal" },
            ].map((v) => (
              <motion.div
                key={v.title}
                variants={cardVariants}
                className="card-base p-8 text-center border border-gray-100 dark:border-gray-800 hover:shadow-card-hover hover:-translate-y-1.5 transition duration-300 group"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white transition duration-300">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900 dark:text-white">{v.title}</h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
