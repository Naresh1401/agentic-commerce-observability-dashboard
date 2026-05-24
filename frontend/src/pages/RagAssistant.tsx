import { useState } from 'react';
import { Search } from 'lucide-react';
import { apiPost } from '../api/client';
import { JsonBlock } from '../components/JsonBlock';

export default function RagAssistant() {
  const [query, setQuery] = useState('What happens if an item is out of stock?');
  const [result, setResult] = useState<unknown>(null);
  return (
    <div className="grid gap-5 lg:grid-cols-[420px_1fr]">
      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h1 className="text-xl font-bold text-ink">RAG Policy Assistant</h1>
        <input value={query} onChange={(event) => setQuery(event.target.value)} className="mt-4 w-full rounded-lg border border-slate-300 p-3 text-sm" />
        <button onClick={() => apiPost('/rag/query', { query }).then(setResult)} className="mt-3 flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"><Search size={18} /> Ask</button>
      </section>
      <JsonBlock value={result ?? { status: 'ready' }} />
    </div>
  );
}
