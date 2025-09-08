export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  content: any[]
  publishedAt: string
  mainImage: {
    asset: {
      _ref: string
      url?: string
    }
    alt?: string
  }
  author: {
    name: string
    image?: {
      asset: {
        _ref: string
        url?: string
      }
    }
  }
  categories?: Category[]
  tags?: string[]
  readingTime?: number
}

export interface Category {
  _id: string
  title: string
  slug: { current: string }
  description?: string
}

export interface Project {
  _id: string
  title: string
  slug: { current: string }
  description: string
  longDescription?: any[]
  featured: boolean
  demoUrl?: string
  githubUrl?: string
  image: {
    asset: {
      _ref: string
      url?: string
    }
    alt?: string
  }
  technologies: string[]
  category: string
  completedAt: string
  status: "completed" | "in-progress" | "planned"
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  author: {
    name: string
    email: string
    twitter?: string
    github?: string
    linkedin?: string
  }
}