import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { codeInput } from '@sanity/code-input'
import { schemaTypes } from '../sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'John Connor Portfolio',
  
  projectId: 'c24x6hh0',
  dataset: 'production',
  
  plugins: [structureTool(), visionTool(), codeInput()],
  
  schema: {
    types: schemaTypes,
  },
  
  basePath: '/studio',
})