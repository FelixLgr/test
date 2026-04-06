// src/api/stats.ts — dashboard statistics API

import { get } from "./client";

export interface StatsSummary {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  conversionRate: number;
}

export interface DailyMetric {
  date: string;
  value: number;
}

export async function fetchSummary(token: string): Promise<StatsSummary> {
  return get<StatsSummary>("/stats/summary", token);
}

export async function fetchDailyMetrics(
  token: string,
  metric: "users" | "revenue",
  days = 30
): Promise<DailyMetric[]> {
  return get<DailyMetric[]>(`/stats/${metric}?days=${days}`, token);
}
