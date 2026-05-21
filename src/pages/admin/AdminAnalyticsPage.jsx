export default function AdminAnalyticsPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
        <h2 className="font-semibold">Conversion Funnel</h2>
        <div className="mt-6 space-y-4">
          {[
            { step: "Site visits", pct: 100 },
            { step: "Meal kit views", pct: 62 },
            { step: "Add to cart", pct: 28 },
            { step: "Checkout", pct: 18 },
          ].map((f) => (
            <div key={f.step}>
              <div className="flex justify-between text-sm">
                <span>{f.step}</span>
                <span>{f.pct}%</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-slate-800">
                <div className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-orange-500" style={{ width: `${f.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
        <h2 className="font-semibold">Top Cities</h2>
        <ul className="mt-6 space-y-3">
          {["Mumbai", "Bangalore", "Pune", "Delhi NCR"].map((city, i) => (
            <li key={city} className="flex items-center justify-between">
              <span>
                {i + 1}. {city}
              </span>
              <span className="text-slate-500">{[42, 28, 18, 12][i]}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
