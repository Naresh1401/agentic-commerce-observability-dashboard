import { JsonBlock } from '../components/JsonBlock';

const steps = [
  'Intent discovery', 'Merchant capability check', 'Product discovery', 'Cart creation', 'Cart mandate creation', 'Coupon update', 'Checkout hydration', 'Fulfillment selection', 'User confirmation', 'Mock order placement', 'Order tracking'
];

export default function UcpFlow() {
  return (
    <div className="space-y-5">
      <h1 className="text-2xl font-bold text-ink">UCP-Style Flow</h1>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step} className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
            <div className="text-sm font-semibold text-river">Step {index + 1}</div>
            <div className="mt-1 font-semibold text-ink">{step}</div>
          </div>
        ))}
      </div>
      <JsonBlock value={{ note: 'UCP-style demo only; not a certified implementation.', cart_mandate: { cart_id: 'cart_ucp_demo', budget_limit: 40, allowed_actions: ['add', 'coupon_apply'] } }} />
    </div>
  );
}
