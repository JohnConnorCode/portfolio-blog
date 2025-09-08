import { defineConfig } from 'tinacms'

export default defineConfig({
  branch: process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'public',
    },
  },
  
  schema: {
    collections: [
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'mdx',
        ui: {
          router: ({ document }) => {
            if (document._sys.filename === 'home') {
              return `/`
            }
            return `/${document._sys.filename}`
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'post',
        label: 'Blog Posts',
        path: 'content/posts',
        format: 'mdx',
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}`,
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'excerpt',
            label: 'Excerpt',
          },
          {
            type: 'datetime',
            name: 'date',
            label: 'Date',
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
      },
      {
        name: 'settings',
        label: 'Site Settings',
        path: 'content/settings',
        format: 'json',
        ui: {
          global: true,
        },
        fields: [
          {
            type: 'object',
            name: 'hero',
            label: 'Hero Section',
            fields: [
              {
                type: 'string',
                name: 'tagline',
                label: 'Tagline',
              },
              {
                type: 'string',
                name: 'description',
                label: 'Description',
              },
              {
                type: 'string',
                name: 'ctaText',
                label: 'CTA Button Text',
              },
            ],
          },
          {
            type: 'object',
            list: true,
            name: 'metrics',
            label: 'Impact Metrics',
            fields: [
              {
                type: 'string',
                name: 'number',
                label: 'Number',
              },
              {
                type: 'string',
                name: 'label',
                label: 'Label',
              },
              {
                type: 'string',
                name: 'context',
                label: 'Context',
              },
            ],
          },
        ],
      },
    ],
  },
})