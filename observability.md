# Observability

Endpoints:

- `GET /metrics`
- `GET /traces`
- `GET /events`
- `GET /events/replay`

Metrics include request count, average latency, p95 latency, tool success rate, failed tools, checkout sessions, orders placed, payment declines, prompt injection attempts, RBAC denials, cache hit rate, token usage, simulated LLM cost, and fallback count.

Debugging workflow: find a failed UI action, copy its request ID, inspect `/traces`, inspect `/events`, then compare metrics counters.
