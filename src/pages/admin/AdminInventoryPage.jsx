const items = [
  { name: "Paneer (bulk)", qty: 45, unit: "kg", alert: true },
  { name: "Spinach", qty: 120, unit: "bunches", alert: true },
  { name: "Tomato", qty: 200, unit: "kg", alert: false },
  { name: "Basmati Rice", qty: 80, unit: "kg", alert: false },
];

export default function AdminInventoryPage() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
      <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
        <h2 className="font-semibold">Inventory</h2>
        <button type="button" className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium">
          Add Stock
        </button>
      </div>
      <ul className="divide-y divide-slate-800">
        {items.map((i) => (
          <li key={i.name} className="flex items-center justify-between px-6 py-4">
            <div>
              <p className="font-medium">{i.name}</p>
              <p className="text-sm text-slate-500">
                {i.qty} {i.unit}
              </p>
            </div>
            {i.alert ? (
              <span className="text-xs font-medium text-amber-400">Low stock</span>
            ) : (
              <span className="text-xs text-slate-500">Healthy</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
