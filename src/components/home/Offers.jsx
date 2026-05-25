import { offers } from "@/lib/data";

export default function Offers() {
  return (
    <section className="py-20 bg-brand-cream dark:bg-deep-forest" id="offers">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-extrabold text-brand-green dark:text-white md:text-4xl mb-4">
            Offers & Rewards
          </h2>
          <p className="text-gray-650 dark:text-gray-400 max-w-xl mx-auto font-medium">
            More ways to save on every order.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`rounded-3xl bg-gradient-to-br ${offer.color} p-8 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                <span className="text-4xl filter drop-shadow">{offer.icon}</span>
                <h3 className="mt-6 text-xl font-bold font-serif">{offer.title}</h3>
                <p className="mt-2 text-sm text-white/90 leading-relaxed font-medium">{offer.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
