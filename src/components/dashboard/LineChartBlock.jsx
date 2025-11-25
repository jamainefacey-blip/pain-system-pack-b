import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const data = [
  { name: "Week 1", value: 400 },
  { name: "Week 2", value: 550 },
  { name: "Week 3", value: 680 },
  { name: "Week 4", value: 720 },
];

export default function LineChartBlock() {
  return (
    <div className="bg-white rounded-xl p-4 shadow">
      <h2 className="font-semibold mb-4">Website Traffic</h2>
      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="value" stroke="#f97316" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
