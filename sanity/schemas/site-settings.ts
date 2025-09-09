import { defineType, defineField } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main title in hero section (e.g., "JOHN CONNOR")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'string',
      description: 'Subtitle under name (e.g., "Technology Strategist")',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      description: 'Main description paragraph',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'heroHighlight',
      title: 'Hero Highlight Text',
      type: 'string',
      description: 'Highlighted text below description'
    }),
    defineField({
      name: 'impactMetrics',
      title: 'Impact Metrics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {
            name: 'number',
            title: 'Number',
            type: 'string',
            description: 'e.g., "$50M+"',
            validation: Rule => Rule.required()
          },
          {
            name: 'label',
            title: 'Label',
            type: 'string',
            description: 'e.g., "Funding Enabled"',
            validation: Rule => Rule.required()
          },
          {
            name: 'context',
            title: 'Context',
            type: 'string',
            description: 'e.g., "Through product-market fit"'
          },
          {
            name: 'icon',
            title: 'Icon Name',
            type: 'string',
            description: 'Lucide icon name (e.g., Trophy, Users, Code)',
            options: {
              list: [
                {title: 'Trophy', value: 'Trophy'},
                {title: 'Users', value: 'Users'},
                {title: 'Code', value: 'Code'},
                {title: 'Zap', value: 'Zap'},
                {title: 'TrendingUp', value: 'TrendingUp'},
                {title: 'Target', value: 'Target'}
              ]
            }
          }
        ]
      }]
    })
  ],
  preview: {
    prepare() {
      return {
        title: 'Site Settings'
      }
    }
  }
})