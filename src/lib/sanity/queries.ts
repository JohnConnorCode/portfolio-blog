import { groq } from 'next-sanity'

// Get site settings (hero content, metrics)
export const settingsQuery = groq`
  *[_type == "siteSettings"][0] {
    heroTitle,
    heroTagline,
    heroDescription,
    heroHighlight,
    impactMetrics[] {
      number,
      label,
      context,
      icon
    }
  }
`

// Get all blog posts
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    categories[]-> {
      title,
      slug
    },
    author-> {
      name,
      image
    }
  }
`

// Get single post by slug
export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    body,
    publishedAt,
    mainImage,
    categories[]-> {
      title,
      slug
    },
    author-> {
      name,
      bio,
      image
    }
  }
`

// Get all projects
export const projectsQuery = groq`
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    description,
    technologies,
    githubUrl,
    demoUrl,
    image,
    featured
  }
`

// Get thoughts for feed
export const thoughtsQuery = groq`
  *[_type == "thought"] | order(pinned desc, publishedAt desc) [0...20] {
    _id,
    content,
    tags,
    mood,
    publishedAt,
    pinned
  }
`

// Get single thought
export const thoughtByIdQuery = groq`
  *[_type == "thought" && _id == $id][0] {
    _id,
    content,
    tags,
    mood,
    publishedAt,
    pinned
  }
`

// Get all services
export const servicesQuery = groq`
  *[_type == "service"] | order(order asc) {
    _id,
    title,
    description,
    philosophy,
    icon,
    order
  }
`

// Get all experience entries
export const experienceQuery = groq`
  *[_type == "experience"] | order(order asc) {
    _id,
    role,
    company,
    period,
    description,
    metrics,
    current,
    order
  }
`

// Get all ventures
export const venturesQuery = groq`
  *[_type == "venture"] | order(order asc) {
    _id,
    title,
    tagline,
    description,
    philosophy,
    link,
    status,
    featured
  }
`

// Get all testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    author,
    role,
    company,
    image,
    featured
  }
`

// Get all consulting packages
export const packagesQuery = groq`
  *[_type == "consultingPackage"] | order(order asc) {
    _id,
    name,
    price,
    description,
    duration,
    features,
    ideal,
    highlighted
  }
`

// Get all principles
export const principlesQuery = groq`
  *[_type == "principle"] | order(order asc) {
    _id,
    title,
    description,
    icon
  }
`