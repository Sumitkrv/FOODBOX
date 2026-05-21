const users = [
  { name: "Priya Sharma", email: "priya@email.com", orders: 24, joined: "Jan 2025" },
  { name: "Rahul Mehta", email: "rahul@email.com", orders: 12, joined: "Mar 2025" },
];

export default function AdminUsersPage() {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/80">
      <table className="w-full text-left text-sm">
        <thead className="bg-slate-800/50 text-slate-400">
          <tr>
            <th className="px-6 py-3">User</th>
            <th className="px-6 py-3">Orders</th>
            <th className="px-6 py-3">Joined</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-800">
          {users.map((u) => (
            <tr key={u.email}>
              <td className="px-6 py-4">
                <p className="font-medium">{u.name}</p>
                <p className="text-slate-500">{u.email}</p>
              </td>
              <td className="px-6 py-4">{u.orders}</td>
              <td className="px-6 py-4 text-slate-500">{u.joined}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
