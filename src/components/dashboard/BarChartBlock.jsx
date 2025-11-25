import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Accommodations", value: 120 },
  { name: "Car Hire", value: 90 },
  { name: "Tours", value: 150 },
];

export default function BarChartBlock() {
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="font-semibold mb-4">Service Usage</h2>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#f97316" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
