// LineChartBlock.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", value: 320 },
  { name: "Tue", value: 480 },
  { name: "Wed", value: 590 },
  { name: "Thu", value: 680 },
  { name: "Fri", value: 820 },
  { name: "Sat", value: 980 },
  { name: "Sun", value: 1100 },
];

export default function LineChartBlock() {
  return (
    <div className="bg-card rounded-xl shadow-lg border border-border p-6">
      <h2 className="text-xl font-semibold mb-6">Weekly Traffic</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid stroke="var(--border)" strokeDasharray="4 4" />
          <XAxis dataKey="name" stroke="var(--foreground)" />
          <YAxis stroke="var(--foreground)" />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
            }}
          />
          <Line type="monotone" dataKey="value" stroke="#f97316" strokeWidth={3} dot={{ fill: '#f97316' }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}