import { NavLink, Outlet } from 'react-router-dom';
import { Activity, Bot, Boxes, FileJson, Home, Lock, Network, Search, ShieldCheck, ShoppingCart, TestTube2, WalletCards } from 'lucide-react';

const links = [
  ['/', 'Home', Home],
  ['/projects', 'Projects', Boxes],
  ['/api-playground', 'API', FileJson],
  ['/agent-chat', 'Agents', Bot],
  ['/ucp-flow', 'UCP Flow', Network],
  ['/payment-safety', 'Payment', WalletCards],
  ['/partner-integrations', 'Partners', ShoppingCart],
  ['/rag-assistant', 'RAG', Search],
  ['/security-demo', 'Security', Lock],
  ['/testing-dashboard', 'Testing', TestTube2],
  ['/observability', 'Observability', Activity],
  ['/architecture', 'Architecture', ShieldCheck]
] as const;

export function Layout() {
  return (
    <div className="min-h-screen bg-panel">
      <aside className="fixed inset-y-0 left-0 hidden w-64 border-r border-slate-200 bg-white p-4 lg:block">
        <div className="mb-6">
          <div className="text-lg font-bold text-ink">Agentic Commerce</div>
          <div className="text-sm text-slate-500">Mock grocery platform</div>
        </div>
        <nav className="space-y-1">
          {links.map(([to, label, Icon]) => (
            <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium ${isActive ? 'bg-slate-900 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
              <Icon size={18} aria-hidden="true" />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      </aside>
      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 border-b border-slate-200 bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
          <div className="font-bold">Agentic Commerce</div>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} className="whitespace-nowrap rounded-lg border border-slate-200 px-3 py-1.5 text-sm">
                {label}
              </NavLink>
            ))}
          </div>
        </header>
        <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
