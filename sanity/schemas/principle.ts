import { defineType, defineField } from 'sanity'

export const principle = defineType({
  name: 'principle',
  title: 'Working Principles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Principle Title',
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
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name',
      options: {
        list: [
          {title: 'Users', value: 'Users'},
          {title: 'Heart', value: 'Heart'},
          {title: 'Brain', value: 'Brain'},
          {title: 'Mountain', value: 'Mountain'},
          {title: 'Target', value: 'Target'},
          {title: 'Lightbulb', value: 'Lightbulb'},
          {title: 'Compass', value: 'Compass'}
        ]
      }
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number'
    })
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description'
    }
  }
})