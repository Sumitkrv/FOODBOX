import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-brand-cream py-24 dark:bg-deep-forest" id="testimonials">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl font-extrabold text-brand-green dark:text-white md:text-4xl mb-4">
            What Our Customers Say
          </h2>
          <div className="flex justify-center gap-1 text-brand-orange">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-brand-orange text-brand-orange" />
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-black/5 dark:border-gray-800/50 shadow-sm italic hover:shadow-md transition-shadow duration-300 flex flex-col justify-between">
              <p className="text-gray-600 dark:text-gray-300 mb-8 text-sm md:text-base leading-relaxed">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-sage-wash dark:bg-brand-green-light/20 flex items-center justify-center text-brand-green dark:text-brand-green-light font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-serif font-bold text-brand-green dark:text-white">{t.name}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 font-medium">{t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
