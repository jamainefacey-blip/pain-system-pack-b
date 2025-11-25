// PieChartBlock.jsx
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "Mobile", value: 68 },
  { name: "Desktop", value: 32 },
];

const COLORS = ["#f97316", "#fb923c"];

export default function PieChartBlock() {
  return (
    <div className="bg-card rounded-xl shadow-lg border border-border p-6">
      <h2 className="text-xl font-semibold mb-6">Traffic Sources</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border)",
            }}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}