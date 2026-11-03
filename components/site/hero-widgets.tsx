'use client'

import { useEffect, useRef, useState } from 'react'

export function LocalTime({ timeZone }: { timeZone: string }) {
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const format = new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZone,
    })
    const tick = () => setTime(format.format(new Date()))
    tick()
    const id = window.setInterval(tick, 1000)
    return () => window.clearInterval(id)
  }, [timeZone])

  return (
    <time className="tabular-nums" suppressHydrationWarning>
      {time ?? '--:--:--'}
    </time>
  )
}

export function Rotator({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => setIndex((i) => (i + 1) % words.length), 2400)
    return () => window.clearInterval(id)
  }, [words.length])

  return (
    <span className="relative inline-grid overflow-hidden align-bottom" aria-live="polite">
      {words.map((word, i) => (
        <span
          key={word}
          aria-hidden={i !== index}
          className="col-start-1 row-start-1 whitespace-nowrap transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{
            transform: `translateY(${i === index ? 0 : i < index ? -110 : 110}%)`,
            opacity: i === index ? 1 : 0,
          }}
        >
          {word}
        </span>
      ))}
    </span>
  )
}

/** Quiet dot grid that lights up around the pointer. */
export function DotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    const spacing = 26
    const radius = 160
    let width = 0
    let height = 0
    let pointer = { x: -9999, y: -9999 }
    let frame = 0

    const draw = () => {
      frame = 0
      ctx.clearRect(0, 0, width, height)
      for (let x = spacing / 2; x < width; x += spacing) {
        for (let y = spacing / 2; y < height; y += spacing) {
          const d = Math.hypot(x - pointer.x, y - pointer.y)
          const t = Math.max(0, 1 - d / radius)
          if (t > 0.55) {
            ctx.fillStyle = `rgba(255,106,43,${0.25 + t * 0.6})`
          } else {
            ctx.fillStyle = `rgba(236,235,230,${0.07 + t * 0.45})`
          }
          const size = 0.9 + t * 1.6
          const pushX = t ? ((x - pointer.x) / (d || 1)) * t * 6 : 0
          const pushY = t ? ((y - pointer.y) / (d || 1)) * t * 6 : 0
          ctx.beginPath()
          ctx.arc(x + pushX, y + pushY, size, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(draw)
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      schedule()
    }

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      pointer = { x: e.clientX - rect.left, y: e.clientY - rect.top }
      schedule()
    }
    const onLeave = () => {
      pointer = { x: -9999, y: -9999 }
      schedule()
    }

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    const host = canvas.parentElement
    host?.addEventListener('pointermove', onMove)
    host?.addEventListener('pointerleave', onLeave)

    return () => {
      ro.disconnect()
      host?.removeEventListener('pointermove', onMove)
      host?.removeEventListener('pointerleave', onLeave)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full [mask-image:radial-gradient(ellipse_at_70%_40%,black_20%,transparent_75%)]"
    />
  )
}
