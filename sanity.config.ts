import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Portfolio Blog',
  
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  
  basePath: '/studio',
  apiVersion: '2024-01-01',
  
  plugins: [
    structureTool(), 
    visionTool(),
    codeInput(),
    presentationTool({
      previewUrl: {
        draftMode: {
          enable: '/api/draft',
          disable: '/api/disable-draft'
        }
      }
    })
  ],
  
  schema: {
    types: schemaTypes,
  },
})