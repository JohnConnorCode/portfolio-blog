export const thought = {
  name: 'thought',
  title: 'Thought',
  type: 'document',
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'H3', value: 'h3'},
            {title: 'Quote', value: 'blockquote'},
          ],
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'}
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alt Text',
            },
          ],
        },
        {
          type: 'code',
          options: {
            language: 'javascript',
            languageAlternatives: [
              {title: 'JavaScript', value: 'javascript'},
              {title: 'TypeScript', value: 'typescript'},
              {title: 'Python', value: 'python'},
              {title: 'HTML', value: 'html'},
              {title: 'CSS', value: 'css'},
              {title: 'JSON', value: 'json'},
              {title: 'Bash', value: 'bash'},
            ],
            withFilename: true,
          },
        },
      ],
      validation: (Rule: {required: () => unknown}) => Rule.required(),
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'mood',
      title: 'Mood',
      type: 'string',
      options: {
        list: [
          {title: '🔥 Fired Up', value: 'fired-up'},
          {title: '💭 Contemplative', value: 'contemplative'},
          {title: '🚀 Building', value: 'building'},
          {title: '📚 Learning', value: 'learning'},
          {title: '⚡ Insight', value: 'insight'},
          {title: '🎯 Focused', value: 'focused'},
          {title: '🤔 Questioning', value: 'questioning'},
        ],
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (Rule: {required: () => unknown}) => Rule.required(),
    },
    {
      name: 'pinned',
      title: 'Pin to top',
      type: 'boolean',
      description: 'Pin this thought to the top of the feed',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      content: 'content',
      publishedAt: 'publishedAt',
      mood: 'mood',
      pinned: 'pinned',
    },
    prepare(selection: Record<string, unknown>) {
      const {content, publishedAt, mood, pinned} = selection
      const contentArray = Array.isArray(content) ? content : []
      const firstBlock = contentArray[0]?.children?.[0]?.text || 'No content'
      const date = publishedAt ? new Date(String(publishedAt)).toLocaleDateString() : ''
      
      return {
        title: String(firstBlock).substring(0, 50) + (String(firstBlock).length > 50 ? '...' : ''),
        subtitle: `${pinned ? '📌 ' : ''}${mood ? String(mood) + ' · ' : ''}${date}`,
      }
    },
  },
  orderings: [
    {
      title: 'Publish Date, New',
      name: 'publishedAtDesc',
      by: [
        {field: 'publishedAt', direction: 'desc'}
      ]
    },
  ],
}