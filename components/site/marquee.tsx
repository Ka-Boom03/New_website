const words = ['Software', 'Mobile apps', 'Basketball', 'AI', 'Gaming', 'Hardware', 'Video editing', 'Music', 'Travel']

export function Marquee() {
  const row = [...words, ...words]
  return (
    <div aria-hidden="true" className="group overflow-hidden border-y border-border py-5 md:py-7">
      <div className="marquee-track flex w-max items-center group-hover:[animation-play-state:paused]">
        {row.map((word, i) => (
          <span key={i} className="flex items-center">
            <span
              className={
                i % 2 === 0
                  ? 'px-6 text-4xl font-medium tracking-tighter md:px-10 md:text-6xl'
                  : 'px-6 font-serif text-4xl italic text-muted-foreground md:px-10 md:text-6xl'
              }
            >
              {word}
            </span>
            <span className="size-2 rounded-full bg-signal/80" />
          </span>
        ))}
      </div>
    </div>
  )
}
