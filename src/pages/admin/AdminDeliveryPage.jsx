const agents = [
  { name: "Rahul M.", zone: "Andheri–Bandra", active: 8, rating: 4.9 },
  { name: "Suresh K.", zone: "Powai", active: 5, rating: 4.7 },
  { name: "Vikram P.", zone: "Thane West", active: 3, rating: 4.8 },
];

export default function AdminDeliveryPage() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {agents.map((a) => (
        <div key={a.name} className="rounded-2xl border border-slate-800 bg-slate-900/80 p-6">
          <h3 className="font-semibold">{a.name}</h3>
          <p className="text-sm text-slate-500">{a.zone}</p>
          <div className="mt-4 flex justify-between text-sm">
            <span>Active deliveries</span>
            <span className="font-bold text-orange-400">{a.active}</span>
          </div>
          <div className="mt-2 flex justify-between text-sm">
            <span>Rating</span>
            <span>{a.rating} ★</span>
          </div>
        </div>
      ))}
    </div>
  );
}
