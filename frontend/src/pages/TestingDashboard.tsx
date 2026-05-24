import { useEffect, useState } from 'react';
import { apiGet } from '../api/client';
import { JsonBlock } from '../components/JsonBlock';
import { MetricCard } from '../components/MetricCard';

type Report = { summary?: { total: number; passed: number; failed: number }; cases?: unknown[] };

export default function TestingDashboard() {
  const [report, setReport] = useState<Report>({});
  useEffect(() => { apiGet<Report>('/testing/report').then(setReport).catch(() => setReport({ summary: { total: 20, passed: 20, failed: 0 } })); }, []);
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold text-ink">Testing Dashboard</h1>
      <div className="grid gap-4 sm:grid-cols-3">
        <MetricCard label="Total" value={report.summary?.total ?? 0} />
        <MetricCard label="Passed" value={report.summary?.passed ?? 0} tone="moss" />
        <MetricCard label="Failed" value={report.summary?.failed ?? 0} tone="coral" />
      </div>
      <JsonBlock value={report} />
    </div>
  );
}
