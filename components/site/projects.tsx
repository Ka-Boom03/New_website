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
    <section id="projects" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
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
            Personal projects that started with a small annoyance or a fun idea. Both are in progress — both are
            interactive below.
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
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-card sm:aspect-[4/3] md:aspect-[16/11]">
          <Visual />
          <span className="label pointer-events-none absolute bottom-4 right-4">{project.index} / Preview</span>
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
              <span className="size-1.5 rounded-full bg-signal" aria-hidden="true" />
              {project.status}
            </dd>
            <dt className="label">Platform</dt>
            <dd>{project.platform}</dd>
            {project.stack.length > 0 && (
              <>
                <dt className="label">Stack</dt>
                <dd>{project.stack.join(', ')}</dd>
              </>
            )}
          </dl>

          <details className="group mt-6 border-t border-border pt-6">
            <summary className="flex cursor-pointer list-none items-center justify-between text-sm [&::-webkit-details-marker]:hidden">
              <span className="label text-foreground">Features · {project.features.length}</span>
              <span
                aria-hidden="true"
                className="grid size-6 place-items-center rounded-full border border-border text-xs transition-transform duration-300 group-open:rotate-45"
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

          <div className="mt-8 flex flex-wrap gap-3">
            {project.links.length > 0 ? (
              project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex h-11 items-center gap-2 rounded-full border border-foreground/20 px-5 text-sm transition-colors hover:border-signal hover:text-signal"
                >
                  {link.label}
                  <ArrowUpRight className="size-4" aria-hidden="true" />
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
      <div className="group relative grid gap-6 overflow-hidden rounded-sm border border-dashed border-foreground/20 p-8 transition-colors duration-500 hover:border-signal/60 md:grid-cols-12 md:items-center md:p-14">
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
        <p className="label md:col-span-3 md:text-right">In the works</p>
      </div>
    </Reveal>
  )
}
