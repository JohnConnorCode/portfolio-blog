export const siteSettings = {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      description: 'Main title displayed in the hero section'
    },
    {
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'string',
      description: 'Tagline below the main title'
    },
    {
      name: 'heroDescription',
      title: 'Hero Description',
      type: 'text',
      description: 'Main description text'
    },
    {
      name: 'heroHighlight',
      title: 'Hero Highlight',
      type: 'string',
      description: 'Highlighted text (appears in cyan)'
    },
    {
      name: 'metrics',
      title: 'Impact Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'number',
              title: 'Number',
              type: 'string',
              description: 'e.g., "$50M+", "10,000+"'
            },
            {
              name: 'label',
              title: 'Label',
              type: 'string',
              description: 'e.g., "Capital Facilitated"'
            },
            {
              name: 'context',
              title: 'Context',
              type: 'string',
              description: 'e.g., "Through strategic consulting"'
            }
          ]
        }
      ]
    }
  ]
}