'use client'

import { NextStudio } from 'next-sanity/studio'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { presentationTool } from 'sanity/presentation'
import { schemaTypes } from '../../../../sanity/schemas'

const config = defineConfig({
  name: 'default',
  title: 'Portfolio Blog',
  
  projectId: 'c24x6hh0', // Hardcoded to ensure it works
  dataset: 'production',
  
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

export default function StudioPage() {
  return <NextStudio config={config} />
}

// Disable static optimization for Studio
export const dynamic = 'force-dynamic'