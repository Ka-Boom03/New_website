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
    id: 'qr-storage',
    index: '01',
    title: 'QR Household Storage Manager',
    category: 'Product · Utility',
    status: 'In development',
    platform: 'Mobile app + web view',
    summary: 'Know what’s inside every box without opening a single one.',
    description:
      'A small, practical problem: boxes pile up in the attic, the garage, under the bed, and nobody remembers what went where. Each box gets a QR code. Scan it with your phone and you see exactly what’s inside — photos, descriptions, and where the box lives. Households can be shared, and anyone without the app can still open a web view of a box’s contents.',
    features: [
      'Create and manage storage boxes',
      'Assign and scan QR codes',
      'Items with photos and descriptions',
      'Organise items across boxes',
      'Track box locations',
      'Shared households for multiple users',
      'Web view for people without the app',
    ],
    stack: [],
    links: [],
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
 * Personal hiking photos. Drop the files into /public/images/hiking/ and
 * point these entries at them (up to four are laid out).
 */
export const hikingPhotos: Photo[] = [
  {
    src: '/images/ridge.png',
    alt: 'A narrow hiking trail along a misty mountain ridge in the early morning',
    caption: 'Ridge line',
  },
  {
    src: '/images/tent.png',
    alt: 'A tent glowing from inside on a mountain meadow under a starry sky',
    caption: 'Overnight',
  },
]
