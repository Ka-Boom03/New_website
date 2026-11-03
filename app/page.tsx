import { About } from '@/components/site/about'
import { Contact } from '@/components/site/contact'
import { Education } from '@/components/site/education'
import { Hero } from '@/components/site/hero'
import { Interests } from '@/components/site/interests'
import { Marquee } from '@/components/site/marquee'
import { Nav } from '@/components/site/nav'
import { Projects } from '@/components/site/projects'

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-background"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Projects />
        <Interests />
        <Education />
        <Contact />
      </main>
    </>
  )
}
