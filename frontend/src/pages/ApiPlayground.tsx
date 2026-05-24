import { useState } from 'react';
import { Search, ShoppingCart, Truck } from 'lucide-react';
import { apiGet, apiPost } from '../api/client';
import { JsonBlock } from '../components/JsonBlock';

export default function ApiPlayground() {
  const [result, setResult] = useState<unknown>({ ready: true });
  const [cartId, setCartId] = useState('new');

  async function run(action: string) {
    if (action === 'search') setResult(await apiGet('/products?query=pasta&max_results=5'));
    if (action === 'inventory') setResult(await apiGet('/inventory/store_1001/SKU-PASTA-001'));
    if (action === 'price') setResult(await apiGet('/pricing/store_1001/SKU-PASTA-001?loyalty_id=demo_loyalty_001'));
    if (action === 'cart') {
      const cart = cartId === 'new' ? await apiPost<{ cart_id: string }>('/cart', { user_id: 'demo_customer_001' }) : { cart_id: cartId };
      setCartId(cart.cart_id);
      setResult(await apiPost(`/cart/${cart.cart_id}/update`, { sku: 'SKU-PASTA-001', quantity: 2, action: 'add', store_id: 'store_1001' }));
    }
    if (action === 'checkout') {
      setResult(await apiPost('/checkout/sessions', { cart_id: cartId, fulfillment_type: 'pickup', store_id: 'store_1001', slot: 'tomorrow_morning' }));
    }
    if (action === 'order') setResult(await apiGet('/orders/order_123'));
  }

  const buttons = [
    ['search', 'Product search', Search],
    ['inventory', 'Inventory check', Truck],
    ['price', 'Price lookup', Search],
    ['cart', 'Cart update', ShoppingCart],
    ['checkout', 'Checkout session', ShoppingCart],
    ['order', 'Track order', Truck]
  ] as const;

  return (
    <div className="grid gap-5 lg:grid-cols-[360px_1fr]">
      <section className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <h1 className="text-xl font-bold text-ink">API Playground</h1>
        <p className="mt-1 text-sm text-slate-600">Call live FastAPI endpoints with sample grocery payloads.</p>
        <div className="mt-4 grid gap-2">
          {buttons.map(([id, label, Icon]) => (
            <button key={id} onClick={() => run(id)} className="focus-ring flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-left text-sm font-semibold hover:bg-slate-50">
              <Icon size={18} /> {label}
            </button>
          ))}
        </div>
      </section>
      <section>
        <JsonBlock value={result} />
      </section>
    </div>
  );
}
