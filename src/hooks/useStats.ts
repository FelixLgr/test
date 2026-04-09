// src/hooks/useStats.ts — fetch dashboard stats

import { useState, useEffect } from "react";
import { fetchSummary, fetchDailyMetrics } from "../api/stats";
import type { StatsSummary, DailyMetric } from "../api/stats";

export function useStats(token: string) {
  const [summary, setSummary] = useState<StatsSummary | null>(null);
  const [daily, setDaily] = useState<DailyMetric[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!token) return;
    setLoading(true);
    Promise.all([fetchSummary(token), fetchDailyMetrics(token, "revenue")])
      .then(([s, d]) => {
        setSummary(s);
        setDaily(d);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [token]);

  return { summary, daily, loading, error };
}
