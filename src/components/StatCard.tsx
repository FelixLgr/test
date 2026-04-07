// src/components/StatCard.tsx — metric card for dashboard

import React from "react";
import { formatCurrency } from "../utils/format";

interface StatCardProps {
  label: string;
  value: number;
  unit?: "number" | "currency" | "percent";
  trend?: number; // percentage change vs previous period
}

export function StatCard({ label, value, unit = "number", trend }: StatCardProps) {
  const formatted =
    unit === "currency"
      ? formatCurrency(value)
      : unit === "percent"
      ? `${value.toFixed(1)}%`
      : value.toLocaleString();

  const trendColor = trend === undefined ? "" : trend >= 0 ? "text-green-500" : "text-red-500";
  const trendSign = trend !== undefined && trend >= 0 ? "+" : "";

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-1 text-2xl font-semibold text-gray-900">{formatted}</p>
      {trend !== undefined && (
        <p className={`mt-1 text-sm font-medium ${trendColor}`}>
          {trendSign}{trend.toFixed(1)}% vs last period
        </p>
      )}
    </div>
  );
}
