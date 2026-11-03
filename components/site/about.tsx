import { focusAreas } from '@/lib/site-data'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

const sides = [
  {
    n: 'i.',
    title: 'The developer',
    text: 'Studies computer science, builds his own apps, and enjoys the moment a stubborn bug finally gives up.',
  },
  {
    n: 'ii.',
    title: 'The tinkerer',
    text: 'Picks up new languages, frameworks, and ideas just to see what they can do — and what breaks.',
  },
  {
    n: 'iii.',
    title: 'The person',
    text: 'Basketball, the gym, CS2, music, long trips, and cutting gaming clips into something cinematic.',
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-36">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-3">
          <Reveal>
            <SectionLabel index="01">About</SectionLabel>
          </Reveal>
        </div>

        <div className="md:col-span-9">
          <Reveal>
            <h2 className="text-balance text-4xl font-medium leading-[1.05] tracking-[-0.035em] md:text-6xl lg:text-7xl">
              I like understanding how things work — and the best way I know is to{' '}
              <em className="font-serif font-normal italic text-signal">build them myself.</em>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-8 text-lg leading-relaxed text-muted-foreground md:mt-20 md:grid-cols-2 md:gap-12">
            <Reveal delay={80}>
              <p className="text-pretty">
                {"I'm a Computer Science and Engineering student at the Technical University of Cluj-Napoca. A lot of what I've learned outside of lectures came from the same loop: pick an idea, open an editor, get stuck, and keep going until it actually works."}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-pretty">
                {"I'm drawn to software and mobile apps, curious about AI, and still the person who wants to know what's inside the case. But I'm not only at a desk — I play basketball, lift, run, travel whenever I can, and get out on a trail when I find the time."}
              </p>
            </Reveal>
          </div>

          <Reveal delay={100} className="mt-14 flex flex-wrap items-baseline gap-x-6 gap-y-2 md:mt-20">
            <span className="label">Currently into</span>
            {focusAreas.map((area, i) => (
              <span key={area} className="text-foreground">
                {area}
                {i < focusAreas.length - 1 && <span className="ml-6 text-muted-foreground/40">/</span>}
              </span>
            ))}
          </Reveal>
        </div>
      </div>

      <ol className="mt-20 grid border-t border-border md:mt-28 md:grid-cols-3">
        {sides.map((side, i) => (
          <Reveal
            as="li"
            key={side.title}
            delay={i * 100}
            className="group border-b border-border py-8 md:border-b-0 md:border-r md:px-8 md:py-10 md:first:pl-0 md:last:border-r-0"
          >
            <span className="font-serif text-2xl italic text-muted-foreground transition-colors duration-300 group-hover:text-signal">
              {side.n}
            </span>
            <h3 className="mt-6 text-2xl font-medium tracking-tight">{side.title}</h3>
            <p className="mt-3 max-w-xs text-pretty leading-relaxed text-muted-foreground">{side.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  )
}
