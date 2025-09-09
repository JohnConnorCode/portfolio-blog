import { blogPost } from './blog-post'
import { author } from './author'
import { category } from './category'
import { project } from './project'
import { siteSettings } from './site-settings'
import { service } from './service'
import { experience } from './experience'
import { venture } from './venture'
import { testimonial } from './testimonial'
import { consultingPackage } from './consulting-package'
import { principle } from './principle'

export const schemaTypes = [
  // Content types
  blogPost,
  project,
  
  // Homepage content
  siteSettings,
  service,
  experience,
  venture,
  testimonial,
  consultingPackage,
  principle,
  
  // Supporting types
  author,
  category
]