import { useEffect, useState } from 'react';
import { apiGet } from '../api/client';
import { MetricCard } from '../components/MetricCard';
import { JsonBlock } from '../components/JsonBlock';

type Metrics = Record<string, number | string | object>;

export default function ObservabilityDashboard() {
      const [metrics, setMetrics] = useState<Metrics>({});
      const [traces, setTraces] = useState<unknown>({});
      const [events, setEvents] = useState<unknown>({});
      useEffect(() => {
        apiGet<Metrics>('/metrics').then(setMetrics).catch(() => setMetrics({ request_count: 0 }));
        apiGet('/traces').then(setTraces).catch(() => setTraces({ items: [] }));
        apiGet('/events').then(setEvents).catch(() => setEvents({ items: [] }));
      }, []);
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold text-ink">Observability</h1>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Requests" value={(metrics.request_count as number) ?? 0} />
        <MetricCard label="Avg latency" value={`${metrics.avg_api_latency_ms ?? 0} ms`} />
        <MetricCard label="Tool success" value={`${metrics.tool_call_success_rate ?? 100}%`} tone="moss" />
        <MetricCard label="RBAC denied" value={(metrics.rbac_denied_count as number) ?? 0} tone="coral" />
      </div>
          <div className="grid gap-5 xl:grid-cols-3">
            <JsonBlock value={metrics} />
            <JsonBlock value={traces} />
            <JsonBlock value={events} />
          </div>
        </div>
      );
}
