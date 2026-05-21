const payments = [
  { id: "pay_9281", order: "FBX-28471", method: "UPI", amount: 527, status: "Success" },
  { id: "pay_9280", order: "FBX-28470", method: "Card", amount: 312, status: "Success" },
  { id: "pay_9279", order: "FBX-28468", method: "COD", amount: 199, status: "Pending" },
];

export default function AdminPaymentsPage() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-800/50 text-slate-400">
          <tr>
            <th className="px-6 py-3">Payment ID</th>
            <th className="px-6 py-3">Order</th>
            <th className="px-6 py-3">Method</th>
            <th className="px-6 py-3">Amount</th>
            <th className="px-6 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {payments.map((p) => (
            <tr key={p.id}>
              <td className="px-6 py-4 font-mono text-xs">{p.id}</td>
              <td className="px-6 py-4">{p.order}</td>
              <td className="px-6 py-4">{p.method}</td>
              <td className="px-6 py-4">₹{p.amount}</td>
              <td className="px-6 py-4">
                <span className={p.status === "Success" ? "text-emerald-400" : "text-amber-400"}>{p.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
