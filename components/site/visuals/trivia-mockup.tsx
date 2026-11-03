'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

const questions = [
  {
    category: 'Sports',
    q: 'How many players per team are on a basketball court at once?',
    options: ['4', '5', '6', '7'],
    answer: 1,
  },
  {
    category: 'Games',
    q: 'How many squares are on a standard chessboard?',
    options: ['36', '49', '64', '81'],
    answer: 2,
  },
  {
    category: 'Tech',
    q: 'What does the “C” in CPU stand for?',
    options: ['Core', 'Central', 'Compute', 'Cache'],
    answer: 1,
  },
]

const categories = ['Sports', 'Games', 'Tech', 'Music', 'Travel', 'Film']

export function TriviaMockup() {
  const [round, setRound] = useState(0)
  const [picked, setPicked] = useState<number | null>(null)
  const [score, setScore] = useState(0)

  const current = questions[round % questions.length]
  const answered = picked !== null

  const choose = (i: number) => {
    if (answered) return
    setPicked(i)
    if (i === current.answer) setScore((s) => s + 120)
  }

  const next = () => {
    setPicked(null)
    setRound((r) => r + 1)
  }

  return (
    <div className="relative size-full overflow-hidden">
      {/* Category wall */}
      <div aria-hidden="true" className="absolute inset-0 flex flex-col justify-center gap-1 opacity-[0.07]">
        {categories.map((c, i) => (
          <span
            key={c}
            className={cn(
              'whitespace-nowrap text-[13vw] font-medium leading-[0.85] tracking-tighter lg:text-[7vw]',
              i % 2 ? 'pl-[20%] font-serif italic' : '',
            )}
          >
            {c} {c} {c}
          </span>
        ))}
      </div>

      <div className="absolute left-[6%] top-[10%] hidden flex-col gap-3 sm:flex">
        <span className="label">Live round</span>
        <div className="flex flex-col gap-2 text-sm">
          <span className="flex items-center justify-between gap-8">
            <span>You</span>
            <span className="tabular-nums text-signal">{score}</span>
          </span>
          <span className="flex items-center justify-between gap-8 text-muted-foreground">
            <span>Player 2</span>
            <span className="tabular-nums">{Math.max(0, round * 90 - 30)}</span>
          </span>
        </div>
      </div>

      <div className="absolute left-1/2 top-1/2 h-[88%] aspect-[9/17] -translate-x-1/2 -translate-y-1/2 sm:left-auto sm:right-[8%] sm:translate-x-0">
        <div className="h-full rounded-[1.75rem] border border-foreground/15 bg-[#121211] p-1.5 shadow-2xl shadow-black/70">
          <div className="relative flex h-full flex-col overflow-hidden rounded-[1.4rem] bg-background px-3 pb-3 pt-7">
            <div className="absolute left-1/2 top-2 h-1.5 w-12 -translate-x-1/2 rounded-full bg-foreground/15" />
            <div className="flex items-center justify-between text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
              <span>
                Round {(round % questions.length) + 1}/{questions.length}
              </span>
              <span className="rounded-full border border-signal/40 px-2 py-0.5 text-signal">{current.category}</span>
            </div>

            <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-foreground/10">
              <div
                key={round}
                className={cn(
                  'h-full origin-left animate-[shrink_9s_linear_forwards] bg-signal motion-reduce:animate-none',
                  answered && '[animation-play-state:paused]',
                )}
              />
            </div>

            <p key={`q-${round}`} className="mt-4 animate-in text-pretty text-sm font-medium leading-snug fade-in slide-in-from-bottom-1 md:text-[15px]">
              {current.q}
            </p>

            <div className="mt-auto grid grid-cols-2 gap-1.5">
              {current.options.map((opt, i) => {
                const isRight = answered && i === current.answer
                const isWrong = answered && i === picked && i !== current.answer
                return (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => choose(i)}
                    disabled={answered}
                    className={cn(
                      'rounded-lg border py-3 text-sm font-medium transition-all duration-300',
                      !answered && 'border-border bg-card hover:border-foreground/40',
                      isRight && 'border-signal bg-signal text-background',
                      isWrong && 'border-foreground/10 bg-card text-muted-foreground line-through',
                      answered && !isRight && !isWrong && 'border-border bg-card opacity-40',
                    )}
                  >
                    {opt}
                  </button>
                )
              })}
            </div>

            <button
              type="button"
              onClick={next}
              disabled={!answered}
              className="mt-2 rounded-lg py-2 text-[11px] text-muted-foreground transition-colors enabled:hover:text-foreground disabled:opacity-0"
            >
              {picked === current.answer ? '+120 · Next question →' : 'Next question →'}
            </button>
          </div>
        </div>
      </div>

      <p className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/80 px-4 py-2 text-xs backdrop-blur">
        <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
        Playable — pick an answer
      </p>
    </div>
  )
}
