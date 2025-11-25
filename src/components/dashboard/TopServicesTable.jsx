export default function TopServicesTable() {
  const rows = [
    { service: "Service One", bookings: 120 },
    { service: "Service Two", bookings: 80 },
    { service: "Service three", bookings: 65 },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="font-semibold mb-4">Top Services</h2>
      <table className="w-full text-left">
        <thead className="border-b">
          <tr>
            <th className="py-2">Service</th>
            <th>Bookings</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx} className="border-b">
              <td className="py-2">{row.service}</td>
              <td>{row.bookings}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
