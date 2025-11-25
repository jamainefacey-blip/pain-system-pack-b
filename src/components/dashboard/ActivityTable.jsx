export default function ActivityTable() {
  const rows = [
    { user: "John Doe", action: "Activity", date: "2 hours ago" },
    { user: "John Doe", action: "Activity", date: "5 hours ago" },
    { user: "John Doe", action: "Activity", date: "1 day ago" },
    { user: "John Doe", action: "Activity", date: "2 days ago" },
  ];

  return (
    <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
      <div className="p-5 border-b border-border">
        <h2 className="text-xl font-semibold">Recent Activity</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="text-muted text-sm uppercase tracking-wider">
            <tr className="border-b border-border">
              <th className="py-4 px-6">User</th>
              <th className="py-4 px-6">Action</th>
              <th className="py-4 px-6">Time</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-card/50 transition">
                <td className="py-4 px-6 font-medium">{row.user}</td>
                <td className="py-4 px-6 text-muted">{row.action}</td>
                <td className="py-4 px-6 text-sm text-muted">{row.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}