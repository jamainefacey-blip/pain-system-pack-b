export default function TopServicesTable() {
  const rows = [
    { service: "Service", bookings: 89 },
    { service: "Service", bookings: 72 },
    { service: "Service", bookings: 64 },
  ];

  return (
    <div className="bg-card rounded-xl shadow-lg border border-border overflow-hidden">
      <div className="p-5 border-b border-border">
        <h2 className="text-xl font-semibold">Top Services</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-muted text-sm uppercase tracking-wider border-b border-border">
              <th className="py-4 px-6">Service</th>
              <th className="py-4 px-6">Bookings</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row, idx) => (
              <tr key={idx} className="hover:bg-card/50 transition">
                <td className="py-4 px-6 font-medium">{row.service}</td>
                <td className="py-4 px-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-500/10 text-orange-500">
                    {row.bookings}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}