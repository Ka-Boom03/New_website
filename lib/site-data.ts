/**
 * Single source of truth for everything personal on the site.
 * Edit this file to update copy, projects, or interests.
 */

export const profile = {
  name: 'Eduardo Mailat',
  firstName: 'Eduardo',
  lastName: 'Mailat',
  email: 'edu@mailat.dev',
  role: 'Computer Science & Engineering student',
  location: 'Cluj-Napoca, Romania',
  coordinates: '46.77° N, 23.59° E',
  timeZone: 'Europe/Bucharest',
  tagline: 'Building things, exploring ideas, and figuring out how everything works.',
  intro:
    'I study Computer Science and Engineering at UTCN. I build my own apps, take things apart to see how they work, and spend the rest of my time on a basketball court or cutting together a game montage.',
  currently: ['writing code', 'on a basketball court', 'queueing for CS2', 'editing a montage', 'surviving another Rust wipe', 'out on a run'],
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'interests', label: 'Interests' },
  { id: 'contact', label: 'Contact' },
] as const

export const focusAreas = ['Software development', 'Mobile applications', 'AI', 'Hardware', 'New technologies']

export type ProjectVisual = 'qr-storage' | 'trivia'

export type ProjectLink = { label: string; href: string }

export type Project = {
  id: string
  index: string
  title: string
  category: string
  status: string
  platform: string
  summary: string
  description: string
  features: string[]
  /** Add technologies here once you want them listed. Empty arrays are hidden. */
  stack: string[]
  /** Add GitHub / live demo links here. Empty arrays render a "coming soon" state. */
  links: ProjectLink[]
  visual: ProjectVisual
}

export const projects: Project[] = [
  {
    id: 'bintag',
    index: '01',
    title: 'BinTag',
    category: 'Inventory Management · Web & Mobile',
    status: 'Live · In active development',
    platform: 'Web app + mobile scanner',
    summary: 'Know what’s inside every storage box without opening a single one.',
    description:
      'A physical inventory management system designed to eliminate lost storage items. Each storage box or bin gets a unique QR label. Scan it with your phone to instantly view and manage contents—including item photos, quantities, categories, and exact storage locations. Anyone can scan to preview contents, while household members can organize and update items in real time.',
    features: [
      'Unique QR code generation & scanning',
      'Visual box inventory with photos & descriptions',
      'Smart search across all household bins',
      'Location and room tracking (garage, attic, closet)',
      'Shared households for multiple users',
      'Instant public web view without app install',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    links: [
      { label: 'Launch BinTag App', href: 'https://bintag.mailat.dev' },
    ],
    visual: 'qr-storage',
  },
  {
    id: 'trivia',
    index: '02',
    title: 'Multiplayer Trivia Game',
    category: 'Game · Mobile',
    status: 'Ongoing',
    platform: 'Mobile',
    summary: 'A loud, competitive trivia night that fits in your pocket.',
    description:
      'A mobile party game inspired by social trivia games like Fight List. Players go head to head across different categories, rack up points, and compete with friends. The goal is something instantly understandable — simple interface, fast rounds — with enough competitive edge and cosmetic customisation to keep people coming back.',
    features: [
      'Multiple question categories',
      'Multiplayer rounds',
      'Competitive scoring',
      'Social features',
      'Simple, accessible interface',
      'Cosmetic customisation',
    ],
    stack: [],
    links: [],
    visual: 'trivia',
  },
]

export type Game = {
  title: string
  kind: string
  note: string
  image: string
  alt: string
}

export const games: Game[] = [
  {
    title: 'Counter-Strike 2',
    kind: 'Competitive',
    note: 'Aim, utility, and the occasional 1v4 that never works out.',
    image: '/images/games/cs2.png',
    alt: 'A sunlit sandstone corridor and archway in a tactical shooter setting',
  },
  {
    title: 'The Last of Us',
    kind: 'Story · Part I & II',
    note: 'Proof that games can hit as hard as any film.',
    image: '/images/games/tlou.png',
    alt: 'An abandoned city street overgrown with ivy and moss',
  },
  {
    title: 'Rust',
    kind: 'Survival',
    note: 'Build something, lose it overnight, start again anyway.',
    image: '/images/games/rust.png',
    alt: 'A scrap-metal survival base on a foggy coastline with a small campfire',
  },
  {
    title: 'Subnautica',
    kind: 'Exploration',
    note: 'Beautiful, calm, and slightly terrifying the deeper you go.',
    image: '/images/games/subnautica.png',
    alt: 'A glowing alien coral reef under deep turquoise water',
  },
]

export type Photo = { src: string; alt: string; caption: string }

/**
 * Personal hiking photos from Carpathian mountain trails and peaks.
 */
export const hikingPhotos: Photo[] = [
  {
    src: '/images/hiking/peaks.jpg',
    alt: 'Dramatic Carpathian mountain ridge with snow-dusted peaks and evergreen pine forest under storm clouds',
    caption: 'Carpathian Ridge',
  },
  {
    src: '/images/hiking/shelter.jpg',
    alt: 'Remote alpine shelter refuge cabin nestled in deep winter snow on a mountain slope',
    caption: 'Alpine Refuge',
  },
  {
    src: '/images/hiking/trail.jpg',
    alt: 'Crisp winter snow trail leading toward a rocky alpine summit under bright sunny skies',
    caption: 'Summit Trail',
  },
  {
    src: '/images/hiking/pass.jpg',
    alt: 'Expansive mountain pass overlooking snowy valleys and pine ridges beneath atmospheric clouds',
    caption: 'High Pass Overlook',
  },
]
