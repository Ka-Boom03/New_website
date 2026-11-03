import { ArrowDown, ArrowUpRight } from 'lucide-react'
import type { CSSProperties } from 'react'
import { profile } from '@/lib/site-data'
import { DotField, LocalTime, Rotator } from './hero-widgets'

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-svh flex-col overflow-hidden pb-8 pt-24 md:pb-10"
    >
      <DotField />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 md:px-10">
        <div className="grid grid-cols-2 gap-4 border-b border-border pb-4 md:grid-cols-4">
          <p className="label">
            <span className="text-foreground">{profile.role.split(' & ')[0]}</span>
            <span className="hidden lg:inline"> &amp; Engineering</span>
          </p>
          <p className="label text-right md:text-left">UTCN · Student</p>
          <p className="label hidden md:block">{profile.coordinates}</p>
          <p className="label hidden text-right md:block">
            Cluj · <span className="text-foreground"><LocalTime timeZone={profile.timeZone} /></span>
          </p>
        </div>

        <div className="flex flex-1 flex-col justify-center py-12 md:py-16">
          <h1 className="font-medium leading-[0.84] tracking-[-0.055em] text-[clamp(4.5rem,19vw,17.5rem)]">
            <span className="sr-only">{profile.name}</span>
            <span aria-hidden="true" className="line-mask">
              <span style={{ '--delay': '80ms' } as CSSProperties}>{profile.firstName}</span>
            </span>
            <span aria-hidden="true" className="line-mask md:pl-[18vw]">
              <span
                style={{ '--delay': '220ms' } as CSSProperties}
                className="font-serif font-normal italic tracking-[-0.03em]"
              >
                {profile.lastName}
                <span className="text-signal">.</span>
              </span>
            </span>
          </h1>
        </div>

        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-6 lg:col-span-5">
            <p className="text-pretty text-2xl leading-snug tracking-tight md:text-3xl">{profile.tagline}</p>
            <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">{profile.intro}</p>
          </div>

          <div className="flex flex-col gap-8 md:col-span-6 md:col-start-7 md:items-end lg:col-span-5 lg:col-start-8">
            <p className="flex flex-col gap-1 md:items-end">
              <span className="label">Right now, probably</span>
              <span className="font-serif text-2xl italic text-foreground md:text-right [&>span]:justify-items-start md:[&>span]:justify-items-end">
                <Rotator words={profile.currently} />
              </span>
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex h-12 items-center gap-3 rounded-full bg-foreground pl-6 pr-2 text-sm font-medium text-background shadow-md transition-all duration-300 hover:bg-signal hover:shadow-lg hover:shadow-signal/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                Explore the work
                <span className="grid size-8 place-items-center rounded-full bg-background text-foreground transition-transform duration-500 group-hover:rotate-[-45deg]">
                  <ArrowDown className="size-4" aria-hidden="true" />
                </span>
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex h-12 items-center gap-2 rounded-full border border-foreground/20 px-6 text-sm transition-all duration-300 hover:border-signal hover:text-signal hover:shadow-[0_0_20px_rgba(255,106,43,0.15)] hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]"
              >
                {profile.email}
                <ArrowUpRight
                  className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
