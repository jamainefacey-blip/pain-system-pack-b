// BarChartBlock.jsx
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Item", value: 120 },
  { name: "Item", value: 90 },
  { name: "Item", value: 150 },
  { name: "Item", value: 68 },
];

export default function BarChartBlock() {
  return (
    <div className="bg-card rounded-xl shadow-lg border border-border p-6">
      <h2 className="text-xl font-semibold mb-6">Service Usage</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" stroke="var(--foreground)" />
          <YAxis stroke="var(--foreground)" />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
            }}
          />
          <Bar dataKey="value" fill="#f97316" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}