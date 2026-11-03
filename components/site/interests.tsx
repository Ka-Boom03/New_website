import Image from 'next/image'
import { games, hikingPhotos } from '@/lib/site-data'
import { Reveal } from './reveal'
import { SectionLabel } from './section-label'

export function Interests() {
  return (
    <section id="interests" className="section-glow py-24 md:py-36">
      <div className="mx-auto max-w-[1440px] px-5 md:px-10">
        <div className="grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal>
              <SectionLabel index="03">Beyond the screen</SectionLabel>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="mt-8 text-5xl font-medium leading-[0.95] tracking-[-0.045em] md:text-8xl">
                Off the <em className="font-serif font-normal italic">keyboard.</em>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={160} className="md:col-span-4">
            <p className="max-w-sm text-pretty leading-relaxed text-muted-foreground md:ml-auto">
              Code is a big part of my life, but not all of it. The rest happens on courts, on long drives, and in
              front of a game — usually with something playing in the background.
            </p>
          </Reveal>
        </div>
      </div>

      <Basketball />
      <Travel />
      <Games />
      <EditingAndMusic />
      <Outdoors />
      <Hardware />
    </section>
  )
}

function Chapter({ n, title }: { n: string; title: string }) {
  return (
    <p className="label flex items-center gap-3">
      <span className="font-serif text-base normal-case italic tracking-normal text-signal">{n}</span>
      {title}
    </p>
  )
}

function Basketball() {
  return (
    <div className="mt-16 md:mt-24">
      <Reveal as="figure" className="group relative mx-auto max-w-[1600px] overflow-hidden md:px-10">
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/10] md:aspect-[21/9] md:rounded-md border border-transparent md:border-border/60 transition-all duration-500 hover:border-signal/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(255,106,43,0.1)]">
          <Image
            src="/images/court.png"
            alt="An empty outdoor basketball court at dusk under a single orange streetlight"
            fill
            sizes="(min-width: 1600px) 1520px, 100vw"
            className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-5 md:flex-row md:items-end md:justify-between md:p-10">
            <h3 className="text-[clamp(3.5rem,13vw,12rem)] font-medium leading-[0.8] tracking-[-0.06em]">
              Basket<span className="font-serif font-normal italic">ball</span>
            </h3>
            <figcaption className="max-w-xs text-pretty text-sm leading-relaxed text-foreground/80 md:mb-3 md:text-right">
              My biggest interest outside of tech. Playing it, watching it, following every game — I love the
              competitive side of it.
            </figcaption>
          </div>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-[1440px] gap-10 px-5 md:mt-14 md:grid-cols-12 md:px-10">
        <Reveal className="md:col-span-3">
          <Chapter n="a." title="The court" />
        </Reveal>
        <Reveal delay={80} className="md:col-span-4">
          <h4 className="text-2xl font-medium tracking-tight">Gym &amp; strength</h4>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Strength training keeps me sharp on the court, and the discipline of showing up carries over into
            everything else.
          </p>
        </Reveal>
        <Reveal delay={160} className="md:col-span-4 md:col-start-9">
          <h4 className="text-2xl font-medium tracking-tight">Running</h4>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Slowly getting faster, mostly by not stopping. It&apos;s also where a lot of my better ideas show up.
          </p>
        </Reveal>
      </div>
    </div>
  )
}

const photoAspects = ['aspect-[4/5]', 'aspect-[3/4]', 'aspect-[4/5]', 'aspect-[3/4]']

