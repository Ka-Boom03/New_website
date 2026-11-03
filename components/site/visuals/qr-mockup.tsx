'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const SIZE = 21

function buildMatrix() {
  let seed = 7
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280
    return seed / 233280
  }
  const origins = [
    [0, 0],
    [0, SIZE - 7],
    [SIZE - 7, 0],
  ]
  const cells: boolean[] = []
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      const finder = origins.find(([r0, c0]) => r >= r0 - 1 && r <= r0 + 7 && c >= c0 - 1 && c <= c0 + 7)
      if (finder) {
        const lr = r - finder[0]
        const lc = c - finder[1]
        const inside = lr >= 0 && lr <= 6 && lc >= 0 && lc <= 6
        const edge = lr === 0 || lr === 6 || lc === 0 || lc === 6
        const core = lr >= 2 && lr <= 4 && lc >= 2 && lc <= 4
        cells.push(inside && (edge || core))
      } else {
        cells.push(rand() > 0.52)
      }
    }
  }
  return cells
}

const matrix = buildMatrix()

const items = [
  { name: 'Winter jackets', meta: '3 items · photo' },
  { name: 'Camping stove', meta: '1 item · photo' },
  { name: 'Spare HDMI cables', meta: '4 items' },
  { name: 'Headlamps', meta: '2 items · photo' },
]

export function QrMockup() {
  const [scanned, setScanned] = useState(false)

  return (
    <div className="relative size-full overflow-hidden bg-[radial-gradient(circle_at_30%_20%,rgba(255,106,43,0.08),transparent_55%)]">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,rgba(236,235,230,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,235,230,0.06)_1px,transparent_1px)] [background-size:32px_32px]"
      />

      {/* Box label */}
      <div
        className={cn(
          'absolute left-[8%] top-1/2 w-[42%] max-w-[260px] -translate-y-1/2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
          scanned ? '-rotate-6 scale-95' : '-rotate-3',
        )}
      >
        <div className="rounded-sm bg-[#c9a77a] p-3 shadow-2xl shadow-black/60 md:p-4">
          <div className="rounded-[2px] bg-[#f3efe6] p-3 text-[#0b0b0a] md:p-4">
            <div className="flex items-baseline justify-between text-[10px] font-medium uppercase tracking-[0.15em]">
              <span className="font-semibold text-signal">BinTag</span>
              <span>Box 07 · Garage B</span>
            </div>
            <div className="relative mt-3 aspect-square">
              <div
                aria-hidden="true"
                className="grid size-full"
                style={{ gridTemplateColumns: `repeat(${SIZE}, minmax(0, 1fr))` }}
              >
                {matrix.map((on, i) => (
                  <span key={i} className={on ? 'bg-[#0b0b0a]' : ''} />
                ))}
              </div>
              {!scanned && (
                <span
                  aria-hidden="true"
                  className="scan-line absolute inset-x-[-6%] h-0.5 bg-signal shadow-[0_0_16px_2px_rgba(255,106,43,0.7)]"
                />
              )}
            </div>
            <p className="mt-3 font-serif text-lg italic leading-none">Camping &amp; winter</p>
          </div>
        </div>
      </div>

      {/* Phone */}
      <div
        className={cn(
          'absolute right-[6%] top-1/2 h-[86%] aspect-[9/17] -translate-y-1/2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]',
          scanned ? 'translate-x-0 rotate-0' : 'translate-x-[6%] rotate-2',
        )}
      >
        <div className="h-full rounded-[1.75rem] border border-foreground/15 bg-[#121211] p-1.5 shadow-2xl shadow-black/70">
          <div className="relative h-full overflow-hidden rounded-[1.4rem] bg-background">
            <div className="absolute left-1/2 top-2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-foreground/15" />
            <div className="flex h-full flex-col px-3 pb-3 pt-7">
              <p className="text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                {scanned ? 'BinTag · Box 07' : 'BinTag Scanner'}
              </p>
              <p className="mt-1 text-sm font-medium leading-tight md:text-base">
                {scanned ? 'Camping & winter' : 'Point at a box'}
              </p>

              {scanned ? (
                <ul className="mt-3 flex flex-col gap-1.5">
                  {items.map((item, i) => (
                    <li
                      key={item.name}
                      className="flex animate-in items-center gap-2 rounded-md border border-border bg-card p-1.5 fade-in slide-in-from-bottom-2 fill-mode-both"
                      style={{ animationDelay: `${i * 90}ms`, animationDuration: '500ms' }}
                    >
                      <span className="size-6 shrink-0 rounded-[4px] bg-[linear-gradient(135deg,#2a2a27,#3a342c)]" />
                      <span className="min-w-0">
                        <span className="block truncate text-[10px] font-medium md:text-[11px]">{item.name}</span>
                        <span className="block truncate text-[8px] text-muted-foreground md:text-[9px]">{item.meta}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="relative mt-3 flex flex-1 items-center justify-center">
                  <div className="relative size-[70%] max-w-28">
                    {['left-0 top-0 border-l border-t', 'right-0 top-0 border-r border-t', 'bottom-0 left-0 border-b border-l', 'bottom-0 right-0 border-b border-r'].map((pos) => (
                      <span key={pos} className={cn('absolute size-4 border-signal', pos)} />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-auto flex items-center justify-between pt-2 text-[8px] text-muted-foreground">
                <span>Household · 2 members</span>
                <span className={scanned ? 'text-signal' : ''}>{scanned ? '● Found' : '○ Idle'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setScanned((s) => !s)}
        aria-pressed={scanned}
        className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs backdrop-blur transition-colors hover:border-signal hover:text-signal"
      >
        <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
        {scanned ? 'Reset scanner' : 'Try a scan'}
      </button>
    </div>
  )
}
