import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mobile", value: 65 },
  { name: "Desktop", value: 35 },
];

const COLORS = ["#f97316", "#fb923c"];

export default function PieChartBlock() {
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="font-semibold mb-4">Device Breakdown</h2>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={95}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
