# Metrics Schema

Metrics are exposed at `GET /metrics` as JSON. The schema mirrors Prometheus-style counters and gauges while staying easy to read in a local demo.

Key metrics: request_count, avg_api_latency_ms, p95_api_latency_ms, tool_call_success_rate, failed_tool_calls, checkout_sessions_created, orders_placed, payment_declined_count, prompt_injection_attempts, rbac_denied_count, cache_hit_rate, simulated_token_usage, simulated_llm_cost, fallback_count.
