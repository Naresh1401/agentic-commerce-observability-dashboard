const projects = [{"id": "01", "name": "Commerce REST API Backend", "slug": "commerce-api", "summary": "FastAPI catalog, inventory, pricing, carts, checkout, orders, health, and metrics."}, {"id": "02", "name": "API Gateway + Authentication", "slug": "auth-gateway", "summary": "Mock OAuth2/JWT, partner API keys, RBAC, audit logs, PII masking, request IDs."}, {"id": "03", "name": "OpenAPI + Contract Testing", "slug": "openapi-contracts", "summary": "Swagger/OpenAPI contracts with schema and compatibility tests."}, {"id": "04", "name": "MCP Server for Commerce Tools", "slug": "mcp-tools", "summary": "MCP-style JSON tool server for commerce operations with role-aware risk controls."}, {"id": "05", "name": "Single Shopping Agent", "slug": "single-agent", "summary": "Deterministic shopping agent that calls tools and requires confirmation gates."}, {"id": "06", "name": "Multi-Agent Commerce System", "slug": "multi-agent", "summary": "Supervisor-routed product, pricing, inventory, cart, coupon, checkout, and order agents."}, {"id": "07", "name": "UCP-Style Agentic Commerce Flow", "slug": "ucp-flow", "summary": "Local UCP-style capability discovery, cart mandate, and checkout hydration demo."}, {"id": "08", "name": "AP2-Style Payment Safety Simulation", "slug": "payment-safety", "summary": "Mock payment mandates, idempotency, audit trail, declines, and success paths."}, {"id": "09", "name": "Partner Integration Adapter", "slug": "partner-integrations", "summary": "Partner A/B schema transforms, retries, circuit breaker, DLQ, and error mapping."}, {"id": "10", "name": "Event-Driven Commerce", "slug": "event-driven", "summary": "In-memory event bus with producers, consumers, event log endpoint, and replay."}, {"id": "11", "name": "RAG Assistant for Commerce Policies", "slug": "rag-policy", "summary": "Deterministic policy retrieval over local markdown with grounded answers and citations."}, {"id": "12", "name": "RBAC and Data Security", "slug": "rbac-security", "summary": "Role claims, row-level order access, PII masking, and tool permission checks."}, {"id": "13", "name": "Agent Guardrails and Negative Tests", "slug": "guardrails", "summary": "Prompt injection, unauthorized payment, hallucination, PII, and coupon abuse defenses."}, {"id": "14", "name": "Agentic Testing and Evaluation", "slug": "agentic-eval", "summary": "Golden dataset and API, MCP, RAG, RBAC, latency, and safety test framework."}, {"id": "15", "name": "Observability Dashboard", "slug": "observability", "summary": "Metrics, traces, structured logs, and frontend dashboard."}, {"id": "16", "name": "End-to-End Capstone Demo", "slug": "capstone", "summary": "Pasta dinner workflow from intent to mandate, order, events, and tracking."}];

export default function ProjectIndex() {
  return (
    <div className="space-y-5">
      <div>
        <h1 className="text-2xl font-bold text-ink">Project Index</h1>
        <p className="mt-1 text-slate-600">Every module includes working code, docs, tests or sample outputs, and a demo surface where practical.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <h2 className="font-semibold text-ink">{project.id}. {project.name}</h2>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-700">working</span>
            </div>
            <p className="mt-2 text-sm text-slate-600">{project.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              {['demo', 'docs', 'tests'].map((status) => <span key={status} className="rounded-full border border-slate-200 px-2 py-1 text-slate-600">{status}</span>)}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
