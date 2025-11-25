export default function KPICard({ title, value, change }) {
  return (
    <div className="p-6 bg-card rounded-xl shadow-lg border border-border flex flex-col transition-all">
      <span className="text-sm text-muted">{title}</span>
      <span className="text-3xl font-bold mt-2">{value}</span>
      <span className={`text-sm font-medium mt-2 ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
        {change}
      </span>
    </div>
  );
}