function Outdoors() {
  const photos = hikingPhotos.slice(0, 4)
  return (
    <div className="mx-auto mt-28 max-w-[1440px] px-5 md:mt-40 md:px-10">
      <div className="grid gap-8 border-t border-border pt-10 md:grid-cols-12">
        <Reveal className="md:col-span-3">
          <Chapter n="f." title="Hiking" />
          <p className="mt-5 max-w-xs text-pretty leading-relaxed text-muted-foreground">
            Mountain trails, snowy ridges, and alpine refuges in the Carpathians. When I&apos;d rather be out than in,
            this is where I disconnect and reset.
          </p>
        </Reveal>

        <div className="grid grid-cols-2 gap-3.5 md:col-span-9 md:grid-cols-4 md:gap-4">
          {photos.map((photo, i) => (
            <Reveal
              as="figure"
              key={photo.src}
              delay={i * 90}
              className={i % 2 === 1 ? 'group md:mt-10' : 'group'}
            >
              <div className={`relative overflow-hidden rounded-md border border-border/80 bg-card/60 transition-all duration-500 hover:border-signal/50 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(255,106,43,0.12)] hover:-translate-y-1.5 ${photoAspects[i]}`}>
                <Image
                  src={photo.src || '/placeholder.svg'}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08] group-hover:brightness-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
                <span className="pointer-events-none absolute right-2.5 top-2.5 rounded-full border border-foreground/15 bg-background/70 px-2 py-0.5 text-[10px] font-mono text-muted-foreground backdrop-blur-sm transition-colors group-hover:border-signal/40 group-hover:text-foreground">
                  0{i + 1}
                </span>
              </div>
              <figcaption className="label mt-2.5 flex items-center justify-between text-muted-foreground transition-colors group-hover:text-foreground">
                <span className="flex items-center gap-1.5">
                  <span className="size-1 rounded-full bg-signal/60 transition-colors group-hover:bg-signal" aria-hidden="true" />
                  {photo.caption}
                </span>
                <span className="font-mono text-[9px] text-muted-foreground/50 transition-colors group-hover:text-signal/80">RO</span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}

function Travel() {
  return (
    <div className="mx-auto mt-28 max-w-[1440px] px-5 md:mt-40 md:px-10">
      <div className="relative grid md:grid-cols-12">
        <Reveal as="figure" className="group md:col-span-9 md:col-start-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border/70 transition-all duration-500 hover:border-signal/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(255,106,43,0.1)] md:aspect-[16/9]">
            <Image
              src="/images/road.png"
              alt="An empty winding road through open hills at golden hour, seen through a windshield"
              fill
              sizes="(min-width: 768px) 75vw, 100vw"
              className="object-cover transition-transform duration-[2s] ease-out group-hover:scale-[1.04]"
            />
          </div>
        </Reveal>
        <Reveal
          delay={120}
          className="relative -mt-16 ml-5 rounded-md border border-border bg-background/95 p-6 shadow-2xl backdrop-blur-sm transition-all duration-500 hover:border-signal/50 hover:shadow-[0_20px_45px_rgba(0,0,0,0.7),0_0_25px_rgba(255,106,43,0.12)] hover:-translate-y-1 md:absolute md:bottom-12 md:left-0 md:mt-0 md:ml-0 md:w-[38%] md:p-10"
        >
          <Chapter n="b." title="Travel" />
          <h3 className="mt-5 text-3xl font-medium leading-tight tracking-[-0.03em] md:text-4xl">
            {"I'd rather see a place than read about it."}
          </h3>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            New cities, new roads, new food. Travelling is how I reset — and how I remember how much there still
            is to discover.
          </p>
        </Reveal>
      </div>
    </div>
  )
}

function Games() {
  return (
    <div className="mx-auto mt-28 max-w-[1440px] px-5 md:mt-40 md:px-10">
      <div className="grid gap-6 md:grid-cols-12 md:items-end">
        <Reveal className="md:col-span-8">
          <Chapter n="c." title="Gaming" />
          <h3 className="mt-6 text-4xl font-medium tracking-[-0.04em] md:text-6xl">
            Competitive, survival{' '}
            <em className="font-serif font-normal italic text-muted-foreground">&amp;</em> story-driven.
          </h3>
        </Reveal>
        <Reveal delay={80} className="md:col-span-4">
          <p className="label md:text-right">Currently in rotation · 04</p>
        </Reveal>
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 md:mt-14 md:grid-cols-4 md:gap-4">
        {games.map((game, i) => (
          <Reveal as="li" key={game.title} delay={i * 80} className="group">
            <article className="relative aspect-[3/4] overflow-hidden rounded-md border border-border bg-card transition-all duration-500 hover:border-signal/50 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_24px_rgba(255,106,43,0.12)] hover:-translate-y-1.5">
              <Image
                src={game.image || '/placeholder.svg'}
                alt={game.alt}
                fill
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover opacity-80 grayscale-[35%] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.08] group-hover:opacity-100 group-hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <span className="absolute left-4 top-4 font-serif italic text-foreground/70 transition-colors duration-300 group-hover:text-signal">
                0{i + 1}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                <p className="label transition-colors group-hover:text-signal/90">{game.kind}</p>
                <h4 className="mt-2 text-xl font-medium leading-tight tracking-tight md:text-2xl">{game.title}</h4>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-foreground/70 md:max-h-0 md:overflow-hidden md:opacity-0 md:transition-all md:duration-500 md:group-hover:max-h-24 md:group-hover:opacity-100">
                  {game.note}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  )
}

function EditingAndMusic() {
  return (
    <div className="mx-auto mt-28 grid max-w-[1440px] gap-16 px-5 md:mt-40 md:grid-cols-12 md:gap-8 md:px-10">
      <Reveal className="md:col-span-7">
        <Chapter n="d." title="Video editing" />
        <h3 className="mt-6 text-balance text-3xl font-medium leading-[1.05] tracking-[-0.04em] md:text-5xl">
          Turning game clips into{' '}
          <em className="font-serif font-normal italic text-muted-foreground">something cinematic.</em>
        </h3>
        <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Just for fun, in my free time — gaming edits, montages, and messing around with pacing, cuts, and colour
          to see how a few seconds of footage can tell a story.
        </p>
        <EditTimeline />
      </Reveal>

      <Reveal delay={120} className="md:col-span-4 md:col-start-9">
        <div className="flex h-full flex-col justify-between gap-10 rounded-md border border-border bg-card p-6 transition-all duration-500 hover:border-signal/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(255,106,43,0.08)] md:p-8">
          <div>
            <Chapter n="e." title="Music" />
            <p className="mt-6 font-serif text-3xl italic leading-tight md:text-4xl">
              Always something playing.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              While coding, while training, on the road. Music is the background track to pretty much everything
              on this page.
            </p>
          </div>
          <Equalizer />
        </div>
      </Reveal>
    </div>
  )
}

const clips = [
  { src: '/images/games/cs2.png', width: 'w-[26%]' },
  { src: '/images/games/rust.png', width: 'w-[18%]' },
  { src: '/images/games/tlou.png', width: 'w-[32%]' },
  { src: '/images/games/subnautica.png', width: 'w-[24%]' },
]

function EditTimeline() {
  return (
    <div aria-hidden="true" className="mt-10 rounded-md border border-border bg-card p-3 transition-all duration-500 hover:border-signal/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(255,106,43,0.08)] md:p-4">
      <div className="label mb-3 flex items-center justify-between">
        <span>montage_v3_final_final.prproj</span>
        <span className="flex items-center gap-2">
          <span className="blink size-1.5 rounded-full bg-signal" />
          00:00:42:12
        </span>
      </div>

      <div className="flex gap-1.5 overflow-hidden">
        {[0, 1, 2, 3, 4].map((tick) => (
          <span key={tick} className="flex-1 border-l border-border pl-1 font-mono text-[10px] text-muted-foreground">
            {`00:${String(tick * 10).padStart(2, '0')}`}
          </span>
        ))}
      </div>

      <div className="relative mt-2 space-y-1.5">
        <div className="flex h-14 gap-1 md:h-16">
          {clips.map((clip) => (
            <div key={clip.src} className={`relative overflow-hidden rounded-[2px] border border-foreground/10 ${clip.width}`}>
              <Image src={clip.src || '/placeholder.svg'} alt="" fill sizes="200px" className="object-cover opacity-80" />
            </div>
          ))}
        </div>
        <div className="flex h-3 gap-1">
          <span className="w-[44%] rounded-[2px] bg-signal/30" />
          <span className="w-[56%] rounded-[2px] bg-signal/50" />
        </div>
        <div className="flex h-5 items-center gap-[2px] overflow-hidden rounded-[2px] bg-foreground/5 px-1">
          {Array.from({ length: 64 }, (_, i) => (
            <span
              key={i}
              className="w-full rounded-full bg-foreground/40"
              style={{ height: `${20 + ((i * 53) % 80)}%` }}
            />
          ))}
        </div>

        <span className="playhead pointer-events-none absolute -top-1 bottom-0 w-px bg-signal">
          <span className="absolute -left-1 -top-1 size-2 rotate-45 bg-signal" />
        </span>
      </div>
    </div>
  )
}

function Equalizer() {
  const bars = Array.from({ length: 28 }, (_, i) => i)
  return (
    <div aria-hidden="true" className="flex h-28 items-end gap-[3px]">
      {bars.map((i) => (
        <span
          key={i}
          className={i % 7 === 3 ? 'eq-bar w-full rounded-[1px] bg-signal' : 'eq-bar w-full rounded-[1px] bg-foreground/70'}
          style={{
            height: `${30 + ((i * 37) % 70)}%`,
            animationDelay: `${(i * 113) % 900}ms`,
            animationDuration: `${700 + ((i * 71) % 700)}ms`,
          }}
        />
      ))}
    </div>
  )
}

function Hardware() {
  return (
    <div className="mx-auto mt-28 max-w-[1440px] px-5 md:mt-40 md:px-10">
      <div className="grid gap-8 border-t border-border pt-10 md:grid-cols-12 md:items-center">
        <Reveal className="md:col-span-5">
          <Chapter n="g." title="Hardware & tech" />
          <h3 className="mt-6 text-balance text-4xl font-medium leading-[1] tracking-[-0.04em] md:text-5xl">
            Still the person who wants to know{' '}
            <em className="font-serif font-normal italic text-signal">{"what's inside the case."}</em>
          </h3>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            Components, builds, benchmarks, new chips, and whatever AI is doing this week. Software makes more sense
            when you understand the machine it runs on.
          </p>
        </Reveal>
        <Reveal as="figure" delay={120} className="group md:col-span-6 md:col-start-7">
          <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-border/70 transition-all duration-500 hover:border-signal/40 hover:shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_24px_rgba(255,106,43,0.1)] hover:-translate-y-1">
            <Image
              src="/images/hardware.png"
              alt="Close-up of a computer motherboard with a CPU socket and memory modules in dramatic low light"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover grayscale-[40%] transition-all duration-[2s] ease-out group-hover:scale-[1.05] group-hover:grayscale-0"
            />
          </div>
        </Reveal>
      </div>
    </div>
  )
}
