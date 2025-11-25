export default function KPICard({ title, value, change }) {
  return (
    <div className="p-5 bg-white rounded-xl shadow flex flex-col">
      <span className="text-sm text-gray-500">{title}</span>
      <span className="text-3xl font-bold">{value}</span>
      <span className="text-sm text-green-600">{change}</span>
    </div>
  );
}
