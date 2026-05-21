import { offers } from "@/lib/data";

export default function Offers() {
  return (
    <section className="py-20" id="offers">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="section-title">Offers & Rewards</h2>
          <p className="section-subtitle mx-auto">More ways to save on every order</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {offers.map((offer) => (
            <div
              key={offer.title}
              className={`rounded-2xl bg-gradient-to-br ${offer.color} p-6 text-white shadow-lg transition hover:-translate-y-1`}
            >
              <span className="text-3xl">{offer.icon}</span>
              <h3 className="mt-4 text-lg font-bold">{offer.title}</h3>
              <p className="mt-2 text-sm text-white/90">{offer.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
