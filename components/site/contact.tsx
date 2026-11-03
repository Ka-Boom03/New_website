import { ArrowUpRight } from 'lucide-react'
import { profile } from '@/lib/site-data'
import { LocalTime } from './hero-widgets'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[1440px] px-5 pb-10 pt-16 md:px-10 md:pt-24">
      <Reveal className="border-t border-border pt-8">
        <SectionLabel index="05">Contact</SectionLabel>
      </Reveal>

      <Reveal delay={80} className="mt-10 md:mt-14">
        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-4 text-3xl font-medium tracking-[-0.03em] sm:text-5xl md:text-7xl"
        >
          <span className="relative">
            {profile.email}
            <span
              aria-hidden="true"
              className="absolute -bottom-1 left-0 h-0.5 w-full origin-right scale-x-0 bg-signal transition-transform duration-500 group-hover:origin-left group-hover:scale-x-100"
            />
          </span>
          <span className="grid size-12 shrink-0 place-items-center rounded-full border border-foreground/20 transition-all duration-500 group-hover:rotate-45 group-hover:border-signal group-hover:bg-signal group-hover:text-background md:size-16">
            <ArrowUpRight className="size-5 md:size-6" aria-hidden="true" />
          </span>
        </a>
      </Reveal>

      <footer className="mt-24 flex flex-col gap-6 border-t border-border pt-6 text-sm text-muted-foreground md:mt-32 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. Designed and built in Cluj-Napoca.
        </p>
        <p className="tabular-nums">
          Local time · <LocalTime timeZone={profile.timeZone} />
        </p>
        <a href="#home" className="transition-colors hover:text-foreground">
          Back to top ↑
        </a>
      </footer>
    </section>
  )
}
