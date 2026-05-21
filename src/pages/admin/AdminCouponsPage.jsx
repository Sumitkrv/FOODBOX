const coupons = [
  { code: "FRESH30", discount: "30%", uses: 1240, expires: "Jun 30, 2026" },
  { code: "FAMILY20", discount: "20%", uses: 890, expires: "Dec 31, 2026" },
  { code: "GYM15", discount: "15%", uses: 412, expires: "Aug 15, 2026" },
];

export default function AdminCouponsPage() {
  return (
    <div className="space-y-4">
      <button type="button" className="rounded-lg bg-orange-500 px-4 py-2 text-sm font-semibold text-white">
        Create Coupon
      </button>
      <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-800/50 text-slate-400">
            <tr>
              <th className="px-6 py-3">Code</th>
              <th className="px-6 py-3">Discount</th>
              <th className="px-6 py-3">Uses</th>
              <th className="px-6 py-3">Expires</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {coupons.map((c) => (
              <tr key={c.code}>
                <td className="px-6 py-4 font-mono text-orange-400">{c.code}</td>
                <td className="px-6 py-4">{c.discount}</td>
                <td className="px-6 py-4">{c.uses}</td>
                <td className="px-6 py-4 text-slate-500">{c.expires}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
