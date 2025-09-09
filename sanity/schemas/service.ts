import { defineType, defineField } from 'sanity'

export const service = defineType({
  name: 'service',
  title: 'Services',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'philosophy',
      title: 'Philosophy/Principle',
      type: 'string',
      description: 'The guiding principle for this service'
    }),
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name',
      options: {
        list: [
          {title: 'Brain', value: 'Brain'},
          {title: 'Users', value: 'Users'},
          {title: 'Target', value: 'Target'},
          {title: 'Lightbulb', value: 'Lightbulb'},
          {title: 'Layers', value: 'Layers'},
          {title: 'Compass', value: 'Compass'},
          {title: 'Code', value: 'Code'},
          {title: 'Zap', value: 'Zap'}
        ]
      }
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which to display (lower numbers first)'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  }
})