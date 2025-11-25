"use client";

import { useState } from "react";
import Filters from "@/components/dashboard/Filters";
import KPICard from "@/components/dashboard/KPICard";
import LineChartBlock from "@/components/dashboard/LineChartBlock";
import BarChartBlock from "@/components/dashboard/BarChartBlock";
import PieChartBlock from "@/components/dashboard/PieChartBlock";
import ActivityTable from "@/components/dashboard/ActivityTable";
import TopServicesTable from "@/components/dashboard/TopServicesTable";

export default function DashboardPage() {
  const [dateRange, setDateRange] = useState("30");
  const [category, setCategory] = useState("all");

  return (
    <div className="p-6 space-y-8">
     {/* Header Space */}
      <div className="h-16 md:h-20"></div>
      {/* Filters */}
      <Filters
        dateRange={dateRange}
        setDateRange={setDateRange}
        category={category}
        setCategory={setCategory}
      />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <KPICard title="Total Visitors" value="12,400" change="+8%" />
        <KPICard title="Bookings" value="310" change="+12%" />
        <KPICard title="Revenue" value="£4,850" change="+6%" />
        <KPICard title="Conversion Rate" value="2.9%" change="+0.4%" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <LineChartBlock dateRange={dateRange} />
        <BarChartBlock category={category} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <PieChartBlock />
        <TopServicesTable />
      </div>

      {/* Activity Table */}
      <ActivityTable />
    </div>
  );
}
