'use client'

import { useEffect, useState } from 'react'
import { navItems, profile } from '@/lib/site-data'
import { cn } from '@/lib/utils'

export function Nav() {
  const [active, setActive] = useState<string>('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el))

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    sections.forEach((s) => observer.observe(s))

    return () => {
      window.removeEventListener('scroll', onScroll)
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500',
        scrolled && !open
          ? 'border-b border-border bg-background/70 backdrop-blur-xl'
          : 'border-b border-transparent',
      )}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-5 md:px-10"
      >
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="group relative z-10 flex items-center gap-3 text-sm font-medium"
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-full border border-foreground/25 font-serif text-base italic transition-all duration-300 group-hover:scale-105 group-hover:border-signal group-hover:text-signal group-hover:shadow-[0_0_15px_rgba(255,106,43,0.3)]"
          >
            em
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item, i) => {
            const isActive = active === item.id
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={cn(
                    'group relative flex items-center gap-1.5 px-3 py-2 text-sm transition-colors duration-300',
                    isActive ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      'size-1.5 rounded-full bg-signal transition-all duration-300',
                      isActive ? 'scale-100 opacity-100 shadow-[0_0_8px_rgba(255,106,43,0.8)]' : 'scale-0 opacity-0',
                    )}
                  />
                  <span className="relative">
                    {item.label}
                    <span
                      aria-hidden="true"
                      className="absolute -bottom-0.5 left-0 h-px w-full origin-right scale-x-0 bg-foreground/50 transition-transform duration-300 group-hover:origin-left group-hover:scale-x-100"
                    />
                  </span>
                  <sup className="text-[9px] text-muted-foreground/60">0{i + 1}</sup>
                </a>
              </li>
            )
          })}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground md:flex"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal/60 motion-reduce:animate-none" />
            <span className="relative inline-flex size-2 rounded-full bg-signal" />
          </span>
          Say hello
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative z-10 flex items-center gap-2 text-sm md:hidden"
        >
          <span>{open ? 'Close' : 'Menu'}</span>
          <span aria-hidden="true" className="relative block h-2.5 w-5">
            <span
              className={cn(
                'absolute left-0 top-0 h-px w-full bg-foreground transition-transform duration-300',
                open && 'translate-y-[5px] rotate-45',
              )}
            />
            <span
              className={cn(
                'absolute bottom-0 left-0 h-px w-full bg-foreground transition-transform duration-300',
                open && '-translate-y-[4px] -rotate-45',
              )}
            />
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          'fixed inset-0 flex flex-col justify-between bg-background px-5 pb-10 pt-24 transition-[opacity,visibility] duration-500 md:hidden',
          open ? 'visible opacity-100' : 'invisible opacity-0',
        )}
      >
        <ul className="flex flex-col">
          {navItems.map((item, i) => (
            <li
              key={item.id}
              className={cn(
                'border-b border-border transition-all duration-500',
                open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
              )}
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
            >
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline justify-between py-4"
              >
                <span
                  className={cn(
                    'text-5xl font-medium tracking-tighter',
                    active === item.id ? 'text-foreground' : 'text-foreground/60',
                  )}
                >
                  {item.label}
                </span>
                <span className="label">0{i + 1}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="flex flex-col gap-2">
          <span className="label">Get in touch</span>
          <a href={`mailto:${profile.email}`} className="font-serif text-3xl italic text-signal">
            {profile.email}
          </a>
        </div>
      </div>
    </header>
  )
}
