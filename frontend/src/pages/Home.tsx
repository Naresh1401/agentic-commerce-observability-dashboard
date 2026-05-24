import { Link } from 'react-router-dom';
import { MetricCard } from '../components/MetricCard';

export default function Home() {
  return (
    <div className="space-y-6">
      <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-wide text-moss">Training monorepo</p>
        <h1 className="mt-2 max-w-4xl text-3xl font-bold text-ink sm:text-4xl">Agentic Commerce Platform</h1>
        <p className="mt-3 max-w-3xl text-slate-600">A working, mock-only grocery commerce platform for REST APIs, MCP-style tools, agent orchestration, UCP-style flows, AP2-style payment safety, RAG, RBAC, testing, partner integrations, and observability.</p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-semibold text-white" to="/agent-chat">Run capstone</Link>
          <Link className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700" to="/api-playground">Open API playground</Link>
        </div>
      </section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Projects" value="16" tone="moss" />
        <MetricCard label="Mock SKUs" value="15" />
        <MetricCard label="Stores" value="3" tone="coral" />
        <MetricCard label="Real secrets" value="0" />
      </div>
      <section className="grid gap-4 lg:grid-cols-3">
        {['docker compose up --build', 'cd backend && uvicorn app.main:app --reload --port 8000', 'cd frontend && npm install && npm run dev'].map((command) => (
          <div key={command} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">Quick start</div>
            <code className="mt-2 block break-words rounded bg-slate-100 p-3 text-sm">{command}</code>
          </div>
        ))}
      </section>
    </div>
  );
}
