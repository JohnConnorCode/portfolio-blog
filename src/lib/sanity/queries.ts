import { groq } from 'next-sanity'

// Get site settings (hero content, metrics)
export const settingsQuery = groq`
  *[_type == "siteSettings"][0] {
    heroTitle,
    heroTagline,
    heroDescription,
    heroHighlight,
    metrics[] {
      number,
      label,
      context
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