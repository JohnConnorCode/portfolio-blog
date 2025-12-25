// Centralized configuration constants
// Update these values or override via environment variables

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://johnconnor.xyz'
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL || 'john@superdebate.org'

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/ablockunchained',
  linkedin: 'https://www.linkedin.com/in/johnconnor',
  telegram: 'https://t.me/blockunchained',
} as const

export const PROJECT_LINKS = {
  superDebate: 'https://superdebate.org',
  accelerate: 'https://acceleratewith.us',
  alphaTask: 'https://alphatask.xyz',
  thriveProtocol: 'https://thriveprotocol.com',
  sparkblox: 'https://sparkblox.io',
  upland: 'https://upland.me',
  workShelter: 'https://workshelter.co',
} as const

// SEO defaults
export const SEO_DEFAULTS = {
  siteName: 'John Connor - Technology Strategist',
  author: 'John Connor',
  twitterHandle: '@johnconnor',
} as const
