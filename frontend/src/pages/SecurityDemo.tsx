import { useEffect, useState } from 'react';
import { apiGet } from '../api/client';
import { JsonBlock } from '../components/JsonBlock';

export default function SecurityDemo() {
  const [role, setRole] = useState('customer');
  const [result, setResult] = useState<unknown>(null);
  useEffect(() => { apiGet(`/security/demo?role=${role}`).then(setResult); }, [role]);
  return (
    <div className="grid gap-5 lg:grid-cols-[300px_1fr]">
      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h1 className="text-xl font-bold text-ink">Security Demo</h1>
        <select value={role} onChange={(event) => setRole(event.target.value)} className="mt-4 w-full rounded-lg border border-slate-300 p-2">
          {['customer', 'associate', 'admin', 'partner_agent'].map((item) => <option key={item}>{item}</option>)}
        </select>
      </section>
      <JsonBlock value={result ?? { status: 'loading' }} />
    </div>
  );
}
