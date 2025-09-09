import { defineType, defineField } from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'role',
      title: 'Role/Position',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'period',
      title: 'Time Period',
      type: 'string',
      description: 'e.g., "2025–Present"',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics/Achievements',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of key achievements (e.g., "$1M+ Raised", "200K MAU")'
    }),
    defineField({
      name: 'current',
      title: 'Current Position?',
      type: 'boolean',
      description: 'Is this a current role?'
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order to display (lower numbers first)'
    })
  ],
  preview: {
    select: {
      title: 'role',
      subtitle: 'company',
      period: 'period'
    },
    prepare({title, subtitle, period}) {
      return {
        title: title,
        subtitle: `${subtitle} • ${period}`
      }
    }
  }
})