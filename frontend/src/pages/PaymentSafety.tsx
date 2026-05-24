import { JsonBlock } from '../components/JsonBlock';

export default function PaymentSafety() {
  const mandate = { user_id: 'demo_customer_001', cart_id: 'cart_capstone', total_amount: 22.41, currency: 'USD', merchant_id: 'demo_grocery_merchant', allowed_payment_method: 'demo_tokenized_card', user_confirmation_text: 'I confirm this mock order.', signature_simulated: 'sha256_demo' };
  return (
    <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h1 className="text-xl font-bold text-ink">AP2-Style Payment Safety</h1>
        <p className="mt-2 text-sm text-slate-600">No real payment processing. The demo requires an explicit mandate and blocks duplicate idempotency keys.</p>
        <div className="mt-4 space-y-2 text-sm">
          <div className="rounded-lg bg-emerald-50 p-3 text-emerald-800">Success: authorized mock payment</div>
          <div className="rounded-lg bg-amber-50 p-3 text-amber-800">Duplicate: request blocked</div>
          <div className="rounded-lg bg-rose-50 p-3 text-rose-800">Decline: simulated payment failure</div>
        </div>
      </section>
      <JsonBlock value={{ mandate, audit_trail: ['payment_mandate_created', 'payment_authorized', 'duplicate_request_blocked', 'payment_declined'] }} />
    </div>
  );
}
