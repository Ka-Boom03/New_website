import { ArrowUpRight } from 'lucide-react'
import { projects, type Project, type ProjectVisual } from '@/lib/site-data'
import { cn } from '@/lib/utils'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'
import { QrMockup } from './visuals/qr-mockup'
import { TriviaMockup } from './visuals/trivia-mockup'

const visuals: Record<ProjectVisual, React.ComponentType> = {
  'qr-storage': QrMockup,
  trivia: TriviaMockup,
}

export function Projects() {
  return (
    <section id="projects" className="section-glow mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-8 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <Reveal>
            <SectionLabel index="02">Selected work</SectionLabel>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="mt-8 text-5xl font-medium leading-[0.95] tracking-[-0.045em] md:text-8xl">
              Things {"I'm"} <em className="font-serif font-normal italic">building.</em>
            </h2>
          </Reveal>
        </div>
        <Reveal delay={160} className="md:col-span-4">
          <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground md:ml-auto">
            Personal projects born from real-world utility and interactive design. Live demos and active work in
            progress below.
          </p>
        </Reveal>
      </div>

      <div className="mt-16 flex flex-col gap-24 md:mt-24 md:gap-36">
        {projects.map((project, i) => (
          <ProjectShowcase key={project.id} project={project} flipped={i % 2 === 1} />
        ))}
        <FutureSlot index={String(projects.length + 1).padStart(2, '0')} />
      </div>
    </section>
  )
}

function ProjectShowcase({ project, flipped }: { project: Project; flipped: boolean }) {
  const Visual = visuals[project.visual]

  return (
    <article aria-labelledby={`${project.id}-title`} className="grid gap-8 lg:grid-cols-12 lg:gap-12">
      <Reveal className={cn('lg:col-span-7', flipped && 'lg:order-2 lg:col-start-6')}>
        <div className="group/preview relative aspect-[4/5] overflow-hidden rounded-md border border-border bg-card transition-all duration-500 hover:border-signal/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(255,106,43,0.1)] sm:aspect-[4/3] md:aspect-[16/11]">
          <Visual />
          <span className="label pointer-events-none absolute bottom-4 right-4 rounded-full border border-foreground/15 bg-background/80 px-2.5 py-1 backdrop-blur-sm transition-colors group-hover/preview:border-signal/50 group-hover/preview:text-foreground">
            {project.index} / Preview
          </span>
        </div>
      </Reveal>

      <div className={cn('flex flex-col lg:col-span-5', flipped && 'lg:order-1 lg:col-start-1')}>
        <Reveal delay={80} className="flex items-start justify-between gap-6 border-b border-border pb-6">
          <span className="font-serif text-6xl italic leading-none text-signal md:text-7xl">{project.index}</span>
          <span className="label mt-2 text-right">{project.category}</span>
        </Reveal>

        <Reveal delay={140}>
          <h3 id={`${project.id}-title`} className="mt-8 text-balance text-3xl font-medium tracking-[-0.03em] md:text-4xl">
            {project.title}
          </h3>
          <p className="mt-4 text-pretty font-serif text-2xl italic leading-snug text-foreground/80">
            {project.summary}
          </p>
          <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">{project.description}</p>
        </Reveal>

        <Reveal delay={200}>
          <dl className="mt-8 grid grid-cols-2 gap-y-4 border-t border-border pt-6 text-sm">
            <dt className="label">Status</dt>
            <dd className="flex items-center gap-2">
              <span className="relative flex size-2" aria-hidden="true">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-signal" />
              </span>
              {project.status}
            </dd>
            <dt className="label">Platform</dt>
            <dd>{project.platform}</dd>
            {project.stack.length > 0 && (
              <>
                <dt className="label">Stack</dt>
                <dd className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block rounded-md border border-foreground/15 bg-secondary/80 px-2 py-0.5 text-xs text-foreground/90 transition-colors hover:border-signal/40"
                    >
                      {tech}
                    </span>
                  ))}
                </dd>
              </>
            )}
          </dl>

          <details className="group mt-6 border-t border-border pt-6">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm transition-colors hover:text-signal [&::-webkit-details-marker]:hidden">
              <span className="label text-foreground group-hover:text-signal transition-colors">Features · {project.features.length}</span>
              <span
                aria-hidden="true"
                className="grid size-6 place-items-center rounded-full border border-border text-xs transition-all duration-300 group-hover:border-signal group-hover:text-signal group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <ul className="mt-5 grid gap-x-6 gap-y-2.5 text-sm text-muted-foreground sm:grid-cols-2">
              {project.features.map((feature, i) => (
                <li key={feature} className="flex gap-3">
                  <span className="tabular-nums text-foreground/40">{String(i + 1).padStart(2, '0')}</span>
                  {feature}
                </li>
              ))}
            </ul>
          </details>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {project.links.length > 0 ? (
              project.links.map((link, i) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    'group inline-flex h-12 items-center gap-2.5 rounded-full px-6 text-sm font-semibold transition-all duration-300 active:scale-[0.98]',
                    i === 0
                      ? 'bg-signal text-background shadow-lg shadow-signal/25 hover:bg-signal/90 hover:shadow-signal/40 hover:-translate-y-0.5'
                      : 'border border-foreground/20 text-foreground hover:border-signal hover:text-signal hover:-translate-y-0.5',
                  )}
                >
                  {i === 0 && (
                    <span className="relative flex size-2" aria-hidden="true">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-background/70 opacity-75" />
                      <span className="relative inline-flex size-2 rounded-full bg-background" />
                    </span>
                  )}
                  <span>{link.label}</span>
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              ))
            ) : (
              <span className="inline-flex h-11 items-center gap-2 rounded-full border border-dashed border-foreground/20 px-5 text-sm text-muted-foreground">
                Repository &amp; demo — coming soon
              </span>
            )}
          </div>
        </Reveal>
      </div>
    </article>
  )
}

function FutureSlot({ index }: { index: string }) {
  return (
    <Reveal>
      <div className="group relative grid gap-6 overflow-hidden rounded-md border border-dashed border-foreground/20 p-8 transition-all duration-500 hover:border-signal/60 hover:bg-card/30 hover:shadow-[0_12px_40px_rgba(0,0,0,0.5),0_0_25px_rgba(255,106,43,0.08)] hover:-translate-y-1 md:grid-cols-12 md:items-center md:p-14">
        <span className="font-serif text-6xl italic leading-none text-muted-foreground transition-colors duration-500 group-hover:text-signal md:col-span-2 md:text-7xl">
          {index}
        </span>
        <div className="md:col-span-7">
          <h3 className="text-3xl font-medium tracking-[-0.03em] md:text-5xl">
            Next project
            <span className="blink text-signal" aria-hidden="true">
              _
            </span>
          </h3>
          <p className="mt-3 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Something new is always half-built in a folder somewhere. This space is reserved for whatever ships
            next.
          </p>
        </div>
        <p className="label md:col-span-3 md:text-right transition-colors group-hover:text-signal/80">In the works</p>
      </div>
    </Reveal>
  )
}
