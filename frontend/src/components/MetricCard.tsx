export function MetricCard({ label, value, tone = 'river' }: { label: string; value: string | number; tone?: 'river' | 'moss' | 'coral' }) {
  const toneClass = tone === 'moss' ? 'text-moss' : tone === 'coral' ? 'text-coral' : 'text-river';
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</div>
      <div className={`mt-2 text-2xl font-bold ${toneClass}`}>{value}</div>
    </div>
  );
}
