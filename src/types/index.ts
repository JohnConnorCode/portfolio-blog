import { ReactNode } from 'react'
import { TypedObject } from '@portabletext/types'

export interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  content: unknown[]
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
  longDescription?: unknown[]
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

export interface Thought {
  _id: string
  content: TypedObject[] // Portable Text content
  tags?: string[]
  mood?: 'fired-up' | 'contemplative' | 'building' | 'learning' | 'insight' | 'focused' | 'questioning'
  publishedAt: string
  pinned?: boolean
}

// PortableText types for component props
export interface PortableTextImageValue {
  asset?: {
    url?: string
  }
  alt?: string
  caption?: string
}

export interface PortableTextCodeValue {
  filename?: string
  language?: string
  code: string
}

export interface PortableTextLinkValue {
  href: string
}

export interface PortableTextComponentProps {
  value: PortableTextImageValue | PortableTextCodeValue | PortableTextLinkValue
  children?: ReactNode
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