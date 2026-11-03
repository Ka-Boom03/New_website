import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

export function Education() {
  return (
    <section aria-labelledby="education-title" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-10 border-y border-border py-12 md:grid-cols-12 md:py-16">
        <Reveal className="md:col-span-3">
          <SectionLabel index="04">Education</SectionLabel>
        </Reveal>
        <Reveal delay={80} className="md:col-span-6">
          <h2 id="education-title" className="text-balance text-3xl font-medium leading-tight tracking-[-0.03em] md:text-5xl">
            Technical University of Cluj-Napoca
          </h2>
          <p className="mt-3 font-serif text-2xl italic text-muted-foreground">UTCN</p>
        </Reveal>
        <Reveal delay={160} className="md:col-span-3">
          <dl className="grid gap-4 text-sm">
            <div>
              <dt className="label">Programme</dt>
              <dd className="mt-1">Computer Science and Engineering</dd>
            </div>
            <div>
              <dt className="label">Status</dt>
              <dd className="mt-1">Student</dd>
            </div>
            <div>
              <dt className="label">Location</dt>
              <dd className="mt-1">Cluj-Napoca, Romania</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
