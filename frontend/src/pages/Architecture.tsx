export default function Architecture() {
  const blocks = ['React demo UI', 'FastAPI commerce APIs', 'Security and RBAC', 'MCP-style tool server', 'Single and multi-agent workflows', 'UCP-style flow', 'AP2-style payment safety', 'Partner adapters', 'Event bus', 'RAG policy assistant', 'Testing framework', 'Observability'];
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold text-ink">Architecture</h1>
      <div className="grid gap-3 md:grid-cols-3">
        {blocks.map((block) => <div key={block} className="rounded-lg border border-slate-200 bg-white p-4 text-sm font-semibold shadow-sm">{block}</div>)}
      </div>
      <pre className="overflow-auto rounded-lg border border-slate-200 bg-white p-4 text-sm">{`User/UI -> Agent Layer -> MCP Tools -> API Orchestration -> Commerce APIs -> Events/Metrics\nPartner APIs -> Adapter -> Normalizer -> Commerce APIs\nRAG UI -> Retriever -> Local Policy Docs -> Grounded Answer`}</pre>
    </div>
  );
}
