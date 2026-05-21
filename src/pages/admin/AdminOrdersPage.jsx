const rows = [
  { id: "FBX-28471", customer: "Priya S.", amount: 527, status: "Preparing" },
  { id: "FBX-28470", customer: "Rahul M.", amount: 312, status: "Packed" },
  { id: "FBX-28469", customer: "Anita D.", amount: 891, status: "Out for delivery" },
];

export default function AdminOrdersPage() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
      <div className="border-b border-slate-800 px-6 py-4">
        <h2 className="font-semibold">Orders</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-800/50 text-slate-400">
            <tr>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Customer</th>
              <th className="px-6 py-3">Amount</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {rows.map((r) => (
              <tr key={r.id} className="hover:bg-slate-800/30">
                <td className="px-6 py-4 font-mono text-orange-400">{r.id}</td>
                <td className="px-6 py-4">{r.customer}</td>
                <td className="px-6 py-4">₹{r.amount}</td>
                <td className="px-6 py-4">
                  <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-400">{r.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
