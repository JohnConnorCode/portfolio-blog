import { defineType, defineField } from 'sanity'

export const venture = defineType({
  name: 'venture',
  title: 'Ventures',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Venture Name',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Short description/tagline'
    }),
    defineField({
      name: 'description',
      title: 'Full Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'philosophy',
      title: 'Philosophy/Mission',
      type: 'text',
      description: 'The core philosophy or mission'
    }),
    defineField({
      name: 'link',
      title: 'Website/Link',
      type: 'url'
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'Active', value: 'active'},
          {title: 'In Development', value: 'development'},
          {title: 'Past', value: 'past'}
        ]
      }
    }),
    defineField({
      name: 'featured',
      title: 'Featured?',
      type: 'boolean',
      description: 'Show prominently on homepage'
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
      subtitle: 'tagline',
      status: 'status'
    },
    prepare({title, subtitle, status}) {
      return {
        title: title,
        subtitle: `${subtitle} • ${status}`
      }
    }
  }
})