export function JsonBlock({ value }: { value: unknown }) {
  return (
    <pre className="overflow-auto rounded-lg border border-slate-200 bg-slate-950 p-4 text-xs leading-relaxed text-slate-100">
      {JSON.stringify(value, null, 2)}
    </pre>
  );
}
