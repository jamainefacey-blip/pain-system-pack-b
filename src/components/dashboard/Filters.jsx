export default function Filters({ dateRange, setDateRange, category, setCategory }) {
  return (
    <div className="flex flex-wrap items-center gap-4 bg-white rounded-xl p-4 shadow">
      <select
        value={dateRange}
        onChange={(e) => setDateRange(e.target.value)}
        className="border rounded-lg px-3 py-2"
      >
        <option value="7">Last 7 Days</option>
        <option value="30">Last 30 Days</option>
        <option value="90">Last 90 Days</option>
      </select>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border rounded-lg px-3 py-2"
      >
        <option value="all">All Categories</option>
        <option value="accommodations">Accommodations</option>
        <option value="carhire">Car Hire</option>
        <option value="tours">Tours</option>
      </select>
    </div>
  );
}
