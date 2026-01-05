type BlogImageMeta = {
  src: string
  alt: string
}

const DEFAULT_BLOG_IMAGE: BlogImageMeta = {
  src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80&sat=-20&blend=111827&blendAlpha=30',
  alt: 'Abstract gradient background with soft lighting'
}

const BLOG_IMAGE_MAP: Record<string, BlogImageMeta> = {
  'infinita-championship-announcement': {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Spotlight stage prepared for a debate final'
  },
  'why-superdebate-exists': {
    src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1600&q=80',
    alt: 'Two people in conversation in a modern hall'
  },
  'death-of-growth-theater': {
    src: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80',
    alt: 'Charts and data on a whiteboard'
  },
  'why-ecosystem-funding-is-broken': {
    src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80',
    alt: 'Network of connected lights representing an ecosystem'
  },
  'debate-as-leadership-practice': {
    src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80',
    alt: 'Leaders collaborating around a table'
  },
  'automation-as-human-right': {
    src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Person touching a digital interface'
  },
  'building-systems-that-compound': {
    src: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80',
    alt: 'Architectural structure showing repeating patterns'
  },
  'founders-debate-roadmaps': {
    src: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1600&q=80',
    alt: 'Hands sketching product roadmaps on paper'
  }
}

export const DEFAULT_BLUR_DATA_URL =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYGWNgYGD4DwABBAEAJ8bYyQAAAABJRU5ErkJggg=='

export function getBlogImage(slug?: string): BlogImageMeta {
  if (!slug) {
    return DEFAULT_BLOG_IMAGE
  }

  return BLOG_IMAGE_MAP[slug] ?? DEFAULT_BLOG_IMAGE
}
