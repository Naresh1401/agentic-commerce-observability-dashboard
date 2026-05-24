import { useState } from 'react';
import { Bot, Send } from 'lucide-react';
import { apiPost } from '../api/client';
import { JsonBlock } from '../components/JsonBlock';

export default function AgentChat() {
  const [prompt, setPrompt] = useState('I need groceries for a pasta dinner for 4 people under $40. Please use store_1001, apply coupons if available, avoid unavailable items, and prepare pickup checkout for tomorrow morning.');
  const [mode, setMode] = useState<'single' | 'multi' | 'capstone'>('capstone');
  const [confirmed, setConfirmed] = useState(false);
  const [result, setResult] = useState<unknown>(null);

  async function send() {
    const path = mode === 'single' ? '/agent/single' : mode === 'multi' ? '/agent/multi' : '/agent/capstone';
    setResult(await apiPost(path, { prompt, store_id: 'store_1001', user_id: 'demo_customer_001', confirmed }));
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[420px_1fr]">
      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2"><Bot size={20} /><h1 className="text-xl font-bold text-ink">Agent Chat</h1></div>
        <div className="mt-4 flex gap-2">
          {(['single', 'multi', 'capstone'] as const).map((item) => (
            <button key={item} onClick={() => setMode(item)} className={`rounded-lg px-3 py-2 text-sm font-semibold ${mode === item ? 'bg-slate-900 text-white' : 'border border-slate-200 bg-white'}`}>{item}</button>
          ))}
        </div>
        <textarea value={prompt} onChange={(event) => setPrompt(event.target.value)} className="mt-4 min-h-36 w-full rounded-lg border border-slate-300 p-3 text-sm" />
        <label className="mt-3 flex items-center gap-2 text-sm text-slate-700">
          <input type="checkbox" checked={confirmed} onChange={(event) => setConfirmed(event.target.checked)} />
          User confirmation provided
        </label>
        <button onClick={send} className="mt-4 flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white"><Send size={18} /> Send</button>
      </section>
      <section>
        <JsonBlock value={result ?? { prompt, mode, status: 'ready' }} />
      </section>
    </div>
  );
}
