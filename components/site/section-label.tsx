export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="label flex items-center gap-3">
      <span className="text-signal">({index})</span>
      <span className="h-px w-8 bg-border" aria-hidden="true" />
      {children}
    </p>
  )
}
