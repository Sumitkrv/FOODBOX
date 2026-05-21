import { Leaf, Heart, Clock } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-28">
      <section className="gradient-hero py-20 text-center text-white">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="text-4xl font-bold md:text-5xl">About FOODBOX</h1>
          <p className="mt-6 text-lg text-white/85">
            We&apos;re on a mission to make healthy homemade cooking accessible to every Indian household.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="section-title">Our Story</h2>
              <p className="mt-6 leading-relaxed text-gray-600 dark:text-gray-400">
                FOODBOX was born from a simple frustration: wanting to cook fresh, healthy meals at home but not having time for chopping, measuring, and shopping. We partner with local farms to deliver pre-chopped vegetables, pre-measured spices, and everything you need — so you can focus on what matters: cooking and enjoying food with your family.
              </p>
              <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
                From busy professionals to fitness enthusiasts and families, thousands trust FOODBOX for convenient, restaurant-quality meals made at home in just 15 minutes.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&q=80"
              alt="Fresh ingredients"
              className="rounded-3xl object-cover shadow-card"
              width={600}
              height={400}
            />
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {[
              { icon: Leaf, title: "Farm Fresh", desc: "Sourced daily from trusted local farms" },
              { icon: Heart, title: "Health First", desc: "No preservatives, balanced nutrition" },
              { icon: Clock, title: "Time Saving", desc: "Cut prep time by 80% every meal" },
            ].map((v) => (
              <div key={v.title} className="card-base p-8 text-center">
                <v.icon className="mx-auto h-10 w-10 text-brand-green" />
                <h3 className="mt-4 text-lg font-bold">{v.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
