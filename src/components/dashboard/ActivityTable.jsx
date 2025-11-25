export default function ActivityTable() {
  const rows = [
    { user: "John Doe", action: "Activity One", date: "2025-11-01" },
    { user: "Alice", action: "Activity Two", date: "2025-11-02" },
    { user: "Michael", action: "Activity Three", date: "2025-11-03" },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="font-semibold mb-4">Recent Activity</h2>
      <table className="w-full text-left">
        <thead className="border-b">
          <tr>
            <th className="py-2">User</th>
            <th>Action</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b">
              <td className="py-2">{row.user}</td>
              <td>{row.action}</td>
              <td>{row.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
