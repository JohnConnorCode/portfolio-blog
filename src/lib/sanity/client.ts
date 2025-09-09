import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'c24x6hh0',
  dataset: 'production',
  apiVersion: '2024-01-08',
  useCdn: false, // Set to false for fresh data
  perspective: 'published',
})