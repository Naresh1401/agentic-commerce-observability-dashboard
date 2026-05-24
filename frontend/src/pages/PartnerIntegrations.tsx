import { useEffect, useState } from 'react';
import { apiGet } from '../api/client';
import { JsonBlock } from '../components/JsonBlock';

export default function PartnerIntegrations() {
  const [result, setResult] = useState<unknown>(null);
  useEffect(() => { apiGet('/partners/demo').then(setResult).catch((error) => setResult({ error: error.message })); }, []);
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold text-ink">Partner Integrations</h1>
      <p className="text-slate-600">Partner A/B payloads transform into internal commerce requests, then normalize back into partner-specific responses.</p>
      <JsonBlock value={result ?? { status: 'loading' }} />
    </div>
  );
}
